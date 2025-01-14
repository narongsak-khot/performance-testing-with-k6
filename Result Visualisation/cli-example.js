import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 10, // จำนวนผู้ใช้จำลอง
  duration: "30s", // ระยะเวลาที่จะรันทดสอบ
};

export default function() {
  http.get("https://test-api.k6.io"); // ส่ง HTTP GET Request
  sleep(1); // รอ 1 วินาที
}
