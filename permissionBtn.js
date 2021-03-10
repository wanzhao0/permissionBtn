import Vue from 'vue';
import store from '@/store.js'
const hasPermissionBtn = userPermission => {
    // 当前按钮列表，我是用vuex
    let btnPermissionList = store.state.authList
    console.log(btnPermissionList)
    // 因为后台返回的不是以按钮名的数组，所以需要过滤
    let eglishPermission = btnPermissionList.map((v, i) => {
        return v.action
    })
    // 是否在权限数组里面
    let status = eglishPermission.includes(userPermission)
    return status
}
Vue.prototype.$_btnHas = hasPermissionBtn
