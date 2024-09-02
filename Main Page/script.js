console.log("Welcome to Music Factory Clone");
let audioElement=new Audio('songs/5.mp3');
audioElement.play();
let masterPlay=document.getElementById('masterPlay');
let Progressbar=document.getElementById('Progressbar');
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');

    }
})

audioElement.addEventListener('timeupdate',()=>{
    // console.log("timeupdate");
    //Updating seek Bar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    Progressbar.value=progress;
})
Progressbar.addEventListener('change',()=>{
    audioElement.currentTime=(Progressbar.value*audioElement.duration)/100;
})
