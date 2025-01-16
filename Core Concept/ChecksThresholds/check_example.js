
import http from 'k6/http';
import { check } from 'k6';

export default function () {
  let res = http.get('https://test-api.k6.io/public/crocodiles/');

  // ใช้ Check หลายเงื่อนไข
  check(res, {
    'status is 200': (r) => r.status === 200, // ตรวจสอบสถานะ HTTP
    'response time < 200ms': (r) => r.timings.duration < 200, // ตรวจสอบ Response Time
    'content is JSON': (r) => r.headers['Content-Type'] === 'application/json', // ตรวจสอบ Header
    'response contains crocodiles': (r) => r.body.includes('crocodiles'), // ตรวจสอบเนื้อหาใน Body
  });
}
