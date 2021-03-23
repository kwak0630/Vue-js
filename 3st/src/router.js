import layout from "@/components/layout.vue";
import work from "@/components/work.vue";
import remotework from "@/components/remotework.vue";
//import Welcome from "@/components/Welcome.vue";
//import About from "@/components/About.vue";

const router = {
	'/': layout,
	'/work': work,
	'/remotework': remotework,
	//'/': Welcome,
	//'/about': About
}

export default router;