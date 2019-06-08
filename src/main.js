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

    console.log(illness);
    console.log(name);
    $('#showResults').show();

    let search = new DoctorSearch();
    let promise = search.getDoctor(illness, name);

    promise.then(function(response) {
      let body = JSON.parse(response);

      if(body.meta.count === 0) {
        $('.noResults').text('Sorry, there are no results that match your search.')
      } else {
        body.data.forEach(function(data){
          let acceptsNew = '';
          if (data.practices[0].accepts_new_patients === true) {
            acceptsNew = 'Accepting New Patients: Yes';
          } else {
            'Accepting New Patients: No'
          }

          $('.showName').append(`<strong>Doctor's Name:</strong>  ${data.profile.first_name}${data.profile.last_name}`);
          $('.showPractice').text(`<strong>Practice:</strong> ${data.practices[0].name}`);
          $('.showAddress').text(`<strong>Address:</strong>  ${data.practices[0].visit_address}`);
          $('.showPhones').text(`<strong>Phone Number:</strong>  ${data.practices[0].phones[0]}`);
          $('.showWebsite').text(`<strong>Website: </strong> ${data.practices[0].website}`);
          $('.showAcceptsNew').text(`<strong>Accepts New Patients:</strong> ${data.practices[0].accepts_new_patients}`);
          $('.showLanguages').text(`<strong>Languages:</strong>  ${data.profile.languages}`);
        },

        function(error) {
          $('.error').text(`There was an error processing your request: ${error.message}`);
        });
        }
      });
    });
  });
