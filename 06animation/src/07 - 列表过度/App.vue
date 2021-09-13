<template>
  <div>
    <button @click="add">添加</button>
    <button @click="remove">删除</button>
    <br />
    <transition-group tag="p" name="yun">
      <span v-for="item in numbers" :key="item" class="num">
        {{ item }}
      </span>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numberCounter: 10,
    };
  },

  methods: {
    add() {
      this.numbers.splice(this.randomIndex(), 0, this.numberCounter++);
    },

    remove() {
      this.numbers.splice(this.randomIndex(), 1);
    },

    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
  },
};
</script>

<style scoped>
.num{
  margin: 0 10px;
  display: inline-block;
}

.yun-enter-from,
.yun-leave-to{
  opacity: 0;
  transform: translateY(30px);
}

.yun-enter-active,
.yun-leave-active{
  transition: all 1s ease;
}

.yun-leave-active{
  position: absolute;
}

.yun-move{
  transition: transform 1s ease;
}
</style>