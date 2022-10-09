import {defineStore} from 'pinia'

const CartStore = defineStore('carts',{
    state:()=>({
        nums:1,
        dNum:1
    }),
    getters:{
        doubleNum(state){
            return state.dNum = state.nums+2
        }
    },
    actions:{
        addPlus(){
            this.nums ++
        },
        minDec(){
            if(this.nums <2){
                return
            }else{
                this.nums -- 
            }
        }
    }
})

export default CartStore