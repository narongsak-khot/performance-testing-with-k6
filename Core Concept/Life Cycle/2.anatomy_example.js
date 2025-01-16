import http from "k6/http";
import { check } from "k6";

// Step 1: Initialization
const BASE_URL = "https://test-api.k6.io";
const HEADERS = { "Content-Type": "application/json" };

// Step 2: Setup
export function setup() {
  // ทำการเข้าสู่ระบบและดึงโทเค็น
  const loginPayload = JSON.stringify({
    username: "user",
    password: "test123!", // รหัสผ่านที่กำหนดไว้
  });

  const loginResponse = http.post(
    `${BASE_URL}/auth/token/login/`,
    loginPayload,
    { headers: HEADERS }
  );
  const token = loginResponse.json("access");

  check(loginResponse, {
    "Login was successful": (r) => r.status === 200,
  });

  return { token }; // ส่งโทเค็นให้ VUs ใช้งาน
}

// Step 3: VU Execution
export default function(data) {
  // ใช้โทเค็นเพื่อเรียก API
  const authHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${data.token}`,
  };

  // ดึงรายการจระเข้ (Crocodiles)
  const response = http.get(`${BASE_URL}/my/crocodiles/`, {
    headers: authHeaders,
  });

  check(response, {
    "Status is 200": (r) => r.status === 200,
    "Response contains data": (r) => r.json().length > 0,
  });
}

// Step 4: Teardown
export function teardown(data) {
  // ยกเลิกโทเค็นหลังจากทดสอบเสร็จสิ้น

   // ใช้โทเค็นเพื่อเรียก API
   const authHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${data.token}`,
  };

  // ดึงรายการจระเข้ (Crocodiles)
  const response = http.get(`${BASE_URL}/my/crocodiles/`, {
    headers: authHeaders,
  });

  check(response, {
    "Logout was successful": (r) => r.status === 200,
  });

  console.log("Teardown completed.");
}
