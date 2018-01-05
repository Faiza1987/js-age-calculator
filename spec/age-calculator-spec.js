import { AgeCalculator } from './../js/age-calculator.js';

describe('AgeCalculator', function() {
  let reusableUser;

  beforeEach(function() {
    reusableUser = new AgeCalculator("1982-31-01", "female", "poor");
  })

  it('should count the expected lifespan based on user age', function() {
    expect(reusableUser.mercuryLifespan()).toEqual(270);
    expect(reusableUser.venusLifespan()).toEqual(104);
    expect(reusableUser.marsLifespan()).toEqual(34);
    expect(reusableUser.jupiterLifespan()).toEqual(5);
  });

});
