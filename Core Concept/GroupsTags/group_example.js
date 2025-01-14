import http from "k6/http";
import { group, check, sleep } from "k6";

export const options = {
  vus: 5, // จำนวน Virtual Users
  duration: "30s", // ระยะเวลาทดสอบ
};

export default function() {
  // กลุ่มที่ 1: ทดสอบ GET /public/crocodiles
  group("GET /public/crocodiles", () => {
    const res = http.get("https://test-api.k6.io/public/crocodiles/");
    check(res, {
      "status is 200": (r) => r.status === 200, // ตรวจสอบสถานะ HTTP
      "response time < 300ms": (r) => r.timings.duration < 300, // ตรวจสอบเวลาตอบสนอง
    });
    sleep(1); // พัก 1 วินาที
  });

  // กลุ่มที่ 2: ทดสอบ POST /public/crocodiles
  group("POST /public/crocodiles", () => {
    const payload = JSON.stringify({
      name: "Test Crocodile",
      sex: "M",
      date_of_birth: "2000-01-01",
    });
    const headers = { "Content-Type": "application/json" };
    const res = http.post(
      "https://test-api.k6.io/public/crocodiles/",
      payload,
      { headers }
    );

    check(res, {
      "status is 201": (r) => r.status === 201, // ตรวจสอบสถานะ HTTP
    });
    sleep(1); // พัก 1 วินาที
  });
}
