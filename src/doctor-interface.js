import { DoctorSearch } from './doctor-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#doctor-form").submit(function(event) {
    event.preventDefault();
    let illness = $("#illness").val();
    $('#illness').val("");
    let name = $("#name").val();
    $('#name').val("");
    $('#result').show();

    console.log(illness);
    console.log(name);

    let randomImage = new RandomImage();
    let promise = randomImage.getRandomBackground(userTheme);

    promise.then(function(response) {
      let body = JSON.parse(response);

      $('result').html(
        {
          : `url('${body.urls.raw + 'dpi=2'})`,
          'background-repeat': 'no-repeat',
          'background-size': 'cover',
          'height': '100vh'
        });

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
