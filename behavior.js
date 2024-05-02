class Behaviour {
    constructor() {}

    Move(object) {
        object.AddForce(p5.Vector.random2D())
    }

    MakeChild(parent2) {
        return new Behaviour()
    }
}