<template class="flex_box">
    <h1>商品展示页面</h1>
   <table border="1">
        <thead>
            <tr>
                <th>商品名称</th>
                <th>价格</th>
                <th>库存</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="good in goods" :key="good.id">
                <td>{{ good.name }}</td>
                <td>{{ good.price }}</td>
                <td> {{ good.inventory }}</td>
                <td><button @click="addCart(good)">加入购物车</button></td>
            </tr>

        </tbody>
   </table> 


</template>
<script setup>
import { reactive } from 'vue';

import {useMyStore} from '../stores/myStore'
const myStore = useMyStore()

import { useCartStore } from '../stores/cartStore';
const cartStore = useCartStore()


//商品数据

const goods = reactive(myStore.data_goods)

const {addCart,carts} = useCartStore()


</script>
<style scope>
.flex_box{
    border: 10px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    justify-items: center;
}
</style>