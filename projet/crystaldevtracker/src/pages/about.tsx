import Link from 'next/link';
import '../app/globals.css';
import Head from 'next/head';

export default function About() {

    return (
        <>
            <Head>
                <title>
                    CrystalDevTracker_
                </title>
            </Head>

            <div className="p-6 h-full w-full flex-col flex">
                <h1 className="text-pink-400 text-4xl font-semibold mb-8">
                    Bienvenue sur la page d'aide du site
                </h1>
                <div className="mb-6 p-3 bg-black" style={{
                    border: '1.8px dashed #f472b6',
                    borderRadius: '10px'
                }}>

                    <h1 className="text-pink-400 font-semibold text-2xl">Créer un compte</h1>
                    <p>Pour créer un compte, il faut un nom d'utilisateur unique et pour le mot de passe les critères sont :</p>
                    <ul className="list-disc list-inside">
                        <li>Au moins 8 caractères de long</li>
                        <li>Au moins une majuscule</li>
                        <li>Au moins un chiffre ou symbole</li>
                    </ul>

                </div>

                <div className="mb-6 p-3 bg-black" style={{
                    border: '1.8px dashed #f472b6',
                    borderRadius: '10px'
                }}>
                    <h1 className="text-pink-400 font-semibold text-2xl">Se connecter</h1>
                    <p>Pour se connecter, on rentre son nom d'utilisateur et son mot de passe. Si on coche la case "Se rappeler de mon nom d'utilisateur", votre nom est stocké en local sur votre navigateur</p>
                </div>
                <div className="mb-6 p-3 bg-black" style={{
                    border: '1.8px dashed #f472b6',
                    borderRadius: '10px'
                }}>
                    <h1 className="text-pink-400 font-semibold text-2xl">Ajouter un projet</h1>
                    <p>Pour ajouter un projet, il suffit d'aller sur "Ajouter un projet", un formulaire apparaîtra. Pour fermer le formulaire, on clique en dehors du cadre rose. Les limitations pour le nom des projets sont de 32 caractères</p>
                </div>
                <div className="mb-6 p-3 bg-black" style={{
                    border: '1.8px dashed #f472b6',
                    borderRadius: '10px'
                }}>
                    <h1 className="text-pink-400 font-semibold text-2xl">Ajouter une tâche</h1>
                    <p>Pour ajouter une tâche, il faut aller sur "Ajouter une tâche" et remplir tous les champs du formulaire qui apparaîtra. À noter que ce bouton existe sur tous les statuts pour faciliter l'utilisation du tableau de bord et donc éviter de devoir faire défiler toute la colonne du statut</p>
                </div>
                <div className="mb-6 p-3 bg-black" style={{
                    border: '1.8px dashed #f472b6',
                    borderRadius: '10px'
                }}>
                    <h1 className="text-pink-400 font-semibold text-2xl">Modifier le statut d'une tâche</h1>
                    <p>Pour modifier le statut d'une tâche, il suffit de déplacer la tâche (drag and drop) dans la colonne souhaitée</p>
                </div>
                <div className="mb-6 p-3 bg-black" style={{
                    border: '1.8px dashed #f472b6',
                    borderRadius: '10px'
                }}>
                    <h1 className="text-pink-400 font-semibold text-2xl">Supprimer une tâche</h1>
                    <p>Pour supprimer une tâche, il faut faire un clic droit dessus. Un menu contextuel apparaîtra et cliquer sur supprimer la tâche</p>
                </div>
                <div className="mb-6 p-3 bg-black" style={{
                    border: '1.8px dashed #f472b6',
                    borderRadius: '10px'
                }}>
                    <h1 className="text-pink-400 font-semibold text-2xl">Modifier le détail de la tâche</h1>
                    <p>Pour pouvoir modifier le détail de la tâche, il faut faire un clic droit sur la tâche. Un formulaire apparaîtra et vous pourrez mettre à jour les informations de la tâche. Même principe que le formulaire de la création de projet, un clic hors du cadre rose et le formulaire se ferme.</p>
                </div>
                <div className="bg-black">
                    <Link href="/">
                        <button className="btn">
                            Retourner à la page d'accueil
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
