const fs= require('fs');

fs.writeFileSync('Raj.txt', 'Hello, World!', 'utf8');
console.log('File written successfully.');


const data=fs.readFileSync('Raj.txt', 'utf8');
console.log('File content is given as:', data);


fs.appendFileSync('Raj.txt', '\nThis is an new added line in the file.', 'utf8');
console.log('Data appended successfully.');


// fs.unlinkSync('Raj.txt');
// console.log('File deleted successfully.');


fs.mkdirSync('newFolder');
console.log('Folder created successfully.');

// fs.rmdirSync('newFolder');
// console.log('Folder deleted successfully.');


if(fs.existsSync('Raj.txt')) {
    console.log('File exists.');
}else{
    console.log('File not found, need to create it.');
}