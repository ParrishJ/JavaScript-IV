// CODE here for your Lambda Classes

class Person {
    constructor(personProps){
        this.name = personProps.name;
        this.age = personProps.age;
        this.location = personProps.location;
        this.gender = personProps.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
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
        console.log(`${Student.name} receives a perfect score on ${subject}`);
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
        console.log(`${this.name} has submitted a PR for subject ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
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
        console.log(`${this.name} debugs ${Student.name}'s code on ${subject}.`);
    }
}

const johnSmith = new Person ({
    name: "John Smith",
    age: 35,
    location: "Nashville, TN", 
    gender: "Male"
});

const janeDoe = new Person ({
    name: "Jane Doe",
    age: 55,
    location: "New York, NY",
    gender: "Female"
});

const carlosGretsky = new Instructor ({
    name: "Carlos Gretsky",
    age: 29,
    location: "Houston, TX",
    gender: "Male",
    specialty: "back-end",
    favLanguage: "Javascript",
    catchPhrase: "Up and at em!"
});

const joannaGreen = new Instructor ({
    name: "Joanna Green",
    age: 22,
    location: "Anchorage, AK", 
    gender: "Female",
    specialty: "full-stack",
    favLanguage: "Python",
    catchPhrase: "Easy come, easy go."
});

const greggoryWong = new Student ({
    name: "Greggory Wong",
    age: 35,
    location: "Phoenix, AZ",
    gender: "Male",
    previousBackground: "Customer Service",
    className: "Web18",
    favSubjects: ['javascript', 'C++', 'python']
});

const chelseaCarter = new Student ({
    name: "Chelsea Carter",
    age: 39,
    location: "Chicago, IL", 
    gender: "Female",
    previousBackground: "Pest Control",
    className: "Web19",
    favSubjects: ['javascript', 'CSS', 'HTML']
});

const michaelMcTarnahan = new ProjectManager ({
    name: "Michael McTarnahan",
    age: 65,
    location: "San Diego, CA", 
    gender: "Male",
    specialty: "React",
    favLanguage: "java",
    catchPhrase: "Yippy-skip-skippy!",
    gradClassName: "web3",
    favInstructor: "Josh Knell"
});

const rachelHernandez = new ProjectManager ({
    name: "Rachel Hernandez",
    age: 34,
    location: "Portland, OR",
    gender: "Female",
    specialty: "Django",
    favLanguage: "Python",
    catchPhrase: "You got this!",
    gradClassName: "web3",
    favInstructor: "Daniel Frehner"
});

console.log(johnSmith);
console.log(janeDoe);
console.log(johnSmith.speak());
console.log(janeDoe.speak());
console.log(carlosGretsky);
console.log(joannaGreen);
console.log(carlosGretsky.demo("CSSII"));
console.log(carlosGretsky.grade(greggoryWong, "HTMLI"));
console.log(joannaGreen.demo("CSSII"));
console.log(joannaGreen.grade(greggoryWong, "HTMLI"));
console.log(greggoryWong);
console.log(chelseaCarter);
console.log(greggoryWong.listSubjects());
console.log(chelseaCarter.PRAssignment("JSII"));
console.log(chelseaCarter.sprintChallenge("Advanced CSS"));
console.log(michaelMcTarnahan);
console.log(rachelHernandez);
console.log(michaelMcTarnahan.standUP("web18_michael"));
console.log(rachelHernandez.debugsCode(chelseaCarter, "Applied Javascript"));
console.log(michaelMcTarnahan.grade(chelseaCarter, "Advanced CSS"));
console.log(rachelHernandez.speak());




