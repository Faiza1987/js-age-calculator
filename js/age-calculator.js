export class AgeCalculator {
  constructor (born, gender, region) {
    this.born = born;
    this.gender = gender;
    this.region = region;

    let birthdate = this.born.split("-");
    let userYear = parseInt(birthdate[0]);
    let userDay = parseInt(birthdate[1]);
    let userMonth = parseInt(birthdate[2]);

    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDay = today.getDate();

    this.age = currentYear-userYear;
    this.ageInSeconds = ((currentYear-userYear)* 31536000) + ((currentMonth-userMonth)* 2592000) + ((currentDay-userDay)* 86400);


    if (this.gender === "male") {
      if (this.region === "poor") {
        this.avarageLifespan = 60;
      } else if (this.region === "highly developed") {
        this.avarageLifespan = 75;
      }
    } else if (this.gender === "female") {
      if (this.region === "poor") {
        this.avarageLifespan = 65;
      } else if (this.region === "highly developed") {
        this.avarageLifespan = 85;
      }
    }

  }

  mercuryAge() {
    let mercuryYearSeconds = 0.24 * 31536000;
    return Math.floor(this.ageInSeconds/mercuryYearSeconds);
  }

  venusAge() {
    let venusYearSeconds = 0.62 * 31536000;
    return Math.floor(this.ageInSeconds/venusYearSeconds);
  }

  marsAge() {
    let marsYearSeconds = 1.88 * 31536000;
    return Math.floor(this.ageInSeconds/marsYearSeconds);
  }

  jupiterAge() {
    let jupiterYearSeconds = 11.86 * 31536000;
    return Math.floor(this.ageInSeconds/jupiterYearSeconds);
  }






  mercuryLifespan() {
    return Math.floor(this.avarageLifespan/0.24);
  }
  venusLifespan() {
    return Math.floor(this.avarageLifespan/0.62);
  }
  marsLifespan() {
    return Math.floor(this.avarageLifespan/1.88);
  }
  jupiterLifespan() {
    return Math.floor(this.avarageLifespan/11.86);
  }

  alive(age, lifespan) {
    if (age > lifespan) {
      return "You should be dead already!";
    }
  }

}
