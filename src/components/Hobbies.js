import React, { useState } from "react";
import { useScrollAnimation } from "./Animation";
import "../styles/Hobbies.css";

const HobbiesData = [
  {
    id: 1,
    title: "Playing Video Games",
    description: "Who doesn't like a good video game session? I grew up with video games and surprisingly learned a lot! Between rhythm games, RPGs, puzzle games, etc. I spend lots of time discovering new stories, improving my skills, cracking puzzles and deepening my imagination.",
    images: [
      { src: "image1.jpg", caption: "RPG Adventures" },
      { src: "image2.jpg", caption: "Rhythm Games" },
      { src: "image3.jpg", caption: "Puzzle Challenges" },
    ],
  },
  {
    id: 2,
    title: "Reading Books",
    description: "My all-time favourite since my childhood. Books open doors to endless imagination. I enjoy reading fantasy, science fiction, thrillers, always searching for new perspectives and stories.",
    images: [
      { src: "book1.jpg", caption: "Fantasy Novels" },
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