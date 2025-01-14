//ตัวอย่าง: ตรวจสอบสถานะ HTTP และเวลาตอบสนอง

import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 5, // จำนวน Virtual Users
  duration: "30s", // ระยะเวลาการทดสอบ
};

export default function() {
  const url = "https://test-api.k6.io/public/crocodiles/";

  // ส่งคำขอ HTTP GET
  const res = http.get(url);

  // ใช้ Check ตรวจสอบเงื่อนไข
  const checkResult = check(res, {
    "status is 200": (r) => r.status === 200, // ตรวจสอบสถานะ HTTP ต้องเป็น 200
    "response time < 500ms": (r) => r.timings.duration < 500, // เวลาตอบสนองต้องน้อยกว่า 500ms
  });

  // แสดงผลการตรวจสอบในคอนโซล
  console.log(`Check passed: ${checkResult}`);

  // พัก 1 วินาที
  sleep(1);
}
