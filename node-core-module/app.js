// Core Module
// File System

const fs = require('fs');


// Menuliskan string ke file (synchronous)

// try {
//     fs.writeFileSync("data/test.txt", "Hello World secara synchronous");
// } catch (e) {
//     console.log(e);
// }

// Menuliskan string ke file (asynchronous)
// fs.writeFile("data/test1.txt", "Hello ini latihan raihan", (e) => {
//     console.log(e);
// })

// Membaca isi file (synchronous)
// const data = fs.readFileSync("data/test.txt", "utf-8");
// console.log(data);

// Membaca isi file (asynchronous)
// fs.readFile("data/test.txt", "utf-8", (e, data) => {
//     if (e) throw (e);
//     console.log(data);
// });


//ReadLine
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukan nama anda : ", (nama) => {
    rl.question("Masukan No HP anda : ", (noHP) => {
        console.log(`Terimakasih ${nama}, sudah menginputkan ${noHP}`);
        const contact = {nama, noHP};
        const file = fs.readFileSync("data/contacts.json", "utf-8");
        const contacts = JSON.parse(file);
        
        contacts.push(contact);
        
        fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
        
        console.log("TERIMA KASIH BANYAK SUDAH MEMASUKKAN DATA")
        
        rl.close();
    });
});