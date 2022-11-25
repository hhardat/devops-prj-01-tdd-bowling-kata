class Game {

    currentScore = 0;
    nextRollToAdd = 0;
    secondNextRollToAdd = 0;
    secondRoll = false;
    currentRoll = 0;
    totalTurns = 10;
    oneMoreRoll = false;

    roll(pins) {
        if (!this.oneMoreRoll) {
            this.currentScore += pins;
            this.currentRoll += pins;
        }
        
        if (this.totalTurns === 1 && !this.oneMoreRoll) {
            if (pins === 10) {
                this.oneMoreRoll = true;
                this.addFutureRoll(pins);
                this.nextRollToAdd++;
                this.secondNextRollToAdd++;
                this.totalTurns--;
            }
        }
        else if (this.totalTurns === 0) { 
            this.addFutureRoll(pins);
        }
        else {
        if (this.nextRollToAdd > 0) {
            this.addFutureRoll(pins);
        }
        if (pins === 10 && !this.oneMoreRoll) {
            this.nextRollToAdd++;
            this.secondNextRollToAdd++;
            this.totalTurns--;
        } else if (this.secondRoll) {
            this.testSecondRoll();
        } else {
            this.secondRoll = true;
        }
        this.oneMoreRoll = false;
    }
    }

    testSecondRoll() {
        this.secondRoll = false;
        if (this.currentRoll === 10) {
            this.nextRollToAdd++;
        }
        this.totalTurns--;
        this.currentRoll = 0;
    }

    addFutureRoll(pins) {
        for (let i = 0; i < this.nextRollToAdd; i++) {
            this.currentScore += pins;
        }
        if (this.secondNextRollToAdd === 0)
            this.nextRollToAdd = 0;
        else {
            this.nextRollToAdd = this.secondNextRollToAdd;
            this.secondNextRollToAdd = 0;
        }
    }

    score() {
        return this.currentScore;
    }
}


module.exports = Game;