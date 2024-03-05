import Image from "next/image";
// import Link from "next/link";
import styles from "./sale_out.css";

export default function SaleOut() {
  return (
    <>
      <head>
        <title>Product Out Of Stock</title>
      </head>
      <body>
        <div className="flex items-center justify-center h-screen bg-opacity-20 bg-white">
          <div className="border border-gray-300 w-96 h-76 text-center p-8 rounded-lg shadow-md">
            <div>
              <img src="../warning_yellow.png" alt="alert icon" className="w-40 mx-auto" />
            </div>
            <div className="mt-2 text-center">
              <h3>สินค้าหมด กรุณาตรวจสอบบริหารสต็อก</h3>
            </div>
            <div className="mt-5">
                <a href="../sale" className="btn bg-green-500 px-3 py-2 rounded text-white">ตกลง</a>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
