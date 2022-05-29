import { CompleteLoadDetails } from "./types";

export default function LoadCard(props: {loadDetails: CompleteLoadDetails}) {
  var orderedDate;
  if(props.loadDetails){
    orderedDate = new Date(props.loadDetails.orderedOn).toLocaleDateString(
      "en-in",
      {
        day: "numeric",
        year: "numeric",
        month: "short",
      }
    );
  }
  return (
    <div className="mr-2 w-fit rounded-md bg-[#1E1E1E] p-2">
      <div className="font-semibold">{orderedDate}</div>
      <table>
        <tbody>
          <tr>
            <td></td>
            <th>litre&apos;s</th>
            <th>Margin</th>
          </tr>
          <tr>
            <th>Petrol</th>
            <td>{props.loadDetails.orderedPetrol}</td>
            <td>
              <div className="rounded-full bg-[#C0FF0D] px-2 text-black">
                {Number(props.loadDetails.marginOfPetrol).toFixed(2)} /-
              </div>
            </td>
          </tr>
          <tr>
            <th>Diesel</th>
            <td>{props.loadDetails.orderedDiesel}</td>
            <td>
              <div className="rounded-full bg-[#C0FF0D] px-2 text-black">
                {Number(props.loadDetails.marginOfDiesel).toFixed(2)} /-
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
