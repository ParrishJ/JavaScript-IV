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