import layout from "@/page/layout.vue";
import work from "@/page/work.vue";
import remotework from "@/page/remotework.vue";
import mypage from "@/page/mypage.vue";
import board from "@/page/board.vue";
import todo from "@/page/todo.vue";

import boardlist from "@/page/boardlist.vue";
import form from "@/page/form.vue";
import form2 from "@/page/form2.vue";

//import Welcome from "@/components/Welcome.vue";
//import About from "@/components/About.vue";

const router = {
	'/': layout,
	'/work': work,
	'/remotework': remotework,
	'/mypage': mypage,
	'/board': board,
	'/todo': todo,
	'/boardlist': boardlist,
	'/form': form,
	'/form2': form2,
	//'/': Welcome,
	//'/about': About
}
/*
const router2 : [
	{
		path: '/',
		name: 'layout',
		components: {
			default: Home
		}
		beforeEnter: function() {

		}
	}
]
*/
/*
const router = [
	{
		path: '/',
		component: Layout
	},
	{
		path: '/work',
		component: Work
	},
	{
		path: '/remotework',
		component: Remotework
	}
]*/


export default router;