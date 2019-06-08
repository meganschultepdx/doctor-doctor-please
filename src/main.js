import { DoctorSearch } from './doctorSearch.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#doctor-form").submit(function(event) {
    event.preventDefault();
    let illness = $("#illness").val();
    let name = $("#name").val();
    $('#illness').val("");
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
        $('.showFirstName').text(`First Name:  ${body.data.profile.first_name}`);
        $('.showLastName').text(`Last Name:  ${body.data.profile.last_name}`);
        $('.showPractice').text(`Practice: ${body.data.practice.name}`);
        $('.showAddress').text(`Address:  ${body.data.practice.visit_address}`);
        $('.showPhones').text(`Phone Number:  ${body.data.practice.phones[0]}`);
        $('.showWebsite').text(`Website:  ${body.data.practice.website}`);
        $('.showNewPatients').text(`Accepts New Patients:  ${body.data.practice.accepts_new_patients}`);
        $('.showGender').text(`Gender:  ${body.data.profile.gender}`);
        $('.showLanguages').text(`Languages:  ${body.data.profile.languages}`);
      }

    }, function(error) {
      $('.error').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
