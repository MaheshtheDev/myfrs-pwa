import { useState } from "react";
import { LoadDetails } from "./types";


export default function EnterDetails(props: { setLoadDetails: any, setHideEnterDetails: any }) {
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
    props.setHideEnterDetails(true);
  };

  return (
    <div>
      <h1 className="flex justify-center pb-3 text-xl font-bold uppercase tracking-wide text-[#90BF0A]">
        Load Report
      </h1>

      <main className="flex-grow text-white">
        <section className="rounded-md bg-[#1E1E1E] p-3 font-medium">
          <div>
            <p className="pb-2 font-semibold text-[#C1FF12]">Load Details</p>
            <div className="flex items-center justify-between p-2">
              <label className="text-base">Ordered Petrol</label>
              <div className="input-details">
                <input
                  className="w-full rounded-full bg-[#C4C4C4] pl-1 outline-none"
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
                ltrs
              </div>
            </div>
            <div className="flex items-center justify-between p-2">
              <label className="text-base">Ordered Diesel</label>
              <div className="input-details">
                <input
                  className="w-full rounded-full bg-[#C4C4C4] pl-1 outline-none"
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
                ltrs
              </div>
            </div>
          </div>
          <div className="pb-2">
            <p className="py-2 font-semibold text-[#C1FF12]">Price Details</p>
            <div className="flex items-center justify-between p-2">
              <label className="text-base">
                Petrol Cost <span className="text-sm"> (per KL)</span>
              </label>
              <div className="input-details">
                ₹
                <input
                  className="w-full rounded-full bg-[#C4C4C4] pl-1 outline-none"
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
              </div>
            </div>
            <div className="flex items-center justify-between p-2">
              <label className="text-base">
                Diesel Cost<span className="text-sm"> (per KL)</span>
              </label>
              <div className="input-details">
                ₹
                <input
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
              </div>
            </div>
            <div className="flex items-center justify-between p-2">
              <label className="w-fit text-base">
                Petrol Selling Price<div className="text-sm"> (Today)</div>
              </label>
              <div className="input-details">
                ₹
                <input
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
              </div>
            </div>
            <div className="flex items-center justify-between p-2">
              <label className="text-base">
                Diesel Selling Price
                <div className="text-sm"> (Today)</div>
              </label>
              <div className="input-details">
                ₹
                <input
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
              </div>
            </div>
            <div className="flex items-center justify-between p-2">
              <label className="w-1/2 text-base">Ordered Date</label>
              <input
                className="input-details w-1/2"
                type="date"
                id="sellingPriceOfDiesel"
                value={loadDetails.orderedDate}
                onChange={(e: any) =>
                  setLoadDetailsLocally({
                    ...loadDetails,
                    orderedDate: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <button
            onClick={onSubmit}
            className="w-full rounded-md bg-[#C0FF0D]/75 py-1 font-semibold text-black"
          >
            Generate Report
          </button>
        </section>
      </main>
    </div>
  );
}
