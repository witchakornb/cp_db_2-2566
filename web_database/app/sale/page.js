import Image from "next/image";
import Link from "next/link";
// import Navbar from "../Navbar";
import Sidebar from "../test_sidebar/page";

export default function Sell() {
  return (
    <>
      <head>
        <title>Sale</title>
      </head>
      <body>
        {/* <Navbar/> */}
        <Sidebar/>
        <div className="container">
          <h1>sale</h1>
        </div>
      </body>
    </>
  );
}
