new Vue({
    el:"#app",
    data: {
        monsterHealth: 100,
        playerHealth: 100,
        gameIsRunning: false,
        damage: 0,
        max: 0,
        min: 0,
        monsterBleeding: false,
        playerBleeding: false,
        monsterTurn: false,
        playerTurn: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.monsterBleeding = false;
            this.playerBleeding = false;
            this.gameIsRunning = true;
            this.turns = [];
        },
        attack: function() {
            this.max = 10;
            this.min = 2;
            this.damage = this.calculateDamage(this.min,this.max);
            this.monsterHealth -= this.damage;
            this.monsterBleeding = this.monsterHealth < 20;
            this.turns.unshift({
                isPlayer: true, 
                text: 'You hit Monster for ' + this.damage
            });
            if(this.checkWin()) {
                return;
            }
            else {
                this.monsterAttack();
            }
        },
        specialAttack: function() {
            this.max = 40;
            this.min = 20;
            this.damage = this.calculateDamage(this.min,this.max);
            this.monsterHealth -= this.damage;
            this.monsterBleeding = this.monsterHealth < 20;
            this.turns.unshift({
                isPlayer: true,
                text: 'You hit Monster for ' + this.damage
            });
            if(this.checkWin()) {
                return;
            }
            else {
                this.monsterAttack();
            }
        },
        monsterAttack: function() {
            this.damage = this.calculateDamage(2,10);
            // this.monsterTurn = true;
            // setTimeout(function(){this.monsterTurn = false}, 2000);
            this.playerHealth -= this.damage;
            this.playerBleeding = this.playerHealth < 20;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits you for ' + this.damage
            });
            this.checkWin();
        },
        heal: function() {
            if (this.playerHealth < 100 && this.playerHealth > 90) {
                this.playerHealth = 100;
            }
            else if (this.playerHealth <= 90){
                this.playerHealth += 10;
                this.playerBleeding = this.playerHealth < 20
            }
            this.turns.unshift({
                isPlayer: false,
                text: 'You heal you for ' + 10
            });
            this.monsterAttack();
        },
        calculateDamage: function(min,max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('Victory! Start a new game?')) {
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            else if(this.playerHealth <= 0) {
                if (confirm('You lost :( New game?')) {
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    },
    computed: {

    },
    watch: {

    }
});