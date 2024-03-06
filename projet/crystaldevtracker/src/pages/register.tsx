import RegisterForm from '../components/RegisterForms';
import '../app/globals.css';

export default function Register() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">   
            <h1 className="text-3xl text-pink-400 font-bold mb-8">Créer votre compte</h1>     
            <div className="w-screen flex items-center justify-center bg-black">
                <RegisterForm/>
            </div>
        </div>
    );
}