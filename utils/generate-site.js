const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent => {
            // if error reject promise
            if (err) {
                reject(err);
                return;
            }

            // resovle promise if everything is OK
            resolve({
                ok: true, 
                message: 'File Created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // reject promise
            if (err) {
                reject(err)
                return;
            }

            //resolve if successful
            resolve({
                ok: true, 
                message: 'Stylesheet Created!'
            });
        });
    });
};