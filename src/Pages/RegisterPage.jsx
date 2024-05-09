import { useState } from "react";
import BGREGISTER from "../images/BGREGISTER.png"
import Logo from "../images/Logo.svg"
import Button from "../Components/Button.jsx"
import Input from "../Components/input.jsx"


export default function RegisterPage() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confPassword,setconfPassword] = useState('');
    return (
        <header>
            <img src={Logo}></img>
            <div>
                <div>
                    <h1>Selamat Datang!</h1>
                    <h2>Daftarkan akun anda untuk mengakses website!</h2>
                </div>
                    <Input/>
                    <Input/>
                    <Input/>
                    <Input/>
                <div>
                    <p className="">Dengan Mendaftar, anda menyetujui Ketentuan Layanan dan Kebijakan Treest</p>
                </div>
                <p className="font-bold ">Sudah Memiliki Akun?<button className="font-normal">masuk</button></p>
                <Button/>
            </div>
            <img src={BGREGISTER} className="bg-center w-full h-full"></img>
        </header>
    );
}