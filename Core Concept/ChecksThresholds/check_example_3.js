//ตรวจสอบข้อมูลใน JSON Response
import http from 'k6/http';
import { check } from 'k6';

export default function () {
  let res = http.get('https://test-api.k6.io/public/crocodiles/1/');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'name is present': (r) => JSON.parse(r.body).name !== undefined, // ตรวจสอบว่า "name" มีอยู่ใน JSON
  });
}
