<script setup lang='ts'>
import CartStore from '../store/carts'
const minus = CartStore()
 const min = ()=>{
    minus.minDec()
 }
</script>
 
 
<template>
  <div>
    <button type="button" @click="min"> - </button>
  </div>
</template>
 
 
<style scoped>

</style>
