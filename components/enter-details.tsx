import { useRef, useState } from "react";
import { LoadDetails } from "./types";


export default function EnterDetails(props: { setLoadDetails: any }) {
  const [loadDetails, setLoadDetailsLocally] = useState({
    orderedDate: new Date().toISOString().split("T")[0],
    orderedPetrol: 4000,
    orderedDiesel: 8000,
    costOfPetrolKL: 117392.0309,
    costOfDieselKL: 104375.1172,
    sellingPriceOfPetrol: 120.84,
    sellingPriceOfDiesel: 106.48,
  } as LoadDetails);
  const onSubmit = (event: any) => {
    props.setLoadDetails(loadDetails);
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
                <img src="/images/rupee.png" alt="" className="rupee-icon" />
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
                <img src="/images/rupee.png" alt="" className="rupee-icon" />
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
                <img src="/images/rupee.png" alt="" className="rupee-icon" />
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
                <img src="/images/rupee.png" alt="" className="rupee-icon" />
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
                <img src="/images/rupee.png" alt="" className="rupee-icon" />
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
                  value={loadDetails.sellingPriceOfDiesel || ""}
                  onChange={(e: any) =>
                    setLoadDetailsLocally({
                      ...loadDetails,
                      sellingPriceOfDiesel: e.target.value,
                    })
                  }
                />
                <img src="/images/rupee.png" alt="" className="rupee-icon" />
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
