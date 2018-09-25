import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home';
import Search from '../pages/search/Search';
import City from '../pages/search/City';
import Scan from '../pages/search/Scan';
import Location from '../pages/search/Location';

import Banner from '../pages/banner/Banner';

import User from '../pages/user/User';

import News from '../pages/news/News';

import Book from '../pages/funs/Book';
import Today from '../pages/funs/Today';
import Pay from '../pages/funs/Pay';
import Check from '../pages/funs/Check';
import Medinfo from '../pages/funs/Medinfo';

import Host from '../pages/host/Host';

import Sep from '../pages/sep/Sep';

Vue.use(VueRouter)

// 开始设定路由，实例化的语法结构类似于Vue
const router = new VueRouter({
    // mode，这是路由的路径记录的模式
    mode: 'history',
    routes:[
        {
            path:'/',
            name:'home',  // 自定义路由名
            component: Home, // 组件名            
        },
        // Search部分
        {
            path:'/city',
            name:'city',  // 自定义路由名
            component: City, // 组件名
        },
        {
            path:'/search',
            name:'search',  // 自定义路由名
            component: Search, // 组件名
        },
        {
            path:'/scan',
            name:'scan',  // 自定义路由名
            component: Scan, // 组件名
        },
        {
            path:'/location',
            name:'location',  // 自定义路由名
            component: Location, // 组件名
        },

        // Banner
        {
            path:'/banner',
            name:'banner',  // 自定义路由名
            component: Banner, // 组件名
        },

        // User
        {
            path:'/user',
            name:'user',  // 自定义路由名
            component: User, // 组件名
        },

        // News
        {
            path:'/news',
            name:'news',  // 自定义路由名
            component: News, // 组件名
        },

        // Funs
        {
            path:'/fun0',
            name:'book',  // 自定义路由名
            component: Book, // 组件名
        },
        {
            path:'/fun1',
            name:'today',  // 自定义路由名
            component: Today, // 组件名
        },
        {
            path:'/fun2',
            name:'pay',  // 自定义路由名
            component: Pay, // 组件名
        },
        {
            path:'/fun3',
            name:'check',  // 自定义路由名
            component: Check, // 组件名
        },
        {
            path:'/fun4',
            name:'medinfo',  // 自定义路由名
            component: Medinfo, // 组件名
        },   

        // Seps
        {
            path:'/sep:id',
            name:'sep',  // 自定义路由名
            component: Sep, // 组件名
           
        },

        // Hoslists
        {
            path:'/host:id',
            name:'host',  // 自定义路由名
            component: Host, // 组件名
            props: { 
                default: true, 
                sidebar: false,
            }
        },
        
        
    ]
})

// 默认输出router
export default router