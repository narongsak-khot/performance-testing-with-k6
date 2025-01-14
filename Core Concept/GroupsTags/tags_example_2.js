//ตัวอย่าง 2: การใช้ http.setTags() เพิ่ม Tags ชั่วคราว

import http from "k6/http";

export default function() {
  // เพิ่ม Tags ชั่วคราว
  http.setTags({ endpoint: "get_crocodile_by_id", method: "GET" });

  // ส่งคำขอ HTTP
  const res = http.get("https://test-api.k6.io/public/crocodiles/1/");
  console.log(`Response time: ${res.timings.duration} ms`);
}
