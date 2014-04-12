# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.6.16)
# Database: shoes
# Generation Time: 2014-04-12 18:30:53 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table shoe
# ------------------------------------------------------------

DROP TABLE IF EXISTS `shoe`;

CREATE TABLE `shoe` (
  `ref` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `donorsid` smallint(5) unsigned NOT NULL,
  `organizationid` smallint(5) unsigned DEFAULT NULL,
  `img` blob,
  `gender` char(10) DEFAULT NULL,
  `size` char(10) DEFAULT NULL,
  `type` char(10) DEFAULT NULL,
  `received_date` datetime DEFAULT NULL,
  `sent_date` datetime DEFAULT NULL,
  PRIMARY KEY (`ref`),
  KEY `FK_shoe` (`donorsid`),
  KEY `FK_organization` (`organizationid`),
  CONSTRAINT `FK_organization` FOREIGN KEY (`organizationid`) REFERENCES `organization` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_shoe` FOREIGN KEY (`donorsid`) REFERENCES `donors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

LOCK TABLES `shoe` WRITE;
/*!40000 ALTER TABLE `shoe` DISABLE KEYS */;

INSERT INTO `shoe` (`ref`, `donorsid`, `organizationid`, `img`, `gender`, `size`, `type`, `received_date`, `sent_date`)
VALUES
	(1,1,1,'FSDFSDSFSDF','M','45','bota',NULL,NULL),
	(2,1,1,'FSDASDASD','M','44','sapato',NULL,NULL),
	(3,2,2,'FSDAWEQWEASD','F','37','sapato',NULL,NULL),
	(4,1,1,'FSDAWEQWEASD','F','37','sapato',NULL,NULL),
	(5,3,1,'HHHHHHH1X','masculino','45','sapatilha',NULL,NULL),
	(6,2,NULL,'SDFSDFSDFASDF','F','32','sandalia','2014-04-12 18:33:17',NULL),
	(7,2,NULL,'SDFSDassasDFASDF','F','33','sandalia','2014-04-12 18:35:00',NULL),
	(8,2,NULL,'SDFSDassasDFASDF','F','31','sandalia','2014-04-12 18:36:16',NULL),
	(9,3,NULL,'WQRQREQWRRWRQWR','M','42','sandalia','2014-04-12 19:02:37',NULL);

/*!40000 ALTER TABLE `shoe` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
