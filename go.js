const imageSources = ['sleek-yamaha-mt-15-motorcycle-in-action-ejzc07emn7874fkn.jpg','pexels-tausif-15147048.jpg','mt15-modified-v0-oi0o5kb072vc1.webp','mt15-modified-v0-oi0o5kb072vc1.webp','mt-15-v2-right-side-view.webp','HD-wallpaper-mt-15-yamaha-bike-thumbnail.jpg','HD-wallpaper-mt-15-black-and-white-yamaha-bike-thumbnail.jpg','HD-wallpaper-mt-15-aquatic-blue-bike-aquatic-blue-bike-yamaha-thumbnail.jpg','fe298f268a294830a37c05f351098e6c.jpg','e9fb51f65df45f79ed6ca3f18135b6db.jpg','ccc0eae9878ce930ebddf9dbc307a381.jpg','a67940e98b45cba6ac14210c47fa7c2f.jpg','63240ea6bee990d1bfed84658f8c3167.jpg']
function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}

// Change the background image every 1 seconds (500 milliseconds)
setInterval(changeBackgroundImage, 1000);
