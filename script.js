let Target
let lifeTime = 0, maxLifeTime = 300
let population


function setup() {
    window.canvas = createCanvas(
        windowWidth, 
        windowHeight,
    )
    SetNewChalenge()
    population = new Population(150)
}

function draw() {
    background(220)
    
    // target marker
    stroke(0)
    strokeWeight(2)
    fill(0, 0, 255)
    circle(Target.x, Target.y, 16)

    // avarage distance from target marker
    stroke(0)
    strokeWeight(2)
    noFill()
    circle(Target.x, Target.y, population.avarageDistance)

    // update population
    population.Update()

    // check if end of generation
    lifeTime++
    if (lifeTime >= maxLifeTime) {
        population.Learn()
        lifeTime = 0
    }

    // draw the UI
    let avarageDistanceMeter = 
        "avarage dis: " + population.avarageDistance

    let generationCounter = 
        "generation: " + population.generation

    fill(0)
    textSize(16)
    text(avarageDistanceMeter, 30, 30)
    text(generationCounter, 30, 90)
}

function SetNewChalenge() {
    Target = createVector(
        random(width),
        random(height)
    )
    population = new Population(150)
}

function keyPressed() {
    SetNewChalenge()
}