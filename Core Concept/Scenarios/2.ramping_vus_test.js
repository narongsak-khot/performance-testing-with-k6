//ramping-vus เป็น Executor ที่ใช้สำหรับเพิ่มและลดจำนวน Virtual Users (VUs) 
// ตามช่วงเวลาที่กำหนด เหมาะสำหรับการจำลองโหลดที่มีการเปลี่ยนแปลง 
// เช่น การเพิ่มผู้ใช้งานแบบค่อยเป็นค่อยไป หรือการลดจำนวนผู้ใช้งานลงหลังจากโหลดสูงสุด

import http from "k6/http";
import { sleep } from "k6";

export let options = {
  scenarios: {
    ramping_load: {
      executor: "ramping-vus", // ใช้ executor แบบ ramping-vus
      startVUs: 0, // จำนวน VUs เริ่มต้น
      stages: [
        { duration: "1m", target: 20 }, // เพิ่มเป็น 20 VUs ใน 1 นาที
        { duration: "2m", target: 50 }, // เพิ่มเป็น 50 VUs ใน 2 นาที
        { duration: "1m", target: 10 }, // ลดจำนวน VUs ลงเป็น 10 ใน 1 นาที
        { duration: "30s", target: 0 }, // ลด VUs เป็น 0 ใน 30 วินาทีสุดท้าย
      ],
    },
  },
};

export default function() {
  // ส่งคำขอ HTTP GET ไปยัง URL ที่ต้องการ
  let res = http.get("https://test-api.k6.io/public/crocodiles/");

  // ตรวจสอบว่าคำขอสำเร็จ (สถานะ 200)
  if (res.status !== 200) {
    console.error(`Request failed. Status: ${res.status}`);
  }

  sleep(1); // พัก 1 วินาทีก่อนการทำคำขอครั้งถัดไป
}
