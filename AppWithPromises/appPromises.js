import loadImagePromise from './loadImagewithPromises'

let addImg = (src) => {
    let imgElement = document.createElement('img');
    imgElement.src = src;
    document.appendChild(imgElement);

}


loadImagePromise('img/cat1.jpg'). then((img1) => {
    addImg(img1.src);
} )
// if(error) throw error;
loadImagePromise('img/cat2.jpg').then((img2) => {
    addImg(img2.src);
 })
// if(error) throw error;
loadImagePromise('img/cat3.jpg').then(( img3) => {
    addImg(img3.src)
// if(error) throw error;
})

//Lets look at a better way to write above promises
Promise.all([
    loadImagePromise('img/cat1.jpg'),
    loadImagePromise('img/cat2.jpg'),
    loadImagePromise('img/cat3.jpg')
]).then((images) => {
    console.log(images)
    images.forEach(img => addImg(img.src))
}).catch((err) => { //lets add error handling

})
    
