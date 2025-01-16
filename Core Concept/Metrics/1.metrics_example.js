//Built-in Metrics เพื่อเก็บและแสดงข้อมูลเกี่ยวกับคำขอ HTTP 
// และพฤติกรรมของ Virtual Users (VUs)

import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 5, // จำนวน Virtual Users (VUs)
  duration: '30s', // ระยะเวลาทดสอบ
};

export default function () {
  // ส่งคำขอ HTTP GET
  let res = http.get('https://test-api.k6.io/public/crocodiles/');

  // ตรวจสอบสถานะ HTTP Response (200 OK)
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 200ms': (r) => r.timings.duration < 200,
  });

  // พัก 1 วินาทีก่อนการทำคำขอครั้งถัดไป
  sleep(1);
}
