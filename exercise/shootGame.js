class Player {
    power = 10
    health = 100

    constructor(nama) {
        this.name = nama
    }

    showStatus() {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }

    hit(power) {
        this.health -= power
        console.log(`Player ${this.name} has been damaged by ${power} points`);
        console.log(`Player ${this.name} has ${this.health} remaining healtf`);
    }

    useItem(item) {
        if (item.power) {
            this.power += item.power
            console.log(`Player ${this.name} receive ${item.power} power points`);
        }   else if (item.health) {
            this.health += item.health
            console.log(`Player ${this.name} receive ${item.health} health points`);
        }
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
    }

    getRandomItem() {
        const item = {}
        const random = Math.floor(Math.random() * 3) // antara 0, 1, 2

        if (random == 0) {
            item.power = 10
        } else if (random == 1) {
            item.health = 10
        }
        return item
    }

    start() {
        console.log("~~~ Game Start ~~~");
        while (this.player1.health > 1 && this.player2.health > 1) {
            console.log(`Player ${this.player1.name} turn`);
            this.player1.useItem(this.getRandomItem())
            this.player1.showStatus()
            this.player2.hit(this.player1.power)
            if (this.player2.health <= 0) break

            console.log(`Player ${this.player2.name} turn`);
            this.player2.useItem(this.getRandomItem())
            this.player2.showStatus()
            this.player2.hit(this.player2.power)
            if (this.player1.health <= 0) break
        }

        if (this.player1.health <= 0) {
            console.log(`The winner is player ${this.player1.name}`);
        } else {
            console.log(`The winner is player ${this.player2.name}`);
        }
        console.log("~~~ End Game ~~~");
    }
}

const david = new Player("David")
const john = new Player("John")

const game = new ShootingGame(david,john)
game.start()