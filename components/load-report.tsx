import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function LoadReport() {

    useEffect(() => {
        console.log("LoadReport");
        toast.success("Report Generated!");
    })
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
        <div className="bg-[#1E1E1E] p-3 rounded-md font-medium text-white">
          <div className="flex justify-center">05 Jan 2022 Load Report</div>
          <div className="flex justify-around pt-2">
              <div className="text-[#C4C4C4] text-sm">
                <div>Ordered Petrol -- 4000</div>
                <div>Ordered Diesel -- 8000</div>
              </div>
              <div className="text-[#C4C4C4] text-sm">
                <div>Ordered Petrol -- 2.14/-</div>
                <div>Ordered Diesel -- 3.12/-</div>
              </div>
          </div>
        </div>
      </div>
    );
}