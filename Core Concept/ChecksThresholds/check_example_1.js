//ตรวจสอบ HTTP Status และ Response Time

import http from "k6/http";
import { check, sleep } from "k6";

export default function() {
  let res = http.get("https://test-api.k6.io/public/crocodiles/");

  check(res, {
    "status is 200": (r) => r.status === 200, // ตรวจสอบสถานะ HTTP
    "response time < 200ms": (r) => r.timings.duration < 200, // ตรวจสอบ Response Time
  });

}
