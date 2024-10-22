# ELECTIVE-WEB-FRONT

## Description
Le projet [ELECTIVE-WEB-COMPOSE](https://github.com/AlexandrePereon/ELECTIVE-WEB-COMPOSE) repose sur une architecture micro-services, visant à déployer une plateforme web complète pour la gestion d'un système de restauration en ligne. Cette architecture modulaire permet à chaque service de fonctionner de manière indépendante tout en interagissant avec les autres via des API. 

Les principaux services incluent une interface utilisateur ([ELECTIVE-WEB-FRONT](https://github.com/AlexandrePereon/ELECTIVE-WEB-FRONT)), des services d'authentification ([ELECTIVE-WEB-AUTH](https://github.com/AlexandrePereon/ELECTIVE-WEB-AUTH)), de gestion des restaurants ([ELECTIVE-WEB-RESTAURANT](https://github.com/AlexandrePereon/ELECTIVE-WEB-RESTAURANT)) et de gestion des commandes ([ELECTIVE-WEB-ORDER](https://github.com/AlexandrePereon/ELECTIVE-WEB-ORDER)). 

Le projet s'appuie également sur des bases de données [MongoDB](https://www.mongodb.com) et [MySQL](https://www.mysql.com), un serveur [Traefik](https://traefik.io) pour le routage des requêtes, [Prometheus](https://prometheus.io) pour la surveillance, [Grafana](https://grafana.com) pour l'analyse des métriques, et [GitLab](https://gitlab.com) pour la gestion du code source et des pipelines CI/CD.
