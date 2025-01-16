# k6 Command Reference

คู่มือฉบับนี้รวบรวมคำสั่งพื้นฐานของ **k6** และวิธีการใช้งาน k6 ซึ่งเป็นเครื่องมือโอเพนซอร์สสำหรับการทดสอบโหลดและประสิทธิภาพของระบบ

---

## **การติดตั้ง (Installation)**

ก่อนใช้งาน k6 ให้ตรวจสอบว่าติดตั้งโปรแกรมเรียบร้อยแล้ว สามารถติดตั้งได้ดังนี้:

### **Homebrew (macOS และ Linux)**
```bash
brew install k6
```

### **การใช้ไฟล์ Binary สำเร็จรูป**
1. ดาวน์โหลดเวอร์ชันล่าสุดจาก [k6 GitHub Releases](https://github.com/grafana/k6/releases)
2. แตกไฟล์และเพิ่มใน PATH ของระบบ

### **การใช้ Docker**
```bash
docker run -i grafana/k6 run - <script.js
```

---

## **การรันการทดสอบ (Running a Test)**

### **คำสั่งพื้นฐาน**
รันสคริปต์ทดสอบ:
```bash
k6 run script.js
```

### **รันพร้อมตัวเลือกเฉพาะ**
```bash
k6 run --vus 10 --duration 30s script.js
```
- `--vus`: จำนวนผู้ใช้งานจำลอง (Virtual Users)
- `--duration`: ระยะเวลาที่ทำการทดสอบ

### **รันในพื้นหลัง**
```bash
k6 run --out json=output.json script.js
```
- ใช้ `--out` เพื่อส่งออกผลลัพธ์ในรูปแบบ JSON

---

## **ตัวเลือกของ k6 (k6 Options)**

### **ตัวเลือกการรันการทดสอบ**
- `--vus`: จำนวนผู้ใช้งานจำลอง
- `--duration`: ระยะเวลาทดสอบ เช่น `30s`, `5m`
- `--iterations`: จำนวนรอบที่ต้องการรันทั้งหมด

### **ตัวเลือกการส่งออกผลลัพธ์**
- `--out <output>`: ระบุรูปแบบผลลัพธ์ (เช่น `json`, `influxdb`, `cloud`)

ตัวอย่าง:
```bash
k6 run --out influxdb=http://localhost:8086/k6 script.js
```

### **Thresholds และการหยุดทดสอบ**
- `--throw`: หยุดการทดสอบทันทีเมื่อเกิดข้อผิดพลาด
- `--no-thresholds`: ปิดการใช้งาน Thresholds

### **สถานการณ์และการตั้งค่าขั้นสูง**
ใช้ไฟล์ `JSON` สำหรับสถานการณ์ที่ซับซ้อน:
```bash
k6 run --config test-config.json script.js
```

---

## **การทำงานกับสคริปต์ (Working with Scripts)**

### **การบันทึกสคริปต์**
1. ใช้ส่วนขยาย k6 Browser Recorder
2. ส่งออกและแก้ไขสคริปต์ตามต้องการ

### **การแปลงไฟล์ HAR**
แปลงไฟล์ HAR เป็นสคริปต์ k6:
```bash

npm install -g har-to-k6
har-to-k6 myfile.har -o loadtest.js
```

---

## **การดูผลลัพธ์การทดสอบ (Viewing Test Results)**

### **ผลลัพธ์เริ่มต้น**
เมื่อรันการทดสอบ k6 จะแสดงผลลัพธ์ในเทอร์มินัล:
- `iterations`: จำนวนรอบที่รัน
- `http_req_duration`: ค่า Response Time
- `http_req_failed`: เปอร์เซ็นต์คำร้องที่ล้มเหลว

### **การส่งออกผลลัพธ์**
- ส่งออกเป็น JSON:
  ```bash
  k6 run --out json=results.json script.js
  ```
- ส่งออกไปยัง InfluxDB:
  ```bash
  k6 run --out influxdb=http://localhost:8086/k6 script.js
  ```

---

## **คำสั่งที่มีประโยชน์ (Useful Commands)**

### **Dry Run**
ตรวจสอบข้อผิดพลาดในสคริปต์โดยไม่รันการทดสอบ:
```bash
k6 inspect script.js
```

### **รันหลายสถานการณ์พร้อมกัน**
```bash
k6 run --config scenarios.json script.js
```

### **การดีบัก**
รันในโหมดดีบักเพื่อดูข้อมูลเพิ่มเติม:
```bash
k6 run --http-debug script.js
```

---

## **ตัวอย่าง (Examples)**

### **สคริปต์ทดสอบง่ายๆ**
```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  let res = http.get('https://test-api.k6.io/public/crocodiles/');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
```

### **การรันสคริปต์**
```bash
k6 run --vus 10 --duration 30s script.js
```

---

## **ความช่วยเหลือและเอกสารอ้างอิง (Help and Documentation)**
สำหรับเอกสารเพิ่มเติม ใช้คำสั่งช่วยเหลือในตัวหรือเยี่ยมชม [เอกสารอย่างเป็นทางการ](https://k6.io/docs/):
```bash
k6 --help
k6 run --help
```

