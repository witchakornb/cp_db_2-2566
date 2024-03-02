import React from 'react';
function Modal({ itemId }) {
    let bill_number = "B000001";

    return (
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center">
            <div className="flex items-center justify-center">
                <div className="box-alert block bg-white px-12 py-10 rounded-lg">
                    <div className=' flex justify-center'>
                        <img src="/warning_yellow.png" alt="alert icon" className='w-40' />
                    </div>
                    <div className='text-center'>
                        <h3 className='mt-2'>คุณต้องการยกเลิกบิลนี้ใช่หรือไม่ ?</h3>
                        <p className='mt-2'>
                            เลขที่บิล : {itemId}
                        </p>
                        <p className='mt-2'>
                            ระบุหมายเหตุการยกเลิก
                        </p>
                    </div>
                    <div className='mt-2'>
                        <form action="#" method="post">
                            <input className='border-2 border-slate-200 px-2 py-1 rounded-sm' type="text" name="cancellation_note" placeholder="หมายเหตุ" /><br />
                            <div className="btn-box flex justify-center mt-4">
                                <button type="submit" className='bg-green-500 rounded-md px-3 py-1 '>ยืนยัน</button>
                                <a href="/sale_history" className='bg-slate-200 rounded-md px-3 py-1 ms-3'>ยกเลิก</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal