//ใช้ Check หลายเงื่อนไข

import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 2,
  duration: '30s',
};

export default function () {
  let res = http.get('https://test-api.k6.io/public/crocodiles/');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 300ms': (r) => r.timings.duration < 300,
    'content type is correct': (r) => r.headers['Content-Type'] === 'application/json',
    'body contains crocodiles': (r) => r.body.includes('crocodiles'),
  });
}
