import { useEffect, useState } from "react";
import EnterDetails from "../components/enter-details";
import LoadReport from "../components/load-report";
import { LoadDetails } from "../components/types";

export default function AddLoad() {
  const [loadDetails, setLoadDetails] = useState({
    orderedPetrol: 0,
    orderedDiesel: 0,
    costOfPetrolKL: 0,
    costOfDieselKL: 0,
    sellingPriceOfPetrol: 0,
    sellingPriceOfDiesel: 0,
  } as LoadDetails);

  const [isReportGenerated, setReportGenerated] = useState(false);
  useEffect(() => {
    if (isDetailsUpdated(loadDetails)) {
      setReportGenerated(true);
    }
  });

  return (
    <div>
      {!isReportGenerated ? (
        <EnterDetails setLoadDetails={setLoadDetails} />
      ) : (
        <LoadReport />
      )}
      
    </div>
  );
}

function isDetailsUpdated(loadDetails: LoadDetails) {
  return (
    loadDetails.costOfDieselKL !== 0 ||
    loadDetails.costOfPetrolKL !== 0 ||
    loadDetails.orderedDiesel !== 0 ||
    loadDetails.orderedPetrol !== 0 ||
    loadDetails.sellingPriceOfDiesel !== 0 ||
    loadDetails.sellingPriceOfPetrol !== 0
  );
}
