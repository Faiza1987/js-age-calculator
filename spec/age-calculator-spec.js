import { AgeCalculator } from './../js/age-calculator.js';

describe('AgeCalculator', function() {
  let reusableUser;
  let reusableUser2;

  beforeEach(function() {
    reusableUser = new AgeCalculator("1982-31-01", "female", "poor");
    reusableUser2 = new AgeCalculator("1901-31-01", "female", "poor");
  })

  it('should count the expected lifespan based on user age', function() {
    expect(reusableUser.mercuryLifespan()).toEqual(270);
    expect(reusableUser.venusLifespan()).toEqual(104);
    expect(reusableUser.marsLifespan()).toEqual(34);
    expect(reusableUser.jupiterLifespan()).toEqual(5);
  });

  it('should check if the user is already over lifespan expextation', function() {
    expect(reusableUser.alive(468,250)).toEqual("You should be dead already!");
  });

});
