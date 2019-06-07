export class DoctorSearch {

  getDoctor(illness, name) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();

      let key = process.env.exports.apiKey;

      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.5155,122.6793&query=${illness}&name=${name},100&skip=2&limit=10&user_key=${key}`;

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
