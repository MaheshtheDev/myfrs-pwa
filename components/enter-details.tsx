import { useRef, useState } from "react";
//import domtoimage from "dom-to-image";
//import { LoadDetails } from "../types";
//import toast, { Toaster } from "react-hot-toast";

export default function EnterDetails(props: { setLoadDetails: any }) {
  //  const [loadDetails, setLoadDetailsLocally] = useState({
  //    orderedDate: new Date().toISOString().split("T")[0],
  //    orderedPetrol: 0,
  //    orderedDiesel: 0,
  //    costOfPetrolKL: 0,
  //    costOfDieselKL: 0,
  //    sellingPriceOfPetrol: 0,
  //    sellingPriceOfDiesel: 0,
  //  } as LoadDetails);
  //  const onSubmit = (event: any) => {
  //    props.setLoadDetails(loadDetails);
  //    toast.success("Report Generated!");
  //  };

  return (
    <div>
      <h1 className="text-[#90BF0A] font-bold tracking-wide uppercase text-xl flex justify-center pb-3">
        Load Report
      </h1>
      <main className="flex-grow text-white">
        <section className="bg-[#1E1E1E] p-3 rounded-md font-medium">
          <div>
            <p className="text-[#C1FF12] font-semibold pb-2">Load Details</p>
            <div className="flex justify-between items-center p-2">
              <label className="text-base">Ordered Petrol</label>
              <input
                className="input-details"
                type="number"
                id="orderedPetrol"
                inputMode="decimal"
              />
            </div>
            <div className="flex justify-between items-center p-2">
              <label className="text-base">Ordered Diesel</label>
              <input
                className="input-details"
                type="number"
                id="orderedDiesel"
                inputMode="decimal"
              />
            </div>
          </div>
          <div className="pb-2">
            <p className="text-[#C1FF12] font-semibold py-2">Price Details</p>
            <div className="flex justify-between items-center p-2">
              <label className="text-base">
                Petrol Cost <span className="text-sm"> (per KL)</span>
              </label>
              <input
                className="input-details"
                type="number"
                id="orderedPetrol"
                inputMode="decimal"
              />
            </div>
            <div className="flex justify-between items-center p-2">
              <label className="text-base">
                Diesel Cost<span className="text-sm"> (per KL)</span>
              </label>
              <input
                className="input-details"
                type="number"
                id="orderedDiesel"
                inputMode="decimal"
              />
            </div>
            <div className="flex justify-between items-center p-2">
              <label className="text-base">
                Petrol Selling Price<span className="text-sm"> (Today)</span>
              </label>
              <input
                className="input-details"
                type="number"
                id="orderedPetrol"
                inputMode="decimal"
              />
            </div>
            <div className="flex justify-between items-center p-2">
              <label className="text-base">
                Diesel Selling Price
                <span className="text-sm"> (Today)</span>
              </label>
              <input
                className="input-details"
                type="number"
                id="orderedDiesel"
                inputMode="decimal"
              />
            </div>
          </div>
          <button className="bg-[#C0FF0D]/75 w-full rounded-md text-black font-semibold py-1">
            Generate Report
          </button>
        </section>
      </main>
    </div>
  );
}
