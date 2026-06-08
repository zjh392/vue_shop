<template>
    <h1>购物车页面</h1>
    <table border="1">
        <thead>
            <tr>
                <th>商品id</th>
                <th>商品名称</th>
                <th>价格</th>
                <th>数量</th>
                <th>小计</th>
                <th>删除</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="cart in cartStore.carts" :key="cart.id">
                <td>{{ cart.id }}</td>
                <td>{{ cart.name }}</td>
                <td>{{ cart.price }}</td>
                <td>{{ cart.num}}</td>
                <td>{{ cart.price * cart.num }}</td>
                <td><button @click="cartStore.removeCart(cart.id)">删除</button></td>
            </tr>
        </tbody>
    </table>
    {{ cartStore.carts }}
    总价: {{ cartStore.total }}
</template>
<script setup>
import { useCartStore } from '../stores/cartStore';
import { reactive } from 'vue';
const cartStore = useCartStore()
import {useMyStore} from '../stores/myStore'
const total = cartStore.total
</script>
<style scope>
</style>