export default function LoadCard() {
  return (
    <div className="mr-2 w-fit rounded-md bg-[#1E1E1E] p-2">
      <div className="font-semibold">12 Oct 2021</div>
      <table>
        <tbody>
          <tr>
            <td></td>
            <th>litre&apos;s</th>
            <th>Margin</th>
          </tr>
          <tr>
            <th>Petrol</th>
            <td>4000</td>
            <td>
              <div className="rounded-full bg-[#C0FF0D] px-2 text-black">
                2.34/-
              </div>
            </td>
          </tr>
          <tr>
            <th>Diesel</th>
            <td>4000</td>
            <td>
              <div className="rounded-full bg-[#C0FF0D] px-2 text-black">
                2.34/-
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
