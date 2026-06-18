window.requestAnimationFrame = 
window.__requestAnimationFrame ||
window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
(function () {
return function (callback,element) {
var lastTime = element.__lastTime;
if (lastTime ===undefined) {
lastTime = 0;
}
var currTime = Date.now();
var timeTocall = math.max(1,33 - (currTime -
 lastTime));
window.setTimeout(callback,timeTocall);
element.__lastTime = currTime + timeTocall;
};
})();
