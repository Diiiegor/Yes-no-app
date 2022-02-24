<template>
  <h2>{{ customTitle }}</h2>
  <p>{{counter}} <sup>2</sup> = {{squareCounter}}</p>

  <div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>

</template>

<script>
export default {
  props:{
    title:String,
    start:{
      type:Number,
      required:true,
      validator(value) {
        return value >= 0;
      }
    }
  },
  name: "Counter",
  data(){
    return {
      counter:this.start
    };
  },
  methods:{
    increase(){
      this.counter++
    },
    decrease(){
      this.counter--
    }
  },
  computed:{
    squareCounter(){
      return this.counter * this.counter;
    },
    customTitle(){
      return this.title || 'counter';
    }
  }
}
</script>

<style scoped>
  button{
    margin: 0 5px;
    background-color: #64bb87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
  button:hover{
    background-color: #5aa77b;
    transition: 0.3s ease-in-out;
  }
</style>