//การเพิ่มและลดจำนวน VUs แบบ Ramping ใน k6
// เหมาะสำหรับการจำลองโหลดที่เปลี่ยนแปลงตามช่วงเวลา
// เช่น การเพิ่มจำนวนผู้ใช้งานในช่วงเวลาหนึ่ง และลดจำนวนลงหลังจากนั้น 
// เพื่อทดสอบความสามารถของระบบในการจัดการโหลดที่เปลี่ยนแปลง

import http from "k6/http";
import { sleep } from "k6";

export let options = {
  stages: [
    { duration: "1m", target: 10 }, // เพิ่ม VUs เป็น 10 ใน 1 นาที
    { duration: "2m", target: 50 }, // เพิ่ม VUs เป็น 50 ใน 2 นาที
    { duration: "1m", target: 20 }, // ลด VUs เป็น 20 ใน 1 นาที
    { duration: "30s", target: 0 }, // ลด VUs เป็น 0 ใน 30 วินาที
  ],
};

export default function() {
  // ส่งคำขอ HTTP GET ไปยัง URL ที่ต้องการ
  let res = http.get("https://test-api.k6.io/public/crocodiles/");

  // ตรวจสอบว่าคำขอสำเร็จ (สถานะ 200)
  if (res.status !== 200) {
    console.error(`Request failed. Status: ${res.status}`);
  }
}
