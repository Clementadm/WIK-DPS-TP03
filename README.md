# TP3 DevOps

Afin de lancer une première fois docker compose 
```
cd /app
docker build -t app_devopstp3 .
docker compose up
```

Se rendre sur l'url ```http://localhost:8080/ping``` afin de vérifier que la requete est bien affichées.

Afin de relancer le docker compose après tout changement de code source
```
docker compose down 
docker build -t app_devopstp3 .
docker compose up
```
