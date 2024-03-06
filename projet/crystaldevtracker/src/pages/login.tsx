import React from "react";
import LoginForm from '../components/LoginForms';
import '../app/globals.css';

export default function Login() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">   
            <h1 className="text-3xl text-pink-400 font-bold mb-8">Connectez-vous à votre compte</h1>     
            <div className="w-screen flex items-center justify-center bg-black">
                <LoginForm/>
            </div>
        </div>
    );
}