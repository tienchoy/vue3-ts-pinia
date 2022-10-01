<script setup lang='ts'>
 import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import UserStore from '../store/user';
const router = useRouter()
 const userCate = storeToRefs(UserStore())
const toDetail=()=>{
  router.push('/detail')
}
</script>
 
<template>
  <div>
    <p>{{userCate.name}}</p>
    <p>{{userCate.age}}</p>
    <p>{{userCate.sex}}</p>
  </div>
  <hr>
  <button type="button" @click="toDetail">to Detail</button>
</template>
 
 
<style scoped>

</style>
