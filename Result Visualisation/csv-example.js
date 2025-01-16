import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 10, // จำนวน Virtual Users
  duration: "30s", // ระยะเวลาทดสอบ 30 วินาที
};

export default function() {
  http.get("https://test-api.k6.io"); // ส่ง HTTP GET Request
  sleep(1); // รอ 1 วินาที
}
