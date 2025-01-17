import http from "k6/http";

export let options = {
  vus: 50, // จำนวน Virtual Users ต่ออินสแตนซ์
  duration: "30s", // ระยะเวลา 30 วินาที
};

export default function() {
  http.get("https://test-api.k6.io"); // ส่งคำขอ HTTP GET
}
