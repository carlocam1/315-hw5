// import { changePageContent } from "../model/model.js";

var GAMES = [
    {
        gameTitle: "Angry Birds",
        gameThumbing: "angry-birds_150.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
        gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
        gameRating: "A",
    },
    
    {
        gameTitle: "Call of Duty",
        gameThumbing: "call-of-duty_150.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
        gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
        gameRating: "B",
    },

    {
      gameTitle: "Candy Crush",
      gameThumbing: "candy-crush_150.jpg",
      gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
      gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
      gameRating: "C",
  },

  {
    gameTitle: "Fifa 14",
    gameThumbing: "fifa14_150.jpg",
    gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
    gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
    gameRating: "D",
  },

  {
    gameTitle: "Fortnite",
    gameThumbing: "fortnite_150.jpg",
    gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
    gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
    gameRating: "E",
  },

  {
    gameTitle: "Mario Odyssey",
    gameThumbing: "mario-odyssey_150.jpg",
    gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
    gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
    gameRating: "F",
  },

  {
    gameTitle: "Minecraft",
    gameThumbing: "minecraft_150.jpg",
    gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
    gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
    gameRating: "G",
  },

  {
    gameTitle: "Plants vs Zombies",
    gameThumbing: "plants-zombies_150.jpg",
    gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
    gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
    gameRating: "H",
  },

  {
    gameTitle: "Roblox",
    gameThumbing: "roblox_150.jpg",
    gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
    gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
    gameRating: "I",
  },


  {
    gameTitle: "Spider Man",
    gameThumbing: "spider-man_150.jpg",
    gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
    gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
    gameRating: "J",
  },

   {
        gameTitle: "Angry Birds",
        gameThumbing: "angry-birds_150.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
        gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
        gameRating: "A",
    },
    
    {
        gameTitle: "Call of Duty",
        gameThumbing: "call-of-duty_150.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
        gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
        gameRating: "B",
    },

    {
      gameTitle: "Candy Crush",
      gameThumbing: "candy-crush_150.jpg",
      gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
      gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
      gameRating: "C",
  },

  {
    gameTitle: "Fifa 14",
    gameThumbing: "fifa14_150.jpg",
    gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
    gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
    gameRating: "D",
  },

  {
    gameTitle: "Fortnite",
    gameThumbing: "fortnite_150.jpg",
    gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
    gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
    gameRating: "E",
  },

  {
    gameTitle: "Mario Odyssey",
    gameThumbing: "mario-odyssey_150.jpg",
    gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
    gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
    gameRating: "F",
  },

  {
    gameTitle: "Minecraft",
    gameThumbing: "minecraft_150.jpg",
    gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
    gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
    gameRating: "G",
  },

  {
    gameTitle: "Plants vs Zombies",
    gameThumbing: "plants-zombies_150.jpg",
    gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
    gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
    gameRating: "H",
  },

  {
    gameTitle: "Roblox",
    gameThumbing: "roblox_150.jpg",
    gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
    gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
    gameRating: "I",
  },


  {
    gameTitle: "Spider Man",
    gameThumbing: "spider-man_150.jpg",
    gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt?",
    gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, a incidunt non eum blanditiis voluptates sint, exercitationem enim iusto dolores quia, ut culpa praesentium molestias ratione perspiciatis earum nam facilis",
    gameRating: "J",
  },

];

function loadData (){
    $.each(GAMES, function(idx, game){
        $("#app").append(`<div id="${idx}" class="game-holder">
        <h5>${game.gameTitle}</h5>
        <div class="game-image">
          <img src="images/games_thumb/${game.gameThumbing}" alt="${game.gameTitle}" />
        </div>
        <div class="brief-rating">
          <div class="brief-des">
            ${game.gameBriefDescription}
          </div>
          <div class="rating">Rating: ${game.gameRating}</div>
        </div>
      </div>`);
    });
}

// import { changePageContent } from "../model/model.js";

function initListeners() {
  
    // $(window).on("hashchange", changeRoute);
    // changeRoute();

    $(".bars").click(function(e){
        // console.log("clicked");
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });

    $(".links a").click(function(e){
        // console.log("clicked");
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
        // $(".links.active").toggleClass("active");
        $(".links").removeClass("active");
    });
}


$(document).ready(function () {
    loadData();
    initListeners();
    
});