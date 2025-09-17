# Étape 1: Build de l'application React
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json ./

RUN npm install 
COPY . ./ 
RUN npm run build 

# Étape 2: Servir l'application avec Caddy
FROM caddy:latest

WORKDIR /srv # Répertoire de travail par défaut de Caddy pour les fichiers statiques

# Copie les fichiers de build de React (issus de l'étape 'builder') vers le répertoire de travail de Caddy
COPY --from=builder /dist /srv

# Copie le Caddyfile minimaliste spécifique à cette application
# Ce fichier Caddyfile DOIT se trouver dans le même répertoire que ce Dockerfile.
COPY caddyfile /etc/caddy/Caddyfile

# Expose le port par défaut de Caddy (80)
EXPOSE 80

# Commande de démarrage de Caddy avec le Caddyfile interne
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]