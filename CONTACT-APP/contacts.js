const chalk = require("chalk");
const fs = require("fs");
const validator = require("validator");

//Membuat folder data
// const dirPath = "./data";
// if (!fs.existsSync(dirPath)) {
//     fs.mkdirSync(dirPath);
// };

//Membuat file contact.json jika belum ada
// const dataPath = "./data/contact.json";
// if(!fs.existsSync(dataPath)) {
//     fs.writeFileSync(dataPath, "[]", "utf-8");
// };

const loadContact = () => {
    const fileBuffer = fs.readFileSync("data/contact.json", "utf-8");
    const contacts = JSON.parse(fileBuffer);
    return contacts;
}

const simpanContact = (nama, email, noHP) => {
    const contact = {nama, email, noHP};
    // const fileBuffer = fs.readFileSync("data/contact.json", "utf-8");
    // const contacts = JSON.parse(fileBuffer);
    
    const contacts = loadContact();
    
    // Cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if(duplikat) {
        console.log(chalk.red.inverse.bold(`Contact sudah terdaftar, gunakan nama lain!`));
        return false;
    }
    
    //cek email
    if(email) {
        if(!validator.isEmail(email)) {
        console.log(chalk.blue.inverse.bold(`Email tidak Valid!`));
        return false;
        }
    }
    
    //cek noHP
    if(!validator.isMobilePhone(noHP, "id-ID")) {
        console.log(chalk.blue.inverse.bold(`No HP tidak Valid!`));
        return false;
        }
        
    contacts.push(contact);
        
    fs.writeFileSync("data/contact.json", JSON.stringify(contacts));
        
    console.log("TERIMA KASIH BANYAK SUDAH MEMASUKKAN DATA");
};


const listContact = () => {
    const contacts = loadContact();
    console.log(chalk.green.inverse.bold("Daftar Kontak : "));
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`);
    });
};

const detailContact = (nama) => {
    const contacts = loadContact();
    
    const contact = contacts.find(
        (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
        );
        
        if(!contact) {
            console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`));
            return false;
        };
        
        console.log(chalk.green.inverse(contact.nama));
        console.log(contact.noHP);
        if(contact.email) {   
            console.log(contact.email);
        };
        
};

const deleteContact = (nama) => {
    const contacts = loadContact();
    
    const newContacts = contacts.filter(
        (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
        );
    
    if (contacts.length === newContacts.length) {
        console.log(chalk.blue.inverse.bold(`${nama} tidak ditemukan`));
        return false;
    };
    
    fs.writeFileSync("data/contact.json", JSON.stringify(newContacts));
        
    console.log(chalk.green.inverse.bold(` data contact ${nama} berhasil dihapus`));
};




module.exports = {simpanContact, listContact, detailContact, deleteContact};