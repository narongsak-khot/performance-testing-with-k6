//การตั้งค่าพื้นฐาน
//การกำหนดจำนวนผู้ใช้งานเสมือน (vus) และระยะเวลาทดสอบ (duration):

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    vus: 50, // จำนวนผู้ใช้งานเสมือน 10 คน
    duration: '30s', // ระยะเวลาทดสอบ 30 วินาที
};

export default function () {
    http.get('https://test-api.k6.io');
}
