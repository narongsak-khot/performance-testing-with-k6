//ตัวอย่าง: Thresholds แบบหลายเงื่อนไข
import http from "k6/http";

export const options = {
  vus: 5,
  duration: "1m",
  thresholds: {
    http_req_duration: [
      "avg<150", // ค่าเฉลี่ยของเวลาตอบสนองต้องน้อยกว่า 150ms
      "p(90)<200", // P90 ต้องน้อยกว่า 200ms
      "max<300", // เวลาตอบสนองสูงสุดต้องน้อยกว่า 300ms
    ],
    http_req_failed: ["rate<0.01"], // อัตราคำขอล้มเหลวต้องน้อยกว่า 1%
  },
};

export default function() {
  http.get("https://test-api.k6.io/public/crocodiles/");
}
