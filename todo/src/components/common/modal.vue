<template>
	<transition name="modal">
		<div class="modal-wrap"
			 v-if="visible">
			<div class="modal-inner">
				<div class="modal-content">
					<button type="button" @click="close" class="close">닫기</button>
					<div class="modal-header">
						<slot name="md-header"></slot>
					</div>
					<div class="modal-body">
						<slot name="md-body"></slot>
					</div>
					<div class="modal-footer">
						<slot name="md-footer"></slot>
					</div>
					<slot name="modal-body"></slot>
					<slot name="modal-footer"></slot>
					
					<!--
					<div class="modal-header">
						<h3 class="subject">{{ modalData.subject }}</h3>
						<div class="info">
							<span>{{ modalData.name }}</span>
							<span>{{ modalData.date }}</span>
						</div>
					</div>
					<div class="modal-body">
						<div class="thumb"><img :src="modalData.imgsrc" alt="modalData.subject" @error="errorImg"/></div>
						<p class="description">{{ modalData.description }}</p>
					</div>
					-->
				</div>
			</div>
		</div>
	</transition>
</template>


<script>

	export default {
		name: 'ModalView',
		props: [
			'visible',
			'modalData'
		],
		methods: {
			close: function () {
				this.$emit('close');
			},
		}
	};
</script>

<style lang="scss" scoped>
	.modal-wrap{
		&:before{
			content:'';
			position:fixed;top:0;left:0;
			width:100%;height:100%;
			background:rgba(0, 0, 0, 0.65);
		}
		.modal-inner{
			position:fixed;top:50%;left:50%;
			transform:translate(-50%, -50%);
			width:800px;
			background:#f7f7f7;
			border-radius:15px;
			padding:40px 30px 30px;
		}
		.modal-content{
			overflow-y:scroll;
			height:600px;
			text-align:left;
			&::-webkit-scrollbar{
				display:none;
			}

			.modal-header{
				position:relative;
				margin-bottom:35px;
				border-bottom:1px solid #ddd;
			}
			.subject{
				padding:10px 0 20px;
				font-size:30px;
				font-weight:700;
			}
			.info{
				margin-bottom:20px;
				padding-left:5px;
				font-size:0;
				span{
					position:relative;
					display:inline-block;
					font-size:13px;
					padding-right:10px;
					color:#999999;
					vertical-align:middle;
					&:after{
						display:inline-block;
						content:'';
						margin-left:10px;
						width:1px;
						height:10px;
						background:#ddd;
						vertical-align:middle;
					}
					&:last-child{
						padding:0;
						&:after{
							display:none
						}
					}
				}
			}
			.modal-body{
				padding:0 30px 30px;
			}
			.thumb{
				width:400px;
				margin:0 auto;
				text-align:center;
				img{
					width:100%;
				}
			}
			.description{
				margin-top:30px;
				line-height:23px;
				font-size:17px;
			}
		}
		.close{
			display:inline-block;
			position:absolute;top:20px;right:20px;
			width:30px; height:30px;
			background:transparent;
			border:1px solid #222;
			border-radius:100%;
			font-size:0;
			transition:.3s;
			&:before, &:after{
				content:'';
				position:absolute;
				top:50%;
				left:50%;
				width:16px;
				height:1px;
				background-color:#222;
				transition:.3s;
			}
			&:before{
				transform:translate(-50%, -50%) rotate(45deg);
			}
			&:after{
				transform:translate(-50%, -50%) rotate(135deg);
			}
			&:hover{
				background:#fff081;
				border:1px solid #ff8f00;
				&:before, &:after{
					background-color:#ff8f00;
				}
			}
		}
	}
	.modal-enter-active, .modal-leave-active {
		transition:.3s;
	}
	.modal-leave-active {
		position:absolute;
	}
	.modal-enter, .modal-leave-to {
		opacity:0;
	}
</style>