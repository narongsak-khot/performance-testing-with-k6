import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 10, // จำนวน Virtual Users ต่ออินสแตนซ์
  duration: "30s", // ระยะเวลา 30 วินาที
};

export default function() {
  http.get("https://test-api.k6.io"); // ส่งคำขอ HTTP GET
}
