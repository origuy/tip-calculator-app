# Tip Calculator

Tip Calculator - the app takes 3 inputs from the user (the bill, the percentage of tip and amount of people) and the app shows the user how muh each person should pay in total and the tip amount per person

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size (Responsive Design)
- See hover states for interactive elements
- Program with javaScript and DOM manipulation
### Screenshot

![Project screenshot](/images/mobile.gif)

### Links

- GitHub URL: https://github.com/origuy/tip-calculator-app
- Live Site URL: https://tipcalculatororiguy.netlify.app

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

* How to work with Github and Git Bash
* How to make the design responsive and apply touch abilities with  javaScript
* How to program with switch statement
* Place the elements with the grid system
* identify the right button the user clicks/interact with
```SCSS
 .buttonGroupTip{
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr;
                gap: $buttonGroupTipGridGap;
 }
 ```
```js
 switch (fiveFlag) {
         case true:
            document.getElementById("fivePercent").style.backgroundColor = "#26c0ab";
             break;
     
         default:
            document.getElementById("fivePercent").style.backgroundColor = "#00494d";
             break;
     }
```


### Continued development

I will continue focus on:

- Focus to master SCSS technique.
- Focus on semantic and accessible HTML
- Focus on work with figma design files to simulates the real work project.
- Focus on estimated time for the projects and made the deadline without delays.
- Focus on deep understanding of javaScript and work with classes and DOM manipulation

### Useful resources

- [w3schools](https://www.w3schools.com/) - the site help me with the concept of how to right CSS and javaScript the right way and all the different compatibilities.
- [sass-lang](https://sass-lang.com/) - the site help me with the concept of how to right SCSS the right way and all the different compatibilities.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - the site help me with the concept of how to right CSS and javaScript the right way and all the different compatibilities.

## Author

- Website - [Ori Guy](https://github.com/origu)
