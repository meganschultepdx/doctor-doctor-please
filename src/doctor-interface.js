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
    $('#showResults').show();

    console.log(illness);
    console.log(name);

    let search = new DoctorSearch();
    let promise = search.getDoctor(illness, name);

    promise.then(function(response) {
      let body = JSON.parse(response);

      if(body.meta.count === 0) {
        $('.noResults').text('Sorry, there are no results that match your search.')
      } else {
        $('.showFirstName').text(`First Name:  ${data.profile.first_name}`);
        $('.showLastName').text(`Last Name:  ${data.profile.last_name}`);
        $('.showPractice').text(`Practice: ${data.practice}`);
        $('.showAddress').text(`Address:  ${data.practice.visit_address}`);
        $('.showPhones').text(`Phone Number(s):  ${data.practice.phones}`);
        $('.showWebsite').text(`Website:  ${data.practice.website}`);
        $('.showNewPatients').text(`Accepts New Patients:  ${data.practice.accepts_new_patients}`);
        $('.showGender').text(`Gender:  ${data.profile.gender}`);
        $('.showLanguages').text(`Languages:  ${data.profile.languages}`);
      }

    }, function(error) {
      $('.error').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
