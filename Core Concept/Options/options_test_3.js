//Thresholds
//กำหนดเงื่อนไขสำหรับการวัดผล เช่น เวลาในการตอบสนองและอัตราความล้มเหลว:

import http from 'k6/http';
import { check } from 'k6';

export let options = {
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% ของคำขอต้องใช้เวลาน้อยกว่า 500ms
        http_req_failed: ['rate<0.01'],   // อัตราคำขอที่ล้มเหลวต้องน้อยกว่า 1%
    },
};

export default function () {
    let res = http.get('https://test-api.k6.io');
    check(res, { 'status is 200': (r) => r.status === 200 });
}
