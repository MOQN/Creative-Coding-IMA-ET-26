function setup() {
  createCanvas(800, 400);
  background(0);

  noStroke();
  fill(255);
}

function draw() {

  let freq = frameCount * 0.02;
  let amp = 80;
  let sinValue = sin(freq) * amp; // sine
  let noiseValue = noise(freq) * amp; // noise

  let x = frameCount % width;
  let ySine = height * 1 / 3 + sinValue;
  let yNoise = height * 2 / 3 + noiseValue;
  let ySineAndNoise = height / 2 + sinValue + noiseValue;

  // sine
  circle(x, ySine, 1);

  // noise
  circle(x, yNoise, 1);

  // sine + noise: Additive Waves
  circle(x, ySineAndNoise, 5);
}