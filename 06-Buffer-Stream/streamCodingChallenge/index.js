const fs = require('fs');
const zlib = require('zlib').createGzip();
const path = require('path');

const filePath = process.argv[2];
const allFiles = fs.readdirSync(filePath);
const newDirPath = path.join(path.dirname(filePath), 'streamZipFiles');

 fs.mkdir(newDirPath, (err)=>{
   if(err) throw err;

   allFiles.forEach(file => {
     const readFile = fs.createReadStream(path.join(filePath, file), {
       highWaterMark: 9,
     });
     const writeFile = fs.createWriteStream(
       path.join(newDirPath, file.replace(path.extname(file), '.gzip'))
     );
     readFile
       .pipe(zlib)
       .pipe(writeFile)
       .on('finish', () => {
         console.log('Zipping process is done 😊');
       });
   });
 });


