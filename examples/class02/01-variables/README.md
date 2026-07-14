# Variables

## envirionment variables

Aligning shapes using environment variables.

The `width` and `height` variables are built-in to p5.js and represent the **width** and **height** of the canvas. You can use these variables to position shapes **relative to the canvas size and its center**.

<div id="code-01"></div>
<div id="code-02"></div>

## user-defined variables

You can define your own variables to store values that you want to use multiple times in your code. This is useful for **reusing values** and **making your code more readable**.

<div id="code-03"></div>
<div id="code-04"></div>

## string concatenation

Strings are sequences of characters, and you can combine them using **string concatenation**. In p5.js, you can use the `+` operator to concatenate strings. **Be careful when concatenating strings with numbers!** 

<div id="code-05"></div>

<script>
  const numberOfCodeBlocks = 5;
  const folderName = 'examples/class02/01-variables/';

  for (let i = 1; i <= numberOfCodeBlocks; i++) {
    loadCodeBlock(`${folderName}0${i}`, `code-0${i}`);
  }
</script>