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


	label,
	select,
	input,
	textarea{vertical-align:middle}

	input,
	select,
	textarea {font-size:1em;vertical-align:middle}

	input[type="text"],
	input[type="submit"],
	input[type="password"],
	input[type="search"],
	input[type="number"],
	input[type="reset"],
	input[type="email"], input[type="tel"],
	input[type="search"],
	input[type="file"],
	input[type="email"],
	input[type="tel"],
	textarea{width:100%;height:50px;box-shadow:none;-webkit-appearance:none;padding: 0 10px;border-radius: 5px;border: 1px solid #A0A0A0;font-size:15px}
	select{width:100%;height:50px;padding: 0 10px;border-radius: 5px;border: 1px solid #A0A0A0;}
	textarea{padding:10px;min-height:150px}


	::-webkit-input-placeholder {color:#999}
	::-moz-placeholder {color:#999}
	::-ms-input-placeholder {color:#999}
	::-webkit-input-placeholder {color:#999}
	:-moz-placeholder {color:#999}
	:-ms-input-placeholder {color:#999}
	::-ms-input-placeholder {color:#999}
	::placeholder {color:#999}

	input[type="text"]:disabled{background:#e8eaf0;border:1px solid #e8eaf0;color:#000;}

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