import http from "k6/http";
import { sleep } from "k6";
import { Counter, Gauge, Rate, Trend } from "k6/metrics";

// สร้าง Metrics แบบ Custom
const requestCount = new Counter("request_count"); // นับจำนวนคำขอ
const responseTime = new Trend("response_time"); // เก็บข้อมูลเวลาตอบสนอง
const successRate = new Rate("success_rate"); // อัตราคำขอสำเร็จ
const activeUsers = new Gauge("active_users"); // จำนวนผู้ใช้งานปัจจุบัน

// การตั้งค่าการทดสอบ
export const options = {
  vus: 10, // จำนวนผู้ใช้งานเสมือน
  duration: "30s", // ระยะเวลาที่รัน
};

export default function() {
  const url = "https://test-api.k6.io/public/crocodiles/";
  const res = http.get(url);

  // บันทึก Metrics
  requestCount.add(1); // เพิ่มจำนวนคำขอ
  responseTime.add(res.timings.duration); // บันทึกเวลาตอบสนอง
  successRate.add(res.status === 200); // บันทึกความสำเร็จ (true/false)
  activeUsers.add(__VU); // จำนวนผู้ใช้งานที่กำลังรัน (Virtual Users)

  // พักการทำงาน 1 วินาที
  sleep(1);
}
