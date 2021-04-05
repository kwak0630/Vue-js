<template>
	<div class="pagination">
		<ul>
			<li>
				<a @click="onClickFirstPage" class="page-arr">First</a>
			</li>

			<li v-for="page in pages">
				<a @click="onClickPage(page.name)" :class="{active: isPageActive(page.name)}"> {{ page.name }}</a>
			</li>

			<li>
				<a @click="onClickLastPage" class="page-arr">Last</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "Pagination",
		props: {
			maxVisibleButtons: {
				type: Number,
				required: false,
				default: 5
			},
			totalPages: {
				type: Number,
				required: true
			},
			total: {
				type: Number,
				required: true
			},
			currentPage: {
				type: Number,
				required: true
			}
		},
		computed: {
			startPage: function () {
				if (this.currentPage === 1) {
					return 1
				}
				return 1
			},
			endPage: function () {
				return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages)
			},
			pages: function () {
				const range = []
				for (let i = this.startPage; i <= this.endPage; i+=1) {
					range.push({
						name: i,
						isDisabled: i === this.currentPage
					})
				}
				return range
			}
		},
		methods: {
			onClickFirstPage: function () {
				this.$emit('pagechanged', 1)
			},
			onClickPage: function (page) {
				this.$emit('pagechanged', page)
			},
			onClickLastPage: function () {
				this.$emit('pagechanged', this.totalPages)
			},
			isPageActive: function (page) {
				return this.currentPage === page;
			}
		}
	};
</script>

<style lang="scss">
	.pagination{
		margin-top:60px;
		text-align:center;
		ul{
			display:inline-block;
			padding:5px 10px;
			background:#fff081b0;
			border-radius:30px;
		}
		li{
			display:inline-block;
			a{
				display:inline-block;
				position:relative;
				padding:12px 13px;
				color:#333333;
				cursor:pointer;
				&::before{
					content:'';
					display:block;
					position:absolute;
					top:18px;
					left:0;
					width:2px;
					height:2px;
					background:#999
				}
				&.active{
					color:#FF8F00;
					font-weight:800;
				}
				&.page-arr{
					padding:0 15px;
					&:before {
						display: none
					}
				}
			}
			&:nth-child(2){
				a{
					&:before {
						display: none
					}
				}
			}
		}
	}
</style>