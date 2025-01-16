// การใช้ VUs คงที่ ใน k6 เหมาะสำหรับการทดสอบโหลดแบบคงที่ (Static Load Testing) 
// โดยกำหนดให้มีจำนวนผู้ใช้งานจำลอง (VUs) คงที่ตลอดระยะเวลาการทดสอบ

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 10, // จำนวน VUs คงที่
  duration: '30s', // ระยะเวลาที่รันการทดสอบ (30 วินาที)
};

export default function () {
  // ส่งคำขอ HTTP GET ไปยัง URL ที่ต้องการ
  let res = http.get('https://test-api.k6.io/public/crocodiles/');

  // ตรวจสอบว่าคำขอสำเร็จ (สถานะ 200)
  if (res.status !== 200) {
    console.error(`Request failed. Status: ${res.status}`);
  }
  
}
