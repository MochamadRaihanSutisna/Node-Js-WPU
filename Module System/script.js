// console.log("halo dewi");
// const nama = "Mochamad Raihan Sutisna";
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama(nama));

// const fs = require("fs"); //core module
// const cetakNama = require("./coba"); // local module
// const moment = require("moment"); //third party module / npm module / node_modules

// console.log("Hello WPU")

// const cetakNama = require("./coba");
// const PI = require("./coba");

// console.log(cetakNama("raihan"));
// console.log(PI);

const coba = require("./coba");
console.log(coba.cetakNama("Mochamad Raihan Sutisna"),
coba.PI,
coba.mahasiswa.cetakMhs(),
new coba.Orang());
