//constant-arrival-rate เป็น Executor ที่ใช้สำหรับควบคุมจำนวนคำขอ (requests) 
//ที่ส่งไปยังระบบในแต่ละช่วงเวลาอย่างคงที่ เหมาะสำหรับการทดสอบที่ต้องการจำลองโหลดในลักษณะคำขอที่คงที่ 
//เช่น การทดสอบ API ที่ต้องรองรับคำขอในระดับสูง

import http from "k6/http";
import { sleep } from "k6";

export let options = {
  scenarios: {
    constant_rate_test: {
      executor: "constant-arrival-rate", // ใช้ executor แบบ constant-arrival-rate
      rate: 100, // จำนวนคำขอ 100 ครั้งต่อวินาที
      timeUnit: "1s", // หน่วยเวลา (คำขอ/วินาที)
      duration: "1m", // ระยะเวลาการทดสอบ
      preAllocatedVUs: 50, // จำนวน VUs ที่เตรียมไว้ล่วงหน้า
      maxVUs: 100, // จำนวน VUs สูงสุดที่สามารถขยายได้
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
}
