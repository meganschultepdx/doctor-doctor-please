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

    let search = new DoctorSearch();
    let promise = search.getDoctor(illness, name);

    promise.then(function(response) {
      let body = JSON.parse(response);

      if(body.meta.count === 0) {
        $('.noResults').text('Sorry, there are no results that match your search.')

      } else {
        body.data.forEach(function(data){
          let acceptsNew = '';
          let website = '';
          if (data.practices[1].website === undefined) {
            website = 'No website listed';
          }
          if (data.practices[0].accepts_new_patients === true) {
            acceptsNew = 'Yes';
          } else {
            acceptsNew = 'No'
          }

          $('#showResults').show();
          $('.showName').html(`<strong>Doctor's Name:</strong>  ${data.profile.first_name} ${data.profile.last_name}`);
          $('.showPractice').html(`<strong>Practice:</strong> ${data.practices[0].name}`);
          $('.showAddress').html(`<strong>Address:</strong>  ${data.practices[1].visit_address.street}<br>${data.practices[1].visit_address.city}, ${data.practices[1].visit_address.state} ${data.practices[1].visit_address.zip}`);
          $('.showPhones').html(`<strong>Phone Number:</strong>  ${data.practices[0].phones[0]}`);
          $('.showWebsite').html(`<strong>Website: </strong> ${website}`);
          $('.showAcceptsNew').html(`<strong>Accepts New Patients:</strong>  ${acceptsNew}`);
          $('.showLanguages').html(`<strong>Languages:</strong>  ${data.profile.languages[0]}`);
        },

        function(error) {
          $('.error').text(`There was an error processing your request: ${error.message}`);
        });
        }
      });
    });
  });
