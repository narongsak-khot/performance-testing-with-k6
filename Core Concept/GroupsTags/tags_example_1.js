//ตัวอย่าง 1: การเพิ่ม Tags ในคำขอ HTTP
import http from "k6/http";

export default function() {
  const res = http.get("https://test-api.k6.io/public/crocodiles/", {
    tags: { endpoint: "list_crocodiles", method: "GET" },
  });

  console.log(JSON.stringify(res.timings)); // ดูผลลัพธ์ Metrics พร้อม Tags
}
