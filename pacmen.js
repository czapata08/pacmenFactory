 //Image array for PacMen 
    const pacArray = [
        ['pac-menFactory/pac-images/PacMan1.png', 'pac-menFactory/pac-images/PacMan2.png'],
        ['pac-menFactory/pac-images/PacMan3.png', 'pac-menFactory/pac-images/PacMan4.png']
    ];
  
//Container Element Div
    let container = document.getElementById("container");
    
 //Container Element Position 
    let p = container.getBoundingClientRect();
     console.log(p)

//Min + Max position for X & Y axis
     var minX = p.left - 20;
     var maxX = p.right - 20;
     var minY = p.top - 20;
     var maxY = p.bottom - 20;

    var pos = 0;
    var direction = 0;
    const pacMen = []; // This array holds all the pacmen
  
//Select A Random Image
    function randomImage(pacArray) {
        return pacArray[Math.floor(Math.random() * 2)][Math.floor(Math.random() * 2)]
        };

    function random (min, max) {
        return Math.random() * (max - min) + min
    }

    function setToRandom(dx,dy) {
        return {
            dx: random(minX, maxX),
            dy: random(minY, maxY),
        }
    }
    // Factory to make a PacMan at a random position with random velocity
    function makePac() {
        // returns an object with random values scaled {x: 33, y: 21}
        let velocity = {
            x:(random(10, 50)),
            y:(random(12, 40))
        }
        let position = setToRandom();
        // Add image to div id = game
        let container = document.getElementById('container');
        let newimg = document.createElement('img');
        // set position here 
        newimg.style.left = position.dx + 'px';
        newimg.style.top = position.dy + 'px';
        newimg.src = randomImage(pacArray);
        newimg.width = 50;
        
    

        // add new Child image to game
        container.appendChild(newimg);
        // return details in an object
        return {
            position,
            velocity,
            newimg
        }
    }

    function update() {
        //Loop over each pacman in array
        pacMen.forEach((item) => {
        checkCollisions(item);
        item.position.dx += item.velocity.x;
        item.position.dy += item.velocity.y;

        item.newimg.style.left = item.position.dx + 'px';
        item.newimg.style.top = item.position.dy + 'px';
        })
        setTimeout(update, 20);
    }

    

    function makeOne() {
        pacMen.push(makePac()); // add a new PacMan
    }

  
    function checkCollisions(item) {
       if (item.position.dx + item.velocity.x + item.newimg.width > p.right ||
       item.position.dx + item.velocity.x < p.left) item.velocity.x = -item.velocity.x;
       if (item.position.dy + item.velocity.y + item.newimg.height > p.bottom||
       item.position.dy + item.velocity.y < p.top) item.velocity.y = -item.velocity.y;
    }
    