import { defineStore } from 'pinia'
import {computed} from 'vue'
import { reactive, ref } from 'vue'
import {useMyStore} from './myStore'

export const useCartStore = defineStore('cartStore', () => {
  //购物车数组
  const carts = reactive([])
  //添加到购物车的方法
  const addCart = (book) => {
    const ele = carts.find((ele) => ele.id == book.id)
    if (ele) {
      if(ele.inventory > 0){
        ele.num++
        --ele.inventory
        --book.inventory
        alert('添加成功')
      }else{
        alert('库存不足')
      } 
      } else if(book.inventory > 0)
         {
      carts.push({
        ...book,
        inventory: --book.inventory,
        num: 1,
      })
      alert('添加成功') 
    }else{
      alert('库存不足')
    }
  }
  const removeCart = (id,book) => {
    const ele = carts.find((ele) => ele.id == id) 
    if(ele){
      carts.splice(carts.indexOf(ele),1)
        alert('删除成功')
        const myStore = useMyStore()
        myStore.data_goods.find((ele) => ele.id == id).inventory += ele.num

    }
  }
  const total = computed(()=>{
    const ele = carts.find((ele)=>(ele.num > 0))
    let temp = 0
    carts.forEach(element => {
      temp+=element.num*element.price
    });
    return temp
  })

  return { carts, addCart ,removeCart,total}
})