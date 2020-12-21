// Random message generator, giving the user a suggested vacation
// The output is made up of four different pieces of data: destination, accomodation type, activity and duration - which are combined into one string

const vacation = {
    _destinations: [],
    get destinations() {
    return this._destinations;
    },
    set destinations(destinationIn) {
        this._destinations = destinationIn;
    },
    _accTypes: [],
    get accTypes() {
        return this._accTypes;
    },
    set accTypes(accTypeIn) {
        this._accTypes = accTypeIn;
    },
    _activities: [],
    get activities() {
        return this._activities;
    },
    set activities(activityIn) {
        this._activities = activityIn;
    },    
    getRandomChoice(choiceName) {
        let choice = this[choiceName];
        let randIndex = Math.floor(Math.random() * choice.length);
        return choice[randIndex];
    },
    generateRandomVacation() {
        let destination = this.getRandomChoice('destinations');
        let accType = this.getRandomChoice('accTypes');
        let activity = this.getRandomChoice('activities');
        let duration = Math.max(Math.floor(Math.random() * 8), 2);
        return `Here's your vacation suggestion: \n Stay ${accType} in ${destination} for ${duration} days and go ${activity}!`;
    }
};

// set destination choices
vacation.destinations = ["Dublin", "Amsterdam", "Canada", "Mexico", "London", "Florida", "New York", "New Zealand", "Paris", "Barcelona", "Portugal", "India", "Italy", "Croatia"];

// set accommodation type choices
vacation.accTypes = ["at a villa", "at a 5* hotel", "in a Bed & Breakfast", "at an apartment", "at a hostel", "in a tent", "in a log cabin"];

// set activity choices
vacation.activities = ["swimming with the dolphins", "on a shopping spree", "see the famous sites", "kayaking", "hiking", "on a big night out", "to a theme park", "visit a zoo", "on a walking tour", "to the beach"];

// run the program and print the result
const myVacation = vacation.generateRandomVacation();
console.log(myVacation);