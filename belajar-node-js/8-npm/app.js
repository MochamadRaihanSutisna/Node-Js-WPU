const validator = require("validator");
const chalk = require("chalk")

// console.log(validator.isEmail("mochamadraihansutisnagmail.com"));
// console.log(validator.isMobilePhone("081802021119", "id-ID"));
// console.log(validator.isMobilePhone("01802021119", "id-ID"));

// console.log(chalk.bgBlue("Mochamad Raihan Sutisna"));
// console.log(chalk.italic.bgGreen.red("Dewi Salwa Waenurlillah"));

const nama = "Mochamad Raihan Sutisna";
const nama1 = "Dewi Salwa Waenurlillah";

const pesan = chalk`Lorem, ipsum dolor {blue.bgRed.bold sit amet} consectetur adipisicing elit. Rem, aut?... Halo nama saya {bgBlue.red ${nama}} dan saya menyukai ${nama1}`;

console.log(pesan);