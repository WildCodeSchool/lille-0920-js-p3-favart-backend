-- MySQL dump 10.13  Distrib 8.0.23, for Linux (x86_64)
--
-- Host: localhost    Database: Favart
-- ------------------------------------------------------
-- Server version	8.0.23-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Client`
--

DROP TABLE IF EXISTS `Client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Client` (
  `idClient` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  `email` varchar(85) NOT NULL,
  `phone` varchar(40) NOT NULL,
  `password` varchar(65) NOT NULL,
  `job` varchar(100) NOT NULL,
  `structure_name` varchar(85) NOT NULL,
  `structure_type` varchar(85) NOT NULL,
  `structure_field` varchar(200) NOT NULL,
  `job_field` varchar(200) DEFAULT NULL,
  `territory` varchar(45) NOT NULL,
  `wishes` varchar(300) DEFAULT NULL,
  `website` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`idClient`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Ressources_Externes`
--

DROP TABLE IF EXISTS `Ressources_Externes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ressources_Externes` (
  `idRessources_Externes` int NOT NULL AUTO_INCREMENT,
  `link` varchar(300) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`idRessources_Externes`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Ressources_Favart`
--

DROP TABLE IF EXISTS `Ressources_Favart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ressources_Favart` (
  `idRessources_Favart` int NOT NULL AUTO_INCREMENT,
  `link` varchar(500) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`idRessources_Favart`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Client`
--

LOCK TABLES `Client` WRITE;
/*!40000 ALTER TABLE `Client` DISABLE KEYS */;
/*!40000 ALTER TABLE `Client` ENABLE KEYS */;
UNLOCK TABLES;




--
-- Table structure for table `logos`
--

DROP TABLE IF EXISTS `logos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lien_url` varchar(1024) NOT NULL,
  `titre` varchar(48) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logos`
--

LOCK TABLES `logos` WRITE;
/*!40000 ALTER TABLE `logos` DISABLE KEYS */;
INSERT INTO `logos` VALUES (1,'https://uasevent.hautsdefrance.cci.fr/3emeri/wp-content/uploads/sites/7/2017/07/logo-oxalia.png',NULL),(2,'https://www.penatesetcite.fr/wp-content/uploads/2017/08/FONCIERE_Logo-Couleur-vertical-1.png',NULL),(3,'https://www.precarite-energie.org/wp-content/uploads/2018/12/reh-logo-rogne-0.jpg',NULL),(4,'https://lh3.googleusercontent.com/proxy/Ddjn51zCple1E4Oou7eVkPgG2oSSlhRQmi41oUVrJB3Kfaqu78SfXKaGHmYpgrl9eh8m5etq7r2Ylgmo9y3E6JeOhGvuoLBgNr2VQhu833X3o5TzR5u6qQ7F4qTAEvA',NULL),(5,'https://pbs.twimg.com/profile_images/1245993857486995459/LuZyQ9Za_400x400.png',NULL),(6,'https://upload.wikimedia.org/wikipedia/fr/6/68/Logo_Malakoff_Humanis.jpeg',NULL),(7,'http://lescanaux.com/wp-content/themes/les-canaux/assets/images/les-canaux_logo.svg',NULL),(8,'https://media-exp1.licdn.com/dms/image/C560BAQHAeyO03VeezA/company-logo_200_200/0/1543844959060?e=2159024400&v=beta&t=sc3unXbTVRd-ceHoxwJkbd885CaqauPlv_lym6FXTMw',NULL),(9,'https://upload.wikimedia.org/wikipedia/fr/thumb/8/80/Logo_Hauts-de-France_2016.svg/1200px-Logo_Hauts-de-France_2016.svg.png',NULL),(10,'https://upload.wikimedia.org/wikipedia/fr/8/8d/Min_transition_ecologique_logo.jpg',NULL),(11,'https://www.cohesion-territoires.gouv.fr/themes/custom/mct_theme/logo.svg',NULL),(12,'https://agriculture.gouv.fr/sites/minagri/files/marianne-charte_0.png',NULL),(13,'http://www.justice.gouv.fr/include_htm/logo-theme-gouv/logov2.jpg',NULL);
/*!40000 ALTER TABLE `logos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projets`
--

DROP TABLE IF EXISTS `projets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `logo` varchar(1024) NOT NULL,
  `titre` varchar(128) NOT NULL,
  `porteurs` varchar(128) NOT NULL,
  `enjeux` varchar(512) NOT NULL,
  `missions` varchar(512) NOT NULL,
  `partenaires` varchar(512) NOT NULL,
  `territoires` varchar(256) NOT NULL,
  `outils` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projets`
--

LOCK TABLES `projets` WRITE;
/*!40000 ALTER TABLE `projets` DISABLE KEYS */;
INSERT INTO `projets` VALUES (1,'https://uasevent.hautsdefrance.cci.fr/3emeri/wp-content/uploads/sites/7/2017/07/logo-oxalia.png','D\'abord Jeune','Groupement Oxalia (bailleurs sociaux)','Prévenir les sorties sèches à la fin des dispositifs institutionnels et permettre l’accès au l’autonomie citoyenne des jeunes','Mise en œuvre d’une nouvelle stratégie régionale pour lutter contre les sorties sèches à la fin de l’aide sociale à l’enfance (ASE)','Stratégie nationale de prévention et de lutte contre la pauvreté, Département du Nord, Délégation Interministérielle pour l\'Habitat et le Logement','Hauts-de-France, Valenciennois, Métropole Européenne de Lille, Maubeugeois-Avesnois, Calaisis','Droit à l’expérimentation,Communauté d’action,Modèle opérationnel,Modèle économique à impact ,Modèle juridique et financier'),(2,'https://www.penatesetcite.fr/wp-content/uploads/2017/08/FONCIERE_Logo-Couleur-vertical-1.png','La Foncière Chênelet','Foncière Chênelet','Transformer la vacance foncière en logement social très écologique pour les personnes à faible revenu','Transformer le modèle économique du logement social à travers la mise en oeuvre du plus important Contrat à Impact Social structuré en France basé sur les coûts évités économiques, sociaux et environnementaux','Ministère chagé du Logement, Agence nationale de l’habitat (Anah)','Département du Pas-de-Calais, Département du Cher','Droit à l’expérimentation, Modèle économique à impact, Modèle juridique et financier'),(3,'https://www.precarite-energie.org/wp-content/uploads/2018/12/reh-logo-rogne-0.jpg','Réseau Eco Habitat','Porteur du projet : Réseau Eco Habitat','Permettre aux personnes en situation de grande précarité de pouvoir rénover le logement dont ils sont propriétaires à travers la mobilisation de solutions techniques et financières de droit commun et hors droit commun','Permettre aux personnes en situation de grande précarité de pouvoir rénover le logement dont ils sont propriétaires à travers la mobilisation de solutions techniques et financières de droit commun et hors droit commun','Ministère chargé du Logement, Agence nationale de l’habitat (Anah)','Hauts-de-France','Droit à l’expérimentation, \nCommunauté d’action, \nModèle économique à impact, \nModèle juridique et financier, \n'),(31,'https://res.cloudinary.com/copas/image/upload/v1587228389/Logos%20clients/drjscs.jpg','1 Jeune, 1 Toit, 1 Emploi','DRJSCS Hauts-de-France','Proposer de nouvelles solutions d\'accompagnement pour les jeunes sous protection judiciaire dans le cadre de la réforme du code de procédure de la justice des mineurs','Construire la stratégie d’expérimentation du programme avec les équipes opérationnelles en lien avec le contexte territorial et les politiques publiques en charge de la jeunesse','Ministère de la Justice, Direction Interrégionale de la Protection Judiciaire de la Jeunesse','Hauts-de-France','Droit à l’expérimentation, \nCommunauté d’action, \nModèle opérationnel\n'),(32,'https://www.acheter-responsable-grandest.com/globalflexit/images/img_base/actualites/740_400_7_ess2024-logo-2020-15-quadri.png','France Relance Achats Solidaires','Les Canaux','Permettre l\'accès à la commande publique des structures de l\'ESS et de l\'IAE, ainsi que des TPE-PME dans le cadre du plan de relance pour tous','Structurer les modèles économique, juridique et financier, et les outils d\'accompagnement des acteurs publics/privés pour le déploiement de la solution','Ministère de l\'économie, des finances et de la relance, Banque des Territoires, Paris 2024, Solideo, Regions Hauts-de-France, Grand Est, Normandie','National','Communauté d\'action\nModèle économique à impact\nModèle juridique et financier\n'),(33,'https://upload.wikimedia.org/wikipedia/fr/6/68/Logo_Malakoff_Humanis.jpeg','Réseau de confiance','Malakoff Humanis','Favoriser le lien social pour les seniors à travers un réseau de personnes et de partenaires en proximité de leur domicile','Renforcer le modèle partenarial, opérationnel et évaluatif de la solution','Ville de Roubaix, Ville de Bordeaux, Agirc-Arrco','Roubaix, Wattrelos, Bordeaux','Communauté d’action\nModèle opérationnel\nModèle évaluatif\n');
/*!40000 ALTER TABLE `projets` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;


-- Dump completed on 2021-02-05 14:51:14

