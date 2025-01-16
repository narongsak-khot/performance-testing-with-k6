//variable-arrival-rate เป็น Executor
// ที่ช่วยให้คุณสามารถกำหนดรูปแบบคำขอที่เปลี่ยนแปลงอย่างไม่สม่ำเสมอตามช่วงเวลาได้
// เหมาะสำหรับการจำลองโหลดที่ไม่คงที่ เช่น การใช้งานระบบในช่วง Peak Time หรือโหลดที่มีความผันผวน
import http from "k6/http";
import { sleep } from "k6";

export let options = {
  scenarios: {
    variable_arrival_rate_test: {
      executor: "variable-arrival-rate", // ใช้ executor แบบ variable-arrival-rate
      timeUnit: "1s", // หน่วยเวลา (คำขอ/วินาที)
      preAllocatedVUs: 20, // จำนวน VUs ที่เตรียมไว้ล่วงหน้า
      maxVUs: 50, // จำนวน VUs สูงสุดที่สามารถขยายได้
      stages: [
        { duration: "1m", target: 20 }, // ส่งคำขอ 20 ต่อวินาทีใน 1 นาทีแรก
        { duration: "2m", target: 50 }, // เพิ่มเป็น 50 คำขอต่อวินาทีใน 2 นาทีถัดไป
        { duration: "1m", target: 10 }, // ลดลงเหลือ 10 คำขอต่อวินาทีใน 1 นาที
        { duration: "30s", target: 0 }, // ลดลงเหลือ 0 คำขอใน 30 วินาทีสุดท้าย
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

  sleep(1); // จำลองการพักระหว่างคำขอ (ถ้าจำเป็น)
}
