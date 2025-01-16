//VU Metrics ใน k6 ใช้สำหรับติดตามจำนวน Virtual Users (VUs) ที่ทำงานในแต่ละช่วงเวลา รวมถึง Iteration ของแต่ละ VU
// ซึ่งช่วยให้คุณวิเคราะห์พฤติกรรมการทำงานของผู้ใช้งานจำลองในระบบได้อย่างละเอียด

import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 5, // จำนวน VUs คงที่
  duration: "30s", // ระยะเวลาทดสอบ
};

export default function() {
  // ส่งคำขอ HTTP GET ไปยัง URL ที่ต้องการ
  let res = http.get("https://test-api.k6.io/public/crocodiles/");

  // ตรวจสอบสถานะคำขอ (HTTP Response Status)
  if (res.status !== 200) {
    console.error(`VU ${__VU} failed request with status ${res.status}`);
  }

  // แสดงข้อมูล VU Metrics
  console.log(`Current VU: ${__VU}`); // ID ของ VU ปัจจุบัน
  console.log(`Current Iteration: ${__ITER}`); // Iteration ของ VU ปัจจุบัน
}
