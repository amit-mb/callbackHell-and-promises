//Lets define a function here which fetches a image from a url

function loadImageCallBack(url, callback){
  let image = new Image();

  image.src = url;

  //setting up event listeners
  image.onload = function() { 
    callback(null, image); //The callback function will be executed with the (null, image) parameters if and when the image loading completes
    //The first parameter is null because the first parameter is used only in case an error occurs. In onload case, there will be no error. Hence, null is passed as 1st arg.
   }
  
  image.onerror = function(){
    let message = 'Could not load image at the url ' + url ;
    callback(new Error(message))
  }

}

export default loadImageCallBack