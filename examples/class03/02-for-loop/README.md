# For-Loop | Basics

## intro

We can draw circles by typing the code over and over again! Notice how the diameter goes from `50`, to `100`, to `150`... there's a clear **pattern** here, right?

<div id="code-01"></div>

What if we use a rule like `dia = dia + 50`? That would let us draw them much more **systematically**!

<div id="code-02"></div>

!> *This is exactly what a for loop is! It’s a way to make the computer do all the tedious tasks and heavy lifting (repetition) for us!*

## how to use

### by range
As shown above, you can tell the loop to cover a specific range, like "start at 50 and stop at 300."

<div id="code-03"></div>

### by count
Or, you can simply tell it how many times to repeat, like "do this exactly 6 times."

<div id="code-04"></div>

## nested loops

### Step 1
<div id="code-05"></div>

#### or
<div id="code-06"></div>

### Step 2
When you put a for loop inside another for loop, we call it a nested loop. This is how we create 2D repetitions, like grids and patterns!
<div id="code-07"></div>

<script>
  loadCodeBlocks('examples/class03/02-for-loop/', 7);
</script>