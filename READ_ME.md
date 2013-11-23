BEETHOVEN
Many of us are familiar with impress.js presentation([impress.js demo](http://bartaz.github.com/impress.js) by [@bartaz](http://twitter.com/bartaz)).
It is indeed impressive.but wait it needs coding to create presentations.Which is a trouble for non-coders And even to coders with limited time.
So here Beethoven helps To eliminate writing the code,still having the basic features of impress.js.
Before diving into beethoven you need to understand few terms.
Ours slides will be placed in an infinite 3D canvas 
our slide will have following attributes.
slide-pos X:this will determine where the slide will be positioned in X axis.
slide-pos Y:this will determine where the slide will be positioned in Y axis.
slide-pos z:this will determine where the slide will be positioned in Z axis
3D Rotate X: this will determine the Angle wrt x axis in 3d space in which slide will be placed.
3D Rotate Y: this will determine the Angle wrt y axis in 3d space in which slide will be placed.
3D Rotate Z: this will determine the Angle wrt z axis in 3d space in which slide will be placed.
*The x axis is the horizontal axis.  This means that you can make things tilt forwards (positive value) or backwards (negative value).
*The y axis is the vertical axis so you can have things swing in from the left (negative value) or right (positive value).
*The z axis is the depth axis (the one coming out at you) so rotating things on this would be rotating things up (negative value) and down (positive value).
Data scale: it would mean the zooming in and out of the slides when active and dormant.


Disclaimer!
Beethoven will need Firefox 24 or above to work with
however impress presentations can work with ffx 20. or above.
This was tested solely on Firefox 24. And i have no idea if this works in Google chrome(Theoretically it should work!).

CHANGE THIS SETTING:goto Edit>preferences> click on general tab and select (in downloads section ) "Always ask me where to save files"


How to use:
To create a new file open main.HTML using ffx.
enter the name of presentation (without extensions)
and click submit
a new window opens (beeth.html)
and asks whether you want to save file click "save file"
select destination of your file
(make sure you copy paste impress.js & impress-demo.css file into your file destination folder(same folder where you stored file) 
note:impress.js & impress-demo.css is available in impress folder given with this.)
now select browse.. and select the file you created.click on load
now give the atrributes you want and give content.
click save.
(to edit)
to go to slide enter the slide number (in lowest text space beside next) and click go.
use prev and next to move among slides.
edit the content and click save


to edit 
directly open beeth.html
load the file(by clicking on browse and selecting file and clicking on load)
to go to slide enter the slide number click go.
use prev and next to move.
edit the content and click save

to get the final content
click on print.
select save and choose destination(choose same destination as before).it gets saved (shown as green arrow in RHS of ffx) click and play.
if needed edit again.(mostly needs only ENTER key strokes as ffx figures out from last inputs)


soon i will upload a video on its working till then happy exploring.

Any queries contact <roit.shetty@gmail.com>
Author:Rohit Shetty,NIE MYSORE.



