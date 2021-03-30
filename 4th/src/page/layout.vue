<template>
	<div id="app">
		<Lnb />
		<div class="content">
			<h2>컨텐츠</h2>
			<p>2021.03.23 - 페이지 이동 과제 (메인, 일일업무, 원격관리근무)</p>
		</div>
		<Footer />
	</div>
</template>

<script>
	import Lnb from "@/components/layout/Lnb";
	import Footer from "@/components/layout/Footer";

	export default {
		name: "app",
		components:	{
			Lnb,
			Footer
		},
	}
</script>

<style lang="scss">
	*{margin:0;padding:0;box-sizing:border-box;text-decoration:none;color:#000;line-height:1}
	.content {
		display: block;
		margin-left: 250px;
		padding: 50px;
		height: calc(100vh - 100px);

		h2 {
			margin-bottom: 30px;
			padding-bottom: 10px;
			border-bottom: 1px solid #949494;
			font-size: 30px;
		}
	}
</style>