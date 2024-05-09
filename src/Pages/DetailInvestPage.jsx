import Chart from "../Components/Chart";

export default function DetailInvestPage() {

  const dummy = [
    { date: new Date("2024-05-01"), value: 50_000 },
    { date: new Date("2024-05-02"), value: 70_000 },
    { date: new Date("2024-05-03"), value: 60_000 },
    { date: new Date("2024-05-04"), value: 200_000 },
    { date: new Date("2024-05-05"), value: 130_000 },
    { date: new Date("2024-05-06"), value: 300_000 },
    { date: new Date("2024-05-07"), value: 280_000 },
    { date: new Date("2024-05-08"), value: 300_000 },
    { date: new Date("2024-05-09"), value: 400_000 },
    { date: new Date("2024-05-10"), value: 730_000 },
    { date: new Date("2024-05-11"), value: 680_000 },
    { date: new Date("2024-05-12"), value: 780_000 },
    { date: new Date("2024-05-13"), value: 250_000 },
    { date: new Date("2024-05-14"), value: 200_000 },
    { date: new Date("2024-05-15"), value: 400_000 },
    { date: new Date("2024-05-16"), value: 500_000 },
    { date: new Date("2024-05-17"), value: 750_000 },
    { date: new Date("2024-05-18"), value: 900_000 },
    { date: new Date("2024-05-19"), value: 1_000_000 },
  ];

  return (
    <div >
      <div className="flex mx-20">
        <div className="rounded-lg shadow-md bg-white w-full mr-2 pt-5">
          <Chart inputs={{ width: 0, height: 0, dimension: "date", metric: "value", color: "green" }} data={dummy} />
        </div>
        <div className="rounded-lg shadow-md bg-white p-10 justify-between">
          <div>
            <div className="flex">
              <p className="font-bold text-lg">price</p>
              <p className="mx-2 text-sm">IDR</p>
              <p className="text-green-500 text-sm">(rate%)</p>
            </div>
            <p className="text-green-500 text-sm">pasar buka</p>
          </div>
          <div>
            <p className="text-bold">Kinerja</p>
            <div className="flex justify-between my-2">
              <button className="bg-gray-200 py-1 px-5 rounded-lg">1 W</button>
              <button className="bg-gray-200 py-1 px-5 rounded-lg">1 M</button>
              <button className="bg-gray-200 py-1 px-5 rounded-lg">3 M</button>
            </div>
            <div className="flex justify-between">
              <button className="bg-gray-200 py-1 px-5 rounded-lg">6 M</button>
              <button className="bg-gray-200 py-1 px-5 rounded-lg">YTD</button>
              <button className="bg-gray-200 py-1 px-5 rounded-lg">1 Y</button>
            </div>
          </div>
          <div>
          <button className=" px-24 py-2 mb-4 rounded-lg bg-green-600 text-white font-bold">Buy</button>
          </div>
        </div>
      </div>
    </div>
  )
}