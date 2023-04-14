class User {
    name;
    age;
    emal;

    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.emal = email;
    }
}

const user = new User('Max', 31, 'max@test.com');