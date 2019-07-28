<template>
  <div class="alert">
    <h3>{{x}} + {{y}} = ?</h3>
    <hr>
    <div class="buttons">
      <button class="btn btn-success" v-for="number in answers" @click="onAnswer(number)">
        {{number}}
      </button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AppQuestion",
        data () {
            return {
                x: mtRand(100, 200),
                y: mtRand(100, 200)
            }
        },
        computed: {
            good () {
                return this.x + this.y;
            },
            answers() {
                let res = [this.good];
                while (res.length < 4) {
                    let num = mtRand(this.good - 20, this.good + 20);
                    if (res.indexOf(num) === -1) {
                        res.push(num);
                    }
                }
                return res.sort(function(){
                    return Math.random() > 0.5;
                });
            }
        },
        methods: {
            onAnswer(num) {
                if (num === this.good) {
                    this.$emit('success');
                } else {
                    this.$emit('error', '${this.x} + ${this.y} = ${this.good}');
                }
            }
        }
    }

    function mtRand(min, max) {
        let diff = max - min;
        return Math.floor (Math.random() * (diff + 1)) + min;
    }
</script>

<style scoped>
  .alert {
    padding-top: 20px;
    background-color: #eee;
  }
  .buttons {
    display: flex;
    justify-content: space-around;
  }
  .btn {
    margin: 20px 0;
  }
</style>
