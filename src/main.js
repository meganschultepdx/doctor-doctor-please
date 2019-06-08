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
    $('#title').show();

    let search = new DoctorSearch();
    let promise = search.getDoctor(illness, name);

    promise.then(function(response) {
      let body = JSON.parse(response);

      if(body.meta.count === 0) {
        $('.showResults').text('Sorry, there are no results that match your search.');

      } else {
        body.data.forEach(function(data) {
          let acceptsNew = '';
          let website = '';
          if (data.practices[0].website === undefined) {
            website = 'No website listed';
          }
          if (data.practices[0].accepts_new_patients === true) {
            acceptsNew = 'Yes';
          } else {
            acceptsNew = 'No'
          }

          $('.showResults').append(`<strong>Doctor's Name:</strong>  ${data.profile.first_name} ${data.profile.last_name}<br>
          <strong>Practice:</strong> ${data.practices[0].name}<br>
          <strong>Address:</strong>  ${data.practices[0].visit_address.street}<br> ${data.practices[0].visit_address.city}, ${data.practices[0].visit_address.state} ${data.practices[0].visit_address.zip}<br>
          <strong>Phone Number:</strong>  ${data.practices[0].phones[0].number}<br>
          <strong>Website: </strong> ${website}<br>
          <strong>Accepts New Patients:</strong>  ${acceptsNew}<br>
          <strong>Languages:</strong>  ${data.profile.languages[0].name}<br><br><br>`);
        },

        function(error) {
          $('.error').text(`There was an error processing your request: ${error.message}`);
        });
        }
      });
    });
  });
