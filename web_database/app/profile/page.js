'use client'
import Image from "next/image";
import Link from "next/link";
import styles from "./profile.css";

// import Document from "next/document";

export default function Profile() {
   let employeeId = "ไอดีจ้า";
   let firstName = "ชื่อจ้า";
   let lastName = "นามสกุลจ้า";
   let username = "ชื่อผู้ใช้จ้า";
   let role = "สิทธิ์จ้า";
   let email = "อีเมลจ้า";
   let phone = "เบอร์โทรจ้า";

   return (
      <>
         <head>
            <title>Profile</title>
         </head>
         <body>
            <div className="container">
               <div className="profile-box">
                  <div class="box-1">
                     <h3>ข้อมูลผู้ใช้</h3>
                     <a className="btn-close" href="/sale">&#10006;</a>
                  </div>
                  <div className="box-2">
                     <div className="img-box">
                        <img src="./logo.jpg" alt="profile image" />
                     </div>
                     <div className="profile-detail">
                        <div className="text-1">
                           <label for="employee-id">รหัสพนักงาน</label><br />
                           <input id="employee-id" type="text" name="employee-id" value={employeeId} disabled />
                        </div>
                        <div className="text-2">
                           <div>
                              <label for="first-name">ชื่อ</label><br />
                              <input id="first-name" type="text" name="first-name" value={firstName} disabled />
                           </div>
                           <div>
                              <label for="last-name">นามสกุล</label><br />
                              <input id="last-name" type="text" name="last-name" value={lastName} disabled />
                           </div>
                        </div>
                        <div className="text-2">
                           <div>
                              <label for="username">ชื่อผู้ใช้</label><br />
                              <input id="username" type="text" name="username" value={username} disabled />
                           </div>
                           <div>
                              <label for="role">ตำแหน่ง</label><br />
                              <input id="role" type="text" name="role" value={role} disabled />
                           </div>
                        </div>
                        <div className="text-2">
                           <div>
                              <label for="email">อีเมล</label><br />
                              <input id="email" type="text" name="email" value={email} disabled />
                           </div>
                           <div>
                              <label for="phone-number">เบอร์โทร</label><br />
                              <input id="phone-number" type="text" name="phone-number" value={phone} disabled />
                           </div>
                        </div>
                        <div className="btn">
                           <a href="./sale">ตกลง</a>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </body>
      </>
   );
}
