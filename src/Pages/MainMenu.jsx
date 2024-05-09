import BGMAINMENU from "../images/BGMAINMENU.png";
import IMGStartUp from "../images/IMGStartUp.png";
import IMGInvestment from "../images/IMGInvestment.png";
import Logo from "../images/Logo.svg";

export default function MainMenu() {

    return (
        <div className="bg-cover bg-center px-20" style={{ backgroundImage: `url(${BGMAINMENU})` }}>
            {/* tittle */}
            <div className="rounded-lg bg-gray-500 p-20">
                <img src="" alt="image" />
            </div>
            <h2 className="p-8 pt-20 text-center text-green-600 font-bold text-3xl">What's Going On?</h2>
            <div className="flex justify-between">
                <div className="rounded-lg shadow-md bg-white">
                    <img className="w-full" src={Logo} alt="image" />
                    <div className="p-2">
                        <h3 className="font-semibold">Title</h3>
                        <p className="">Some description about the content.</p>
                    </div>
                </div>
                <div className="rounded-lg shadow-md bg-white">
                    <img className="w-full" src={Logo} alt="image" />
                    <div className="p-2">
                        <h3 className="font-semibold">Title</h3>
                        <p className="">Some description about the content.</p>
                    </div>
                </div>
                <div className="rounded-lg shadow-md bg-white">
                    <img className="w-full" src={Logo} alt="image" />
                    <div className="p-2">
                        <h3 className="font-semibold">Title</h3>
                        <p className="">Some description about the content.</p>
                    </div>
                </div>
            </div>
            <h2 className="p-8 pt-20 text-center text-green-600 font-bold text-3xl">What we provide?</h2>
            <div className="flex justify-around">
                <div>
                    <img className="w-full" src={IMGStartUp} alt="image" />
                    <h4 className="text-center text-green-600 font-bold">StartUp Information</h4>
                </div>
                <div>
                    <img className="w-full" src={IMGInvestment} alt="image" />
                    <h4 className="text-center text-green-600 font-bold">Investment Information</h4>
                </div>
            </div>
        </div>
    );
}