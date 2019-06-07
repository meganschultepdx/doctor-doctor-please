export class DoctorSearch {

  getDoctor(illness, firstName, lastName) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();

      let key = process.env.API_KEY;

      let url = `https://api.unsplash.com/photos/random?client_id=${key}&query=${userTheme}&orientation=landscape`;

      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
           reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
