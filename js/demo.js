/**
 * Particleground demo
 * @author Alejandro Cruz - @hdev07
 */

// This can be used to set the Particles Effects.
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#00C4B3',
    lineColor: '#00C4B3'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);
