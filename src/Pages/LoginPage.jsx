import { useState } from "react";
import BGREGISTER from "../images/BGREGISTER.png";
import Logo from "../images/Logo.svg";
import Button from "../Components/Button.jsx";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setconfPassword] = useState("");
  return (
    <header>
      <img
        src={BGREGISTER}
        className="bg-center w-full h-full bg-cover absolute"
      ></img>
      <div className="bg-white mt-24 ml-[500px] justify-center  absolute ">
        <div className="pl-12 pt-12 pb-12 pr-20">
          <img src={Logo} className=" pl-[180px] relative "></img>
          <div className="relative pl-10">
            <div>
              <h1 className="text-green-600 font-semibold pt-6">Selamat Datang kembali!</h1>
              <h2 className="text-gray-400">
                Masuk ke akun untuk melanjutkan
              </h2>
            </div>
            <div className="mt-5">
              <input
                className=" border-2 border-gray-200 p-1 w-96 rounded-md"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mt-5">
              <input
                className=" border-2 border-gray-200 p-1 w-96 rounded-md"
                type="text"
                placeholder="Password"
              />
            </div>
            <div className="pl-[80px] mt-5 ">
              <Button />
            </div>
            <p className=" mt-1 pl-[90px]">
              tidak punya akun?
              <button className="font-semibold text-green-600">registrasi</button>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
