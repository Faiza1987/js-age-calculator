import { AgeCalculator } from './../js/age-calculator.js';

$(document).ready(function() {
  $('#user-info').submit(function(event) {
    event.preventDefault();
    let born = $('#born').val();
    let gender = $('#gender').val();
    let region = $('#region').val();
    let newUser = new AgeCalculator(born, gender, region);

    let mercury = newUser.mercuryAge();
    $('#mercury-age').text(mercury);

    let venus = newUser.venusAge();
    $('#venus-age').text(venus);

    let mars = newUser.marsAge();
    $('#mars-age').text(mars);

    let jupiter = newUser.jupiterAge();
    $('#jupiter-age').text(jupiter);
  });
});
