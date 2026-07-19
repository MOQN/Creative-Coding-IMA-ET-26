# Arcs & Splines (Curves)

## arc
<div id="code-01"></div>
<br/>

<div id="code-02"></div>
<br/>

#### arc + angleMode(DEGREES)
`angleMode(DEGREES)` allows you to use degrees instead of radians for angles. The default is RADIANS.
<div id="code-03"></div>
<br/>

#### arc | application
if you successfully draw an arc, you can simply comment out the ellipse() function, as it is just a guide for the arc. Then feel free to draw more visual elements.

Q: How do we close the arc for the mouth? (A: draw a line from the start point to the end point of the arc.)
<div id="code-04"></div>
<br/>

## spline()
#### (curve() in p5 version 1.x)
You can draw a spline curve using the `spline()` function. The function is used to create a smooth curve through a series of points.

Please note that `spline()` is available in p5.js version 2.x and later. If you are using an earlier version (1.x) of p5.js, you can use `curve()` instead.

For more information on spline(), see the [p5.js reference | spline()](https://beta.p5js.org/reference/p5/spline/) page.
<div id="code-05"></div>

# tip!
I don't recommend using `bezier()` as it's a lot more complex. If you want to create more complex curves, you can use multiple `splineVertex()` then `beginShape()` and `endShape()` to create custom curves.

Please look at the **Custom Shapes** examples!

<script>
  const numberOfCodeBlocks = 5;
  const folderName = 'examples/class01/04-arcs-n-splines/';

  loadCodeBlocks(folderName, numberOfCodeBlocks);
</script>