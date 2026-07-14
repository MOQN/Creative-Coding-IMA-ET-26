# Angular Motion

## circular motion
By **combining sine and cosine**, we can create **circular motion**!

#### vsualizing the sine as a vertical motion
<div id="code-01"></div>

#### then, visualizing the cosine as a horizontal motion
**The circular motion (yellow circle)** is a combination of **the sine (red circle)** and **cosine (blue circle)** motions.
<div id="code-02"></div>

## angular velocity
We can organize the the code above this way, using **Angle** `angle`, **angular velocity** `angleVel`, and **radial distance** `radDist` to create circular motion.
<div id="code-03"></div>

## application
<div id="code-04"></div>

## additive with noise
<div id="code-05"></div>
<div id="code-06"></div>

<script>
  const numberOfCodeBlocks = 6;
  const folderName = 'examples/class02/09-angular-motion/';

  for (let i = 1; i <= numberOfCodeBlocks; i++) {
    loadCodeBlock(`${folderName}0${i}`, `code-0${i}`);
  }
</script>