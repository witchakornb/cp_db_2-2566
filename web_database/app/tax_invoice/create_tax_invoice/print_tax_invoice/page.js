import Image from "next/image";
import Link from "next/link";

export default function PrintTaxInvoice() {
  return (
    <>
      <head>
        <title>Print Tax Invoice</title>
      </head>
      <body>
        <div className="">
          <div className="head">
            <h3>ใบเสร็จรับเงิน / ใบกำกับภาษี </h3>
          </div>
          <div className="box-1">
            <div className="box-1-l">

            </div>
            <div className="box-1-r">

            </div>
          </div>
          <div className="box-2">
            <table>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          <div className="box-3">
            <table>
              <div className="table-1">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <div className="item-product">
                    <tr>

                    </tr>
                  </div>
                  <div className="sum">
                    <tr>

                    </tr>
                  </div>
                </tbody>
              </div>
              <div className="table-2">

              </div>

            </table>
          </div>
        </div>
      </body>
    </>
  );
}
