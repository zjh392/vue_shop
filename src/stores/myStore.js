import { defineStore } from 'pinia'
import { reactive} from 'vue'
export const useMyStore = defineStore('data', () => {
  const data_goods = reactive([
    { id: 1, name: 'huawei', price: 1200, inventory: 1 },
    { id: 2, name: 'XIAOMI', price: 2200, inventory: 3 },
    { id: 3, name: 'OPPO', price: 200, inventory: 3 }
  ])

  const buy = (id) => {
    if (data_goods.value[id].inventory > 0) {
        --data_goods.value[id].inventory.value
    }else{
      alert('库存不足')
    }
  }

  return { data_goods, buy }
})