//Thresholds สำหรับ Built-in Metrics

import http from 'k6/http';

export let options = {
  thresholds: {
    // Response Time: 95% ของคำขอต้องมีเวลาตอบสนองต่ำกว่า 200ms และค่าเฉลี่ยต่ำกว่า 150ms
    http_req_duration: ['p(95)<200', 'avg<150'],

    // อัตราคำขอที่ล้มเหลวต้องน้อยกว่า 1%
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  http.get('https://test-api.k6.io/public/crocodiles/');
}
