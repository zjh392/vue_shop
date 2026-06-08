<template>
    <template>
</template>
    <div class="page_body">
        <div class = "Nagetive_box">
            <div class = "Nagetive_item" @click="changeShow()">
                商品展示
            </div>
            <div class = "Nagetive_item" @click="changeShow()">
                购物车
            </div>
        </div>    

                 <div v-show="isGoods"><Show_goods ></Show_goods></div>
                <div v-show="!isGoods"><Show_cart></Show_cart></div>
    </div>
</template>
<style scoped>
.Nagetive_box{
    display: flex;
}
.Nagetive_box > .Nagetive_item{
    border: 1px solid black;
}
.Nagetive_box > .Nagetive_item:hover{
    background-color: black;
    color: white;
    cursor: pointer;
}

</style>
<script setup>
import {Button} from 'ant-design-vue'
import {Anchor} from 'ant-design-vue'
import {React} from 'react'
import {ref} from 'vue'
import Show_goods from './Show_goods.vue'
import Show_cart from './Show_cart.vue'

const isGoods = ref(true)
const changeShow=()=>{
    isGoods.value=!isGoods.value;
    
}


</script>