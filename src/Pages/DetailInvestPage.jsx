import Chart from "../Components/Chart";
import Navbar from "../Components/Navbar";

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
    <div>
      <Navbar/>
      <h1 className="px-20 pt-5 pb-2 font-bold text-4xl">Company</h1>
      <div className="flex px-20">
        <div className="rounded-lg shadow-lg bg-white w-full pt-5">
          <Chart inputs={{ width: 0, height: 0, dimension: "date", metric: "value", color: "green" }} data={dummy} />
        </div>
        <div className="rounded-lg shadow-lg bg-white p-10 ml-2 w-full sm:w-2/3">
          <div>
            <div className="flex">
              <p className="font-bold text-lg">price</p>
              <p className="mx-2 text-sm">IDR</p>
              <p className="text-green-500 text-sm">(rate%)</p>
            </div>
            <p className="text-green-500 text-sm">pasar buka</p>
          </div>
          <div>
            <p className="font-bold">kinerja</p>
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
        </div>
      </div>
      <h1 className="px-20 pt-32 pb-10 font-semibold text-2xl">Berita Terkini</h1>
      <div className="flex justify-between px-20">
        <div className="rounded-lg shadow-md bg-white">
          <img className="w-full" src="" alt="image" />
          <div className="p-2">
            <h3 className="font-semibold">Title</h3>
            <p className="">Some description about the content.</p>
          </div>
        </div>
        <div className="rounded-lg shadow-md bg-white">
          <img className="w-full" src="" alt="image" />
          <div className="p-2">
            <h3 className="font-semibold">Title</h3>
            <p className="">Some description about the content.</p>
          </div>
        </div>
        <div className="rounded-lg shadow-md bg-white">
          <img className="w-full" src="" alt="image" />
          <div className="p-2">
            <h3 className="font-semibold">Title</h3>
            <p className="">Some description about the content.</p>
          </div>
        </div>
      </div>
    </div>
  )
}