import { useEffect, useRef, useState } from "react";
import EnterDetails from "../components/enter-details";
import toast, { Toaster } from "react-hot-toast";
import { CompleteLoadDetails, LoadDetails } from "../components/types";
import domtoimage from "dom-to-image";
import Image from "next/image";

export default function AddLoad() {
  const [loadDetails, setLoadDetailsLocally] = useState({
    orderedDate: new Date().toISOString().split("T")[0],
    orderedPetrol: 4000,
    orderedDiesel: 8000,
    costOfPetrolKL: 117392.0309,
    costOfDieselKL: 104375.1172,
    sellingPriceOfPetrol: 120.84,
    sellingPriceOfDiesel: 106.48,
  } as LoadDetails);

  const [hideEnterDetails, setHideEnterDetails] = useState(false);

  const [completeLoadDetails, setCompleteLoadDetails] = useState(
    {} as CompleteLoadDetails
  );

  const [loadDate, setLoadDate] = useState(new Date().toDateString());

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const snapshotCreator = () => {
    return new Promise((resolve, reject) => {
      try {
        const scale = window.devicePixelRatio;
        const element = wrapperRef.current; // You can use element's ID or Class here
        if (element) {
          domtoimage
            .toBlob(element, {
              height: 650,
              width: 750,
              style: {
                transform: "scale(" + scale + ")",
                transformOrigin: "top left",
                width: "500px",
                height: "500px",
              },
            })
            .then((blob) => {
              resolve(blob);
            });
        }
      } catch (e) {
        reject(e);
      }
    });
  };

  const shareImage = async () => {
    if (navigator.share) {
      await snapshotCreator();
      const blob: any = await snapshotCreator();
      const data = {
        files: [
          new File([blob], "file.png", {
            type: "image/png",
          }),
        ],
      };
      navigator
        .share(data)
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    }
  };

  const goBack = () => {
    setHideEnterDetails(false);
  };

  const onSubmit = () => {
    const cDL = Math.round((loadDetails.costOfDieselKL / 1000) * 100) / 100;
    const cPL = Math.round((loadDetails.costOfPetrolKL / 1000) * 100) / 100;
    setLoadDate(
      new Date(loadDetails.orderedDate).toLocaleDateString("en-in", {
        day: "numeric",
        year: "numeric",
        month: "short",
      })
    );
    setCompleteLoadDetails({
      orderedPetrol: loadDetails.orderedPetrol,
      orderedDiesel: loadDetails.orderedDiesel,
      costOfDieselL: cDL,
      costOfPetrolL: cPL,
      sellingPriceOfDiesel: loadDetails.sellingPriceOfDiesel,
      sellingPriceOfPetrol: loadDetails.sellingPriceOfPetrol,
      marginOfDiesel:
        Math.round((loadDetails.sellingPriceOfDiesel - cDL) * 100) / 100,
      marginOfPetrol:
        Math.round((loadDetails.sellingPriceOfPetrol - cPL) * 100) / 100,
      totalCost:
        loadDetails.orderedPetrol * cPL + loadDetails.orderedDiesel * cDL,
      orderedOn: new Date(loadDetails.orderedDate),
    });
    setHideEnterDetails(true);
    toast.success("Report Generated!");
  };

  useEffect(() => {
    console.log("Submiited and use effect executed");
    if (hideEnterDetails && completeLoadDetails) {
      fetch(`/api/loads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completeLoadDetails),
      });
      console.log("Post api call executed");
    }
  });

  if (!hideEnterDetails) {
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
  } else {
    return (
      <div>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            className: "",
            style: {
              minHeight: "5px",
              background: "#1E1E1E",
              color: "#fff",
            },

            iconTheme: {
              primary: "#C0FF0D",
              secondary: "#1E1E1E",
            },
          }}
        />
        <h1 className="flex justify-center pb-3 text-xl font-bold uppercase tracking-wide text-[#90BF0A]">
          Report Generated
        </h1>
        <div
          className="rounded-md bg-[#1E1E1E] p-3 font-medium text-white"
          ref={(el) => (wrapperRef.current = el)}
        >
          <div className="flex justify-center">{loadDate} Load Report</div>
          <div className="flex justify-around pt-2">
            <div className="text-xs text-[#C4C4C4]">
              <div>
                Ordered Petrol --{" "}
                <span className="text-white">
                  {completeLoadDetails.orderedPetrol}
                </span>
              </div>
              <div className="pt-1">
                Ordered Diesel --{" "}
                <span className="text-white">
                  {completeLoadDetails.orderedDiesel}
                </span>
              </div>
            </div>
            <div className="text-xs text-[#C4C4C4]">
              <div>
                Ordered Petrol --{" "}
                <span className="rounded-full bg-[#C0FF0D] px-2 text-black">
                  {Number(completeLoadDetails.marginOfPetrol).toFixed(2)} Rs/-
                </span>
              </div>
              <div className="pt-1">
                Ordered Diesel --{" "}
                <span className="rounded-full bg-[#C0FF0D] px-2 text-black">
                  {Number(completeLoadDetails.marginOfDiesel).toFixed(2)} Rs/-
                </span>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <div className="font-semibold">Cost Details</div>
            <div className="flex justify-around pt-2">
              <p className="text-[#C4C4C4]">Petrol Cost</p>
              <p>
                {" "}
                {completeLoadDetails.orderedPetrol} ×{" "}
                {completeLoadDetails.costOfPetrolL}
              </p>
              <p>
                {" "}
                ={" "}
                {new Intl.NumberFormat("en-IN").format(
                  completeLoadDetails.costOfPetrolL *
                    completeLoadDetails.orderedPetrol
                )}
              </p>
            </div>
            <div className="flex justify-around pb-2">
              <p className="text-[#C4C4C4]">Diesel Cost</p>
              <p>
                {" "}
                {completeLoadDetails.orderedDiesel} ×{" "}
                {completeLoadDetails.costOfDieselL}
              </p>
              <p>
                {" "}
                ={" "}
                {new Intl.NumberFormat("en-IN").format(
                  completeLoadDetails.costOfDieselL *
                    completeLoadDetails.orderedDiesel
                )}
              </p>
            </div>
            <div className="flex justify-end pr-4">
              <div>
                {" "}
                ={" "}
                {new Intl.NumberFormat("en-IN").format(
                  completeLoadDetails.totalCost
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="font-semibold">Margin Details</div>
            <div className="flex justify-around pt-2">
              <p className="text-[#C4C4C4]">Petrol Margin</p>
              <p>
                {" "}
                {completeLoadDetails.orderedPetrol} ×{" "}
                {Number(completeLoadDetails.marginOfPetrol).toFixed(2)}
              </p>
              <p>
                {" "}
                ={" "}
                {new Intl.NumberFormat("en-IN").format(
                  completeLoadDetails.orderedPetrol *
                    completeLoadDetails.marginOfPetrol
                )}
              </p>
            </div>
            <div className="flex justify-around pb-2">
              <p className="text-[#C4C4C4]">Diesel Margin</p>
              <p>
                {" "}
                {completeLoadDetails.orderedDiesel} ×{" "}
                {Number(completeLoadDetails.marginOfDiesel).toFixed(2)}
              </p>
              <p>
                {" "}
                ={" "}
                {new Intl.NumberFormat("en-IN").format(
                  completeLoadDetails.orderedDiesel *
                    completeLoadDetails.marginOfDiesel
                )}
              </p>
            </div>
            <div className="flex justify-end pr-4">
              <div>
                {" "}
                ={" "}
                {new Intl.NumberFormat("en-IN").format(
                  completeLoadDetails.orderedPetrol *
                    completeLoadDetails.marginOfPetrol +
                    completeLoadDetails.orderedDiesel *
                      completeLoadDetails.marginOfDiesel
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <button
            onClick={goBack}
            className="my-2 w-full mr-2 rounded-md bg-[#C0FF0D]/75 py-1 font-semibold text-black"
          >
            <div className="flex justify-center">
              <Image src="/images/back-arrow.svg" width={20} height={20} />
              <p>Back</p>
            </div>
          </button>
          <button
            onClick={shareImage}
            className="my-2 w-full rounded-md bg-[#C0FF0D]/75 py-1 font-semibold text-black"
          >
            <div className="flex justify-center">
              <Image src="/images/share.svg" width={20} height={20} />
              <p className="px-1">Share</p>
            </div>
          </button>
        </div>
      </div>
    );
  }
}
