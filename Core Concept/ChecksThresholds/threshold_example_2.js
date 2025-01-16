//Thresholds สำหรับ Custom Metrics

import http from 'k6/http';
import { Counter } from 'k6/metrics';

// สร้าง Custom Metric
let customErrorCount = new Counter('custom_errors');

export let options = {
  thresholds: {
    // Threshold สำหรับ Custom Metric: ต้องไม่เกิน 10 ข้อผิดพลาด
    custom_errors: ['count<10'],
  },
};

export default function () {
  let res = http.get('https://test-api.k6.io/public/crocodiles/');

  // เพิ่มจำนวนข้อผิดพลาดใน Custom Metric หากสถานะไม่ใช่ 200
  if (res.status !== 200) {
    customErrorCount.add(1);
  }
}
