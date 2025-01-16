//ตรวจสอบ Header และ Response Body

import http from 'k6/http';
import { check } from 'k6';

export default function () {
  let res = http.get('https://test-api.k6.io/public/crocodiles/');

  check(res, {
    'content is JSON': (r) => r.headers['Content-Type'] === 'application/json', // ตรวจสอบ Header
    'response contains crocodiles': (r) => r.body.includes('crocodiles'), // ตรวจสอบว่า Body มีคำว่า "crocodiles"
  });
}
