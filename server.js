const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

class User {
    constructor(){
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this._id = faker.datatype.uuid();
        this.name = faker.company.name();
        this.direction = {
            addres:faker.address.streetAddress(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    res.json( new User() );
});

app.get("/api/company/new", (req, res) => {
    res.json( new Company() );
});

app.get("/api/user/company/", (req, res) => {
    res.json( new Company(), new User() );
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );