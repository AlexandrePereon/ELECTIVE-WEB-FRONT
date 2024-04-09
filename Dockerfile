# Étape de développement
FROM node:lts-buster-slim AS development

# Répertoire de travail de l'application
WORKDIR /usr/src/app

# Copier les définitions des dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm ci --loglevel=verbose

# Copier tout le code nécessaire pour exécuter l'application
COPY . .

# Étape de construction de l'application React
FROM node:lts-buster-slim AS build

# Répertoire de travail de l'application
WORKDIR /app

# Copier les fichiers de définition des dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application dans le conteneur
COPY . .

# Construire l'application React
RUN npm run build

# Étape de production avec Nginx
FROM nginx:1.21.0-alpine

# Copier la configuration Nginx dans le conteneur
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers de construction de l'application React dans le répertoire d'hébergement Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80 pour Nginx
EXPOSE 4000

# Démarrer Nginx lorsque le conteneur démarre
CMD ["nginx", "-g", "daemon off;"]
