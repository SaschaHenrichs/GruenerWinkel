"""Backend API tests for KGV Gruener Winkel."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://gruener-winkel.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- /api/ root ----------
class TestRoot:
    def test_root_returns_200(self, client):
        r = client.get(f"{API}/", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert isinstance(data["message"], str)


# ---------- /api/contact POST/GET ----------
class TestContact:
    def test_create_contact_success_and_persistence(self, client):
        payload = {
            "vorname": "TEST_Anna",
            "nachname": "TEST_Mueller",
            "email": "test_anna@example.com",
            "telefon": "020312345",
            "nachricht": "Hallo, dies ist eine Testnachricht für den KGV.",
            "datenschutz": True,
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        # Data assertions
        assert data["vorname"] == payload["vorname"]
        assert data["nachname"] == payload["nachname"]
        assert data["email"] == payload["email"]
        assert data["nachricht"] == payload["nachricht"]
        assert data["datenschutz"] is True
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "_id" not in data
        assert "timestamp" in data

        # GET to confirm persistence + no _id leaked
        list_r = client.get(f"{API}/contact", timeout=15)
        assert list_r.status_code == 200
        items = list_r.json()
        assert isinstance(items, list)
        for it in items:
            assert "_id" not in it
        # Find our message
        found = [i for i in items if i.get("id") == data["id"]]
        assert len(found) == 1, "Created message not found in GET list"
        assert found[0]["email"] == payload["email"]

    def test_datenschutz_false_returns_400(self, client):
        payload = {
            "vorname": "TEST_X",
            "nachname": "TEST_Y",
            "email": "test_x@example.com",
            "nachricht": "Test ohne Datenschutz",
            "datenschutz": False,
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 400, r.text
        body = r.json()
        assert "detail" in body

    def test_invalid_email_returns_422(self, client):
        payload = {
            "vorname": "TEST_X",
            "nachname": "TEST_Y",
            "email": "not-an-email",
            "nachricht": "Test",
            "datenschutz": True,
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    @pytest.mark.parametrize(
        "missing_field",
        ["vorname", "nachname", "email", "nachricht"],
    )
    def test_missing_required_fields_returns_422(self, client, missing_field):
        payload = {
            "vorname": "TEST_X",
            "nachname": "TEST_Y",
            "email": "test@example.com",
            "nachricht": "Test",
            "datenschutz": True,
        }
        payload.pop(missing_field)
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422, f"Expected 422 when missing {missing_field}, got {r.status_code}: {r.text}"

    def test_telefon_optional(self, client):
        payload = {
            "vorname": "TEST_NoPhone",
            "nachname": "TEST_User",
            "email": "test_nophone@example.com",
            "nachricht": "Ohne Telefon",
            "datenschutz": True,
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        assert r.json().get("telefon") in (None, "")

    def test_list_contact_no_mongo_id(self, client):
        r = client.get(f"{API}/contact", timeout=15)
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        for it in items:
            assert "_id" not in it
