import Link from "next/link";
import SessionCtrl from '../app/ctrl/SessionCtrl';
import { useState, useEffect } from 'react';
import StorageItems from "../app/constantes/StorageItems";

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e) => {

        //Vérifier les champs
        e.preventDefault();

        const sessionCtrl = new SessionCtrl();

        const data = sessionCtrl.login(username, password);

        data.then(res => {

            if (res.code === 200) {

                window.sessionStorage.setItem(StorageItems.pk_user, res.body.pk_user);
                window.sessionStorage.setItem(StorageItems.username, res.body.username);

                if(!remember){

                    window.localStorage.clear();
        
                } else {
        
                    window.localStorage.setItem(StorageItems.username, username);
        
                }   

                window.location.href = "/151/client/dashboard";

            } else {

                setError(res.message);

            }

        })

    };

    useEffect(() => {

        let username = window.localStorage.getItem(StorageItems.username);

        //Dès l'inscription ou lors de la déconnexion quand on a coché "Se rappeler de moi"
        if (username) {

            setUsername(username);

        }

    }, []);

    return (
        <form className="max-w-md mx-auto p-5 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
            <div className="mb-4 block">
                <label htmlFor="username" className="text-black font-semibold">Nom d'utilisateur</label>
                <input
                    type="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 p-2 w-full text-black bg-gray-200 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                    placeholder="Ex: KibiByte"
                />
            </div>
            <div className="mb-2">
                <label htmlFor="password" className="text-black font-semibold">Mot de passe</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 p-2 w-full text-black bg-gray-200 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                    placeholder="Mot de passe"
                />
            </div>
            <div className="mb-3 inline-block">
                <span>
                    <input type="checkbox" name="remember" value={remember} onChange={(e) => setRemember(e.target.checked)} />
                </span>
                <span>
                    <label className="text-black ml-1">
                        Se rappeler de mon nom d'utilisateur
                    </label>
                </span>
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="mt-6">
                <button type="submit" className="w-full bg-black text-white py-2 px-4 btn">
                    Se connecter
                </button>
                <Link href="/register" className="text-black mt-3 text-xs hover:text-pink-400">Pas de compte ? Inscrivez-vous ici</Link>
            </div>
        </form>
    );
};

export default LoginForm;
