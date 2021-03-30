import layout from "@/page/layout.vue";
import work from "@/page/work.vue";
import remotework from "@/page/remotework.vue";
import form from "@/page/form.vue";
import form2 from "@/page/form2.vue";

//import Welcome from "@/components/Welcome.vue";
//import About from "@/components/About.vue";

//3주차 페이지 이동
const router = {
	'/': layout,
	'/work': work,
	'/remotework': remotework,
	'/form': form,
	'/form2': form2,
	//'/': Welcome,
	//'/about': About
}
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