import http from "k6/http";
import { sleep } from "k6";

// กำหนด Options
export const options = {
  vus: 5, // จำนวน Virtual Users
  duration: "30s", // ระยะเวลาทดสอบ
};

// 1. Initialization Stage (รันครั้งเดียวก่อนการทดสอบเริ่ม)
const url = "https://test-api.k6.io/public/crocodiles/";

// 2. Setup Stage (รันครั้งเดียวก่อน Virtual Users เริ่มทำงาน)
export function setup() {
  console.log("Setup stage...");
  // เตรียมข้อมูล เช่น การสร้าง Token หรือการดึงข้อมูลพื้นฐาน
  const token = "Bearer my-auth-token"; // ตัวอย่างการจำลอง Token
  return { token }; // ส่งข้อมูลไปยัง Execution Stage
}

// 3. Execution Stage (รันโดย VUs หลายรอบจนกว่าจะครบ duration หรือ iterations)
export default function(data) {
  console.log(`VU: ${__VU}, Iteration: ${__ITER}`); // แสดงหมายเลข VU และ Iteration

  // ส่งคำขอ HTTP พร้อม Token ที่ได้จาก setup()
  const res = http.get(url, {
    headers: { Authorization: data.token },
  });

  // แสดงเวลาตอบสนอง
  console.log(`Response time for VU ${__VU}: ${res.timings.duration} ms`);

  // พัก 1 วินาที
  sleep(1);
}

// 4. Teardown Stage (รันครั้งเดียวหลัง Virtual Users เสร็จงานทั้งหมด)
export function teardown(data) {
  console.log("Teardown stage...");
  // ทำความสะอาด เช่น ลบข้อมูลหรือปิดการเชื่อมต่อ
  console.log(`Cleaning up resources for token: ${data.token}`);
}
