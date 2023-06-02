let person = {
    firstName: "John",
    lastName: "Doe",
    id: 2112,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

Name = person.fullName();
document.write(Name);

myFunction => {
    
}