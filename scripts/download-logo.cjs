const fs = require('fs');
const https = require('https');
const path = require('path');

const url = 'https://lh3.googleusercontent.com/fife/ALs6j_G9_9_9_9_9_9_9_9_9_9_9_9_9_9_9_9_9_9_9_9_9_9_9_9_9_9_9_9_9_9'; // Need a better way to get this
// Instead of downloading from the ephemeral chat URL which blocks bots (400 Client Error),
// Let's use a nice reliable placeholder Islamic geometric logo for now or a general student union logo until the user places the actual local file.

const backupUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/1024px-Check_green_icon.svg.png';

const file = fs.createWriteStream(path.join(__dirname, '../public/logo.png'));
https.get(backupUrl, function (response) {
    response.pipe(file);
    file.on('finish', function () {
        file.close();
        console.log("Fallback logo downloaded!");
    });
}).on('error', function (err) {
    fs.unlink(path.join(__dirname, '../public/logo.png'));
    console.error("Error downloading:", err.message);
});
