//สร้าง Custom Metrics เพื่อวัดค่าหรือเหตุการณ์ที่ต้องการวิเคราะห์เพิ่มเติมนอกเหนือจาก
// Built-in Metrics เช่น การวัดจำนวนข้อผิดพลาด, คำนวณอัตราความสำเร็จ, หรือวัดค่าประสิทธิภาพเฉพาะ

import http from "k6/http";
import { Counter, Gauge, Rate, Trend } from "k6/metrics";
import { sleep } from "k6";

// สร้าง Custom Metrics
let errorCounter = new Counter("errors"); // นับจำนวนข้อผิดพลาด
let responseTimeGauge = new Gauge("response_time"); // วัด Response Time
let successRate = new Rate("success_rate"); // คำนวณอัตราความสำเร็จ
let responseTimeTrend = new Trend("response_time_trend"); // บันทึก Response Time

export let options = {
  vus: 5, // จำนวน Virtual Users
  duration: "30s", // ระยะเวลาทดสอบ
};

export default function() {
  // ส่งคำขอ HTTP GET
  let res = http.get("https://test-api.k6.io/public/crocodiles/");

  // นับข้อผิดพลาดหากสถานะไม่ใช่ 200
  if (res.status !== 200) {
    errorCounter.add(1); // เพิ่มค่าข้อผิดพลาด 1
  }

  // วัด Response Time ของคำขอ
  responseTimeGauge.add(res.timings.duration);

  // คำนวณอัตราความสำเร็จ
  successRate.add(res.status === 200);

  // บันทึก Response Time ลงใน Trend
  responseTimeTrend.add(res.timings.duration);

  sleep(1); // พัก 1 วินาทีก่อนคำขอครั้งถัดไป
}
