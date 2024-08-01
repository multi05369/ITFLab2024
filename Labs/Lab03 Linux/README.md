# Week 3 Linux OS 💻

![Linux_Banner](https://github.com/user-attachments/assets/e09c8511-412e-47c7-bb21-eabd90b49ea2)


### Linux OS คืออะไร?
Linux OS เป็นระบบปฏิบัติการแบบโอเพ่นซอร์ส 
(Open Source) หมายความว่าทุกคนสามารถเข้าถึงรหัสต้นฉบับ 
(Source Code) แก้ไข ปรับปรุง และแจกจ่ายได้อย่างอิสระ ความยืดหยุ่นนี้ทำให้ 
Linux กลายเป็นระบบปฏิบัติการที่ได้รับความนิยมอย่างมาก ไม่ว่าจะเป็นบนเซิร์ฟเวอร์ 
คอมพิวเตอร์ตั้งโต๊ะ อุปกรณ์พกพา หรือแม้แต่อุปกรณ์ฝังตัว (Embedded System)

### Linux ทำงานอย่างไร?
ให้น้อง ๆ ลองนึกถึงบ้านหลังหนึ่ง Linux ก็เหมือนกับระบบการจัดการในบ้านทั้งหมด ภายในบ้านจะประกอบด้วย:

  1. <b>เคอร์เนล (Kernel):</b> เหมือนเป็นเสาหลัก และ ระบบประปา ไฟฟ้า ของบ้าน เคอร์เนลทำหน้าที่เป็นตัวกลางระหว่างฮาร์ดแวร์ 
(Hardware) และซอฟต์แวร์ (Software) จัดการทรัพยากรของระบบ เช่น หน่วยความจำ (RAM), หน่วยประมวลผลกลาง (CPU), 
อุปกรณ์ต่อพ่วง (Peripheral Devices) เพื่อให้โปรแกรมต่างๆ สามารถทำงานร่วมกันได้อย่างราบรื่น

  2. <b>ระบบไฟล์ (File System):</b> เหมือนห้องต่าง ๆ ภายในบ้าน Linux จะจัดเก็บข้อมูลในรูปแบบของไฟล์ (File) และไดเร็กทอรี (Directory) 
ระบบไฟล์เป็นวิธีการจัดระเบียบไฟล์เหล่านี้ เช่น การสร้างโฟลเดอร์ การกำหนดสิทธิ์การเข้าถึงไฟล์ (File Permissions) 
Linux มีระบบไฟล์ให้เลือกใช้หลากหลาย เช่น ext4, XFS, Btrfs เป็นต้น แต่ละระบบไฟล์มีข้อดีและข้อเสียที่แตกต่างกันไป

  3. <b>Shell:</b> เหมือนประตูบ้าน ที่พวกเราใช้สื่อสารกับระบบ Linux Shell คือโปรแกรมที่ทำหน้าที่เป็นตัวกลางระหว่างผู้ใช้กับเคอร์เนล 
โดยรับคำสั่ง (Command) จากผู้ใช้ แปลความหมาย และส่งคำสั่งไปยังเคอร์เนลเพื่อดำเนินการ ตัวอย่าง Shell ยอดนิยม เช่น Bash, Zsh, Fish เป็นต้น

## ความแตกต่างระหว่าง Linux, Windows, และ macOS

| Feature        | Linux                      | Windows                  | macOS                         |
|-------------------|----------------------------|--------------------------|------------------------------|
| Type            | โอเพนซอร์ส (Open Source)  | ปิดซอร์ส (Closed Source)| ปิดซอร์ส (Closed Source)     |
| Cost      | ฟรี                        | มีค่าลิขสิทธิ์           | มีค่าลิขสิทธิ์ (ติดมากับฮาร์ดแวร์) |
| Flexibility      | สูง ปรับแต่งได้หลากหลาย   | ต่ำกว่า Linux            | ต่ำกว่า Linux               |
| Security      | สูง มักมีการตรวจสอบรหัสอย่างละเอียด | ต่ำกว่า Linux | สูงกว่า Windows              |
| Hardware        | รองรับฮาร์ดแวร์ได้หลากหลาย | รองรับฮาร์ดแวร์ได้จำกัด | รองรับฮาร์ดแวร์ของ Apple เท่านั้น  |
| Usage        | บนเซิร์ฟเวอร์ อุปกรณ์พกพา อุปกรณ์ฝังตัว | คอมพิวเตอร์ตั้งโต๊ะ แล็ปท็อป | คอมพิวเตอร์ตั้งโต๊ะ แล็ปท็อป  |
| Interface      | หลากหลาย มีให้เลือกทั้งแบบ GUI และ CLI | GUI เป็นหลัก | GUI เป็นหลัก               |

## Linux Distributions ที่นิยมกัน
Distributions (Distros) คือชุดรวมของซอฟต์แวร์ต่าง ๆ ที่ทำงานบน Linux kernel Distro แต่ละตัวจะมีจุดเด่นและกลุ่มเป้าหมายแตกต่างกัน:

##### 1. Ubuntu: 

![Ubuntu_Desktop](https://github.com/user-attachments/assets/e09752bd-9a33-4203-a36a-3096f62073f8)


- เหมาะสำหรับผู้เริ่มต้น ใช้งานง่าย มีซอฟต์แวร์ให้เลือกมากมาย
- อินเตอร์เฟสสวยงาม ใช้งานง่าย
- คำสั่งเบื้องต้น:
    ```sh
    sudo apt-get update: Updates software sources
    sudo apt-get install <program_name>: Installs a program
    sudo apt-get remove <program_name>: Removes a program
    ```
##### 2. Debian:

![Debian_Desktop](https://github.com/user-attachments/assets/86545f4c-ea23-4166-80c8-a9925bd4be1f)


- เน้นเสถียรภาพและความปลอดภัยสูง เหมาะสำหรับเซิร์ฟเวอร์
- มีซอฟต์แวร์ให้เลือกจำนวนมาก
- คำสั่งเบื้องต้น:
    ```sh
    sudo apt-get update: Updates software sources
    sudo apt-get install <program_name>: Installs a program
    sudo apt-get remove <program_name>: Removes a program
    ```
##### 3. Fedora:

![Fedora_Desktop](https://github.com/user-attachments/assets/4023d968-6bab-429b-8f46-6a3a0a5bc870)


- เน้นความใหม่ มีเทคโนโลยีล่าสุด เหมาะสำหรับนักพัฒนา
- คำสั่งเบื้องต้น:
    ```sh
    sudo dnf update: Updates software sources
    sudo dnf install <program_name>: Installs a program
    sudo dnf remove <program_name>: Removes a program
    ```
##### 4. Arch Linux:

![Arch_Commandline](https://github.com/user-attachments/assets/ac180195-c0b6-48c5-94f6-2a481c10a690)


- เหมาะสำหรับผู้ใช้งานที่มีประสบการณ์ ต้องการปรับแต่งระบบได้ละเอียด
- เน้นความเรียบง่ายและซอฟต์แวร์ใหม่ล่าสุด
- คำสั่งเบื้องต้น:
    ```sh
    sudo pacman -Syu: Updates software sources
    sudo pacman -S <program_name>: Installs a program
    sudo pacman -Rs <program_name>: Removes a program
    ```
  *Arch Linux เป็น Linux Distro ที่เป็น commandline ทั้งหมด ถ้าต้องการ หน้า GUI ต้องลงเอง*

## คำสั่งเบื้องต้น (ใช้ได้กับ Linux ทุก Distro)
- การจัดการไฟล์และโฟลเดอร์:
  ```sh
  ls: Lists files and folders in the current directory
  cd <directory_name>: Changes the directory
  pwd: Shows the current directory
  mkdir <directory_name>: Creates a new directory
  rm <file_name>: Deletes a file
  cp <source_file> <destination_file>: Copies a file
  mv <source_file> <destination_file>: Moves a file
  ```
- การจัดการระบบ:
  ```sh
  sudo <command>: Runs a command as the administrator (root)
  shutdown -h now: Shuts down the computer immediately
  reboot: Restarts the computer
  ```
- การใช้งานทั่วไป:
  ```sh
  man <command>: Shows the manual page for a command
  clear: Clears the terminal screen
  ```

## สรุป
Linux OS เป็นระบบปฏิบัติการที่ทรงพลัง ยืดหยุ่น และปลอดภัย เหมาะสำหรับผู้ใช้งานทุกระดับ Distro ที่หลากหลาย 
ทำให้ Linux สามารถตอบสนองความต้องการของผู้ใช้ได้หลากหลายกลุ่ม ไม่ว่าจะเป็นผู้ใช้งานทั่วไป นักพัฒนา หรือผู้ดูแลระบบ 
การเรียนรู้ Linux จะเป็นการเปิดโลกทัศน์ใหม่ ๆ และเป็นประโยชน์ต่อการทำงานในอนาคตอย่างมาก

## แหล่งอ้างอิงเพิ่มเติม:
- <a href="https://www.linux.org/" target="_blank">https://www.linux.org/</a>
- <a href="https://www.gnu.org/" target="_blank">https://www.gnu.org/</a>
- <a href="https://opensource.com/" target="_blank">https://opensource.com/</a>

## แนะนำเพิ่มเติม:
-  <a href="https://www.youtube.com/@ITCountry" target="_blank">Youtube ที่ทำเกี่ยวกับ Linux</a>

Made by <a href="https://www.github.com/multi05369" target="_blank">multi05369</a>

Follow me in every day <a href="https://www.instagram.com/ntp.taikie/" target="_blank">IG</a>
