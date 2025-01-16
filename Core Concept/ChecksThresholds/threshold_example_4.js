//รวม Thresholds หลายประเภท
import http from "k6/http";

export let options = {
  thresholds: {
    // Response Time: 95% ของคำขอต้องมี Response Time ต่ำกว่า 250ms
    http_req_duration: ["p(95)<250"],

    // อัตราคำขอที่ล้มเหลวต้องต่ำกว่า 2%
    http_req_failed: ["rate<0.02"],

    // จำนวน Iterations ทั้งหมดต้องมากกว่า 200
    iterations: ["count>200"],
  },
  vus: 10, // จำนวน Virtual Users
  duration: "1m", // ระยะเวลาทดสอบ
};

export default function() {
  http.get("https://test-api.k6.io/public/crocodiles/");
}
