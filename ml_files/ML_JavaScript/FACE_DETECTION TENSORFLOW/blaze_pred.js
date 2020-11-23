(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        video = document.getElementById('webcam');
    
    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    
    navigator.getMedia({
        video:true,
        audio:false
    }, function(stream){
        video.srcObject = stream;
        video.play();
    }, function(error){
        //error.code
    }
    );
    video.addEventListener('play',function()
                          {
        draw(this, context,640,480);
    },false);
    
    async function draw(video,context, width, height)
    {
        context.drawImage(video,0,0,width,height);
        const model = await blazeface.load();
        const returnTensors = false;
        const predictions = await model.estimateFaces(video, returnTensors);

        wordList = ["zero","one","two","three","four","five","six","seven","eight","nine", "yes", "no", "up", "down", "left", "right", "stop", "go"];
            $.each(wordList, function( index, word ) {
            if (!word.startsWith('_')){
            $("#candidate-words").append('<span id='word-${word}'>${word}</span>');
            }
            });
            if(this.checked){
           if(!modelLoaded){
          loadModel();
          }else{
          startListening();
           }
            }
            else {
             stopListening();
            }
            function loadModel(){
    recognizer = speechCommands.create("BROWSER_FFT");  
    Promise.all([
        recognizer.ensureModelLoaded()
      ]).then(function(){
        words = recognizer.wordLabels();
        modelLoaded = true;
        startListening();
      })
}
function startListening(){
    recognizer.listen(({scores}) => {
        scores = Array.from(scores).map((s, i) => ({score: s, word: words[i]}));
        scores.sort((s1, s2) => s2.score - s1.score);
        $("#word-"+scores[0].word).addClass('candidate-word-active');
    }, 
    {
        probabilityThreshold: 0.70
    });
}
function stopListening(){
    recognizer.stopListening();
}


          if(predictions.length<=0)
           {
            context.fillText("WARNING",200,200);
           }

        
          
          else if(predictions.length >0)
          {
           console.log(predictions);
           for (let i = 0; i < predictions.length; i++) {
           const start = predictions[i].topLeft;
           const end = predictions[i].bottomRight;
           var probability = predictions[i].probability;
           const size = [end[0] - start[0], end[1] - start[1]];

           // Render a rectangle over each detected face.
           context.beginPath();
           context.strokeStyle="green";
           context.lineWidth = "4";
           context.rect(start[0], start[1],size[0], size[1]);
           context.stroke();
           var prob = (probability[0]*100).toPrecision(5).toString();
           
           
           var text = prob+"%";
           context.fillStyle = "red";
           context.font = "13pt sans-serif";
           context.fillText(text,start[0]+5,start[1]+20);
         
            }

            
           


           }
        setTimeout(draw,500,video,context,width,height);
    }
})();