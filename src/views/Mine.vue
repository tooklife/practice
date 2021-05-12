<!--
 * @Date: 2021-05-07 15:33:40
 * @LastEditors: WY
 * @LastEditTime: 2021-05-10 11:32:09
 * @Description: 
 * @FilePath: \hello-world\src\views\Mine.vue
 * @Signature: The warm smile,if the quality.
-->
<template>
    <div class="">
        <shop-car 
            :listName.sync="listName"
            title="hello Vue"
            num="1"
            age="18"
            @getPrice="getPrice">
            <template slot="content" slot-scope="childObj">
                <div>
                    这是主要内容{{childObj.num}}
                </div>
                <div>
                    这是子组件得字符串: {{childObj.str}}
                </div>
            </template>
            </shop-car>
        总价: {{totalPrice}}
    </div>
</template>
<script>
import ShopCar from '../components/ShopCar.vue'
    
    export default {
        name: "",
        components: {
            ShopCar
        },
        provide: {
            userName: '张三'
        },
        data () { // 定义页面变量
            return {
                totalPrice: 0,
                listName: '海浪之星'
            }
        },
        computed: {},
        methods: { // 定义函数
            getPrice (val) {
                this.totalPrice = val
            }
        },
        // 可访问当前this实例
        created () {
        },
        // 挂载完成，可访问DOM元素
        mounted () {
        }
    }
</script>
<style scoped>

</style>