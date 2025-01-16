//Checks และ Thresholds เป็นฟีเจอร์ที่สำคัญใน k6 สำหรับตรวจสอบความถูกต้องและประสิทธิภาพของระบบ:
// Checks: ใช้สำหรับตรวจสอบเงื่อนไข เช่น สถานะ HTTP, ค่าที่ตอบกลับ ฯลฯ
// Thresholds: ใช้สำหรับกำหนดเกณฑ์มาตรฐานที่ระบบควรผ่าน เช่น Response Time เฉลี่ย, อัตราความล้มเหลว

import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 5, // จำนวน Virtual Users
  duration: '30s', // ระยะเวลาทดสอบ
  thresholds: {
    http_req_duration: ['p(95)<200', 'avg<150'], // Response Time 95% ต้องต่ำกว่า 200ms และค่าเฉลี่ยต่ำกว่า 150ms
    http_req_failed: ['rate<0.01'], // อัตราคำขอล้มเหลวต้องน้อยกว่า 1%
  },
};

export default function () {
  // ส่งคำขอ HTTP GET ไปยัง URL ที่ต้องการ
  let res = http.get('https://test-api.k6.io/public/crocodiles/');

  // ใช้ Checks เพื่อตรวจสอบ Response
  let isValid = check(res, {
    'status is 200': (r) => r.status === 200, // ตรวจสอบว่าคำขอสำเร็จ
    'response time < 200ms': (r) => r.timings.duration < 200, // ตรวจสอบ Response Time
  });

  // บันทึกผลลัพธ์ใน Log
  if (!isValid) {
    console.error('Check failed');
  }

}

//k6 run 6.checks_thresholds_test.js
