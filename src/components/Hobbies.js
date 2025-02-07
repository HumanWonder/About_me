import React, { useState } from "react";
import { useScrollAnimation, scrollToTop } from "./Animation";
import { hobbies } from "../assets/Images";
import "../styles/Hobbies.css";

const HobbiesData = [
  {
    id: 1,
    title: "Playing Video Games",
    description: "Who doesn't like a good video game session? I grew up with video games and surprisingly learned a lot! Between rhythm games, RPGs, puzzle games, etc. I spend lots of time discovering new stories, improving my skills, cracking puzzles and deepening my imagination.",
    images: [
      { src: hobbies.videogames.portal2_game, caption: "A game I love redoing. Coop and single player... Yes, even if I know the story by heart." },
      { src: hobbies.videogames.HM, caption: "A rhythm game. I play in expert mode !" },
      { src: hobbies.videogames.Genshin_Impact_Logo, caption: "Apart from the obvious cash-grab of the gacha game, it's got an unbelievable story (not done yet) and a lovely world to explore.\n I also adore Reverse:1999 in the same genre." },
      { src: hobbies.videogames.PL_logo, caption: "My game-of-the-moment. Can't say I appreciated every single riddle and puzzle but it's a nostalgic and really nice license to rediscover." },
      { src: hobbies.videogames.tunic_logo, caption: "Best discovery ever. I don't want to spoil things, you need to play it." }
    ],
  },
  {
    id: 2,
    title: "Reading Books",
    description: "My all-time favourite since my childhood. Books open doors to endless imagination. I enjoy reading fantasy, science fiction, thrillers, always searching for new perspectives and stories.",
    images: [
      { src: hobbies.books.Werber, caption: "Current read" },
      { src: hobbies.books.Frieren, caption: "Took me a couple volumes to appreciate the story and characters. I'm so glad I gave it a chance." },
      { src: hobbies.books.Danielewski, caption: "What I want to read next but that book scares me..." },
    ],
  },
  {
    id: 3,
    title: "Drawing",
    description: "A catalyst to my creativity. I draw to express my feelings, to relax, to create new worlds and characters. I love to experiment with different styles and techniques. I'm mostly doing sketches but I plan on moving to digital soon.",
    images: [
      { src: hobbies.drawings.portrait, caption: "Aug 5th 2020 -> Semi-realistic portrait" },
      { src: hobbies.drawings.test_couleurs, caption: "Aug 2nd 2020 -> Redoing a photograph seen on Pinterest with some colours." },
      { src: hobbies.drawings.M_C, caption: "Apr 25th 2024 -> Sketch of two of my OCs (Original Characters)" },
      { src: hobbies.drawings.l_Horlogere, caption: "Jun 2nd 2024 -> A character, named The Clockworker, who could be quite intimidating..." },
    ],
  },
  {
    id:4,
    title: "Others~",
    description: "A mix of interests that you may have too !",
    images: [
      {src: hobbies.other.BD1, caption: "I love building legos, it's a great way to relax and have fun. Here is BD1 from Star Wars:Fallen Order"},
      {src: hobbies.other.Turtle_crochet, caption: "Knitting a scarf from DoctorWho was easier than I thought... Here is crochet project that I've done for a friend."},
      {src: hobbies.other.learning_jap, caption: "Learning japanese slowly but surely, thanks to Duolingo, a couple of books and Youtube."},
      {src: hobbies.other.baby_sunflower, caption: "Every year (for the past 3 years now), I've gotten into the habit of planting dwarf sunflowers in the garden —to the great dismay of my parents..."},
      {src: hobbies.other.Elliot, caption: "I had to. His name's Elliot. By the time I'm writing this he's 15 years old and may leave us soon. I'll love him forever."},
      {src: hobbies.other.blep_doggo, caption: "I love my dog... Have I already said that ?"},

    ]
  }
];


const Hobbies = () => {
  useScrollAnimation("hobby-block");

  const [isSecretRevealed, setSecretRevealed] = useState(false);

  const revealSecret = () => {
    setSecretRevealed(true);
  };

  const [imageIndexes, setImageIndexes] = useState(
    HobbiesData.map(() => 0) // Initialise un index pour chaque hobby
  );

  const nextImage = (hobbyIndex) => {
    setImageIndexes((prevIndexes) =>
      prevIndexes.map((index, i) =>
        i === hobbyIndex ? (index + 1) % HobbiesData[i].images.length : index
      )
    );
  };

  const prevImage = (hobbyIndex) => {
    setImageIndexes((prevIndexes) =>
      prevIndexes.map((index, i) =>
        i === hobbyIndex
          ? (index - 1 + HobbiesData[i].images.length) % HobbiesData[i].images.length
          : index
      )
    );
  };

  return (
    <div className="hobbies-container">
      {HobbiesData.map((hobby, hobbyIndex) => (
        <div
          key={hobby.id}
          className={`hobby-block ${hobbyIndex % 2 === 0 ? "left" : "right"}`}
        >
          <div className="hobby-content">
            <h2>{hobby.title}</h2>
            <p>{hobby.description}</p>
          </div>
  
          {/* Carrousel d'images */}
          <div className="carousel">
            <button className="carousel-button" onClick={() => prevImage(hobbyIndex)}>
              &#9665;
            </button>
  
            <div className="carousel-images">
              <figure className="carousel-image">
                <img
                  src={hobby.images[imageIndexes[hobbyIndex]].src}
                  alt={`Hobby ${hobbyIndex}`}
                />
                <figcaption>{hobby.images[imageIndexes[hobbyIndex]].caption}</figcaption>
  
                {/* Vérifie si l'image correspond à Tunic */}
                {hobby.images[imageIndexes[hobbyIndex]].src === hobbies.videogames.tunic_logo &&
                  !isSecretRevealed && (
                    <button onClick={revealSecret} className="reveal-secret-btn">
                      Reveal Secret
                    </button>
                  )}
  
                {/* Affiche l'image secrète si le bouton est cliqué */}
                {hobby.images[imageIndexes[hobbyIndex]].src === hobbies.videogames.tunic_logo &&
                  isSecretRevealed && (
                    <img
                      src={hobbies.videogames.secret}
                      alt="Secret message in Fox language"
                      className="secret-image"
                    />
                  )}
              </figure>
            </div>
  
            <button className="carousel-button" onClick={() => nextImage(hobbyIndex)}>
              &#9655;
            </button>
          </div>
        </div>
      ))}
      <button className="scroll-to-top" onClick={scrollToTop}>↑</button>
    </div>
  );
  
};

export default Hobbies;