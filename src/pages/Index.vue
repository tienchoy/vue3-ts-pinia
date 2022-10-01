<script setup lang='ts'>
import { storeToRefs } from "pinia";
import UserStore from "../store/user";
import { useRouter } from "vue-router";
const user = UserStore()
const router  = useRouter()

const editUser = () => {
  user.$patch((state) => {
    (state.name = "zhangsan"), (state.age = 20), (state.sex = "girl");
  });
  router.push('/cate')
};
</script>
                    
<template>
  <div>
    <h5>user info</h5>
    <p>name:{{ user.name }}</p>
    <p>sex:{{ user.sex }}</p>
    <p>age:{{ user.age }}</p>
    <hr />
    <div class="button_box">
      <button type="button" @click="editUser">edit</button>
    </div>
  </div>
</template>
    
<style>
</style>