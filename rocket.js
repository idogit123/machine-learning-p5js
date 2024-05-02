class Rocket {
    constructor(newBehavior) {
        this.Gravity = createVector(0, 0.1)
        this.pos = createVector(width/2, height/2)
        this.vel = createVector()
        this.acc = createVector()

        this.behavior = newBehavior
        //this.score = 0
    }

    AddForce(force) {
        this.acc.add(force)
    }

    Update() {
        this.AddForce(this.Gravity)
        this.behavior.Move(this)
        //
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.set(0,0)
    }

    Show() {
        noStroke()
        fill(255, 30, 0, 150)
        
        push()
        translate(this.pos.x, this.pos.y)
        rotate(this.vel.heading())
        rectMode(CENTER)
        rect(0, 0, 50, 10)
        pop()
    }

    GetScore() {
        return dist(this.pos.x, this.pos.y, Target.x, Target.y)
    }
}