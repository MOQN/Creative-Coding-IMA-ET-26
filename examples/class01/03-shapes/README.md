# 2D Primitive Shapes

## point & line
Points and lines are stroken shapes, which means they are drawn with a stroke color and no fill color. The stroke color can be set with the `stroke()` function, and the stroke weight can be set with the `strokeWeight()` function.
<div id="code-01"></div>
<div id="code-02"></div>

## triangle
<div id="code-03"></div>

## ellipse
Drawing an ellipse is similar to circle, but ellipse can have different `width` and `height` to make it an oval shape.

If you provide the same values for both `width` and `height`, it will make it a circle.
<div id="code-04"></div>

## rectangle
<div id="code-05"></div>
<div id="code-06"></div>
<div id="code-07"></div>
<div id="code-08"></div>

# tip!
I don't recommend using `quad()`. If you want to create more complex shapes, you can use multiple `vertex()` then `beginShape()` and `endShape()` to create custom shapes.

Please look at the **Custom Shapes** examples!

<script>
  const numberOfCodeBlocks = 8;
  const folderName = 'examples/class01/03-shapes/';

  for (let i = 1; i <= numberOfCodeBlocks; i++) {
    loadCodeBlock(`${folderName}0${i}`, `code-0${i}`);
  }
</script>