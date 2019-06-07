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

    let search = new DoctorSearch();
    let promise = search.getDoctor(illness, name);

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showFirstName').text(`First Name:  ${data.practice.profile.first_name}`);
      $('.showLastName').text(`Last Name:  ${data.practice.profile.first_name}`);
      $('.showPractice').text(`Practice: ${data.practice}`);
      $('.showAddress').text(`Address:  ${data.practice.visit_address}`);
      $('.showPhones').text(`Phone Number(s):  ${data.practice.phones}`);
      $('.showWebsite').text(`Website:  ${data.practice.website}`);
      $('.showNewPatients').text(`Accepts New Patients:  ${data.practice.accepts_new_patients}`);
      $('.showGender').text(`Gender:  ${data.practice.profile.gender}`);
      $('.showLanguages').text(`Languages:  ${data.practice.profile.languages}`);

    }, function(error) {
      $('.error').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
