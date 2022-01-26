function preload(){
    classifer = ml5.imageClassifier("DoodleNet");
}

function setup(){
canvas = createCanvas(280,280);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;
}

function draw(){
    stroke(0);
    strokeweight(7);
    if (mouseIsPressed){
        line(pmx, pxy , cmx ,cmy);
    }
}

function classifyCanvas(){
    classifer.classify(canavs, gotResults);
}

function gotResults(error, results){
if (error){
    console.error(error);
}else{
    document.getElementById("drawing").innerHTML = "Drawing is:" + results[0].label;
    p = results[0].confidence*100;
    document.getElementById("con").innerHTML = "Efficiency:" + p.toFixed(2);

    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.Speak(utterThis);
}
}
