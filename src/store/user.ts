import { defineStore } from 'pinia'

const UserStore = defineStore('users', {
   state: () => ({
      name: 'test',
      sex: 'man',
      age: 30
   }),
   getters: {},
   actions: {
      sayHi() {
         console.log('hello,world')
      },
      saveName(name: string) {
         this.name = name
      }
   }
})
{
   persist: true
}

export default UserStore