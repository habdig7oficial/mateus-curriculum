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
        score: 3, 
    },
    {
        name: "C#",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
        learning_type: "FIAP School - Programming Language & Game Developement (1º and 3º year of hight school)",
        used_for: ["Game Development"],
        score: 2,
        frameworks: [
            {
                name: "Unity",
                logo: "/mateus-curriculum/Images/unity-logo.svg",
                examples: [
                    {
                        name: "Pong Plus Puls (Modified Version of Classical Pong)",
                        link: "https://github.com/habdig7oficial/SuperPongPlusPlus.git"
                    }
                ]
            }
        ],
        nickname: "c-sharp"
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
                logo: "https://sinatrarb.com/images/logo.png",
                examples: [
                    {
                        name: "MedTempo Back-end",
                        link: "https://github.com/MedTempo/MedTempo-Ruby-Backend.git"
                    }
                ]
            }
        ]
    },
    {
        name: "TypeScript",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
        learning_type: "FIAP School - Programming Language (3º year of hight school)",
        used_for: ["Front-end (Web)"],
        /*impl: [{
            name: "Node.js",
            logo: "",
        },
        {
            name: "Deno",
            logo: ""
        }],*/
        frameworks:[
            {
                name: "Vue",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png",
                examples: [
                    {
                        name: "This Site :)",
                        link: "https://github.com/habdig7oficial/mateus-curriculum.git"
                    }
                ],
                isfront: true
            },
            {
                name: "Angular",
                logo: "https://angular.io/assets/images/logos/angular/angular.svg",
                examples: [
                    {
                        name: "AT-alex-animais (2º year) ",
                        link: "https://github.com/habdig7oficial/AT-alex-animais.git"
                    }
                ],
                isfront: true
            },
            {
                name: "React",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
                examples: [
                    {
                        name: "Floriculture (2º year)",
                        link: "https://github.com/habdig7oficial/Floricultura/tree/ts"
                    }
                ],
                isfront: true
            }
        ],
        score: 5

    },
    {
        name: "JavaScript",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        learning_type: "FIAP School - Internet and Web & Programming Language (1º, 2º, 3º year of hight school)",
        used_for: ["Front-end (Web)"],
        score: 5,
        frameworks:[
            {
                name: "Vue",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png",
                examples: [
                    {
                        name: "(no examples in js please check TypeScript session)",
                        link: "https://github.com/habdig7oficial/mateus-curriculum.git"
                    }
                ],
                isfront: true
            },
            {
                name: "Angular",
                logo: "https://angular.io/assets/images/logos/angular/angular.svg",
                examples: [
                    {
                        name: "(no examples in js please check TypeScript session)",
                        link: "https://github.com/habdig7oficial/AT-alex-animais.git"
                    }
                ],
                isfront: true
            },
            {
                name: "React",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
                examples: [
                    {
                        name: "(no examples in js please check TypeScript session)",
                        link: "https://github.com/habdig7oficial/Floricultura/tree/ts"
                    }
                ],
                isfront: true
            }
        ],
    },
    {
        name: "Deno (TypeScript / JavaScript Runtime)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Deno_2021.svg",
        learning_type: "informal learning",
        used_for: ["Back-end (Web)"],
        score: 5,
        frameworks: [
            {
                name: "Oak",
                logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Deno_2021.svg",
                examples: [
                    {
                        name: "MedTempo (Beta) Back-end",
                        link: "https://github.com/MedTempo/MedTempoBackend.git"
                    }
                ]
            }
        ],
        nickname: "deno"
    },
    {
        name: "Node.js (JavaScript Runtime)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png",
        learning_type:"informal learning",
        used_for: ["Back-end (Web)"],
        score: 5,
        frameworks: [
            {
                name: "Express",
                logo: "https://i.cloudup.com/zfY6lL7eFa-3000x3000.png",
                examples: [
                    {
                        name: "Reddito",
                        link: "https://github.com/habdig7oficial/Reddito.git"
                    }
                ]
            }
        ],
        nickname: "node"
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
        frameworks: [
            {
                name: "Mongoose (node.js)",
                logo: "",
                examples: [
                    {
                        name: "",
                        link: ""
                    }
                ]
            }
        ],
        score: 3
    }

]

export default languages