# Transformations | In Practice

<br><br>

The most important thing to remember when using **transformation functions** is to wrap **each visual set (combination of multiple visual elements)** with `push()` and `pop()`! Take a look at the steps below to see how this pattern works!

## Step 1
<div id="code-01"></div>

## Step 2
<div id="code-02"></div>

## Step 3
<div id="code-03"></div>

## Step 4
If you take a look at Step 4, you'll notice the last shape goes back to **the default style**. `push()` and `pop()` apply to **transformation functions** but **also** to **styling settings**, too!
<div id="code-04"></div>

<script>
  loadCodeBlocks('examples/class03/07-transformations-practice/', 4);
</script>