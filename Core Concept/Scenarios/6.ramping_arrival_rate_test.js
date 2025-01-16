//ramping-arrival-rate เป็น Executor ที่ใช้สำหรับเพิ่มและลดจำนวนคำขอ (requests)
// ที่ส่งไปยังระบบตามช่วงเวลาที่กำหนด เหมาะสำหรับการจำลองโหลดที่มีการเปลี่ยนแปลง เช่น
// การเติบโตของคำขอที่เพิ่มขึ้นอย่างค่อยเป็นค่อยไป หรือการลดคำขอลงในช่วงท้ายของการทดสอบ

import http from "k6/http";
import { sleep } from "k6";

export let options = {
  scenarios: {
    ramping_rate_test: {
      executor: "ramping-arrival-rate", // ใช้ executor แบบ ramping-arrival-rate
      startRate: 10, // เริ่มต้นที่ 10 คำขอต่อวินาที
      timeUnit: "1s", // หน่วยเวลา (คำขอ/วินาที)
      stages: [
        { duration: "1m", target: 50 }, // เพิ่มคำขอเป็น 50 ต่อวินาทีใน 1 นาที
        { duration: "2m", target: 100 }, // เพิ่มคำขอเป็น 100 ต่อวินาทีใน 2 นาทีถัดไป
        { duration: "1m", target: 0 }, // ลดคำขอเป็น 0 ใน 1 นาทีสุดท้าย
      ],
      preAllocatedVUs: 20, // จำนวน VUs ที่เตรียมไว้ล่วงหน้า
      maxVUs: 50, // จำนวน VUs สูงสุดที่สามารถขยายได้
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
