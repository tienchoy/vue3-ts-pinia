<script setup lang='ts'>
import CartStore from "../store/carts";
import UserStore from "../store/user";

const user = UserStore();
const cart = CartStore();
const changeName = (name: string) => {
  user.saveName(name);
};
</script>
 
 
<template>
  <div>
    <p>name:{{ user.name }}</p>
    <p>sex:{{ user.sex }}</p>
    <p>age:{{ user.age }}</p>
    <hr />
    <button type="button" @click="changeName('lisi')">edit name</button>
    <hr />
    <p>{{ cart.nums }}</p>
  </div>
</template>
 
 
<style scoped>
</style>
