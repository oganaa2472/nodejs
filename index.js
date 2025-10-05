const fs = require('fs');
const { get } = require('http');
const superagent = require('superagent');

// many prmomises function with async await

const getDogPic = async () => {

    try {
        const data = await fs.promises.readFile(`${__dirname}/dog.txt`, 'utf-8');
        console.log(`Breed: ${data}`);
        const res1Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const res2Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const res3Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const all = await Promise.all([res1Pro, res2Pro, res3Pro]);// run same time

        const imgs = all.map(el => el.body.message);
        console.log(imgs);
        await fs.promises.writeFile('dog-img.txt', imgs.join('\n'));
        console.log('Random dog image saved to file!');
    } catch (err) {
        console.log(err);
        throw err;
    }   
}
getDogPic()
// async function
// const getDogPic = async () => {
//     try {
//         const data = await fs.promises.readFile(`${__dirname}/dog.txt`, 'utf-8');
//         console.log(`Breed: ${data}`);
//         const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//         console.log(res.body.message);
//         await fs.promises.writeFile('dog-img.txt', res.body.message);
//         console.log('Random dog image saved to file!');
//     } catch (err) {
//         console.log(err);
//         throw err;
//     }
// };
// console.log('1: Will get dog pics!');
// const x = getDogPic();
// console.log(x)
// console.log('2: Will get dog pics!');

// promise function 
/*
const readFilePro = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) reject('I could not find that file 😢');
            resolve(data);
        });
    });
};
readFilePro(`${__dirname}/dog.txt`)
    .then(data => {
        console.log(`Breed: ${data}`);
        return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    })
    .then(res => {
        console.log(res.body.message);
        return writeFilePro('dog-img.txt', res.body.message);
    })
    .then((msg) => {
        console.log('Random dog image saved to file!',msg);
    })
    .catch(err => {
        console.log(err);
    });

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if (err) reject('Could not write file 😢');
            resolve('success');
        });
    });
};

// support promises function with callback









// fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
        

//     }
//     console.log('File contents:', data);
//     superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).then(res => {
//         if (err) {
//                 console.error('Error fetching image:', err);
//                 return;
//             }
//             // console.log(res.body.message);
//             fs.writeFile('dog-img.txt', res.body.message, (err) => {
//                 if (err) {
//                     console.error('Error writing file:', err);
//                     return;
//                 }
//                 console.log('Image URL saved to dog-img.txt');
//             });
//     }).catch(err => {
//         console.error('Error fetching image:', err);
//     });

    
// })
*/