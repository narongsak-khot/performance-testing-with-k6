//การใช้ Stages
//กำหนดขั้นตอน (Stages) เพื่อเพิ่ม/ลดจำนวนผู้ใช้งานเสมือนตามเวลา:

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 10 }, // เพิ่มผู้ใช้งานเสมือนเป็น 10 คนใน 1 นาที
        { duration: '2m', target: 20 }, // เพิ่มเป็น 20 คนใน 2 นาที
        { duration: '1m', target: 0 },  // ลดลงเหลือ 0 คนใน 1 นาที
    ],
};

export default function () {
    http.get('https://test-api.k6.io');
    sleep(1);
}
