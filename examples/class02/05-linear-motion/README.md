# Type of Motion: Linear Motion

## basic linear motion

`x` position of a moving object is updated by adding a constant `speed` to the previous position.

**`x = x + speed;`**
<div id="code-01"></div>
<br>

`x` and `y` positions of a moving object are updated by adding a constant `xSpeed` and `ySpeed` to the previous position.

**`x = x + xSpeed;`**
**`y = y + ySpeed;`**
<div id="code-02"></div>
<br>

Randomly generate `xSpeed` and `ySpeed` values in `setup()`. Please feel free to reload the sketch to see different speeds and directions of the moving object.
<div id="code-03"></div>

By using if statements, make the ball reappear on the opposite side of the canvas when it goes off the canvas. (i.e., wrap around the canvas)
<div id="code-04"></div>

bounce the ball off the edges of the canvas by reversing the speed when it goes off the canvas.
<div id="code-05"></div>

<script>
  const numberOfCodeBlocks = 5;
  const folderName = 'examples/class02/05-linear-motion/';

  for (let i = 1; i <= numberOfCodeBlocks; i++) {
    loadCodeBlock(`${folderName}0${i}`, `code-0${i}`);
  }
</script>