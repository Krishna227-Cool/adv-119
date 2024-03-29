function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9l0_4sf_4/model.json', modelLoaded)
}
function draw(){
    image(video, 0, 0, 300, 300)
    classifier.classify(video, gotResults);
}
function gotResults() {
    if (error) {
        console.error(error)
    } else {
        console.log(results);
        document.getElementById("results_object_name").innerHTML= results[0].label;
        document.getElementById("results_object_name").innerHTML = results[0].confidence.toFixed(3);
    }
}
function preload() {
}
function modelLoaded() {
    console.log("Model Loaded");
}
