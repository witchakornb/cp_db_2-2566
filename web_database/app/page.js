import Image from "next/image";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar/>
        <h1>Home page</h1>
      </div>
    </>
  );
}
