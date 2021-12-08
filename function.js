// function declaration

/**
 * Fungsi menghitung luas lingkaran
 * 
 * @param {number} jari - jari jari lingkaran
 * @returns {number} hasil - hasil luas lingkatan
 */

/**function hitungLuas(jari) {
    const hasil = 3.14 * jari * jari;

    return hasil;
}

console.log(hitungLuas(5));
*/

// function expression
/* const hitungLuas = function (jari) {
    const hasil = 3.14 * jari * jari;

    return hasil;
}

console.log(hitungLuas(5)); */

// Arrow Function {yang bakal dipake}
// Bisa dipakaikan default parameter
const hitungLuas = (jari = 2) =>{
    const hasil = 3.14 * jari * jari;

    return hasil;
}
console.log(hitungLuas(5));