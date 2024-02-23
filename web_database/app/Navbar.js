import styles from "../styles/Navbar.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className='styles.container'>
        <div>
          <h1 className='logo'>Navbar</h1>
          <div>
            <Link href="/">ไปหน้า Home</Link>
            <Link href="/">ไปหน้า Home</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}