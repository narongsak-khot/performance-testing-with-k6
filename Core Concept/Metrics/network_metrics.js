import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 10, // จำนวน Virtual Users
  duration: "30s", // ระยะเวลาการทดสอบ
};

export default function() {
  const url = "https://test-api.k6.io/public/crocodiles/";

  // ส่งคำขอ HTTP GET
  const res = http.get(url);

  // แสดงข้อมูล Metrics เครือข่ายในคอนโซล
  console.log(
    `Data Sent: ${res.request.body ? res.request.body.length : 0} bytes`
  );
  console.log(`Data Received: ${res.body.length} bytes`);

  // พัก 1 วินาที
  sleep(1);
}
