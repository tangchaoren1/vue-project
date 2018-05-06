import Vue from 'vue';
import VueRouter from 'vue-router';
import local from './components/local.vue';
import view1 from './components/view1.vue';
import view2 from './components/view2.vue';
import view3 from './components/view3.vue';
Vue.use(VueRouter);
const routes = [
    {path: '/local', component: local, 
    children:[
       {path:'view', component: view1},
       {path:'view2', component: view2},
       {path:'view3', component: view3}
    ]}
]
export const router = new VueRouter({
    routes
})



