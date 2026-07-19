# Intereactive Drawing

## pmouseX & pmouseY

Draw a line when the mouse is pressed, connecting the previous mouse position to the current mouse position. (`pmouseX` and `pmouseY` are the previous mouse positions.)
<div id="code-01"></div>
<br>

## key interaction
Presss any key to change the color of the circle. (`keyIsPressed` is `true`.)
<div id="code-02"></div>
<br>

Press **R**, **G** or **B** to change the color of the circle. (`key` is `"r"`, `"g"` or `"b"`.)

Please ensure that you **click on the canvas once** so that it is in focus before pressing the keys.
<div id="code-03"></div>
<br>

Press **C**, **R** or **T** to change the shape of the circle to a **circle**, **rectangle** or **triangle**. (`key` is `"c"`, `"r"` or `"t"`.)

Please ensure that you **click on the canvas once** so that it is in focus before pressing the keys.
<div id="code-04"></div>

## interaction with buttons
Click on the rectangles on the left top corner to change the color of the circle.

The second sketch is more organized with `button1X`, `button1Y`, `button2X`, and `button2Y` variables to store the position of the buttons. It will allow you to easily change the position of the buttons by changing the values of these variables.

### Step 1
<div id="code-05"></div>

### Step 2
<div id="code-06"></div>

<script>
  const numberOfCodeBlocks = 6;
  const folderName = 'examples/class02/03-interactive-drawing/';

  loadCodeBlocks(folderName, numberOfCodeBlocks);
</script>