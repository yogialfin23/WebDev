var database = [{
        username: "yogie",
        password: "22November16"
    },
    {
        username: "auilya",
        password: "yogialfin"
    },
    {
        username: "aul",
        password: "blackpink"
    }
];

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

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (username === database[i].username && password === database[i].password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeeds);
    } else {
        alert("Username or password wrong!");
    }
}

signIn(usernamePrompt, passwordPrompt);