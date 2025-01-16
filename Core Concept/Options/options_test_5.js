//การจำกัด Requests Per Second (RPS)
//การจำกัดจำนวนคำขอต่อวินาที (RPS):

import http from 'k6/http';

export let options = {
    scenarios: {
        limited_rps: {
            executor: 'constant-arrival-rate', // ส่งคำขอแบบคงที่
            rate: 10,                          // 10 คำขอต่อวินาที
            timeUnit: '1s',
            duration: '1m',                    // รันเป็นเวลา 1 นาที
            preAllocatedVUs: 20,               // จองผู้ใช้งานเสมือนล่วงหน้า
            maxVUs: 50,                        // จำนวนผู้ใช้งานสูงสุด
        },
    },
};

export default function () {
    http.get('https://test-api.k6.io');
}
