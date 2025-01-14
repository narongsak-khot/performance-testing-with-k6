//ตัวอย่าง: ตรวจสอบเนื้อหาในคำตอบ

import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 5,
  duration: "20s",
};

export default function() {
  const url = "https://test-api.k6.io/public/crocodiles/1/";
  const res = http.get(url);

  // ตรวจสอบว่าเนื้อหาในคำตอบถูกต้อง
  check(res, {
    "status is 200": (r) => r.status === 200,
    "response body contains crocodile": (r) => r.body.includes("crocodile"),
  });

  sleep(1);
}
