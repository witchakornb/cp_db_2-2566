import Image from "next/image";
import Link from "next/link";
import styles from "./confirm_bill_cancellation.css";

export default function confirmBillCancellation() {
  let bill_number = "B000001";

  return (
    <>
      <head>
        <title>Confirm Bill Cancellation</title>
      </head>
      <body className="">
        <div className="flex items-center justify-center h-screen">
          <div className="border border-gray-300 w-96 h-auto text-center p-8 rounded-lg shadow-md">
            <div>
              <img src="/warning_yellow.png" alt="alert icon" className="w-40 mx-auto" />
            </div>
            <div className="mt-4">
              <h3 className="font-bold">คุณต้องการยกเลิกบิลนี้ใช่หรือไม่ ?</h3>
              <p>เลขที่บิล : {bill_number}</p>
              <p>ระบุหมายเหตุการยกเลิก</p>
            </div>
            <div>
              <form action="#" method="post" className="mt-4">
                <input type="text" name="cancellation_note" placeholder="หมายเหตุ" className="w-full px-2 py-1 border border-gray-300 rounded-md" /><br />
                <div className="flex justify-center mt-4">
                  <button type="submit" className="btn-submit w-16 mr-4 px-3 py-2 bg-green-500 rounded text-white">ยืนยัน</button>
                  <a href="/sale_history" className="btn-cancel w-16 px-3 py-2 bg-gray-300 rounded">ยกเลิก</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </body>
    </>

  );
}
