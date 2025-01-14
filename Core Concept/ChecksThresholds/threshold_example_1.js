//ตัวอย่าง: การตั้งค่า Thresholds เบื้องต้น

import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 10, // จำนวน Virtual Users
  duration: "30s", // ระยะเวลาทดสอบ
  thresholds: {
    http_req_duration: ["p(95)<200"], // P95 ของเวลาตอบสนองต้องน้อยกว่า 200ms
    http_req_failed: ["rate<0.01"], // อัตราคำขอล้มเหลวต้องน้อยกว่า 1%
  },
};

export default function() {
  const url = "https://test-api.k6.io/public/crocodiles/";
  const res = http.get(url);

  // พัก 1 วินาที
  sleep(1);
}
