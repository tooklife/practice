/*
 * @Date: 2021-05-07 16:22:12
 * @LastEditors: WY
 * @LastEditTime: 2021-05-08 15:26:59
 * @Description: 
 * @FilePath: \hello-world\src\store\user.js
 * @Signature: The warm smile,if the quality.
 */
import Vue from 'vue'
import Vuex from 'vuex'

// import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 100,
        name: '李四'
    }
})
export default store