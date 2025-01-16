//Iteration Metrics ใช้สำหรับติดตามจำนวน Iterations ที่ Virtual Users (VUs) 
// ทำในระหว่างการทดสอบ โดยคุณสามารถใช้ตัวแปรในตัว __ITER 
// เพื่อตรวจสอบ Iteration ปัจจุบันของแต่ละ VU

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 4, // จำนวน VUs
  iterations: 12, // จำนวน Iterations รวมทั้งหมด
};

export default function () {
  // ส่งคำขอ HTTP GET ไปยัง URL ที่ต้องการ
  let res = http.get('https://test-api.k6.io/public/crocodiles/');

  // ตรวจสอบสถานะคำขอ (HTTP Response Status)
  if (res.status === 200) {
    console.log(`VU ${__VU} completed Iteration ${__ITER} successfully.`);
  } else {
    console.error(`VU ${__VU} failed Iteration ${__ITER}.`);
  }

  sleep(1); // พัก 1 วินาทีก่อนการทำคำขอครั้งถัดไป
}
