//การใช้ Custom Metrics
//การวัดค่าข้อมูลเฉพาะด้วย Metrics:

import http from 'k6/http';
import { Counter } from 'k6/metrics';

export let requests = new Counter('http_reqs');

export let options = {
    vus: 5,
    duration: '30s',
};

export default function () {
    http.get('https://test-api.k6.io');
    requests.add(1); // เพิ่มจำนวนคำขอที่วัดด้วย Metrics
}
