//ใช้สำหรับการวิเคราะห์พฤติกรรมของเครือข่าย 
// เช่น เวลาที่ใช้ในการเชื่อมต่อ (Connection), การส่งข้อมูล (Sending), และการรับข้อมูล (Receiving) 
// ซึ่งช่วยให้คุณเข้าใจการทำงานของระบบในระดับเครือข่ายได้ดียิ่งขึ้น

import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 3, // จำนวน Virtual Users (VUs)
  duration: '30s', // ระยะเวลาทดสอบ
};

export default function () {
  // ส่งคำขอ HTTP GET
  let res = http.get('https://test-api.k6.io/public/crocodiles/');

  // ตรวจสอบสถานะ HTTP Response (200 OK)
  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  // แสดงรายละเอียด Network Metrics
  console.log(`DNS Lookup: ${res.timings.dns} ms`);
  console.log(`TCP Connection: ${res.timings.connecting} ms`);
  console.log(`TLS Handshake: ${res.timings.tls_handshaking} ms`);
  console.log(`Time to First Byte (TTFB): ${res.timings.waiting} ms`);
  console.log(`Content Transfer Time: ${res.timings.receiving} ms`);
}
