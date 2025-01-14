//ตัวอย่าง: ตรวจสอบหลายเงื่อนไข

import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 10,
  duration: "15s",
};

export default function() {
  const url = "https://test-api.k6.io/public/crocodiles/";
  const res = http.get(url);

  // ตรวจสอบเงื่อนไขหลายแบบ
  check(res, {
    "status is 200": (r) => r.status === 200,
    "response time < 300ms": (r) => r.timings.duration < 300,
    "response contains JSON": (r) =>
      r.headers["Content-Type"].includes("application/json"),
  });

  sleep(1);
}
