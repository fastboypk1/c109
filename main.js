function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/PDTAnc_Fx/model.json',modelReady);

}
function modelReady(){
console.log("model is ready");
classifier.classify(gotResult)
}
function gotResult(error, results){
    if (error)
    {console.error(error);}
    else {
        console.log(results);
        document.getElementById("result_label").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(1);
        img1=document.getElementById("alien_1");
        img2=document.getElementById("alien_2");
        img3=document.getElementById("alien_3");
        img4=document.getElementById("alien_4");

        if(results[0].label=="sing"){
            img1.src="aliens-01.gif";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }
        else if(results[0].label=="clap"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.gif";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";

        }
        else if(results[0].label=="tap"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.gif";

        

    }
    else if(results[0].label=="scraping"){
        img1.src="aliens-01.png";
        img2.src="aliens-02.png";
        img3.src="aliens-03.gif";
        img4.src="aliens-04.png";

    
    



}
else{
      img1.src="aliens-01.png";
        img2.src="aliens-02.png";
        img3.src="aliens-03.png";
        img4.src="aliens-04.png";

    


}
    
    }
}
