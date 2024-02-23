import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <head>
        <title>Login</title>
      </head>
      <body>
        <div className="container">
          <h1 className="h1home">First page (login page)</h1>
          <div class="login-box">
            <div className="box-1">
              <Image className="img-logo"
                src="/logo3.png"
                width={120}
                height={100}
                alt="logo"
              />
            </div>
            <div className="box-2">
              <h2>ระบบบริหารร้านค้า</h2>
              <h4>กรอกชื่อผู้ใช้และรหัสผ่านเพื่อเข้าใช้ระบบ</h4>
              <div class="input-box">
                <form action="#" method="get">
                  <label for="username">ชื่อผู้ใช้งาน</label><br />
                  <input type="text" name="username" placeholder="กรอกชื่อผู้ใช้" /><br />
                  <label for="username">รหัสผ่าน</label><br />
                  <input type="text" name="username" placeholder="กรอกรหัสผ่าน" /><br />
                  <button type="submit">เข้าสู่ระบบ</button>
                </form>
                <Link href="/forget_password">ลืมรหัสผ่าน</Link>
              </div>
            </div>
          </div>
        </div>
      </body>

    </>
  );
}
