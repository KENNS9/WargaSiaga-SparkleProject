import { useState } from "react";
import { BiXCircle } from "react-icons/bi";

const iuranData = [
  {
    name: "Bapak Aji",
    w1: "Lunas",
    w2: "Lunas",
    w3: "Lunas",
    w4: "Belum",
  },
  {
    name: "Haji Miing",
    w1: "Lunas",
    w2: "Lunas",
    w3: "Lunas",
    w4: "Belum",
  },
  {
    name: "Bapak Aji",
    w1: "Lunas",
    w2: "Lunas",
    w3: "Lunas",
    w4: "Belum",
  },
  {
    name: "Dandi",
    w1: "Lunas",
    w2: "Lunas",
    w3: "Lunas",
    w4: "Belum",
  },
];

// eslint-disable-next-line react/prop-types
const Status = ({ status }) => {
  if (status === "Lunas") {
    return (
      <div className="bg-primary-tint-4 text-[#2E7D31] rounded-md flex items-center justify-center text-sm py-2 w-fit px-8 mx-auto">
        <div className="text-body-medium-20">Lunas</div>
      </div>
    );
  } else if (status === "Belum") {
    return (
      <div className="bg-[#FFCBCA] text-[#E53835] rounded-md flex items-center justify-center text-sm py-2 w-fit px-8 mx-auto">
        <div className="text-body-medium-20">Belum</div>
      </div>
    );
  }
};

export const Iuran = () => {
  const [selectedPayment, setSelectedPayment] = useState("")

  return (
    <div className="">
      <div className="iuran-table border border-netral-grey !rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
              <th className="bg-primary-tint-3 border border-netral-l-grey/40">
                September
              </th>
              <th className="bg-primary-tint-3 border border-netral-l-grey/40">
                Minggu 1
              </th>
              <th className="bg-primary-tint-3 border border-netral-l-grey/40">
                Minggu 2
              </th>
              <th className="bg-primary-tint-3 border border-netral-l-grey/40">
                Minggu 3
              </th>
              <th className="bg-primary-tint-3 border border-netral-l-grey/40">
                Minggu 4
              </th>
            </tr>
          </thead>
          <tbody>
            {iuranData.map((data, index) => (
              <tr key={index}>
                <td className="text-center border border-netral-l-grey/40 px-4 py-3">
                  {data.name}
                </td>
                <td className="text-center border border-netral-l-grey/40 px-4 py-3">
                  <Status status={data.w1} />
                </td>
                <td className="text-center border border-netral-l-grey/40 px-4 py-3">
                  <Status status={data.w2} />
                </td>
                <td className="text-center border border-netral-l-grey/40 px-4 py-3">
                  <Status status={data.w3} />
                </td>
                <td className="text-center border border-netral-l-grey/40 px-4 py-3">
                  <Status status={data.w4} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 bg-white rounded-lg px-6 py-4 grid grid-cols-2 gap-4">
        <div>
          <div>Metode Pembayaran</div>
          <div className="mt-4 space-y-4">
            <button className="flex items-center gap-2 rounded-md bg-gray-100 p-3 w-full justify-between">
              <img onClick={() => setSelectedPayment('gopay')} src="/images/gopay.png" alt="" />
              { selectedPayment === 'gopay' && <button onClick={() => setSelectedPayment("")}><BiXCircle className="text-red-600"/></button>}
            </button>
            <button className="flex items-center gap-2 rounded-md bg-gray-100 p-3 w-full justify-between">
              <img onClick={() => setSelectedPayment('dana')} src="/images/dana.png" alt="" />
              { selectedPayment === 'dana' && <button onClick={() => setSelectedPayment("")}><BiXCircle className="text-red-600"/></button>}
            </button>
            <button className="flex items-center gap-2 rounded-md bg-gray-100 p-3 w-full justify-between">
              <img onClick={() => setSelectedPayment('qris')} src="/images/qris.png" alt="" />
              { selectedPayment === 'qris' && <button onClick={() => setSelectedPayment("")}><BiXCircle className="text-red-600"/></button>}
            </button>
          </div>
        </div>

        <div>
          <div>Detail Pembayaran</div>
          <div className="mt-4 bg-gray-100">
            <div className="flex h-full items-center gap-2 rounded-md p-3 w-full justify-between">
              <div>Biaya Iuran</div>
              <div>Rp.5.000,-</div>
            </div>
            <div className="flex h-full items-center gap-2 rounded-md p-3 w-full justify-between">
              <div>Admin</div>
              <div>Rp.0,-</div>
            </div>
            <div className="flex h-full items-center gap-2 rounded-md p-3 w-full justify-between">
              <div>Total</div>
              <div>Rp.5.000,-</div>
            </div>
          </div>
          <div className="flex justify-end items-end w-full">
            <button className="mt-4 bg-primary-shade-3 text-white text-body-medium-13 px-20 py-3 rounded-md w-fit">
              Bayar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
