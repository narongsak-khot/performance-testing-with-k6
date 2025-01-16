//per-vu-iterations เป็น Executor ที่กำหนดให้ Virtual Users (VUs)
// ทำงานตามจำนวน Iterations ที่กำหนด
// เหมาะสำหรับการทดสอบที่ต้องการควบคุมจำนวน Iterations ต่อ VU อย่างแม่นยำ
// เช่น การจำลองการทำงานในรูปแบบที่คาดเดาได้

import http from "k6/http";
import { sleep } from "k6";

export let options = {
  scenarios: {
    per_vu_iterations_scenario: {
      executor: "per-vu-iterations", // ใช้ executor แบบ per-vu-iterations
      vus: 5, // จำนวน Virtual Users
      iterations: 10, // จำนวน Iterations ต่อ VU
      maxDuration: "2m", // ระยะเวลาสูงสุดของการทดสอบ
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

  sleep(1); // พัก 1 วินาทีก่อนคำขอครั้งถัดไป
}
