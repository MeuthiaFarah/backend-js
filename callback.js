// fungsi pertama, digunakan untuk jadi parameter fungsi kedua
/* function formatName(nama) {
    const result = nama.toUpperCase();
    return result; //return dipake klo hasil dari fungsinya diproses lagi diluar fungsi tsb
}

// fungsi kedua akan mengambil 2 parameter
// param 1 = nama
// param 2 = manggil fungsi 1
function getName(nama, callFormatName) {
    const result = callFormatName(nama); // dimasukin variable soalnya mengembalikan data
    console.log(result);
}

getName("meuthia", formatName); */

/* Versi Arrow function YANG AKAN SELALU DIPAKAI*/
const formatName = (name) => { // nama.toUpperCase();
    const result = name.toUpperCase();
    return result;
};

const getName = (namu, callback) => {
    const result = callback(namu);
    console.log(result);
};

getName("meuthia", formatName);

/* Versi result implisit */
/* 
const formatName = (nama) => nama.toUpperCase();

const getName = (nama, callback) => console.log(callback(nama));

getName("meuthia", formatName);
*/


