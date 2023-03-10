function classify(){
    navigator.mediaDevices.getUserMedia({
audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/train/audio')
}
function modelReady(){
    classifier.classify(gotResults);
     if(error){
     console.error(error);
     }
     else{
        console.log(results);
        r=Math.floor(Math.random()*255)+1
        g=Math.floor(Math.random()*255)+1
        b=Math.floor(Math.random()*255)+1
        document.getElementById("result").innerHTML="I can hear:  "+results[0].label;
        document.getElementById("resultconfidence").innerHTML="confidince:  "+(results[0].confidence*100)
        document.getElementById("result").style.color="rgb("+r+","+g+","+b+")";
        document.getElementByIdd("resultconfidence").style.color="rgb("+r+","+g+","+b+")"



        pet1=document.getElementById("pepper");
        pet2=document.getElementById("roger");
        if(results[0].label=="cat")
        pet1.src="cat.gif";
        pet2.src="pooch.png";
     }
     else if(results[0].label=="pooch")
     pet1.src="cat.png";
     pet2.src="pooch.gif";
}