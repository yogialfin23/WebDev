var database = [{
    username: "yogie",
    password: "22November16"
}];

var newsFeeds = [{
        username: "yogie",
        timeline: "Javascript is cool!"
    },
    {
        username: "Auliya",
        timeline: "I love you so much Yogie!"
    }
];

var usernamePrompt = prompt("Enter your username");
var passwordPrompt = prompt("Enter your password");

function signIn(username, password) {
    if (username === database[0].username && password === database[0].password) {
        console.log(newsFeeds);
    } else {
        alert("Sorry wrong username or password");
    }
}

signIn(usernamePrompt, passwordPrompt);