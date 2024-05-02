class DNA {
    constructor() {
        this.genes = []
        for (let i=0; i<maxLifeTime-1; i++) {
            this.genes.push(
                p5.Vector.random2D()
            )
            console.log(this.genes[i])
        }
    }

    Move(object) {
        object.AddForce(this.genes[lifeTime])
    }

    MakeChild(parent2) {
        let newDNA = new DNA()
        let middle = random(this.genes.length)
        for (let i = 0; i < this.genes.length; i++) {
            if (i < middle) newDNA.genes[i] = this.genes[i]
            else newDNA.genes[i] = parent2.genes[i]
        }
        return newDNA
    }
}