// masukin object kedalam variable biar gak manggil satu satu
// destruct object bisa bebas urutannya, yg penting itu urutan pas dipanggil console.log 
const user = {
    nama: "Meuthia",
    umur: 19,
    alamat: "Depok",
};

const {nama, umur, alamat} = user;

console.log(nama, umur, alamat);
