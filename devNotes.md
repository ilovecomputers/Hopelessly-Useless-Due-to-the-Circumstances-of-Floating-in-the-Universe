## Mon May 28 2018

* [x] ~~Decided to follow the wonderful [Daniel Shiffman's WebGL tutorial](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_) (left off at 18.3)~~
    - This means I'll utilize P5.js
    - [x] I want to have [those three.js sliders](http://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage), so I can fiddle around some parameters to fine tune the artwork. P5js has [it's own version](https://github.com/bitcraftlab/p5.gui)
* [x] ~~Read [The Book of Shaders](https://thebookofshaders.com/)~~
    - I imagine I'll be creating galaxy effects with shaders
    - P5.js provides a way to [input shader fragments](https://p5js.org/reference/#/p5/loadShader)
* [ ] Experiment with [Perline Noise and Flow Fields](https://www.youtube.com/watch?v=sor1nwNIP9A)
* [ ] Place Arcadia's [illustration](images/sad%20person.png) in the center of the canvas
    - [ ] give it a floating effect
    - [ ] Image's height should be less than StarBlob's `maxLength`
    - [ ] The max `maxLength` of the StarBlob should be 700px, so the image is not pixelated
* Tried to have two spheres with independent transforms
    - Relearned that you need to utilize `push()` and `pop()` to have two different spheres have two different transforms. Otherwise, [two spheres will be attached to each other](https://niu.moe/@ilovecomputers/100105609310505240).

## Wed June 06 2018

* [x] ~~Have bunched up black spheres zipping around center~~
    - Hoping that'll create a bubbling/swarm effect
    - [x] Create BinarySphere class
        + Draws a pair of spheres orbiting around each other
        + [x] Decide on parameters to give it
            * The rate of spin changes based on binary distance and sphere radius. To keep variables as little as possible, I will keep the radius of the spheres at 50, since I can scale the binary.
                - With that, the distance will max at 99 to prevent a gap between the spheres.
    - [x] ~~Create BubblingCluster class~~
        + A large group of randomly generated BinarySpheres
        + You can set a start angle between 0 to PI in order to make BinarySpheres appear offset.
            * Not `random(0, 2*PI)` because if you set the angle of a binary to 0 or PI (no matter it's axis), they look the same. So the range of unique draws is between 0 to PI, but not including PI.
            * I can rotate the BinarySpheres, in any orientation, by creating a random 3D vector: `p5.Vector.random3D()` 
        + [x] ~~Orbiting around each other?~~
        + How can I prevent gaps from appearing inside the cluster? [No trivial way it seems](https://arttechla.slack.com/archives/C052L6SHW/p1548237432006900)

## Thu Jan 24 2019

* Switching back to 2D
* [x] Create a blobby circle
    - Based on [this Shiffman video](https://www.youtube.com/watch?v=rX5p-QRP6R4)
    - Here's the [code for it](https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_036_Blobby/P5/sketch.js)
        + That ugly break at the end? A solution is discussed in [the comments](https://www.youtube.com/watch?v=rX5p-QRP6R4&lc=Uggd9j101HBdFHgCoAEC)
            * I finally figured out how this works. You want to go in a circle in a 2D noise plane. However, you want to avoid having negative numbers (to prevent ambiguous values). Easy! Just take the absolute value of the unit circle's coordinates right? Wrong, now you created another ambiguity where the coordinates bounce between (1,0) and (0,1) back and forth four times. You want both unique coordinates AND non-zero coordinates around the circle. Easiest way to do that is to move the center of the unit circle in the noise plane to (1,1).
            * This train of thought also made me realize that the third argument in `noise` is like a 2D slice of a cylinder in this noise space. We go through each slice in each frame, then go around in a circle, and that is how we make the blob move.
    - [x] Replace BinarySphere with Blob
        + Instead of rotate, have the mutate function be called something more generic (like move?)
    - [x] ~~Have different blobs color blend~~ No because the blob will mask stars passing by
        + Like in [this pen](https://codepen.io/kilianso/pen/xayZwm)

## Fri Feb 22 2019

* [x] Create a star field
    - Base it on [this starfield](https://codepen.io/maxpowa/pen/VKXmrW?editors=0010) but have stars move from top-right to bottom-left instead of going in a circle
    - [x] Place star field in blob
        1. [x] Incorporate [`createGraphics`](https://p5js.org/reference/#/p5/createGraphics) into classes
            * After watching [Shiffman's video](https://youtu.be/TaluaAD9MKA) on this method, I realized I can incorporate it into classes for better isolation (like I did with `push` and `pop`).
        2. [x]  ~~[`blend`](https://p5js.org/reference/#/p5/blend) star field layer into blob~~
            * ~~If that doesn't work, you can try using [canvas clip](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clip) by getting the [`drawingContext`](https://github.com/processing/p5.js/issues/2003) of the different layers~~
            * The solution was [to use mask](https://forum.processing.org/two/discussion/21981/#Comment_94885)
    - [x] Create StarBlob class based on your sketch
        + [x] Allow size to be changed
        + [ ] Sketch that uses StarBlob should be a percentage of window width
    - [x] ~~feather fade the edges of the star blob~~




