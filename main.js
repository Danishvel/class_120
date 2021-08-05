function preload(){

}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(530, 295);
    Cam = createCapture(VIDEO);
    Cam.hide();
    classifier = ml5.imageClassifier("MobileNet", modelloaded);

}
function draw() {
    image(Cam, 0, 0, 300, 300);
    classifier.classify(Cam, gotresult);
}
function modelloaded(){
    console.log("Model Loaded!!");
}
function gotresult(error, results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("R_N").innerHTML=results[0].label;
        document.getElementById("R_A").innerHTML=results[0].confidence.toFixed(2);
    }
}