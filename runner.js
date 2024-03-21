const fs = require('fs');


function generateRandomData(minLength, maxLength) {
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function writeRandomDataToFile(numLines, minLength, maxLength) {
    const fileName = 'random_data.txt';
    let data = '';

   
    for (let i = 1; i <= numLines; i++) {
        let line = `${i}. ${generateRandomData(minLength, maxLength)}`;
        if (i !== numLines) {
            line += ` (_end:${i})`;
        }
        line += '\n';
        data += line;
    }

    
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Data written to file successfully!');
        }
    });
}


const numLines = 50000;
const minLength = 15;
const maxLength = 35;
writeRandomDataToFile(numLines, minLength, maxLength);
