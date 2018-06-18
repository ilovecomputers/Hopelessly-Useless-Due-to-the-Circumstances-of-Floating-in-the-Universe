## Mon May 28 2018

* [ ] Decided to follow the wonderful [Daniel Shiffman's WebGL tutorial](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_) (left off at 18.3)
    - This means I'll utilize P5.js
    - [x] I want to have [those three.js sliders](http://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage), so I can fiddle around some parameters to fine tune the artwork. P5js has [it's own version](https://github.com/bitcraftlab/p5.gui)
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
    - [x] Create BinarySphere class
        + Draws a pair of spheres orbiting around each other
        + [x] Decide on parameters to give it
            * The rate of spin changes based on binary distance and sphere radius. To keep variables as little as possible, I will keep the radius of the spheres at 100, since I can scale the binary.
                - With that, the distance will max at 99 to prevent a gap between the spheres.
    - [ ] Create BubblingCluster class
        + A large group of randomly generated BinarySpheres
        + [ ] Orbiting around each other?
        + [ ] How can I prevent gaps from appearing inside the cluster?
