<script>
import Hello from "./Hello.vue";

export default {
  data() {
    return {
      counter: 0,
    };
  },

  render() {
    // 这里面就和写js一样
    const increment = () => this.counter++;
    const decrement = () => this.counter--;

    return (
      <div>
        <h2>当前计数：{this.counter}</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <Hello>{{ default: (props) => <button>我是按钮</button> }}</Hello>
      </div>
    );
  }
};
</script>