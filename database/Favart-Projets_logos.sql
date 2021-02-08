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
INSERT INTO `logos` VALUES (1,'https://uasevent.hautsdefrance.cci.fr/3emeri/wp-content/uploads/sites/7/2017/07/logo-oxalia.png',NULL),(2,'https://www.penatesetcite.fr/wp-content/uploads/2017/08/FONCIERE_Logo-Couleur-vertical-1.png',NULL),(3,'https://www.precarite-energie.org/wp-content/uploads/2018/12/reh-logo-rogne-0.jpg',NULL),(4,'https://lh3.googleusercontent.com/proxy/Ddjn51zCple1E4Oou7eVkPgG2oSSlhRQmi41oUVrJB3Kfaqu78SfXKaGHmYpgrl9eh8m5etq7r2Ylgmo9y3E6JeOhGvuoLBgNr2VQhu833X3o5TzR5u6qQ7F4qTAEvA',NULL),(5,'https://www.acheter-responsable-grandest.com/globalflexit/images/img_base/actualites/1920_1080_1_ess2024-logo-2020-15-quadri.png',NULL),(6,'https://upload.wikimedia.org/wikipedia/fr/6/68/Logo_Malakoff_Humanis.jpeg',NULL),(7,'http://lescanaux.com/wp-content/themes/les-canaux/assets/images/les-canaux_logo.svg',NULL),(8,'https://mlam5kznuaxo.i.optimole.com/QBWy1iQ-pjjyF32F/w:850/h:300/q:auto/https://www.le-frenchimpact.fr/wp-content/uploads/Logo_FrenchImpact_RVB_Web.png',NULL),(9,'https://upload.wikimedia.org/wikipedia/fr/thumb/8/80/Logo_Hauts-de-France_2016.svg/1200px-Logo_Hauts-de-France_2016.svg.png',NULL),(10,'https://upload.wikimedia.org/wikipedia/fr/8/8d/Min_transition_ecologique_logo.jpg',NULL),(11,'https://www.cohesion-territoires.gouv.fr/themes/custom/mct_theme/logo.svg',NULL),(12,'https://agriculture.gouv.fr/sites/minagri/files/marianne-charte_0.png',NULL),(13,'http://www.justice.gouv.fr/include_htm/logo-theme-gouv/logov2.jpg',NULL);
/*!40000 ALTER TABLE `logos` ENABLE KEYS */;
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
