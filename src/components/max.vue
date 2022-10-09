<script setup lang='ts'>
import CartStore from '../store/carts'
const add = CartStore() 
 const max = () =>{
  add.addPlus()
 }
</script>
 
 
<template>
  <div>
    <button type="button" @click="max"> + </button>
  </div>
</template>
 
 
<style scoped>

</style>
