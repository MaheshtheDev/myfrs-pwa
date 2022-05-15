import { useEffect, useState } from "react";
import EnterDetails from "../components/enter-details";
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

  useEffect(() => {
    console.log(loadDetails);
  });

  return (
    <div>
      <EnterDetails setLoadDetails={setLoadDetails} />
      
    </div>
  );
}
