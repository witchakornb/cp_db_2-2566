import Image from "next/image";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Login() {
  return (
    <div className="container">
      <h1 className="h1home">Home page (login page)</h1>
      <div class="login-box">
        <div className="box-1">
          <Image className="img-logo"
            src="/logo.jpg"
            width={100}
            height={100}
            alt="logo"
          />
        </div>
        <div className="box-2">
          <h2>ระบบบริหารร้านค้า</h2>
          <h4>กรอกชื่อผู้ใช้และรหัสผ่านเพื่อเข้าใช้ระบบ</h4>
          <div class="input-box">
            <form action="">
            <label for=""></label>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
