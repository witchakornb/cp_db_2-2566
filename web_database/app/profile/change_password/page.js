import Image from "next/image";
import Link from "next/link";
import styles from "./change_password.css";
export default function Sell() {
  return (
    <>
      <head>
        <title>Change password</title>
      </head>
      <body>
      <div className="container">
          <div class="change-password-box">
            <div class="box-1">
              <h3>เปลี่ยนรหัสผ่าน</h3>
            </div>
            <div className="box-2">
              <div class="input-box">
                <form action="#" method="post">
                  <label for="old_password">รหัสผ่านเดิม</label><br />
                  <input type="text" name="old_password" placeholder="กรอกรหัสผ่านเดิมของท่าน" /><br />
                  <label for="new_password">รหัสผ่านใหม่</label><br />
                  <input type="text" name="new_password" placeholder="กรอกรหัสผ่านใหม่" /><br />
                  <label for="confirm_password">ยืนยันรหัสผ่านใหม่</label><br />
                  <input type="text" name="confirm_password" placeholder="กรอกรหัสผ่านใหม่อีกครั้ง" /><br />
                  <div className="btn-box">
                    <button type="submit" href="/sale">ยืนยัน</button>
                    <a href="/sale">ยกเลิก</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
