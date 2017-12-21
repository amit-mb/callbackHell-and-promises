//Lets define a function here which fetches a image from a url

function loadImageCallBackPromise(url){ //notice no callback in parmas
    return new Promise((resolve, reject) => { //Keep in mind that resolve and reject are also functions that are getting passed
        //Javascript will implement the resolve function in case of success of Promise
        // JS will implement the reject function in case the promise fails
        let image = new Image();
        image.src = url;

        image.onload = function(){
            resolve(image) //nothing happens if the image is loaded fully
        }

        image.onerror = function(){
            let message = 'Could not load Image at url ' + url;
            reject(new Error(message)) // A error is thrown in case .onerror is triggered
        }
    })
  
  }
  
  export default loadImagePromise