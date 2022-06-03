let personEl = document.getElementById('description');
let person = {
    name: "Jorgen ",
    age: 19,
    country: "Sweden"
};

personEl.textContent = person.name + "is " + person.age + " years old and lives in " + person.country;