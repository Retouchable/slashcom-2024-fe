import Navbar from "../Components/Navbar";
import BGREGISTER from "../images/BGREGISTER.png";

export default function StartUpInformationPage() {
    return (
        <header className="bg-cover bg-center" style={{ backgroundImage: `url(${BGREGISTER})` }}>
            <Navbar />
            <h1 className="mx-28 my-20 font-bold text-4xl">Investment Information</h1>
            <div className="mx-28 grid grid-cols-2 gap-28 justify-between">
                <div className="rounded-lg shadow-md bg-white mr-[100px]">
                    <img className="w-full" src="" alt="image" />
                    <div className="p-2">
                        <h3 className="font-semibold">Title</h3>
                        <p className="">Some description about the content.</p>
                    </div>
                </div>
                <div className="rounded-lg shadow-md bg-white mr-[100px]">
                    <img className="w-full" src="" alt="image" />
                    <div className="p-2">
                        <h3 className="font-semibold">Title</h3>
                        <p className="">Some description about the content.</p>
                    </div>
                </div>
                <div className="rounded-lg shadow-md bg-white mr-[100px]">
                    <img className="w-full" src="" alt="image" />
                    <div className="p-2">
                        <h3 className="font-semibold">Title</h3>
                        <p className="">Some description about the content.</p>
                    </div>
                </div>
                <div className="rounded-lg shadow-md bg-white mr-[100px]">
                    <img className="w-full" src="" alt="image" />
                    <div className="p-2">
                        <h3 className="font-semibold">Title</h3>
                        <p className="">Some description about the content.</p>
                    </div>
                </div>
            </div>
        </header>
    );
}