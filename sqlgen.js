var random_data = require('./random_data');

var sig_2_app = random_data.sig_2_app

var id_offset = 10000;

console.log("delete from service_categories;");
console.log("insert into service_categories values(1, 'storage', '2014-07-06 00:00:00', '2014-07-06 00:00:00');");
console.log("insert into service_categories values(2, 'mail', '2014-07-06 00:00:00', '2014-07-06 00:00:00');");
console.log("insert into service_categories values(3, 'im', '2014-07-06 00:00:00', '2014-07-06 00:00:00');");

console.log("delete from services;");
console.log("INSERT INTO `services` VALUES (1,'GoogleDrive','/assets/serviceIcons/GoogleDrive.png','','',NULL,'2014-06-14 01:13:31','2014-06-14 01:13:31'),(2,'Box','/assets/serviceIcons/Box.png','','',NULL,'2014-06-14 01:13:44','2014-06-14 01:13:44'),(3,'iCloud','/assets/serviceIcons/iCloud.png','','',NULL,'2014-06-14 01:13:55','2014-06-14 01:13:55'),(4,'Dropbox','/assets/serviceIcons/Dropbox.png','','',NULL,'2014-06-14 01:14:04','2014-06-14 01:14:04'),(5,'AmazonCloudDrive','/assets/serviceIcons/AmazonCloudDrive.png','','',NULL,'2014-06-14 01:14:16','2014-06-14 01:14:16'),(6,'ShareFile','/assets/serviceIcons/ShareFile.png','','',NULL,'2014-06-14 01:14:24','2014-06-14 01:14:24'),(7,'SugarSync','/assets/serviceIcons/SugarSync.png','','',NULL,'2014-06-14 01:14:35','2014-06-14 01:14:35'),(8,'Syncplicity','/assets/serviceIcons/Syncplicity.png','','',NULL,'2014-06-14 01:14:46','2014-06-14 01:14:46'),(9,'Hightail','/assets/serviceIcons/Hightail.png','','',NULL,'2014-06-14 01:14:56','2014-06-14 01:14:56'),(10,'DropSend','/assets/serviceIcons/DropSend.png','','',NULL,'2014-06-14 01:15:07','2014-06-14 01:15:07'),(11,'MicrosoftSkyDrive','/assets/serviceIcons/MicrosoftSkyDrive.png','','',NULL,'2014-06-14 01:15:16','2014-06-14 01:15:16'),(12,'Wuala','/assets/serviceIcons/Wuala.png','','',NULL,'2014-06-14 01:15:24','2014-06-14 01:15:24'),(13,'Photobucket','/assets/serviceIcons/Photobucket.png','','',NULL,'2014-06-14 01:15:35','2014-06-14 01:15:35'),(14,'Egnyte','/assets/serviceIcons/Egnyte.png','','',NULL,'2014-06-14 01:15:45','2014-06-14 01:15:45'),(15,'WeTransfer','/assets/serviceIcons/WeTransfer.png','','',NULL,'2014-06-14 01:15:53','2014-06-14 01:15:53'),(16,'Accellion','/assets/serviceIcons/Accellion.png','','',NULL,'2014-06-14 01:16:03','2014-06-14 01:16:03'),(17,'LiveDrive','/assets/serviceIcons/LiveDrive.png','','',NULL,'2014-06-14 01:16:12','2014-06-14 01:16:12'),(18,'JungleDisk','/assets/serviceIcons/JungleDisk.png','','',NULL,'2014-06-14 01:16:21','2014-06-14 01:16:21'),(19,'Skypath','/assets/serviceIcons/Skypath.png','','',NULL,'2014-06-14 01:16:30','2014-06-14 01:16:30'),(20,'OneDrive','/assets/serviceIcons/OneDrive.png','','',NULL,'2014-06-14 01:16:40','2014-06-14 01:16:40');");

for (var key in sig_2_app) {
    var app = sig_2_app[key];



    id = parseInt(key, 10);

    if (id > 99) {
        console.log("insert into services values(" + (id) + ", '" + app.appname + "', '', '', '',NULL, '2014-06-14 01:13:31','2014-06-14 01:13:31');");

        if (app.category == 'mail') {
            console.log("insert into service_category_maps values(NULL, " + (id) + ", 2, '2014-06-14 01:13:31','2014-06-14 01:13:31');");
        } else if (app.category == 'im') {
            console.log("insert into service_category_maps values(NULL, " + (id) + ", 3, '2014-06-14 01:13:31','2014-06-14 01:13:31');");
        }
    }

    console.log("insert into service_lookups values(NULL, " + (id) + ",'" + app.hostname + "','" + app.appname + "','2014-06-14 01:13:31','2014-06-14 01:13:31');");

}
