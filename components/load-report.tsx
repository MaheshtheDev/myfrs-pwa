import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CompleteLoadDetails, LoadDetails } from "./types";
import domtoimage from "dom-to-image";

export default function LoadReport(props: { loadDetails: LoadDetails }) {
  const [completeLoadDetails, setCompleteLoadDetails] = useState(
    {} as CompleteLoadDetails
  );

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

  const copyImageFirefox = () => {
    const scale = window.devicePixelRatio;
    const isSafari = /^((?!chrome|android).)*safari/i.test(
      navigator?.userAgent
    );
    if (wrapperRef.current)
      if (isSafari) {
        navigator.clipboard
          .write([
            new ClipboardItem({
              "image/png": new Promise(async (resolve, reject) => {
                try {
                  await snapshotCreator();
                  const blob: any = await snapshotCreator();
                  resolve(new Blob([blob], { type: "image/png" }));
                } catch (err) {
                  reject(err);
                }
              }),
            }),
          ])
          .then(() => toast.success("Image copied to clipboard"))
          .catch((err) =>
            // Error
            toast.success(err)
          );
      } else {
        domtoimage
          .toBlob(wrapperRef.current, {
            height: 650,
            width: 750,
            style: {
              transform: "scale(" + scale + ")",
              transformOrigin: "top left",
              width: "500px",
              height: "500px",
            },
          })
          .then(async (data: any) => {
            data.arrayBuffer();
            navigator.clipboard.write([
              new ClipboardItem({ [data.type]: data }),
            ]);
            toast.success("Image copied to clipboard");
          });
      }
  };

  const shareImage = () => {
    if (navigator.share) {
      snapshotCreator();
      const blob: any = snapshotCreator();
      const data = {
        files: [
          new File([blob], "file.png", {
            type: blob.type,
          }),
        ],
        title: "Load Results",
        text: "Load Results photo",
      };
      navigator.share(data)
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    }
  }

  useEffect(() => {
    const cDL =
      Math.round((props.loadDetails.costOfDieselKL / 1000) * 100) / 100;
    const cPL =
      Math.round((props.loadDetails.costOfPetrolKL / 1000) * 100) / 100;
    //setLoadDate(new Date(props.loadDetails.orderedDate).toLocaleDateString());
    setCompleteLoadDetails({
      orderedPetrol: props.loadDetails.orderedPetrol,
      orderedDiesel: props.loadDetails.orderedDiesel,
      costOfDieselL: cDL,
      costOfPetrolL: cPL,
      sellingPriceOfDiesel: props.loadDetails.sellingPriceOfDiesel,
      sellingPriceOfPetrol: props.loadDetails.sellingPriceOfPetrol,
      marginOfDiesel:
        Math.round((props.loadDetails.sellingPriceOfDiesel - cDL) * 100) / 100,
      marginOfPetrol:
        Math.round((props.loadDetails.sellingPriceOfPetrol - cPL) * 100) / 100,
      totalCost:
        props.loadDetails.orderedPetrol * cPL +
        props.loadDetails.orderedDiesel * cDL,
    });
    toast.success("Report Generated!");
  }, [props]);

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
      <h1 className="text-[#90BF0A] font-bold tracking-wide uppercase text-xl flex justify-center pb-3">
        Report Generated
      </h1>
      <div
        className="bg-[#1E1E1E] p-3 rounded-md font-medium text-white"
        ref={(el) => (wrapperRef.current = el)}
      >
        <div className="flex justify-center">05 Jan 2022 Load Report</div>
        <div className="flex justify-around pt-2">
          <div className="text-[#C4C4C4] text-xs">
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
          <div className="text-[#C4C4C4] text-xs">
            <div>
              Ordered Petrol --{" "}
              <span className="bg-[#C0FF0D] text-black px-2 rounded-full">
                {Number(completeLoadDetails.marginOfPetrol).toFixed(2)} Rs/-
              </span>
            </div>
            <div className="pt-1">
              Ordered Diesel --{" "}
              <span className="bg-[#C0FF0D] text-black px-2 rounded-full">
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
      <div className="flex justify-around mt-2">
        <button
          onClick={copyImageFirefox}
          className="bg-[#C0FF0D]/75 w-1/2 rounded-md text-black font-semibold py-1 mr-2"
        >
          Copy to Clipboard
        </button>
        <button className="bg-[#C0FF0D]/75 w-1/2 rounded-md text-black font-semibold py-1">
          Download
        </button>
      </div>
      <button
        onClick={shareImage}
        className="bg-[#C0FF0D]/75 w-full my-2 rounded-md text-black font-semibold py-1"
      >
        Share Results
      </button>
    </div>
  );
}
