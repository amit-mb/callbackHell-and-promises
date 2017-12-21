import loadImageCallBack from './loadImagecallBack'


let addImg = (src) => {
    let imgElement = document.createElement('img');
    imgElement.src = src;
    document.appendChild(imgElement);

}


loadImagecallBack('img/cat1.jpg', (error, img1) => {
    addImg(img1.src);
    if(error) throw error;
    loadImagecallBack('img/cat2.jpg', (error, img2) => {
        addImg(img2.src);
        if(error) throw error;
        loadImagecallBack('img/cat3.jpg', (error, img3) => {
            addImg(img3.src)
            if(error) throw error;
        })
    } )
})