/* const getStatus = () => true; */
/* const getStatus = true; */

/* const download =
 */
const download = () => {
  return new Promise((resolve, reject) => {
    const status = false;
    setTimeout(() => {
      if (status) {
        resolve("download berhasil");
      } else {
        reject("download gagal");
      }
    }, 3000);
  });
};
/* console.log(download()); */
download()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
