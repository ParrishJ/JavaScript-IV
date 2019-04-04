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
    constuctor(instructorProps){
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