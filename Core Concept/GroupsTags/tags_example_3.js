//ตัวอย่าง 3: การใช้ Tags หลายคำขอ
import http from 'k6/http';
import { Counter } from 'k6/metrics';

// สร้าง Custom Metric
const requestsWithTags = new Counter('requests_with_tags');

export default function () {
  // เพิ่ม Tags ในคำขอ
  const res = http.get('https://test-api.k6.io/public/crocodiles/', {
    tags: { endpoint: 'list_crocodiles', method: 'GET' },
  });

  // บันทึก Tags ลงใน Custom Metric
  requestsWithTags.add(1, { endpoint: 'list_crocodiles', method: 'GET' });
  console.log(`Status: ${res.status}`);
}
