<template>
	<div>
		<Lnb />
		<div class="content">
			<h2>게시판</h2>
			<p class="sub-tit">
				- 타입에 따라 갤러리형, 리스트형, 웹진형의 스타일을 가지는 리스트 컴포넌트를 만들어 주세요<br/>
				1. 리스트 컴포넌트에 들어갈 Model 을 설계해야 합니다.<br/>
				2. Model 은 갤러리형, 리스트형, 웹진형에 모두 대응할 수 있어야 합니다.<br/>
				3. 갤러리형, 리스트형, 웹진형의 전환 버튼을 구현하여 실시간으로 변경될 수 있어야 합니다.
			</p>
			<board-type :boardItem="boardListItem"/>
		</div>
		<Footer />
	</div>
</template>

<script>
	import Lnb from "@/components/layout/Lnb";
	import Footer from "@/components/layout/Footer";
	import BoardType from "@/components/board/boardType";

	export default {
		name: "board",
		components:	{
			Lnb,
			Footer,
			BoardType
		},
		data() {
			return {
				boardListItem: [
					{
						num: 1,
						subject: '공지입니다!!! 확인 부탁~~!!!',
						description: '공지사항입니다. 공지사항입니다. 공지사항입니다. 공지사항입니다. 공지사항입니다.',
						name: 'sally',
						date : '2021-04-02',
						class: 'notice',
						imgsrc: require('@/assets/img02.png'),
						hit: 0,
					},
					{
						num: 2,
						subject: '4/3(토) 2021 프로야구 개막',
						description: '드디어 야구 시즌 시작! 두산 이겨라 ~ 두산 이겨라~',
						name: 'sally',
						date : '2021-04-02',
						imgsrc: require('@/assets/img01.jpg'),
						hit: 0,
					},
					{
						num: 3,
						subject: '제목 제목 제목 제목 제목 제목 제목 제목 제목',
						description: '내용 내용 내용 내용 내용 내용',
						name: 'sally',
						date: '2021-04-01',
						imgsrc: '@/assets/logo.png',
						hit: 0,
					}
				]
			}
		}
	}
</script>