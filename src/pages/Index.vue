<script setup lang='ts'>
import { storeToRefs } from "pinia";
import UserStore from "../store/user";
import { useRouter } from "vue-router";
const user = UserStore()
const {name,age,sex} = storeToRefs(user)
const router  = useRouter()

const editUser = () => {
  user.$patch((state) => {
    (state.name = "zhangsan"), (state.age = 20), (state.sex = "girl");
  });
  router.push('/cate')
};
const changename=()=>{
  user.saveName('lisi')
}
</script>
                    
<template>
  <div>
    <h5>user info</h5>
    <p>name:{{ name }}</p>
    <p>sex:{{ sex }}</p>
    <p>age:{{ age }}</p>
    <hr />
    <div class="button_box">
      <button type="button" @click="editUser">edit</button>
      <button type="button" @click="changename">edit name</button>
    </div>
  </div>
</template>
    
<style>
</style>