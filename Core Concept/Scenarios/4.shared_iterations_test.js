// shared-iterations เป็น Executor ที่ใช้สำหรับกำหนดจำนวน Iterations ทั้งหมดที่
// Virtual Users (VUs) จะแชร์กันทำงานในช่วงเวลาที่กำหนด
// เหมาะสำหรับการควบคุมจำนวนคำขอรวมโดยไม่ต้องสนใจจำนวน Iterations ต่อ VU

import http from "k6/http";
import { sleep } from "k6";

export let options = {
  scenarios: {
    shared_iterations_test: {
      executor: "shared-iterations", // ใช้ executor แบบ shared-iterations
      vus: 5, // จำนวน Virtual Users
      iterations: 50, // จำนวน Iterations รวมทั้งหมด
      maxDuration: "1m", // เวลาสูงสุดในการทำงาน
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

  sleep(1); // พัก 1 วินาทีก่อนคำขอถัดไป
}
