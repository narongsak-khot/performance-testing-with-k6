//Scenarios
//การกำหนด Scenarios เพื่อกำหนดกลยุทธ์การทดสอบที่ซับซ้อน:

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    scenarios: {
        constant_load: {
            executor: 'constant-vus', // ใช้จำนวนผู้ใช้งานคงที่
            vus: 20,                 // จำนวนผู้ใช้งาน 20 คน
            duration: '2m',          // รันเป็นเวลา 2 นาที
        },
        ramping_load: {
            executor: 'ramping-vus', // เพิ่มผู้ใช้งานแบบค่อยๆ เพิ่ม
            startVUs: 0,             // เริ่มต้นที่ 0 ผู้ใช้งาน
            stages: [
                { duration: '1m', target: 10 }, // เพิ่มเป็น 10 ใน 1 นาที
                { duration: '2m', target: 50 }, // เพิ่มเป็น 50 ใน 2 นาที
                { duration: '1m', target: 0 },  // ลดลงเหลือ 0 ใน 1 นาที
            ],
        },
    },
};

export default function () {
    http.get('https://test-api.k6.io');
    sleep(1);
}
