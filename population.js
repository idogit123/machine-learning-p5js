class Population {
    constructor(size) {
        this.rockets = []
        this.avarageDistance = 0
        this.generation = 0

        for (var i = 0; i < size; i++) {
            this.rockets.push(new Rocket(new DNA()))
        }
    }

    Update() {
        for (let rocket of this.rockets) {
            rocket.Update()
            rocket.Show()
        }
    }

    Learn() {
        //get the avarage distance of the rockets from the target
        this.avarageDistance = 0
        for (let rocket of this.rockets) {
            this.avarageDistance += rocket.GetScore()
        }
        this.avarageDistance /= this.rockets.length

        // choose the parents of the next generation
        let parents = []
        for (let rocket of this.rockets) {
            if (rocket.GetScore() < this.avarageDistance) {
                parents.push(rocket)
            }
        }
        
        // make new rockets
        for (let i=0; i<this.rockets.length; i++) {
            this.rockets[i] = new Rocket(
                this.Selection(parents)
            )
        }

        this.generation++
    }

    Selection(parents) {
        let parent1 = floor(random(parents.length))
        let parent2 = floor(random(parents.length))
        while (parent2 == parent1) {
            parent2 = floor(random(parents.length))
        }
        return parents[parent1].behavior.MakeChild(
            parents[parent2].behavior
        )
    }
}