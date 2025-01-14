import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 5, // จำนวน Virtual Users เริ่มต้น
  duration: '1m', // ระยะเวลาทดสอบ 1 นาที
};

export default function () {
  const url = 'https://test-api.k6.io/public/crocodiles/';

  // ส่งคำขอ HTTP GET
  const res = http.get(url);

  // แสดงจำนวน Virtual Users ปัจจุบันในคอนโซล
  console.log(`Current VU: ${__VU}`); // หมายเลขของ VU ที่กำลังรัน (1, 2, ..., N)
  console.log(`Iteration: ${__ITER}`); // หมายเลขรอบการทำงานของ VU ปัจจุบัน

  // พัก 1 วินาที
  sleep(1);
}
