k = 0;
isPlaying = false;
audio = new Audio();

audio.src = "audios/" + k + ".mp3";

function pay(){
    if(!isPlaying){
        audio.play();
        isPlaying = true;
    }
    else{
        audio.pause();
        isPlaying = false;
    }
}

function chang(){
    if(isPlaying){
        audio.pause();
    }
    k++;
    k = k % 4;
    audio.src = "audios/" + k + ".mp3";
    audio.play();
    isPlaying = true;
}

setInterval(function(){
    if(audio.ended){
        chang();
    }
},7000)