# SASS NOTES

# Variables

# Data Type
## Maps 
Just like with a key/value pair, SASS provides a "data structure" of a key/value pairs.

Maps are not built-in from vanilla CSS so to utilize the best out of it, use SASS FUNCTIONS

**DO something for every pair**
This technique does not use SASS FUNCTIONS but uses their @each rule.

@each  - evaluates a block of style for each key/value pair

Example:
```css
$icons: ("eye": "\f112", "start": "\f12e", "stop": "\f12f");

@each $key, $value in $icons {
  .icon-#{$key}:before {
    display: inline-block;
    font-family: "Icon Font";
    content: $value;
  }
}

```

# Mixins
Mixins are basically like functions classes. They take an argument and produce a result.

You can think of Mixins like CSS classes but they can take an argumen to alter the result.