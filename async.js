const fs = require('fs');
fs.writeFile(
    'sample.txt', 'Welcome to Full Stack Development', (err) => {
        if (err) {
            console.log('Error creating file', err);
            return;
        }
    }
)

fs.readFile(
    'sample.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }

        else {
            console.log('File content:', data);
        }
    }
)

fs.appendFile(
    'sample.txt', '\n Semester 3', (err) => {
        if (err) {
            console.log('Error updating file', err);
        }

        else {
            console.log('\nFile updated successfully!');
        }
    }
)

fs.readFile(
    'sample.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }

        else {
            console.log('File content:', data);
        }
    }
)