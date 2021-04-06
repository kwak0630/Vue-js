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
	import router from "../../router";
	import VLink from "../../page/VLink";

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
						id:'4',
						title: '마이페이지',
						href: '/mypage'
					},
					{
						id:'5',
						title: '게시판',
						href: '/board'
					},
					{
						id:'97',
						title: '게시판_test',
						href: '/boardlist'
					},
					{
						id:'98',
						title: 'Form_test2',
						href: '/form2'
					},
					{
						id:'99',
						title: 'Form_test1',
						href: '/form'
					},
				],
			}
		},/*
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
		},*/
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

<style lang="scss">
	.lnb-wrap {
		position: fixed;
		top: 0;
		left: 0;
		width: 250px;
		height: 100vh;
		padding: 25px;
		background: #FFF182;

		.logo {
			width: 150px;
			margin: 0 auto;
			text-align: center;

			img {
				width: 100%
			}
		}

		.lnb-inner ul li {
			display: block;

			a {
				position: relative;
				display: inline-block;
				padding: 10px 0 5px;
				font-size:16px;
				transition: all 0.3s ease-in-out;

				&.active {
					color: #FF8F00;
					font-weight: 800;

					&:before {
						width: 100%;
						background: #FF8F00;
					}
				}

				&:before {
					display: inline-block;
					content: '';
					width: 0;
					height: 1px;
					position: absolute;
					bottom: 1px;
					left: 0;
					background: #000;
					transition: all 0.3s ease-in-out;
				}

				&:hover:before {
					width: 100%;
				}
			}
			&:nth-child(5){
				margin-top:90px;
				&:before{
					display:block;
					content:'연습';
					font-size:12px;
					color:rgba(0,0,0,0.4);
				}
			}
			&:nth-child(n+5){
				a{
					color:rgba(0,0,0,0.4);
					font-size:13px;
					&:before{
						background:rgba(0,0,0,0.4);
					}
				}
			}
		}
	}
</style>