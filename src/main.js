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
        body.data.forEach(function(doctor){
          
          }

        })
        for (let i=0; i<=data.length; i++) {
        $('.showName').text(`First Name:  ${body.data[i].practices.name}`);
        $('.showPractice').text(`Practice: ${body.data[i].practice.name}`);
        $('.showAddress').text(`Address:  ${body.data[i].practice.visit_address}`);
        $('.showPhones').text(`Phone Number:  ${body.data[i].practice.phones[0]}`);
        $('.showWebsite').text(`Website:  ${body.data[i].practice.website}`);
        $('.showNewPatients').text(`Accepts New Patients:  ${body.data[i].practice.accepts_new_patients}`);
      }
      }

    }, function(error) {
      $('.error').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
