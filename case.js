function persiapan() {
    setTimeout(() => {
        console.log("persiapan...");
    }, 3000);
}

function rebusAir() {
    setTimeout(() => {
        console.log("rebus air...");
    }, 7000);
}

function masak() {
    setTimeout(() => {
        console.log("masak...");
        console.log("selesai");
    }, 5000);
}

function main() {
    persiapan();
    rebusAir();
    masak();
}

// fungsi ini akan memanggil persiapan, masak baru rebus air
main();