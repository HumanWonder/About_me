import React, { useState } from "react";
import { useScrollAnimation } from "./Animation";
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
      { src: hobbies.books.Werber, caption: "Fantasy Novels" },
      { src: "book2.jpg", caption: "Sci-Fi Adventures" },
      { src: "book3.jpg", caption: "Thrillers" },
    ],
  },
  {
    id: 3,
    title: "Drawing",
    description: "",
    images: [
      { src: "image1.jpg", caption: "" },
      { src: "image2.jpg", caption: "" },
    ],
  },
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
                <img src={hobby.images[imageIndexes[hobbyIndex]].src} alt={`Hobby ${hobbyIndex}`} />
                <figcaption>{hobby.images[imageIndexes[hobbyIndex]].caption}</figcaption>

                {/* Vérifie si l'image correspond à Tunic */}
                {hobby.images.src === hobbies.videogames.tunic_logo && isSecretRevealed && (
                  <button onClick={revealSecret} className="reveal-secret-btn">
                    Reveal Secret
                  </button>
                )}

                {/* Affiche l'image secrète si le bouton est cliqué */}
                {hobby.images.src === hobbies.videogames.tunic_logo && !isSecretRevealed && (
                  <img src={hobbies.videogames.fox_secret} alt="Secret message in Fox language" className="secret-image" />
                )}
              </figure>
            </div>

            <button className="carousel-button" onClick={() => nextImage(hobbyIndex)}>
              &#9655;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hobbies;