import type langs from "../interfaces/tech-interface";

let languages: Array<langs> = [
    {
        name: "D",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/D_Programming_Language_logo.svg/2560px-D_Programming_Language_logo.svg.png",
        learning_type: "informal learning",
        used_for: ["High Performance Apps"],
        score: 4,
        frameworks: [
            {
                name: "Vibe",
                logo: "https://vibed.org/images/title-new.png"
            }
        ]
    },
    {
        name: "C++",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
        learning_type: "informal learning",
        used_for: ["High Performance Apps"],
        score: 3
    },
    {
        name: "C#",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
        learning_type: "FIAP School - Programming Language & Game Developement (1º and 3º year of hight school)",
        used_for: ["Game Development"],
        score: 2,
        frameworks: [
            {
                name: ".Net",
                logo: "https://neosmart.net/blog/wp-content/uploads/2019/06/dot-net-framework.png"
            }
        ]
    },
    {
        name: "Clojure",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg",
        learning_type: "informal learning",
        used_for: [],
        score: 2
    },
    {
        name: "Ruby",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/768px-Ruby_logo.svg.png",
        learning_type: "informal learning",
        used_for: ["Back-end (Web)"],
        score: 4,
        frameworks: [
            {
                name: "Sinatra", 
                logo: "https://sinatrarb.com/images/logo.png"
            }
        ]
    },
    {
        name: "TypeScript",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
        learning_type: "FIAP School - Programming Language (3º year of hight school)",
        used_for: ["Front-end (Web)", "Back-end (Web)"],
        impl: [{
            name: "Node.js",
            logo: "",
        },
        {
            name: "Deno",
            logo: ""
        }],
        frameworks:[
            {
                name: "Vue",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png",
                isfront: true
            },
            {
                name: "Angular",
                logo: "https://angular.io/assets/images/logos/angular/angular.svg",
                isfront: true
            },
            {
                name: "React",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
                isfront: true
            }
        ],
        score: 5

    },
    {
        name: "JavaScript",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        learning_type: "FIAP School - Internet and Web & Programming Language (1º, 2º, 3º year of hight school)",
        used_for: ["Front-end (Web)", "Back-end (Web)"],
        score: 5,
        frameworks:[
            {
                name: "Vue",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png",
                isfront: true
            },
            {
                name: "Angular",
                logo: "https://angular.io/assets/images/logos/angular/angular.svg",
                isfront: true
            },
            {
                name: "React",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
                isfront: true
            }
        ],
    },
    {
        name: "Bootstrap",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png",
        learning_type: "FIAP School - Programming Language (2º year of hight school)",
        used_for: ["Front-end (Web)"],
        score: 5
    },
    {
        name: "Elixir",
        logo: "https://cdn.icon-icons.com/icons2/2699/PNG/512/elixir_lang_logo_icon_169207.png",
        learning_type: "informal learning",
        used_for: ["Back-end (Web)"],
        score: 3
    },
    {
        name: "Postgres",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png",
        learning_type: "informal learning",
        used_for: ["Database"],
        score: 4
    },
    {
        name: "Cassandra",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cassandra_logo.svg/2560px-Cassandra_logo.svg.png",
        learning_type: "informal learning",
        used_for: ["Database"],
        score: 3
    },
    {
        name: "Mongo DB",
        logo: "Images/MongoDB_Logomark_SpringGreen.svg",
        learning_type: "FIAP School - Programming Language (2º year of hight school)",
        used_for: ["Database"], 
        score: 3
    }

]

export default languages