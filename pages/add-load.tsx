export default function AddLoad() {
  return (
    <div>
      <h1 className="text-[#90BF0A] font-bold tracking-wide uppercase text-xl flex justify-center pb-3">
        Load Report
      </h1>
      <main className="flex-grow text-white">
        <section className="bg-[#1E1E1E] p-3 rounded-sm font-medium">
          <div>
            <p className="text-[#C1FF12] font-semibold pb-2">Load Details</p>
            <div className="flex justify-between items-center p-2">
              <label className="text-lg">Ordered Petrol</label>
              <input
                className="input-details"
                type="number"
                id="orderedPetrol"
              />
            </div>
            <div className="flex justify-between items-center p-2">
              <label className="text-lg">Ordered Diesel</label>
              <input
                className="input-details"
                type="number"
                id="orderedDiesel"
              />
            </div>
          </div>
          <div className="pb-2">
            <p className="text-[#C1FF12] font-semibold py-2">Price Details</p>
            <div className="flex justify-between items-center p-2">
              <label className="text-lg">Ordered Petrol</label>
              <input
                className="input-details"
                type="number"
                id="orderedPetrol"
              />
            </div>
            <div className="flex justify-between items-center p-2">
              <label className="text-lg">Ordered Diesel</label>
              <input
                className="input-details"
                type="number"
                id="orderedDiesel"
              />
            </div>
            <div className="flex justify-between items-center p-2">
              <label className="text-lg">Ordered Petrol</label>
              <input
                className="input-details"
                type="number"
                id="orderedPetrol"
              />
            </div>
            <div className="flex justify-between items-center p-2">
              <label className="text-lg">Ordered Diesel</label>
              <input
                className="input-details"
                type="number"
                id="orderedDiesel"
              />
            </div>
          </div>
          <button className="bg-[#C0FF0D]/75 w-full rounded-md text-black font-semibold py-1">
            Generate Report
          </button>
        </section>
      </main>
    </div>
  );
}
