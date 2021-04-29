<template>
	<div class="gallery-list">
		<ul>
			<li v-for="(item, key) in boardItem" :key="key">
				<a href="#" @click="$emit('modalOpen',item)">
					<div class="thumb">
						<img :src="item.imgsrc" :alt="item.subject" @error="errorImg" />
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import img from "@/assets/nodata.png"; //이미지 데이터 없을 경우

	export default {
		name: 'boardGallery',
		props: [
			'boardItem'
		],
		methods: {
			errorImg(e) {
				/*
				이미지 오류일 경우 @error=errorImg
				이미지 imfort 해서 가져오
				*/
				e.target.src = img;
			},
		}
	};
</script>