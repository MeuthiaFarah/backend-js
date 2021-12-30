// study kasus kak aufa yang di remake
class Config {
  static setSecond = (time) => {
    return time * 1000;
  };

  static getSecond = () => {
    return this.setSecond(10);
  };

  static setNama = (name) => {
    return name;
  };

  static getNama = () => {
    return this.setNama("dapatkan nama selesai");
  };
}

const result = (callback) => {
  console.log("mendapatkan nama");
  setTimeout(() => {
    // anonymous function: gaada nama fungsinya
    callback(Config.getNama());
  }, Config.getSecond());
};

result((nama) => {
  console.log(nama);
});
