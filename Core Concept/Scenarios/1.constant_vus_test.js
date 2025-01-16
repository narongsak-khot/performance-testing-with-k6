//constant-vus เป็น Executor ที่รัน Virtual Users (VUs) 
// คงที่ตลอดระยะเวลาที่กำหนด 
// เหมาะสำหรับการจำลองโหลดที่เสถียร 
// เช่น การทดสอบประสิทธิภาพระบบภายใต้จำนวนผู้ใช้งานที่แน่นอน

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  scenarios: {
    constant_load: {
      executor: 'constant-vus', // ใช้ executor แบบ constant-vus
      vus: 50, // จำนวน Virtual Users คงที่
      duration: '1m', // ระยะเวลาที่ต้องการรันการทดสอบ
    },
  },
};

export default function () {
  // ส่งคำขอ HTTP GET ไปยัง URL ที่ต้องการ
  let res = http.get('https://test-api.k6.io/public/crocodiles/');

  // ตรวจสอบว่าคำขอสำเร็จ (สถานะ 200)
  if (res.status !== 200) {
    console.error(`Request failed. Status: ${res.status}`);
  }
}
