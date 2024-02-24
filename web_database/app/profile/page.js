import Image from "next/image";
import Link from "next/link";
import styles from "./profile.css";
//test by pond pond

export default function Profile() {
   // let employeeId = document.getElementById('employee-id');
   
   
   return (
      <>
         <head>
            <title>Profile</title>
         </head>
         <body>
            <div className="container">
               <div class="profile-box">
                  <div class="box-1">
                     <h3>ข้อมูลผู้ใช้</h3>
                     <a className="btn-close" href="./sale">&#10006;</a>
                  </div>
                  <div className="box-2">
                     <div class="img-box">
                        <img src="./logo.jpg" alt="profile image" />
                     </div>
                     <div class="profile-detail">
                        <div class="text-1">
                           <label for="employee-id">รหัสพนักงาน</label><br/>
                           <input id="employee-id" type="text" name="employee-id" disabled />
                        </div>
                        <div class="text-2">
                           <div>
                              <label for="first-name">ชื่อ</label><br/>
                              <input id="first-name" type="text" name="first-name" disabled />
                           </div>
                           <div>
                              <label for="last-name">นามสกุล</label><br/>
                              <input id="last-name" type="text" name="last-name" disabled />
                           </div>
                        </div>
                        <div class="text-2">
                           <div>
                              <label for="username">ชื่อผู้ใช้</label><br/>
                              <input id="username" type="text" name="username" disabled />
                           </div>
                           <div>
                              <label for="role">สิทธิ์</label><br/>
                              <input id="role" type="text" name="role" disabled />
                           </div>
                        </div>
                        <div class="text-2">
                           <div>
                              <label for="email">อีเมล</label><br/>
                              <input id="email" type="text" name="email" disabled />
                           </div>
                           <div>
                              <label for="phone-number">เบอร์โทร</label><br/>
                              <input id="phone-number" type="text" name="phone-number" disabled />
                           </div>
                        </div>
                     </div>
                     <a href="./sale">ตกลง</a>
                  </div>
               </div>

            </div>
         </body>
      </>
   );
}
