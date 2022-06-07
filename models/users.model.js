const { v4 : uuid4} = require("uuid");

const users = [
    {
        id : uuid4(),
        name: "Rahul",
        email: "r@mail.com",
    },
    {
        id : uuid4(),
        name: "Rasel",
        email: "ra@mail.com",
    },
];

module.exports = users;