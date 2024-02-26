'use client';
import Image from "next/image";
import Link from "next/link";
import RootLayout from "./layout";
import styles from "./login.css";
// import axios from 'axios';

export default function Login() {
  const ooo = async () => {
    // Get username and password values from input elements
    const username = document.querySelector('input[name=username]').value;
    const password = document.querySelector('input[name=password]').value;
    console.log(username);
    console.log(password);
    alert("ggggggggggggg")
    console.log(process.env.NEXT_PUBLIC_IP);
    const response = await axios.post(`${process.env.NEXT_PUBLIC_IP}/login`,
      {
        username: username,
        password: password,
      }, {
      withCredentials: true
    });
    console.log(response.data);
    alert("iiiiiiiiiiiii")
  };

  return (
    <>
      <head>
        <title>Login</title>
        <link rel="icon" type="image/x-icon" href="/logo3.png" />
      </head>
      <body>
        <div className="container">
          <div className="login-box">
            <div className="box-1">
              <img className="img-logo" src="/logo3.png" width={120} height={100} alt="logo" />
            </div>
            <div className="box-2">
              <h2>ระบบบริหารร้านค้า</h2>
              <h4>กรอกชื่อผู้ใช้และรหัสผ่านเพื่อเข้าใช้ระบบ</h4>
              <div className="input-box">
                <label for="username">ชื่อผู้ใช้งาน</label><br />
                <input type="text" name="username" placeholder="กรอกชื่อผู้ใช้" /><br />
                <label for="password">รหัสผ่าน</label><br />
                <input type="password" name="password" placeholder="กรอกรหัสผ่าน" /><br />
                <button type="submit" href="/sale" onClick={ooo}>เข้าสู่ระบบ</button>
                <br />
                <div class="forget_btn">
                  <a href="/forget_password">ลืมรหัสผ่าน</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
