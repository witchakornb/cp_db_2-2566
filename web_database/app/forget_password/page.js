import Image from "next/image";
import Link from "next/link";
import styles from "./forget_password.css";

export default function Forget_password() {
  return (
    <>
      <head>
        <title>Forget Password</title>
      </head>
      <body>
        <div className="container">
          <div class="forget-password-box">
            <div class="box-1">
              <h3>กู้คืนรหัสผ่าน</h3>
            </div>
            <div className="box-2">
              <div class="input-box">
                <form action="#" method="post">
                  <label for="username">Email ที่ท่านได้ทำการลงทะเบียนไว้</label><br />
                  <input type="text" name="username" placeholder="กรอกที่อยู่อีเมลของท่าน" /><br />
                  <div className="btn-box">
                    <button type="submit">ส่งรหัสผ่านไปที่อีเมล</button>
                    <a href="/">ยกเลิก</a>
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
