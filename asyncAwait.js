// metode menggunakan async await

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

const main = async () => {
  console.log(await persiapan());
  console.log(await rebusAir());
  console.log(await masak());
};

main();
