import Image from "next/image";
import Link from "next/link";
import styles from "./success_charge.css";

export default function SuccessMoney() {
  let pay_back = 1.50;

  return (
    <>
      <head>
        <title>Success Charge</title>
      </head>
      <body className="">
        <div className="flex items-center justify-center h-screen">
          <div className="border border-gray-300 w-96 h-76 text-center p-8 rounded-lg shadow-md">
            <div>
              <img src="/accept.png" alt="alert icon" className="w-36 mx-auto" />
            </div>
            <div className="mt-4 font-bold">
              <h3>ทำรายการสำเร็จ</h3>
              <h4>เงินทอน {pay_back} บาท</h4>
            </div>
            <div className="flex justify-between px-6 mt-6">
              <a href="/sale" className="end-btn flex px-2 py-1 border border-solid rounded">
                <span><img src="/accept.png" alt="icon" className="w-4 h-4 mr-1 mt-1" /> </span>จบการขาย
              </a>
              <a href="/sale_history/bill_detail/receipt" className="print-btn flex px-2 py-1 border border-solid rounded">
                <span><img src="/printer.png" alt="icon" className="w-4 h-4 mr-1 mt-1" /> </span>พิมพ์ใบเสร็จ
              </a>
            </div>
          </div>
        </div>
      </body>
    </>


  );
}
