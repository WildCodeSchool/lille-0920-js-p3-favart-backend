-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: Favart-Projets
-- ------------------------------------------------------
-- Server version	8.0.22-0ubuntu0.20.04.3

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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projets`
--

LOCK TABLES `projets` WRITE;
/*!40000 ALTER TABLE `projets` DISABLE KEYS */;
INSERT INTO `projets` VALUES (1,'https://uasevent.hautsdefrance.cci.fr/3emeri/wp-content/uploads/sites/7/2017/07/logo-oxalia.png','D\'abord Jeune','Groupement Oxalia (bailleurs sociaux)','Prévenir les sorties sèches à la fin des dispositifs institutionnels et permettre l’accès au l’autonomie citoyenne des jeunes','Mise en œuvre d’une nouvelle stratégie régionale pour lutter contre les sorties sèches à la fin de l’aide sociale à l’enfance (ASE)','Stratégie nationale de prévention et de lutte contre la pauvreté, Département du Nord, Délégation Interministérielle pour l\'Habitat et le Logement','Hauts-de-France, Valenciennois, Métropole Européenne de Lille, Maubeugeois-Avesnois, Calaisis','Droit à l’expérimentation,Communauté d’action,Modèle opérationnel,Modèle économique à impact ,Modèle juridique et financier'),(2,'https://www.penatesetcite.fr/wp-content/uploads/2017/08/FONCIERE_Logo-Couleur-vertical-1.png','La Foncière Chênelet','Foncière Chênelet','Transformer la vacance foncière en logement social très écologique pour les personnes à faible revenu','Transformer le modèle économique du logement social à travers la mise en oeuvre du plus important Contrat à Impact Social structuré en France basé sur les coûts évités économiques, sociaux et environnementaux','Ministère chagé du Logement, Agence nationale de l’habitat (Anah)','Département du Pas-de-Calais, Département du Cher','Droit à l’expérimentation, Modèle économique à impact, Modèle juridique et financier'),(3,'logo de Réseau Eco Habitat','Réseau Eco Habitat','Porteur du projet : Réseau Eco Habitat','Permettre aux personnes en situation de grande précarité de pouvoir rénover le logement dont ils sont propriétaires à travers la mobilisation de solutions techniques et financières de droit commun et hors droit commun','Permettre aux personnes en situation de grande précarité de pouvoir rénover le logement dont ils sont propriétaires à travers la mobilisation de solutions techniques et financières de droit commun et hors droit commun','Ministère chargé du Logement, Agence nationale de l’habitat (Anah)','Hauts-de-France','Droit à l’expérimentation, \nCommunauté d’action, \nModèle économique à impact, \nModèle juridique et financier, \n'),(31,'logo Préfet des Hauts-de-France - DRJSCS Hauts-de-France','1 Jeune, 1 Toit, 1 Emploi','DRJSCS Hauts-de-France','Proposer de nouvelles solutions d\'accompagnement pour les jeunes sous protection judiciaire dans le cadre de la réforme du code de procédure de la justice des mineurs','Construire la stratégie d’expérimentation du programme avec les équipes opérationnelles en lien avec le contexte territorial et les politiques publiques en charge de la jeunesse','Ministère de la Justice, Direction Interrégionale de la Protection Judiciaire de la Jeunesse','Hauts-de-France','Droit à l’expérimentation, \nCommunauté d’action, \nModèle opérationnel\n'),(32,'Les Canaux / ESS 2024','France Relance Achats Solidaires','Les Canaux','Permettre l\'accès à la commande publique des structures de l\'ESS et de l\'IAE, ainsi que des TPE-PME dans le cadre du plan de relance pour tous','Structurer les modèles économique, juridique et financier, et les outils d\'accompagnement des acteurs publics/privés pour le déploiement de la solution','Ministère de l\'économie, des finances et de la relance, Banque des Territoires, Paris 2024, Solideo, Regions Hauts-de-France, Grand Est, Normandie','National','Communauté d\'action\nModèle économique à impact\nModèle juridique et financier\n'),(33,'Malakoff Humanis','Réseau de confiance','Malakoff Humanis','Favoriser le lien social pour les seniors à travers un réseau de personnes et de partenaires en proximité de leur domicile','Renforcer le modèle partenarial, opérationnel et évaluatif de la solution','Ville de Roubaix, Ville de Bordeaux, Agirc-Arrco','Roubaix, Wattrelos, Bordeaux','Communauté d’action\nModèle opérationnel\nModèle évaluatif\n');
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

-- Dump completed on 2021-01-29 12:29:25
