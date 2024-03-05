'use client';
import axios from "axios";
import { useRouter } from 'next/navigation'
import './login.css'
import Swal from 'sweetalert2'


export default function Login() {
  const Swal = require('sweetalert2')
  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const username_form = formData.get('username')
    const password_form = formData.get('password')
    const payload = new URLSearchParams({
      username: username_form,
      password: password_form
    });
    try {
      const response = await axios.post('http://10.48.104.125:8080/login', payload, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "เข้าสู่ระบบสำเร็จ",
          showConfirmButton: false,
          timer: 1500
        });
        router.push('/sale')
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "เข้าสู่ระบบไม่สำเร็จ",
        text: "กรุณากรอกชื่อผู้ใช้และรหัสผ่านให้ถูกต้อง"
      });
    }
  }
  return (
    <>
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
