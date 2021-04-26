# video-landing-page
Vanilla Javascript tutorial project #9 presented by John Smilga.

<!--
 <video>
    <source src="#">
</video> 
-->
-video attributes: controls, muted, autoplay, loop;

## js 
-select button and select container into variable;
-add click event listener to button and look for slide class which controls the play/pause switch item by moving item left 50%. 
-if() button does NOT have slide class(!button.claslist.contains(''));
then add .slide
-if() button has .slide then video.pause();
-else video.play();

### preloader 
-The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading;
-The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images;

-.preloader is 'visible' by default and when whole page loads then we add .hide-preloader class;
-hide-preloader class is added when through callback() in the event litener on the window. in callback function classlist is added to preloader class on "load". 