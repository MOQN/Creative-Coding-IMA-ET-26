# Math Function: `map()`

## how to use

`map()` function is used to re-map a number from one range to another.

```javascript
let output = map(input, inputStart, inputStop, outputStart, outputStop);
```

For example, the code below maps the `mouseX` **position** to a **color** range between 0 and 255.

<div id="code-01"></div>

The following code below maps **position** values to the **size** of the ellipse.
<div id="code-02"></div>

We can flip the mapping!

*The starting value doesn't mean it has to be the smaller value.*

<div id="code-03"></div>

## an example

The **red** color of the circle is mapped from the **mouseX** position (flipped!), while the **blue** color is mapped from the **mouseY** position.

<div id="code-04"></div>

# 🦄 activity

Copy and paste the code into the p5.js Web Editor.

Comment in the lines to see the effect of the mapping! **Experiment with the output range values!**

<script>
  loadCodeBlocks('examples/class03/01-map/', 5);
</script>