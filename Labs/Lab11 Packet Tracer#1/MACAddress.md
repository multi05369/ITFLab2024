# MAC Address (Medium Access Control) 💻

#### MAC Address (Medium Access Control Address) เป็นหมายเลขที่มีความสำคัญในระบบเครือข่าย โดยเป็นหมายเลขเฉพาะสำหรับอุปกรณ์ที่เชื่อมต่อกับเครือข่ายในระดับล่างสุดของโมเดลการสื่อสาร OSI (Open Systems Interconnection model) โดยเฉพาะใน Layer 2 (Data Link Layer) ซึ่ง MAC Address นี้ถูกฝังอยู่ในอุปกรณ์เครือข่าย เช่น การ์ดเครือข่าย (Network Interface Card, NIC) หรือ Router โดยจะไม่ซ้ำกันในแต่ละอุปกรณ์

## ลักษณะของ MAC Address

- **ความยาว:** MAC Address มีความยาว 48 บิต หรือ 6 ไบต์ ซึ่งโดยทั่วไปจะแสดงเป็นเลขฐานสิบหก (Hexadecimal) แบ่งออกเป็น 6 ชุด แต่ละชุดมี 2 หลัก เช่น 00:1A:2B:3C:4D:5E
  - **แบ่งออกเป็น 2 ส่วน:**
    - ส่วนแรก (24 บิตแรก) เรียกว่า **Organizationally Unique Identifier (OUI)** ซึ่งเป็นหมายเลขที่กำหนดโดย IEEE ให้กับผู้ผลิตอุปกรณ์
    - ส่วนที่สอง (24 บิตหลัง) เป็นหมายเลขเฉพาะที่กำหนดโดยผู้ผลิตอุปกรณ์ เพื่อให้แน่ใจว่า MAC Address ของอุปกรณ์แต่ละตัวจะไม่ซ้ำกัน
- **การทำงานของ MAC Address:** ใช้ในระดับการสื่อสารในเครือข่ายท้องถิ่น (Local Area Network หรือ LAN) เพื่อให้ข้อมูลสามารถส่งถึงอุปกรณ์ที่ต้องการได้อย่างถูกต้องภายในเครือข่ายเดียวกัน

- **ความแตกต่างจาก IP Address:**
  - **MAC Address เป็นถาวร:** ไม่สามารถเปลี่ยนแปลงได้ง่าย เนื่องจากถูกกำหนดมาโดยผู้ผลิตในระดับฮาร์ดแวร์
  - **IP Address เป็นแบบชั่วคราว:** สามารถเปลี่ยนแปลงได้ตามการเชื่อมต่อเครือข่ายใหม่ ๆ ขึ้นอยู่กับการกำหนดค่าในระดับซอฟต์แวร์

- MAC Address ยังถูกใช้ในหลายกรณี เช่น การกรองอุปกรณ์ที่จะเชื่อมต่อกับเครือข่าย (MAC Address filtering) และการควบคุมการเข้าถึงในเครือข่าย Wi-Fi

## References
- https://standards.ieee.org/products-services/regauth/index.html
- https://www.cisco.com/c/en/us/support/docs/ios-nx-os-software/ios-software-releases-12-2-mainline/15172-mac-address.html
- https://ieeexplore.ieee.org/browse/standards/get-program/page/series?id=68
