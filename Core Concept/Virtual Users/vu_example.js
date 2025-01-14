import http from "k6/http";
import { sleep } from "k6";

// 1. Options: ตั้งค่าการรัน
export const options = {
  vus: 10, // จำนวน Virtual Users
  duration: "30s", // ระยะเวลาที่จะรัน
};

// 2. Main function: ฟังก์ชันที่ VUs จะเรียกใช้งาน
export default function() {
  const url = "https://test-api.k6.io/public/crocodiles/";

  // ทำคำขอ HTTP GET ไปยัง URL ที่กำหนด
  let response = http.get(url);

  // ตรวจสอบ Response Status
  if (response.status === 200) {
    console.log("Request successful");
  } else {
    console.error(`Request failed with status ${response.status}`);
  }

  // พักการทำงานของ VU 1 วินาที
  sleep(1);
}
