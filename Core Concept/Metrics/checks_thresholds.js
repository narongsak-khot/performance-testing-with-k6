import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 5, // จำนวน Virtual Users
  duration: "30s", // ระยะเวลาการทดสอบ
  thresholds: {
    // ตั้งเกณฑ์ (Thresholds)
    http_req_duration: ["p(95)<200"], // P95 ของเวลาตอบสนองต้องน้อยกว่า 200 มิลลิวินาที
    http_req_failed: ["rate<0.01"], // อัตราคำขอล้มเหลวต้องน้อยกว่า 1%
  },
};

export default function() {
  const url = "https://test-api.k6.io/public/crocodiles/";

  // ส่งคำขอ HTTP GET
  const res = http.get(url);

  // ตรวจสอบผลลัพธ์ (Checks)
  const checkResult = check(res, {
    "status is 200": (r) => r.status === 200, // สถานะ HTTP ต้องเป็น 200
    "response time < 500ms": (r) => r.timings.duration < 500, // เวลาตอบสนองต้องน้อยกว่า 500 มิลลิวินาที
  });

  // แสดงผลการตรวจสอบในคอนโซล
  console.log(`Check passed: ${checkResult}`);

  // พัก 1 วินาที
  sleep(1);
}
