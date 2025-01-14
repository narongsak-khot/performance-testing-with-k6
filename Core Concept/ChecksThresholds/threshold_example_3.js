//ตัวอย่าง: Thresholds กับ Custom Metrics
import http from "k6/http";
import { Counter, Trend } from "k6/metrics";

const myCounter = new Counter("my_custom_counter"); // สร้าง Custom Metric
const myTrend = new Trend("my_custom_trend"); // สร้าง Custom Trend

export const options = {
  vus: 10,
  duration: "30s",
  thresholds: {
    my_custom_trend: ["avg<200"], // ค่าเฉลี่ยของ Custom Metric ต้องน้อยกว่า 200ms
    my_custom_counter: ["count>20"], // จำนวน Custom Counter ต้องมากกว่า 20
  },
};

export default function() {
  const res = http.get("https://test-api.k6.io/public/crocodiles/");
  myCounter.add(1); // เพิ่มค่า Counter
  myTrend.add(res.timings.duration); // บันทึกเวลาตอบสนอง
}
