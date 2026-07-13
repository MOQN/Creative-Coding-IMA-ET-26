# Custom Shapes with Vertices

## custom shapes
<div id="code-01"></div>
<div id="code-02"></div>
<div id="code-03"></div>

## trianglular shape
<div id="code-04"></div>

## complex shape
<div id="code-05"></div>

## splineVertex()
#### (curveVertex() in p5 version 1.x)
You can draw a smooth curve using the `splineVertex()` function. The function is used to create a smooth curve through a series of points.

Please note that `splineVertex()` is available in p5.js version 2.x and later. If you are using an earlier version (1.x) of p5.js, you can use `curveVertex()` instead.

For more information on splineVertex, see the [p5.js reference | splineVertex](https://p5js.org/reference/p5/splineVertex/) page.

<div id="code-06"></div>

## tip!
Please copy and paste this code into the p5.js Web Editor and check the Console.

When you click on the canvas, the code will log the mouse coordinates in the Console in the format of a `splineVertex()` function. You can copy and paste the full output into your own code between `beginShape()` and `endShape()` to create a custom shape!

`mousePressed()` is an event function that is called whenever the mouse is pressed. We will review this in more detail later.
<div id="code-07"></div>
<br/>

#### vertex()
<div id="code-08"></div>

<script>
  const numberOfCodeBlocks = 8;
  const folderName = 'examples/class01/05-custom-shapes/';

  for (let i = 1; i <= numberOfCodeBlocks; i++) {
    loadCodeBlock(`${folderName}0${i}`, `code-0${i}`);
  }
</script>