<template>
	<keep-alive>
		<div class="board-wrap">
			<div class="board-top">
				<!-- 리스트 타입 -->
				<div class="list-type">
					<a v-on:click="type='BoardTable'" :class="[ type === 'BoardTable' ? 'active' : '' ]">리스트</a>
					<a v-on:click="type='BoardGallery'" :class="[ type === 'BoardGallery' ? 'active' : '' ]">갤러리</a>
					<a v-on:click="type='BoardWebzine'" :class="[ type === 'BoardWebzine' ? 'active' : '' ]">웹진</a>
				</div>
				<!-- 검색 -->
				<div class="sch-wrap">
					<input-field
							v-model="inputSch"
							type="text"
							id="boardsch"
							placeholder="검색어를 입력하세요."
					/>
					<button class="btn">검색</button>
				</div>
			</div>
			<div class="board-content">
				<!-- 게시판 리스트-->
				<board-table
						v-if="type === 'BoardTable'"
						:boardItem="boardItem"
						v-model="modalData"
						v-on:modalOpen="modalOpen" />

				<board-gallery
						v-else-if="type === 'BoardGallery'"
						:boardItem="boardItem"
						v-model="modalData"
						v-on:modalOpen="modalOpen"/>


				<board-webzine
						v-else-if="type === 'BoardWebzine'"
						:boardItem="boardItem"
						v-model="modalData"
						v-on:modalOpen="modalOpen" />

				<!--
				<component
						v-model="modalData"
						v-bind:is="type"
						v-bind:boardItem="boardItem"
						v-on:modalOpen="modalOpen"/>
				-->

				<pagination :total="5" :current-page="currentPage" @pagechanged="onPageChange"></pagination>
			</div>

			<!-- 모달 팝업 -->
			<Modal-View
					v-bind:modalData="modalData"
					v-bind:visible="visible"
					v-on:close="modalClose">
				<div slot="md-header">
					<h3 class="subject">{{ modalData.subject }}</h3>
					<div class="info">
						<span>{{ modalData.name }}</span>
						<span>{{ modalData.date }}</span>
						<span>{{ modalData.hit }}</span>
					</div>
				</div>
				<div slot="md-body">
					<div class="thumb"><img :src="modalData.imgsrc" alt="modalData.subject"  @error="errorImg"/></div>
					<p class="description">{{ modalData.description }}</p>
				</div>

			</Modal-View>
		</div>
	</keep-alive>
</template>

<script>
	import InputField from "@/components/form/inputField";

	import BoardTable from "@/components/board/boardTable";
	import BoardGallery from "@/components/board/boardGallery";
	import BoardWebzine from "@/components/board/boardWebzine";

	import Pagination from "@/components/board/pagination";
	import ModalView from "@/components/common/modal";

	import img from "@/assets/nodata.png"; //이미지 데이터 없을 경우

	export default {
		name: 'boardType',
		components: {
			InputField,
			BoardTable,
			BoardGallery,
			BoardWebzine,
			Pagination,
			ModalView,
		},
		props: [
			'boardItem',
		],
		data() {
			return {
				inputSch: '',
				visible: false,
				type: 'BoardTable',
				currentPage: 1,
				modalData: {}
			};
		},
		methods: {
			onPageChange: function (page) {
				//console.log(page)
				this.currentPage = page;
			},
			errorImg(e){
				/*
				이미지 오류일 경우 @error=errorImg
				이미지 imfort 해서 가져오
				*/
				e.target.src = img;
			},
			modalOpen: function(item) {
				this.modalData = item;
				this.visible = true;
				item.hit++; //모달창 열리면 조회수 +1
			},

			modalClose() {
				this.visible = false;
			}
		},
	};
</script>

<style lang="scss">
	.board-wrap{
		margin-top:50px;
		.board-top{
			position:relative;
			padding-bottom:40px;
			.list-type{
				a{
					margin-right:15px;
					&.active{
						color:#FF8F00;
						font-weight:700;
					}
				}
			}
		}
		.board-content{
			.table-wrap{
				width:100%;
				table {
					border-top:2px solid #ff8f00;
					th, td {
						padding: 20px 0;
						border-bottom: 1px solid #DDD;
						text-align: center;
						font-size: 16px;
						vertical-align: middle;
					}

					tr.notice {
						background: #F8F8F8;
						td:first-child {
							color:#ff8f00;
							font-weight: 700;
						}
					}
					thead{
						th{
							background:#f7f7f7;
						}
					}
					tbody{
						tr{
							&:hover{
								background:#fff18252;
							}
						}
						td{
							&.subject{
								text-align:left;
								padding:0 10px;
								font-size: 16px;
							}
						}
					}
				}
			}
			.gallery-list{
				font-size:0;
				li{
					position:relative;
					display:inline-block;
					width:33.3333%;
					min-height:300px;
					vertical-align:top;
					transition:all 0.3s ease-in;
					.thumb{
						position:relative;
						&:before{
							transition:all 0.3s ease-in;
							content:'';
							position:absolute;
							top:0;
							left:0;
							width:100%;
							height:100%;
							background:rgba(0,0,0,0.4);
							opacity: 0;
						}
					}
					img{
						width:100%;
						height:100%;
					}
					.cont{
						p{
							font-size:22px;
						}
					}

					&:hover{
						.thumb {
							&:before {
								opacity: 1;
							}
						}
					}
				}
				&.v2{
					li{
						width:calc(25% - 15px);
						min-height:480px;
						border:1px solid #ddd;
						.thumb{
							&:before{
								display:none
							}
						}
						.cont{
							border-top:1px solid #ddd;
							padding:15px;
							p{
								font-size:16px;
								color:#333;
							}
							.subject{
								margin-bottom:15px;
								font-weight:700;
							}
							.description{
								margin-bottom:15px;
								font-size:15px;
								line-height:21px;
							}
							.info{
								font-size:0;
								span{
									position:relative;
									display:inline-block;
									font-size:13px;
									padding-right:10px;
									color:#999999;
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
						}
						&:nth-child(n+2){
							margin-left:35px;
						}
						&:before{
							transition:all 0.3s ease-in;
						}
						&:hover{
							border:1px solid #FF8F00;
						}
					}
				}
			}
		}
		.sch-wrap{
			position:absolute;
			bottom:25px;
			right:0;
			display:block;
			width:240px;
			.form-item{
				display:inline-block;
				width:100%;
				input{
					padding:0 50px 0 20px;
					height:40px;
					line-height:40px;
					background:#f5f5f5;
					border-radius:20px;
					border:0;
				}
			}
			.btn{
				position:absolute;
				top:50%;
				right:15px;
				display:inline-block;
				width:20px;
				height:20px;
				border-radius:3px;
				vertical-align:middle;
				background:transparent url("~@/assets/btn-sch.png") 0 0 no-repeat;
				background-size:100%;
				transform:translateY(-50%);
				font-size:0;
			}
		}
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
</style>