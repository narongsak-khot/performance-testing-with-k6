import http from "k6/http";
import { Counter, Gauge, Rate, Trend } from "k6/metrics";
import { sleep } from "k6";

// สร้าง Custom Metrics
const requestCount = new Counter("custom_request_count"); // นับจำนวนคำขอทั้งหมด
const requestDuration = new Trend("custom_request_duration"); // เวลาตอบสนองคำขอ
const successRate = new Rate("custom_success_rate"); // อัตราความสำเร็จของคำขอ
const activeUsers = new Gauge("custom_active_users"); // จำนวนผู้ใช้งานที่กำลังทำงาน

export const options = {
  vus: 5, // จำนวน Virtual Users
  duration: "30s", // ระยะเวลาการทดสอบ
};

export default function() {
  const url = "https://test-api.k6.io/public/crocodiles/";

  // ส่งคำขอ HTTP GET
  const res = http.get(url);

  // บันทึก Custom Metrics
  requestCount.add(1); // เพิ่มจำนวนคำขอ
  requestDuration.add(res.timings.duration); // บันทึกเวลาตอบสนอง
  successRate.add(res.status === 200); // บันทึกว่าคำขอสำเร็จ (True/False)
  activeUsers.add(__VU); // บันทึกจำนวน Virtual Users ปัจจุบัน

  // พัก 1 วินาที
  sleep(1);
}
