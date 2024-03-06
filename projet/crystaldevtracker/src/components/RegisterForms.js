import Link from "next/link";
import {useState} from 'react';
import StorageItems from '../app/constantes/StorageItems';
import RegisterCtrl from '../app/ctrl/RegisterCtrl';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = (e) => {

        //Vérifier les champs
        e.preventDefault();

        if(password !== confirmPassword){
            setError('Le mot de passe et la confirmation ne sont pas les mêmes.');
            return;
        }

        const registerCtrl = new RegisterCtrl();

        const data = registerCtrl.addUser(username, password);

        data.then(res => {

            if(res.code === 200){
                
                window.localStorage.setItem(StorageItems.pk_user, res.body.pk_user);
                window.localStorage.setItem(StorageItems.username, res.body.username);

                window.location.href = "/151/client/login";

            } else {

                setError(res.message);

            }

        })

    };

    return (
        <form className="max-w-md mx-auto p-5 bg-white rounded-lg shadow-md" onSubmit={onSubmit}>
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
            <div className="mb-4">
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
            <div className="mb-4">
                <label htmlFor="confirmPassword" className="text-black font-semibold">Confirmer le mot de passe</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mt-1 p-2 w-full text-black bg-gray-200 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                    placeholder="Mot de passe"
                />
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="mt-6">
                <button type="submit" className="w-full bg-black text-white py-2 px-4 btn">
                    S'inscrire
                </button>
                <Link href="/login" className="text-black mt-3 text-xs hover:text-pink-400">Déjà inscrit ? Connectez-vous ici</Link>
            </div>
        </form>
    );
};

export default RegisterForm;
