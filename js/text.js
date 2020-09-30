
var textMove = new gsap.timeline();
  mySplitText = new SplitText(".introduction__content", { type: "words,chars" }),
  chars = mySplitText.chars;

TweenLite.set(".introduction__content", { perspective: 600 });
textMove.staggerFrom(chars, 1, { opacity: 0, scale: 0, y: 80, rotationX: 180, transformOrigin: "0% 70% -50", ease: Back.easeOut }, 0.01, "+=0");