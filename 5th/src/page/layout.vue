<template>
	<div id="app">
		<Lnb />
		<div class="content">
			<h2>컨텐츠</h2>
			<p class="sub-tit">라우터 기능을 이용한 메뉴를 구현해 봅시다.<br/> (메인, 일일업무, 원격관리근무)</p>
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
	@import url('https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css');
	*{margin:0;padding:0;box-sizing:border-box;text-decoration:none;color:#000;font-size:15px;line-height:1;font-family:'NanumSquareRound';list-style:none}
	::before, ::after{box-sizing:border-box}

	/* 테이블 스타일 초기화 */
	table {width:100%;border-collapse:collapse;border-spacing:0;empty-cells:show;table-layout:fixed;}
	th,td{font-weight:normal}
	td {word-break:break-all; word-wrap:break-word; word-break:keep-all;}
	fieldset {border:0;margin:0;padding:0;}
	legend, caption {visibility:hidden;overflow:hidden;width:0;height:0;font-size:0;line-height:0;}
	address, caption, em, var{font-style:normal;font-weight:normal}

	/* 링크 */
	a{text-decoration:none}
	a:link{color:#111;text-decoration:none;}
	a:visited{color:#111;text-decoration:none;}
	a:active{color:#111;text-decoration:none;}
	a:hover{color:#111;text-decoration:none;}

	/* 이미지, 폼관련 요소 */
	img {border:0;vertical-align:middle;}
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
	textarea{width:100%;height:50px;box-shadow:none;-webkit-appearance:none;padding: 0 10px;border-radius: 5px;border: 1px solid #A0A0A0;font-size:15px;-webkit-transition: all 0.3s ease-in-out;transition: all 0.3s ease-in-out;}
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
	button {border:0;-webkit-appearance:none;box-shadow:none;cursor:pointer;}
	button:focus, button:hover{outline:none}

	input[type=email]:focus,
	input[type=text]:focus,
	input[type=password]:focus,
	textarea:focus,
	input[type=email]:hover,
	input[type=text]:hover,
	input[type=password]:hover,
	textarea:hover {
		border: 1px solid #333;
		outline: none;
	}

	.content {
		display: block;
		margin-left: 250px;
		padding: 50px;
		height: calc(100vh - 100px);
		overflow-y:scroll;

		h2 {
			margin-bottom: 30px;
			padding-bottom: 10px;
			border-bottom: 1px solid #949494;
			font-size: 40px;
			font-weight:800;
		}
		.sub-tit{
			margin-bottom:30px;
			font-size:13px;
			line-height:17px;
			color:#333;
			background:#efefef;
			border-radius:10px;
			padding:15px
		}
	}
</style>