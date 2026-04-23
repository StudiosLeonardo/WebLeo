
// ----- references -----

const games = {
  skating_christmas: {
    href: "https://gamejolt.com/games/skating-christmas/956520",
    src: "https://m.gjcdn.net/game-thumbnail/1000/956520-crop5_0_1619_908-tfhxpdrx-v4.webp",
  },

  the_king_of_the_world: {
    href: "https://gamejolt.com/games/oreidomundo/943207",
    src: "https://m.gjcdn.net/game-thumbnail/1000/943207-crop0_94_1000_656-ll-rppdzah5-v4.webp",
  },

  white_shadow: {
    href: "https://gamejolt.com/games/whiteshaddow/789801",
    src: "https://m.gjcdn.net/game-thumbnail/1000/789801-5shkbewp-v4.webp",
  },

  cubidash: {
    href: "https://gamejolt.com/games/cubicdash/773196",
    src: "https://m.gjcdn.net/game-thumbnail/1000/773196-x4fbeppd-v4.webp",
  },

  controless: {
    href: "https://gamejolt.com/games/controless/786655",
    src: "https://m.gjcdn.net/game-thumbnail/1000/786655-k2sw8pwi-v4.webp",
  },

  red_face: {
    href: "https://gamejolt.com/games/redface/783918",
    src: "https://m.gjcdn.net/game-thumbnail/1000/783918-7g5jrdiw-v4.webp",
  },
};

const socials = {
    youtube:{
        href: "https://www.youtube.com/@studiosleonardo",
        src: "imgs/youtube_icon.png"
    },

    twiter:{
        href: "https://x.com/ManoLo97549721",
        src: "imgs/x_icon.png"
    },

    gamejolt:{
        href: "https://gamejolt.com/@studiosleo/games",
        src: "imgs/game_jolt_icon.png"
    },

    itchio:{
        href: "https://mano-leo.itch.io",
        src: "imgs/itch_io_icon.png"
    }
};

// ----- functions -----

function fillGame(li) {
  const a = li.querySelector("a");
  const img = a.querySelector("img");
  const h4 = a.querySelector("h4");

  let id = li.id;

  // fill game
  let link = games[id];
  if (!link) return;

  a.href = link.href;
  img.src = link.src;
  h4.textContent = id.replaceAll("_", " ");
}

function fillAllGames() {
  const lis = document.querySelectorAll("li");
  lis.forEach((li) => {
    fillGame(li);
  });
}

function fillSocial(a){
    id = a.id;

    a.href = socials[id].href;

    const img = a.querySelector('img');
    img.src = socials[id].src;
}

function fillAllSocials(){
    const _as = document.querySelectorAll('.socials a');
    _as.forEach(_a => {fillSocial(_a)});
}

fillAllGames();
fillAllSocials();
