import { useRef, useState } from "react";
import { LoadDetails } from "./types";
//import domtoimage from "dom-to-image";
//import { LoadDetails } from "../types";
//import toast, { Toaster } from "react-hot-toast";

export default function EnterDetails(props: { setLoadDetails: any }) {
  const [loadDetails, setLoadDetailsLocally] = useState({
    orderedDate: new Date().toISOString().split("T")[0],
    orderedPetrol: 0,
    orderedDiesel: 0,
    costOfPetrolKL: 0,
    costOfDieselKL: 0,
    sellingPriceOfPetrol: 0,
    sellingPriceOfDiesel: 0,
  } as LoadDetails);
  const onSubmit = (event: any) => {
    props.setLoadDetails(loadDetails);
    //  toast.success("Report Generated!");
  };

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
              <div className="relative p-0 m-0 w-1/2">
                <input
                  className="input-details"
                  type="number"
                  id="orderedPetrol"
                  inputMode="decimal"
                  value={loadDetails.orderedPetrol || ""}
                  onChange={(e: any) =>
                    setLoadDetailsLocally({
                      ...loadDetails,
                      orderedPetrol: e.target.value,
                    })
                  }
                />
                <img
                  src="/images/rupee.png"
                  alt=""
                  className="absolute w-5 top-1 left-1"
                />
              </div>
            </div>
            <div className="flex justify-between items-center p-2">
              <label className="text-base">Ordered Diesel</label>
              <div className="relative p-0 m-0 w-1/2">
                <input
                  className="input-details"
                  type="number"
                  id="orderedDiesel"
                  inputMode="decimal"
                  value={loadDetails.orderedDiesel || ""}
                  onChange={(e: any) =>
                    setLoadDetailsLocally({
                      ...loadDetails,
                      orderedDiesel: e.target.value,
                    })
                  }
                />
                <img
                  src="/images/rupee.png"
                  alt=""
                  className="absolute w-5 top-1 left-1"
                />
              </div>
            </div>
          </div>
          <div className="pb-2">
            <p className="text-[#C1FF12] font-semibold py-2">Price Details</p>
            <div className="flex justify-between items-center p-2">
              <label className="text-base">
                Petrol Cost <span className="text-sm"> (per KL)</span>
              </label>
              <div className="relative p-0 m-0 w-1/2">
                <input
                  className="input-details"
                  type="number"
                  id="costOfPetrolKL"
                  inputMode="decimal"
                  value={loadDetails.costOfPetrolKL || ""}
                  onChange={(e: any) =>
                    setLoadDetailsLocally({
                      ...loadDetails,
                      costOfPetrolKL: e.target.value,
                    })
                  }
                />
                <img
                  src="/images/rupee.png"
                  alt=""
                  className="absolute w-5 top-1 left-1"
                />
              </div>
            </div>
            <div className="flex justify-between items-center p-2">
              <label className="text-base">
                Diesel Cost<span className="text-sm"> (per KL)</span>
              </label>
              <div className="relative p-0 m-0 w-1/2">
                <input
                  className="input-details"
                  type="number"
                  id="costOfDieselKL"
                  inputMode="decimal"
                  value={loadDetails.costOfDieselKL || ""}
                  onChange={(e: any) =>
                    setLoadDetailsLocally({
                      ...loadDetails,
                      costOfDieselKL: e.target.value,
                    })
                  }
                />
                <img
                  src="/images/rupee.png"
                  alt=""
                  className="absolute w-5 top-1 left-1"
                />
              </div>
            </div>
            <div className="flex justify-between items-center p-2">
              <label className="text-base w-fit">
                Petrol Selling Price<div className="text-sm"> (Today)</div>
              </label>
              <div className="relative p-0 m-0 w-1/2">
                <input
                  className="input-details"
                  type="number"
                  id="sellingPriceOfPetrol"
                  inputMode="decimal"
                  value={loadDetails.sellingPriceOfPetrol || ""}
                  onChange={(e: any) =>
                    setLoadDetailsLocally({
                      ...loadDetails,
                      sellingPriceOfPetrol: e.target.value,
                    })
                  }
                />
                <img
                  src="/images/rupee.png"
                  alt=""
                  className="absolute w-5 top-1 left-1"
                />
              </div>
            </div>
            <div className="flex justify-between items-center p-2">
              <label className="text-base">
                Diesel Selling Price
                <div className="text-sm"> (Today)</div>
              </label>
              <div className="relative p-0 m-0 w-1/2">
                <input
                  className="input-details"
                  type="number"
                  id="sellingPriceOfDiesel"
                  inputMode="decimal"
                  value={loadDetails.orderedDate}
                  onChange={(e: any) =>
                    setLoadDetailsLocally({
                      ...loadDetails,
                      orderedDate: e.target.value,
                    })
                  }
                />
                <img
                  src="/images/rupee.png"
                  alt=""
                  className="absolute w-5 top-1 left-1"
                />
              </div>
            </div>
          </div>
          <button
            onClick={onSubmit}
            className="bg-[#C0FF0D]/75 w-full rounded-md text-black font-semibold py-1"
          >
            Generate Report
          </button>
        </section>
      </main>
    </div>
  );
}
