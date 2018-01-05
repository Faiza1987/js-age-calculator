import { AgeCalculator } from './../js/age-calculator.js';

describe('AgeCalculator', function() {
  let reusableUser;

  beforeEach(function() {
    reusableUser = new AgeCalculator("1982-31-01", "female", "poor");
  })

  it('should count the expected lifespan based on user age', function() {
    expect(reusableUser.mercuryLifespan()).toEqual(113);
    expect(reusableUser.venusLifespan()).toEqual(113);
    expect(reusableUser.marsLifespan()).toEqual(113);
    expect(reusableUser.jupiterLifespan()).toEqual(11);
  });

});
