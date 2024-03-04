'use client';
import axios from "axios";
// import axios from 'axios';
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";
import RootLayout from "./layout";
import styles from "./login.css";

export default function Login() {
  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const username = formData.get('username')
    const password = formData.get('password')
    console.log(username + " " + password);
    const response = await fetch('http://10.62.58.160:8080/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
    console.log(response);
    if (response.ok) {
      router.push('/sale')
    } else {
      alert('Login failed!')
    }
  }
  return (
    <>
      <head>
        <title>Login</title>
        <link rel="icon" type="image/x-icon" href="/logo3.png" />
      </head>
      <body>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="login-box">
              <div className="box-1">
                <img className="img-logo" src="/logo3.png" width={120} height={100} alt="logo" />
              </div>
              <div className="box-2">
                <h2>ระบบบริหารร้านค้า</h2>
                <h4>กรอกชื่อผู้ใช้และรหัสผ่านเพื่อเข้าใช้ระบบ</h4>
                <div className="input-box">
                  <label htmlFor="username">ชื่อผู้ใช้งาน</label><br />
                  <input type="text" name="username" placeholder="กรอกชื่อผู้ใช้" /><br />
                  <label htmlFor="password">รหัสผ่าน</label><br />
                  <input type="password" name="password" placeholder="กรอกรหัสผ่าน" /><br />
                  <button type="submit">เข้าสู่ระบบ</button>
                  <br />
                  <div className="forget_btn">
                    <a href="/forget_password">ลืมรหัสผ่าน</a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </body>
    </>
  );
}
