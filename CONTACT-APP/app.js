// Mengambil argument dari command line
// const command = process.argv[2];
// if(command === "add") {

const yargs = require("yargs");
const contacts = require("./contacts");

yargs.command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: "string",
        },
        email: {
            describe: "Email",
            demandOption: false,
            type: "string",
        },
        noHP: {
            describe: "Nomor Handphone",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    },
})

.demandCommand();

//Menampilkan daftar semua nama contact
yargs.command({
    command: "list",
    describe: "Menampikan semua nama & list no HP contact",
    handler() {
        contacts.listContact();
    },
});

//Menapilkan detail sebuah contact
yargs.command({
    command: "detail",
    describe: "Menampikan detail sebuah contact berdasarkan nama",
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    },
});

//Menghapus contact berdasarkan nama
yargs.command({
    command: "delete",
    describe: "Menghapus contact berdasarkan nama",
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    },
});

yargs.parse();
















    
// } else if (command === "remove") {
    
// } else if (command === "list") {
    
// }

// const contacts = require("./contacts"); 

// const main = async () => {
//     const nama = await contacts.tulisPertanyaan("Masukan nama anda : ");
//     const email = await contacts.tulisPertanyaan("Masukan email anda : ");
//     const noHP = await contacts.tulisPertanyaan("Masukan noHP anda : ");
    
//     contacts.simpanContact(nama, email, noHP);
// };

// main();

