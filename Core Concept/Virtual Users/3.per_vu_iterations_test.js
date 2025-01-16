//การรัน VUs ด้วย Iterations ต่อ VU ใน k6
// เหมาะสำหรับการกำหนดให้ผู้ใช้งานจำลอง (VUs) ทำงานตามจำนวน Iterations ที่ต้องการ
// ซึ่งช่วยให้คุณควบคุมจำนวนรอบการทำงานได้อย่างแม่นยำ

import http from "k6/http";
import { sleep } from "k6";

export let options = {
  scenarios: {
    per_vu_iterations_test: {
      executor: "per-vu-iterations", // ใช้ executor แบบ per-vu-iterations
      vus: 5, // จำนวน Virtual Users (VUs)
      iterations: 10, // จำนวน Iterations ต่อ VU
      maxDuration: "2m", // เวลาสูงสุดที่สามารถรันได้
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
