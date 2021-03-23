<template>
	<div class="lnb-wrap">
		<!-- logo -->
		<h1 class="logo"><v-link href="/"><img src="@/assets/img02.png"/></v-link></h1>
		<!-- //logo -->

		<!-- lnb menu -->
		<div class="lnb-inner">
			<ul class="lnb">
				<li
					v-for="item in items"
					:key="item.title">
					<v-link

						:href="item.href"
						:class="{ active: isActive }"
						@click="go"
					>
						{{ item.title }}
					</v-link>
				</li>
			</ul>
		</div>
		<!-- //lnb menu -->
	</div>
</template>


<script>
	import router from "../router";
	import VLink from "./VLink";

	export default {
		components: {VLink},
		data () {
			return {
				isActive: false,
				selected: undefined,
				items: [
					{
						id:'1',
						title: '일일 업무',
						href: '/work'
					},
					{
						id:'2',
						title: '원격근무 관리',
						href: '/remotework'
					},
					{
						id:'3',
						title: '야근 관리'
					},
					{
						id:'4',
						title: '휴가 관리'
					},
					{
						id:'5',
						title: '교통비 정산'
					},
					{
						id:'6',
						title: '제주도 빌라 예약'
					},
					{
						id:'7',
						title: '회의실 예약'
					},
					{
						id:'8',
						title: '출결 관리'
					},
					{
						id:'9',
						title: '프로젝트 평가'
					},
					{
						id:'10',
						title: '공지/자료'
					},
					{
						id:'11',
						title: '프로젝트 산출물'
					},
					{
						id:'12',
						title: '익명 메일 발송'
					},
				],
			}
		},
		props: {
			href: {
				type: String,
				required: true
			}
		},
		computed: {
			isActive() {
				return this.href === this.$root.currentRoute;
			}
		},
		methods: {
			go(event) {
				event.preventDefault();
				this.$root.currentRoute = this.href;
				window.history.pushState(
					null,
					router[this.href],
					this.href
				)
			}
		}
	}
</script>

<style>
	.lnb-wrap{
		position:fixed;top:0;left:0;
		width:250px;
		height:100vh;
		padding:25px;
		background:#fff182;
	}
	.logo{
		width:150px;
		margin:0 auto;
		text-align:center
	}
	.logo img{
		width:100%
	}
	.lnb-inner ul li{
		display:block
	}
	.lnb-inner ul li a{
		position:relative;
		display:inline-block;
		padding:5px 0;
		transition:all 0.3s ease-in-out;
	}
	.lnb-inner ul li a.active{
		color:#ff8f00;
		font-weight:700;
	}
	.lnb-inner ul li a:before{
		display:inline-block;
		content:'';
		width:0;
		height:1px;
		position:absolute;bottom:3px;left:0;
		background:#000;
		transition:all 0.3s ease-in-out;
	}
	.lnb-inner ul li a:hover:before{
		width:100%;
	}
	.lnb-inner ul li a.active:before{
		width:100%;
		background:#ff8f00;
	}
</style>