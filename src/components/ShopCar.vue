<!--
 * @Date: 2021-05-09 15:10:25
 * @LastEditors: WY
 * @LastEditTime: 2021-05-09 22:04:57
 * @Description: 
 * @FilePath: \hello-world\src\components\ShopCar.vue
 * @Signature: The warm smile,if the quality.
-->
<template>
    <div class="">
        <div>购物车名字: {{listName}}</div>
        <div>购物金额: {{price}}</div>
        <div>
            <button @click="add">添加商品</button>
        </div>
        <div>
            <button @click="pay">结算</button>
        </div>
        
        <tab v-bind="$attrs"></tab>
        <slot name="content" :num="num" str="hello world"></slot>
    </div>
</template>
<script>
import Tab from './Tab.vue'
    export default {
        name: "",
        components: {
            Tab
        },
        props: {
            listName: {
                type: String,
                default: '小屋'
            },
            age: {
                type: String
            }
        },
        data () { // 定义页面变量
            return {
                price: 0,
                num: 1,
            }
        },
        computed: {
        },
        methods: { // 定义函数
           pay () {
               this.$emit('getPrice', this.price)
           },
           add () {
               this.price++
           }
        },
        // 可访问当前this实例
        created () {},
        // 挂载完成，可访问DOM元素
        mounted () {
            this.$emit('update:listName', '一世倾城')
        }
    }
</script>
<style scoped>

</style>