import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faUser, faBook } from "@fortawesome/free-solid-svg-icons";

import StorageItems from "../app/constantes/StorageItems";
import SessionCtrl from "../app/ctrl/SessionCtrl";

const UserNavBar = ({ onOpen, onProjectSelect, projects, selected }) => {
  const [username, setUsername] = useState(false);

  const sessionCtrl = new SessionCtrl();

  useEffect(() => {
    setUsername(window.sessionStorage.getItem(StorageItems.username));
  }, []);

  const logout = () => {

    const data = sessionCtrl.logout();

    data.then(res => {

      if (res.code === 200) {

        window.location.href = "/151/client";

      }

    })

  }

  const handleProjectSelect = (e) => {
    window.sessionStorage.setItem(StorageItems.pk_projet, e.target.value);
    window.sessionStorage.setItem(StorageItems.project_name, e.target.key)
    onProjectSelect(e);
  }

  return (
    <>
      <div className="w-screen h-20 bg-black sticky top-0">
        <div className="px-4 h-full flex items-center justify-between">
          <ul className="hidden lg:flex gap-x-5 text-white">
            <li>
              <select className="bg-black mt-2 text-pink-400 text-xl" value={selected} onChange={(e) => handleProjectSelect(e)}>
                {projects.length === 0 ? (
                  <option>Aucun projet créé</option>
                ) : (

                  projects.map((project) => (
                    (<option key={project.pk_projet} value={project.pk_projet}>
                      {project.name}
                    </option>)
                  ))
                )}
              </select>
            </li>
            <li>
              <button className="z-4 bg-black text-white btn" onClick={onOpen}>
                <FontAwesomeIcon icon={faBook} style={{ marginRight: '8px' }} />
                Ajouter un projet
              </button>
            </li>
          </ul>
          <div className="gap-x-2 flex">
            <li className="mt-2 mr-6 text-xl flex no-select">
              <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }} className="mt-1" />
              Utilisateur connecté: {username}
            </li>
            <button className="bg-black text-white px-4 btn" onClick={logout}>
              <FontAwesomeIcon icon={faPowerOff} style={{ marginRight: '8px' }} />
              Se déconnecter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserNavBar;