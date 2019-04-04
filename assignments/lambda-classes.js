// CODE here for your Lambda Classes

class Person {
    constructor(personProps){
        this.name = personProps.name;
        this.age = personProps.age;
        this.location = personProps.location;
        this.gender = personProps.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(instructorProps){
        super(instructorProps);
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(Student, subject){
        console.log(`${Student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(studentProps){
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
    }
    listSubjects(){
        console.log(`${this.favSubjects}`);
    }
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for subject ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmProps){
        super(pmProps);
        this.gradClassName = pmProps.gradClassName;
        this.favInstructor = pmProps.favInstructor;
    }
    standUP(channel){
        console.log(`${this.name} announces to ${channel}, @channel standby times!`);
    }
    debugsCode(Student, subject){
        console.log(`${this.name} debugs ${Student.name}'s code on ${subject}.`)
    }
}

const JohnSmith = new Person ({
    name: "John Smith",
    age: 35,
    location: "Nashville, TN", 
    gender: "Male"
});

const JaneDoe = new Person ({
    name: "Jane Doe",
    age: 55,
    location: "New York, NY",
    gender: "Female"
});

const CarlosGretsky = new Student ({
    name: "Carlos Gretsky",
    age: 29,
    location: "Houston, TX",
    gender: "Male"
});

const JoannaGreen = new Student ({
    name: "Joanna Green",
    age: 22,
    location: "Anchorage, AK", 
    gender: "Female"
});

const GreggoryWong = new Instructor ({
    name: "Greggory Wong",
    age: 35,
    location: "Phoenix, AZ",
    gender: "Male"
});

const ChelseaCarter = new Instructor ({
    name: "Chelsea Carter",
    age: 39,
    location: "Chicago, IL", 
    gender: "Female"
});

const MichaelMcTarnahan = new ProjectManager ({
    name: "Michael McTarnahan",
    age: 65,
    location: "San Diego, CA", 
    gender: "Male"
});

const RachelHernandez = new ProjectManager ({
    name: "Rachel Hernandez",
    age: 34,
    location: "Portland, OR",
    gender: "Female"
});

console.log(JohnSmith);
console.log(JaneDoe);
console.log(JohnSmith.speak());
console.log(JaneDoe.speak());
/* console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log(); */
