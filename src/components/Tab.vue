<!--
 * @Date: 2021-05-09 15:11:06
 * @LastEditors: WY
 * @LastEditTime: 2021-05-09 16:52:23
 * @Description: 
 * @FilePath: \hello-world\src\components\Tab.vue
 * @Signature: The warm smile,if the quality.
-->
<template>
    <div class="">
        <div>
            {{userName}}
        </div>
        <div>
            {{$attrs.title}}
        </div>
        
    </div>
</template>
<script>
    // import xx from ./xx
    export default {
        name: "",
        components: {},
        inject: ['userName'],
        data () { // 定义页面变量
            return {
                num: 1,
            }
        },
        computed: {},
        methods: { // 定义函数
            count () {
                console.log(this.num)
            }
        },
        // 可访问当前this实例
        created () {
            console.log(this.$attrs)
        },
        // 挂载完成，可访问DOM元素
        mounted () {}
    }
</script>
<style scoped>

</style>