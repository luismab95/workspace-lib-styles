const fs = require('fs');
const path = require('path');

function traverseDirectory(dir) {
    const arrFile = ['.woff2', '.svg', '.eot', '.woff', '.ttf']
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(`Error reading directory ${dir}: ${err.message}`);
            return;
        }

        files.forEach(file => {
            const dirPath = path.join(dir, file);
            fs.stat(dirPath, (err, stats) => {
                if (err) {
                    console.error(`Error getting stats of file ${dirPath}: ${err.message}`);
                    return;
                }
                if (stats.isDirectory()) {
                    fs.readdir(dirPath, (err, files) => {
                        if (err) {
                            console.error(`Error reading directory ${dir}: ${err.message}`);
                            return;
                        }
                        fs.mkdir(path.join(__dirname, '/dist/svg'), { recursive: true }, (err) => {
                            if (err) {
                                console.error(`Error creating directory: ${err.message}`);
                            }
                        });
                        files.forEach(file => {
                            const filePath = path.join(dirPath, file);
                            const fileName = filePath.split('/').pop();
                            const regex = new RegExp(arrFile.join('|'));
                            if (regex.test(fileName)) {
                                const name = fileName.split('.')[0];
                                const extension = fileName.split('.').pop();
                                const toFilePath = path.join(__dirname, `/dist/svg`, `${fileName}`);
                                fs.copyFile(filePath, toFilePath, (err) => {
                                    if (err) {
                                        console.error('Error al copiar el archivo:', err);
                                        return;
                                    }
                                    console.log('El archivo ha sido copiado con éxito.');
                                });
                            }
                        });
                    })
                }
            });
        });
    });
}



function generarCadenaAleatoria() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let cadenaAleatoria = '';
    for (let i = 0; i < 16; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        cadenaAleatoria += caracteres.charAt(indice);
    }
    return cadenaAleatoria;
}


const targetPath = path.join(__dirname, `/src/scss/icon-fonts`);
traverseDirectory(targetPath);
