import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 5, // จำนวน Virtual Users
  duration: "30s", // ระยะเวลาทดสอบ 30 วินาที
};

export default function() {
  const url = "https://test-api.k6.io/public/crocodiles/";

  // ส่งคำขอ HTTP GET
  const res = http.get(url);

  // แสดง Iteration และ Virtual User ปัจจุบัน
  console.log(`VU: ${__VU}, Iteration: ${__ITER}`); // __VU = หมายเลข VU, __ITER = รอบการทำงานของ VU

  // พักการทำงาน 1 วินาที
  sleep(1);
}
