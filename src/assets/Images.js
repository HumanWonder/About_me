// src/assets/images.js

/**************************************************************************************************
 *                                                                                                *
 *                                        🚀 PROJECTS 🚀                                          *
 *                                                                                                *
 **************************************************************************************************/


// Créez un "contexte" pour le répertoire des images (ici, Space_Invaders_Images)
const spaceInvadersContext = require.context('../assets/Space_Invaders_Images', false, /\.(png|jpe?g|gif)$/);
// Utilisez `keys()` pour obtenir toutes les clés des images du répertoire
const spaceInvadersImages = spaceInvadersContext.keys().reduce((imagesObj, path) => {
    // Utilisez le nom de fichier sans l'extension pour l'associer à l'image
    const key = path.replace('./', '').replace(/\.(png|jpe?g|gif)$/, '');
    imagesObj[key] = spaceInvadersContext(path); // Ajoute l'image au tableau
    return imagesObj;
}, {});


const smartRoadContext = require.context('../assets/Smart_Road_Images', false, /\.(png|jpe?g|gif)$/);
const smartRoadImages = smartRoadContext.keys().reduce((imagesObj, path) => {
    const key = path.replace('./', '').replace(/\.(png|jpe?g|gif)$/, '');
    imagesObj[key] = smartRoadContext(path);
    return imagesObj;
}, {});

const multiplayerContext = require.context('../assets/multiplayer_img', false, /\.(png|jpe?g|gif)$/);
const multiplayerImages = multiplayerContext.keys().reduce((imagesObj, path) => {
    const key = path.replace('./', '').replace(/\.(png|jpe?g|gif)$/, '');
    imagesObj[key] = multiplayerContext(path);
    return imagesObj;
}, {});

const nnefContext = require.context('../assets/Nnef_Img', false, /\.(png|jpe?g|gif)$/);
const nnefImages = nnefContext.keys().reduce((imagesObj, path) => {
    const key = path.replace('./', '').replace(/\.(png|jpe?g|gif)$/, '');
    imagesObj[key] = nnefContext(path);
    return imagesObj;
}, {});

const go_reloadedContext = require.context('../assets/go-reloaded', false, /\.(png|jpe?g|gif)$/);
const go_reloadedImages = go_reloadedContext.keys().reduce((imagesObj, path) => {
    const key = path.replace('./', '').replace(/\.(png|jpe?g|gif)$/, '');
    imagesObj[key] = go_reloadedContext(path);
    return imagesObj;
}, {});

const githubContext = require.context('../assets/github_img', false, /\.(png|jpe?g|gif)$/);
const githubImages = githubContext.keys().reduce((imagesObj, path) => {
    const key = path.replace('./', '').replace(/\.(png|jpe?g|gif)$/, '');
    imagesObj[key] = githubContext(path);
    return imagesObj;
}, {});

// Exportez les images pour pouvoir les utiliser dans votre projet
export const work = {
    spaceInvaders: spaceInvadersImages,
    smartRoad: smartRoadImages,
    multiplayer: multiplayerImages,
    nnef: nnefImages,
    go_reloaded: go_reloadedImages,
    github: githubImages,
};

/**************************************************************************************************
 *                                                                                                *
 *                                        🎨 HOBBIES 🎨                                         *
 *                                                                                                *
 **************************************************************************************************/


const videogamesContext = require.context('../assets/Hobbies_img/games', false, /\.(png|jpe?g|gif)$/);
const videogamesImages = videogamesContext.keys().reduce((imagesObj, path) => {
    const key = path.replace('./', '').replace(/\.(png|jpe?g|gif)$/, '');
    imagesObj[key] = videogamesContext(path);
    return imagesObj;
}, {});

const booksContext = require.context('../assets/Hobbies_img/books', false, /\.(png|jpe?g|gif)$/);
const booksImages = booksContext.keys().reduce((imagesObj, path) => {
    const key = path.replace('./', '').replace(/\.(png|jpe?g|gif)$/, '');
    imagesObj[key] = booksContext(path);
    return imagesObj;
}, {});

const drawingsContext = require.context('../assets/Hobbies_img/drawings', false, /\.(png|jpe?g|gif)$/);
const drawingsImages = drawingsContext.keys().reduce((imagesObj, path) => {
    const key = path.replace('./', '').replace(/\.(png|jpe?g|gif)$/, '');
    imagesObj[key] = drawingsContext(path);
    return imagesObj;
}, {});

const otherContext = require.context('../assets/Hobbies_img/other', false, /\.(png|jpe?g|gif)$/);
const otherImages = otherContext.keys().reduce((imagesObj, path) => {
    const key = path.replace('./', '').replace(/\.(png|jpe?g|gif)$/, '');
    imagesObj[key] = otherContext(path);
    return imagesObj;
}, {});

export const hobbies = {
    books: booksImages,
    videogames: videogamesImages,
    drawings: drawingsImages,
    other: otherImages,
}