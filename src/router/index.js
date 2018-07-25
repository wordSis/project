import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/home.vue'
import Audio from '../pages/Audio/audio.vue'
import Broadcast from '../pages/Broadcast/broadcast.vue'
import Mine from '../pages/Mine/mine.vue'
import Group from '../pages/Group/group.vue'
import Film from '../components/film'
import Tv from '../components/tv'
import City from '../components/city'
import Read from '../components/read'
import Music from '../components/music'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
//import '../assets/libs/swiper/css/swiper.css'


Vue.use(Router)
Vue.use(VueAwesomeSwiper)

export default new Router({
	routes: [
		{
			path: '/home',
			name: 'Home',
			component: Home
		},
		{
			path: '/',
			redirect:'/home'
		},
		{
			path: '/broadcast',
			name: 'Broadcast',
			component: Broadcast
		},
		{
			path: '/audio',
			name: 'Audio',
			component: Audio,
			children:[
			 	{path:'film',component: Film},
			 	{path:'tv',component: Tv},
			 	{path:'city',component: City},
			 	{path:'read',component: Read},
			 	{path:'music',component: Music},
			 	{path:'/',redirect: 'film'}

			]
		},
		{
			path: '/mine',
			name: 'Mine',
			component: Mine
		},
		{
			path: '/group',
			name: 'Group',
			component: Group
		}
	]
})
