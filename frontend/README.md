Prérequis
Avant de lancer le projet, assurez-vous d'avoir installé :

Node.js (version 16 ou supérieure recommandée)

1. Lancer le Backend (Serveur et Base de données)
Le backend gère la lecture des offres depuis le fichier offres.json.

Ouvrez un terminal et placez-vous dans le dossier backend :
cd backend

Installez les dépendances :
npm install

Démarrez le serveur :
npm start
(Si npm start n'est pas configuré, utilisez node index.js)

2. Lancer le Frontend (Interface Utilisateur)
Le frontend est propulsé par React et Vite.

Ouvrez un nouveau terminal (laissez le backend tourner dans le premier) et placez-vous dans le dossier frontend :
cd frontend

Installez les dépendances :
npm install

Démarrez l'environnement de développement :
npm run dev

3. Accéder à l'application
Une fois le frontend lancé, ouvrez votre navigateur et accédez à l'adresse locale fournie par Vite (généralement http://localhost:5173).