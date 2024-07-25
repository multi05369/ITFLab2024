# Week 4 Git :octocat:

#### Git เป็น Version control ที่ทรงพลังที่ Dev ทั่วโลกใช้เพื่อติดตามการเปลี่ยนแปลงในโค้ดและทำงานร่วมกันใน Project คู่มือนี้จะแนะนำน้อง ๆ ให้รู้จักกับแนวคิดพื้นฐานและคำสั่งพื้นฐานของ Git ช่วยให้เริ่มต้นใช้งาน Version control ได้ง่ายยิ่งขึ้น
## Git คืออะไร?
ให้น้อง ๆ ลองนึกภาพของเครื่อง time machine ในการทำงานโค้ดของเราซึ่งมันจะช่วยให้น้อง ๆ สามารถที่จะ
- ติดตามการเปลี่ยนแปลง: บันทึกการแก้ไขทุกครั้งที่ทำการแก้ไขกับไฟล์งาน
- ย้อนกลับไปยังเวอร์ชันก่อนหน้า: แก้ไขข้อผิดพลาดหรือย้อนกลับไปยังโค้ดก่อนหน้าที่จะเกิดปัญหา
- การทำงานร่วมกันสามารถทำได้ง่าย: สามารถทำงานร่วมกันกับเพื่อนได้ และเพื่อนก็ยังแก้ไขงานได้อีกด้วย

## Getting Started
1. ติดตั้ง Git: ดาวน์โหลดและติดตั้ง Git สำหรับระบบปฏิบัติการของน้อง ๆ จาก https://git-scm.com/downloads
2. Set up ค่าเริ่มต้นต่าง ๆ เช่น username email
   ```git
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```
3. สร้าง Git repository
   ```git
   mkdir my-project
   cd my-project
   git init
   ```
   ##### *ซึ่งอันนี้เป็นการสร้าง repository บนเครื่องของน้อง ๆ เอง แต่สามารถทำได้อีกวิธีโดยการ สร้างไว้ก่อนบน Github แล้ว clone มาลงนั่นเอง*

## Basic Commands
  - git status: แสดงสถานะปัจจุบันของที่เก็บข้อมูล แสดงไฟล์ที่ติดตาม เปลี่ยนแปลง หรือเตรียมไว้
  - git add <ชื่อไฟล์>: เพิ่มไฟล์ที่แก้ไขหรือสร้างใหม่เข้าไปใน staging area
    
    วิธีการใช้
    ```git
    git add <ชื่อไฟล์หรือโฟลเดอร์>
    ```
    หรือ
    ```git
    git add .
    ```
    เพื่อเพิ่มไฟล์ทั้งหมดในโฟลเดอร์ปัจจุบัน
  - git commit -m บันทึกการเปลี่ยนแปลงที่อยู่ใน staging area ลงใน Git repository
    
    วิธีการใช้
    ```git
    git commit -m "ข้อความบันทึกการเปลี่ยนแปลง"
    ```
  - git log: แสดงประวัติคำสั่งต่าง ๆ ที่เคยใช้
    
    วิธีการใช้
    ```git
    git log
    ```
    หรือ
    ```git
    git log --author="Your Name"
    ```
    เพื่อดูเฉพาะ commit ที่ทำโดยผู้เขียนคนหนึ่ง
  - git push: ส่งการเปลี่ยนแปลงที่น้อง ๆ commit ในเครื่องของน้องไปยัง remote repository (Github)
    ```git
    git push
    ```
  - git diff: แสดงความแตกต่างระหว่างสถานะปัจจุบันของไฟล์ของน้อง ๆ กับหาร commit ก่อนหน้า
  - git remote: จัดการการเชื่อมต่อกับ remote repositories
    
    วิธีการใช้
    ดูรายการ remote repositories ที่เชื่อมต่อ:
    ```git
    git remote -v
    ```
    เพิ่ม remote repository ใหม่:
    ```git
    git remote add origin <URL ของ remote repository>
    ```
    ลบ remote repository:
    ```git
    git remote remove <ชื่อของ remote repository>
    ```

## Resources
  - Official Git documentation: https://git-scm.com/doc
  - Interactive Git tutorial: https://learngitbranching.js.org/

Made by <a href="https://github.com/multi05369">multi05369</a>

Follow me in every day <a href="https://www.instagram.com/ntp.taikie/">IG</a>
