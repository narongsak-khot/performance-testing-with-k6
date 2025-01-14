import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 10, // จำนวน Virtual Users
  duration: "30s", // ระยะเวลาการทดสอบ
};

export default function() {
  const url = "https://test-api.k6.io/public/crocodiles/";

  // ส่งคำขอ HTTP GET
  const res = http.get(url);

  // ตรวจสอบผลลัพธ์
  check(res, {
    "status is 200": (r) => r.status === 200, // ตรวจสอบสถานะ HTTP เป็น 200
    "response time is less than 500ms": (r) => r.timings.duration < 500, // ตรวจสอบเวลาตอบสนอง < 500ms
  });

  // พัก 1 วินาที
  sleep(1);
}
