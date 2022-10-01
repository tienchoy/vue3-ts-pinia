<script setup lang='ts'>
 import UserStore from '../store/user';
 const user = UserStore()
 const changeName=(name:string)=>{
  console.log(user)
  user.saveName(name);
 }
</script>
 
 
<template>
  <div>
    <p>name:{{ user.name }}</p>
    <p>sex:{{ user.sex }}</p>
    <p>age:{{ user.age }}</p>
    <hr />
    <button type="button" @click="changeName('lisi')">edit name</button>
  </div>
</template>
 
 
<style scoped>

</style>
