# divideWidth

divideWidth is a dead simple jQuery plugin for dividing elements evenly in the available space. It only really takes a line or two of JavaScript to achieve this, but putting it in a plugin can save doing it every time, especially when you need to kill the sizing for responsive sites at a certain breakpoint.

## Use

For simplest use, just call `.divideWidth()` on your containing element. The plugin looks for items with a class of `.item` but you can change it like such:

```javascript
$('#containing_element').divideWidth({
  selector: '.custom_class'
});
```

## Methods

There are two methods for use in responsive sites that you can call with something like [Harvey.js](http://harvesthq.github.io/harvey/) or [enquire.js](http://wicky.nillia.ms/enquire.js/). They are `kill` to clear sizing, and `refresh` to put it back. The use case is entering and exiting a small breakpoint.

Methods are called by passing them as follows:

```javascript
$('#containing_element').divideWidth('kill');
```

## Span multiple widths

You can make an item span the width of multiple columns (my use case is having an absolutely positioned element that spans the width of two items) by adding a `data-divide_width-span` data attribute. For example, `data-divide_width-span=2`.