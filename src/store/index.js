/*
 * @Date: 2021-05-07 16:19:40
 * @LastEditors: WY
 * @LastEditTime: 2021-05-08 15:24:15
 * @Description: 
 * @FilePath: \hello-world\src\store\index.js
 * @Signature: The warm smile,if the quality.
 */

import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        sex: '男',
        hobby: '打篮球',
        arr: [
            {id: 1, sex: '男', name: '张三'},
            {id: 5, sex: '男', name: '李四'},
            {id: 3, sex: '男', name: '王五'},
            {id: 2, sex: '女', name: '小红'},
            {id: 4, sex: '女', name: '王丽'},
        ]
    },
    getters: {
        getMale(state)  {
            return state.arr.filter(item => item.sex === '男')
        }
    },
    mutations: {
        addNum(state, obj) {
            state.count += obj.num
        },
        changeHobby (state, obj) {
            state.hobby = obj.val
        }
    },
    actions: {
        async changeNum({ commit, state}) {
           return setTimeout(() => {
               commit({
                   type: 'addNum',
                   num: 2
               })
               return state.count
           }, 3000)
           
        },
        changeMale({getters}) {
            return new Promise((resolve) => {
                 setTimeout(() => {
                    resolve(getters.getMale)
                 }, 3000)
            })
        }
    },
    modules: {
        user
    }
})

export default store