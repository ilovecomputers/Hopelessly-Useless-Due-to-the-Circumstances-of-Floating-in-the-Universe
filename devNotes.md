## Mon May 28 2018

* Decided to follow the wonderful [Daniel Shiffman's WebGL tutorial](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_)
    - This means I'll utilize P5.js
    - I want to have [those three.js sliders](http://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage), so I can fiddle around some parameters to fine tune the artwork. P5js has [it's own version](https://github.com/bitcraftlab/p5.gui)
* [ ] Read [The Book of Shaders](https://thebookofshaders.com/)
    - I imagine I'll be creating galaxy effects with shaders
    - P5.js provides a way to [input shader fragments](https://p5js.org/reference/#/p5/loadShader)
* [ ] Experiment with [Perline Noise and Flow Fields](https://www.youtube.com/watch?v=sor1nwNIP9A)
* [ ] Place Arcadia's [illustration](images/sad%20person.png) in the center of the canvas
    - [ ] give it a floating effect
* Tried to have two spheres with independent transforms
    - Relearned that you need to utilize `push()` and `pop()` to have two different spheres have two different transforms. Otherwise, [two spheres will be attached to each other](https://niu.moe/@ilovecomputers/100105609310505240).

## Wed June 06 2018

* [ ] Have bunched up black spheres zipping around center
    - Hoping that'll create a bubbling/swarm effect
    - [ ] Create BinarySphere class
        + Draws a pair of spheres orbiting around each other
        + [ ] Decide on parameters to give it
    - [ ] Create BubblingCluster class
        + A large group of BinarySpheres
        + [ ] Orbiting around each other?
