<script setup lang='ts'>
import { ref } from "vue";
import Min from "../components/min.vue";
import Max from "../components/max.vue";
import CartStore from '../store/carts'

const cart = CartStore()

</script>
 
 
<template>
  <div>
    <Min />
     <input type="text" v-model="cart.nums" name="" id="" />
     <Max />
     <p>double: {{cart.doubleNum}}</p>
  </div>
</template>
 
 
<style scoped>

</style>
