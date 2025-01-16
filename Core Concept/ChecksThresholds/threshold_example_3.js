//Thresholds สำหรับ Iterations
import http from "k6/http";

export let options = {
  thresholds: {
    // Iterations ทั้งหมดต้องมากกว่า 100
    iterations: ["count>100"],
  },
  vus: 5, // จำนวน Virtual Users
  duration: "30s", // ระยะเวลาทดสอบ
};

export default function() {
  http.get("https://test-api.k6.io/public/crocodiles/");
}
