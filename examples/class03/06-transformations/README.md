# Transformations | Basics

## intro

When creating specific visuals, we often need to **combine multiple shapes together**. To do this, we can give them **relative positions** based on `mouseX` and `mouseY`, just like the example below.
<div id="code-01"></div>

Instead of repeating all the numbers and math, we can make it easier by using `translate()`.

`translate()` actually **moves the origin `(0, 0)` of our coordinate system**. This is really important because that **origin becomes the anchor for any transformation functions**. We'll discuss this in detail in class!
<div id="code-02"></div>

Once we use `translate()`, we can freely play around with other transformation functions like `rotate()` and `scale()`!
<div id="code-03"></div>

!> **Just a quick note:** you'll definitely need to use `push()` and `pop()` along with them, which we'll also cover in detail during our class.

## how to use
Always use `translate()` first, and then you can freely add `rotate()` or `scale()`!
<div id="code-04"></div>

## common mistake
Trying to `rotate()` or `scale()` without using `translate()` first.
<div id="code-05"></div>

<script>
  loadCodeBlocks('examples/class03/06-transformations/', 5);
</script>