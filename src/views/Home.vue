<!--
 * @Date: 2021-05-07 15:28:36
 * @LastEditors: WY
 * @LastEditTime: 2021-05-12 17:06:02
 * @Description: 
 * @FilePath: \hello-world\src\views\Home.vue
 * @Signature: The warm smile,if the quality.
-->
<template>
    <div class="">
        首页
        <div @click="handlerClick">+</div>
        <div>{{count}}</div>
       <div>{{sex}}</div>
       {{addCount}}
       {{countAlias}}
       <div>{{name}}</div>
       <div>{{hobby}}</div>
       <div>
           <button @click="getValueText()">按钮</button>
       </div>
       <div>
           <button @click="toMine">跳转我的页面</button>
       </div>
    </div>
</template>
<script>
    // import xx from ./xx
    import { mapState } from 'vuex'
    export default {
        name: "",
        components: {},
        data () { // 定义页面变量
            return {
                str: '生',
                number: 0,
                items: [
                    {
                        value: 1,
                        text: '1'
                    },  {
                        value: 2,
                        text: '2',
                        isOther: true
                    },  {
                        value: 3,
                        text: '3',
                        isOther: true
                    }
                ]
            }
        },
        // computed: mapState({
        //     count: state => state.count,
        //     sex: state => state.sex
        // }),
        computed: {
            ...mapState({
                count: state => state.count,
                name: state => state.user.name,
                countAlias: 'sex',
                hobby: 'hobby',
                sex (state) {
                    return state.sex + this.str
                }
            }),
            addCount() {
                return this.number + 1
            }
        },
        methods: { // 定义函数
            handlerClick () {
                // this.$router.push({
                //     path: '/mine'
                // })
                // this.$store.commit('addNum', 5)
               this.$store.dispatch('changeNum').then(res => {
                   console.log(res)
               })
                // console.log(this.$store.dispatch('changeNum'));
                this.$store.dispatch('changeMale').then(res => {
                     console.log(res)
                 })
                // console.log(this.$store.getters.getMale)
            },
            getValueText () {
                
                // 匹配小数 最多保留两位(包含负数 排除0.0和0.00)
                // let reg = /^([-]?[1-9]\d*\.\d{1,2}|0|0\.(0[1-9]|[1-9]\d?))$/ 
                // let str = '1.9'
                // console.log(reg.test(str))


            },
            toMine () {
                this.$router.push({
                    path: 'mine'
                })
            }

        },
        // 可访问当前this实例
        created () {},
        // 挂载完成，可访问DOM元素
        mounted () {

            
        }
    }
</script>
<style scoped>
</style>