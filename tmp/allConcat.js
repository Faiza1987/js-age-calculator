import { AgeCalculator } from './../js/age-calculator.js';

$(document).ready(function() {
  $('#user-info').submit(function(event) {
    event.preventDefault();
    let born = $('#born').val();
    let gender = $('#gender').val();
    let region = $('#region').val();

    $(".result").show();

    let newUser = new AgeCalculator(born, gender, region);

    let ageOnMercury = newUser.mercuryAge();
    $('#mercury-age').text(ageOnMercury);
    let lifespanOnMercury = newUser.mercuryLifespan();
    $('#mercury-lifespan').text(lifespanOnMercury);

    let ageOnVenus = newUser.venusAge();
    $('#venus-age').text(ageOnVenus);
    let lifespanOnVenus = newUser.venusLifespan();
    $('#venus-lifespan').text(lifespanOnVenus);

    let ageOnMars = newUser.marsAge();
    $('#mars-age').text(ageOnMars);
    let lifespanOnMars = newUser.marsLifespan();
    $('#mars-lifespan').text(lifespanOnMars);

    let ageOnJupiter = newUser.jupiterAge();
    $('#jupiter-age').text(ageOnJupiter);
    let lifespanOnJupiter = newUser.jupiterLifespan();
    $('#jupiter-lifespan').text(lifespanOnJupiter);

    let message = newUser.alive(ageOnMercury,lifespanOnMercury);
    $("#message").text(message);

  });
});
