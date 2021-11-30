
const h3 = document.querySelector('h3');//fråga?
const textInput = document.querySelector('input'); //inputfält
const btn = document.querySelector('button')
const div = document.querySelector('div')
const knapp = document.getElementsByClassName('knapp')

const KEY = '8a15d21fab6bb05deb9b0c97d9285264'; //min nyckel

btn.addEventListener('click', function(){
    console.log(textInput.value);
    let textSearch = textInput.value;
    if(textSearch === ""){
        alert('vad söker du efter');
    }
    else{
        searchPictures(textSearch);
    }
 
});

const searchPictures = (textSearch) => {
const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${KEY}&tags=${textSearch}&per_page=5&page=1&format=json&nojsoncallback=1;`; //hämtat från flickr
console.log(url); 

//method = det den söker på, 
const images = document.querySelectorAll('img');
for(let i=0; i<images.length; i++){
    images[i].style.display = 'none';
    
}

fetch(url).then( 
    function(response){
        console.log(response);      
        return response.json();//om ovan är fulfilled går vi till THEN.
        
    }
    //STEG 3
).then(
    function(data){
        console.log(data)
        console.log(data.photos.photo)
        displayGallery(data.photos.photo);
          
    }
)
textInput.value =''; //rensar min input

}
const displayGallery =(array) =>{
    console.log(array)

    for(let i=0; i<array.length; i++){
        const img = document.createElement('img');
        let picId = array[i].server;
        console.log(picId)

        let photoId = array[i].id;

        let secret = array[i].secret;
        console.log(secret)
        let size = 'm';
        img.src = `https://live.staticflickr.com/${picId}/${photoId}_${secret}_${size}.jpg`;
       div.appendChild(img)
      
    }
}









        
        






  
  

    
   








   

       




