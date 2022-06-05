import { signOut } from "next-auth/react";

import toast, { Toaster } from "react-hot-toast";
import { TDSPaymentsDTO, TDSPayments } from "../components/types";
import Image from "next/image";
import { useState } from "react";

export default function stats() {
  const [tdsPayment, setTdsPayment] = useState({} as TDSPaymentsDTO);

  const onSubmit = () => {
    toast.success("TDS Payment Added!");
  };

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            minHeight: "2px",
            background: "#2B2929",
            color: "#fff",
          },

          iconTheme: {
            primary: "#C0FF0D",
            secondary: "#1E1E1E",
          },
        }}
      />
      <div className="flex justify-between ">
        <h1 className="pb-3 text-xl font-bold uppercase tracking-wide text-[#90BF0A]">
          Add TDS Report
        </h1>
        <button onClick={() => signOut()} className="pb-1">
          <Image src="/images/user.svg" height={25} width={25} />
        </button>
      </div>
      <section className="rounded-md bg-[#1E1E1E] p-3 font-medium text-white">
        <div>
          <div className="flex items-center justify-between py-2">
            <label className="text-base">Paid Month</label>
            <div className="input-details">
              <input
                className="w-full rounded-full bg-[#C4C4C4] pl-1 outline-none"
                type="month"
                id="paidMonth"
                value={tdsPayment.paidMonth || ""}
                onChange={(e: any) =>
                  setTdsPayment({
                    ...tdsPayment,
                    paidMonth: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex items-center justify-between py-2">
            <label className="text-base">Amount Paid</label>
            <div className="input-details">
              <input
                type="number"
                id="amount"
                inputMode="decimal"
                value={tdsPayment.amount || ""}
                onChange={(e: any) =>
                  setTdsPayment({
                    ...tdsPayment,
                    amount: e.target.value,
                  })
                }
              />
              ₹
            </div>
          </div>
          <div className="flex items-center justify-between py-2">
            <label className="text-base">Paid On</label>
            <div className="input-details">
              <input
                type="date"
                id="paidOn"
                value={tdsPayment.paidOn || ""}
                onChange={(e: any) =>
                  setTdsPayment({
                    ...tdsPayment,
                    paidOn: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex justify-center py-2">
            <button
              onClick={onSubmit}
              className="w-1/2 rounded-md bg-[#C0FF0D]/75 py-1 font-semibold text-black"
            >
              Add Tax
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
