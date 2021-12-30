/* ini cara mengurutkan proses async menggunakan callback */

/* function persiapan() {
    console.log("persiapan...");

}

function rebusAir() {
    console.log("rebus air...");

}

function masak() {
    console.log("masak...");
    console.log("selesai");
}

function main() {
    setTimeout(() => {
        persiapan();

        setTimeout(() => {
            rebusAir();

            setTimeout(() => {
                masak();
            }, 5000);
        }, 7000);
    }, 3000);
}

main(); */

// proses async menggunakan promise
const persiapan = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Persiapan...");
    }, 3000);
  });
};

function rebusAir() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Rebus Air...");
    }, 7000);
  });
}

function masak() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Masak, Selesai...");
    }, 5000);
  });
}

const main = () => {
  persiapan()
    .then(function (result) {
      console.log(result);
      return rebusAir();
    })
    .then(function (result) {
      console.log(result);
      return masak();
    })
    .then(function (result) {
      console.log(result);
    });
};

main();
