import loadImageCallBack from './loadImagecallBack'

loadImageCallBack('images/cat1.jpg', (error, img) =>{
    let imgElement = document.createElement('img');
    imgElement.src = img.src;
    document.appendChild(imgElement)
})