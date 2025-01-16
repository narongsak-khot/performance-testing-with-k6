import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 10,
  duration: "1m",
  thresholds: {
    http_req_duration: ["p(95)<200"], // P95 ของเวลาตอบสนองต้องน้อยกว่า 200ms
    http_req_failed: ["rate<0.01"], // อัตราคำขอล้มเหลวต้องน้อยกว่า 1%
  },
};

export default function() {
  const url = "https://test-api.k6.io/public/crocodiles/";
  const res = http.get(url);

  // ตรวจสอบผลลัพธ์
  check(res, {
    "status is 200": (r) => r.status === 200,
    "response time < 500ms": (r) => r.timings.duration < 500,
  });

}
