import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import home from "./home.js";
import audio from "./audio.js";
import broadcast from "./broadcast.js";
import group from "./group.js";
import mine from "./mine.js";
// 进入moviedetail.js
import moviedetail from "./moviedetail.js"

export default new Router({
  routes: [
    home,
    audio,
    broadcast,
    group,
    mine,
    moviedetail,
    {path:"/", redirect:"/home"},
    {path:"/notfound", component: () => import("@/views/Notfound")},
    {path:"*", redirect: "/notfound"}
  ]
})
