import domtoimage from "dom-to-image";
import { useEffect, useRef, useState } from "react";
import { CompleteLoadDetails, LoadDetails } from "./types";
//import toast from "react-hot-toast";

export default function LoadResult(props: { loadDetails: LoadDetails }) {
  const [completeLoadDetails, setCompleteLoadDetails] = useState(
    {} as CompleteLoadDetails
  );

  const [loadDate, setLoadDate] = useState(new Date().toDateString());

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const copyImageFirefox = () => {
    const scale = window.devicePixelRatio;

    if (wrapperRef.current)
      domtoimage
        .toBlob(wrapperRef.current, {
          height: 850,
          width: 1000,
          style: {
            transform: "scale(" + scale + ")",
            transformOrigin: "top left",
            width: "1000px",
            height: "1000px",
          },
        })
        .then(async (data) => {
          data.arrayBuffer();
          navigator.clipboard.write([new ClipboardItem({ [data.type]: data })]);
        //  toast.success("Image copied to clipboard");
        });
  };

  const onSaveImage = () => {
    const scale = window.devicePixelRatio;
    if (wrapperRef.current)
      domtoimage
        .toPng(wrapperRef.current, {
          height: 850,
          width: 1000,
          style: {
            transform: "scale(" + scale + ")",
            transformOrigin: "top left",
            width: "1000px",
            height: "1000px",
          },
        })
        .then(async (data) => {
          var a = document.createElement("A") as HTMLAnchorElement;
          a.href = data;
          a.download = `load-report-${props.loadDetails.orderedDate}.png`;
          a.click();
        });
    //toast.success("Image exported!");
  };

  useEffect(() => {
    const cDL =
      Math.round((props.loadDetails.costOfDieselKL / 1000) * 100) / 100;
    const cPL =
      Math.round((props.loadDetails.costOfPetrolKL / 1000) * 100) / 100;
    setLoadDate(new Date(props.loadDetails.orderedDate).toLocaleDateString());
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
  }, [props]);

  return (
    <div>
      <div
        ref={(el) => (wrapperRef.current = el)}
        className="bg-[#77D2CE] w-[500px] h-[450px] rounded-lg"
      >
        <h1 className="text-black font-semibold text-xl text-center p-4">
          {loadDate} Load Report
        </h1>
        <div className="px-5 flex justify-between w-full">
          <div className="pr-5">
            <div className="flex">
              <p className="pr-2">Ordered Petrol</p>
              <img src="/images/arrow.png" height="5px" width={20} />
              <span className="pl-2">{completeLoadDetails.orderedPetrol}</span>
            </div>
            <div className="flex pt-2">
              <p className="pr-2">Ordered Diesel</p>
              <img src="/images/arrow.png" height={10} width={20} />
              <span className="pl-2">{completeLoadDetails.orderedDiesel}</span>
            </div>
          </div>
          <div className="">
            <div className="flex">
              <p className="pr-2">Petrol Margin</p>
              <img src="/images/arrow.png" height="5px" width={20} />
              <span className="ml-2 px-2 bg-[#C0FF0D] rounded-full">
                {completeLoadDetails.marginOfPetrol} Rs/-
              </span>
            </div>
            <div className="flex pt-2">
              <p className="pr-2">Diesel Margin</p>
              <img src="/images/arrow.png" height={10} width={20} />
              <span className="ml-2 px-2 bg-[#C0FF0D] rounded-full">
                {completeLoadDetails.marginOfDiesel} Rs/-
              </span>
            </div>
          </div>
        </div>
        <div className="px-5 pt-5">
          <div className="bg-[#555555] w-fit text-white rounded-md px-2">
            <span className="font-semibold">Cost Details</span>
          </div>
          <div className="py-2 text-lg mx-5 font-medium">
            <div className="flex justify-between pb-2">
              <div>Petrol Cost</div>
              <div>
                {" "}
                {completeLoadDetails.orderedPetrol} *{" "}
                {completeLoadDetails.costOfPetrolL}
              </div>
              <div>
                {" "}
                ={" "}
                {new Intl.NumberFormat("en-IN").format(
                  completeLoadDetails.costOfPetrolL *
                    completeLoadDetails.orderedPetrol
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <div>Diesel Cost</div>
              <div>
                {" "}
                {completeLoadDetails.orderedDiesel} *{" "}
                {completeLoadDetails.costOfDieselL}
              </div>
              <div>
                {" "}
                ={" "}
                {new Intl.NumberFormat("en-IN").format(
                  completeLoadDetails.costOfDieselL *
                    completeLoadDetails.orderedDiesel
                )}
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <div>
                {" "}
                ={" "}
                {new Intl.NumberFormat("en-IN").format(
                  completeLoadDetails.totalCost
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="px-5">
          <div className="bg-[#555555] w-36 text-white rounded-md px-2">
            <span className="font-medium">Margin Details</span>
          </div>
          <div className="py-2 text-lg mx-5 font-medium">
            <div className="flex justify-between pb-2">
              <div>Petrol Margin</div>
              <div>
                {" "}
                {completeLoadDetails.orderedPetrol} *{" "}
                {completeLoadDetails.marginOfPetrol}
              </div>
              <div>
                {" "}
                ={" "}
                {new Intl.NumberFormat("en-IN").format(
                  completeLoadDetails.orderedPetrol *
                    completeLoadDetails.marginOfPetrol
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <div>Diesel Margin</div>
              <div>
                {" "}
                {completeLoadDetails.orderedDiesel} *{" "}
                {completeLoadDetails.marginOfDiesel}
              </div>
              <div>
                {" "}
                ={" "}
                {new Intl.NumberFormat("en-IN").format(
                  completeLoadDetails.orderedDiesel *
                    completeLoadDetails.marginOfDiesel
                )}
              </div>
            </div>
            <div className="flex justify-end pt-2">
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
      </div>
      <div className="flex justify-evenly font-medium">
        <button
          className="px-4 py-2 bg-[#77D2CE] hover:bg-black hover:text-white mt-4 rounded-md"
          onClick={copyImageFirefox}
        >
          Copy Image
        </button>
        <button
          className="px-4 py-2 bg-[#77D2CE] hover:bg-black hover:text-white mt-4 rounded-md"
          onClick={onSaveImage}
        >
          Download Image
        </button>
      </div>
    </div>
  );
}
