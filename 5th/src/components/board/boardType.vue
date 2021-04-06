<template>
	<div class="board-wrap">
		<div class="board-top">
			<!-- 리스트 타입 -->
			<list-type></list-type>
			<div class="list-type">
				<a v-on:click="type='list'" :class="[ type === 'list' ? 'active' : '' ]">리스트</a>
				<a v-on:click="type='gallery'" :class="[ type === 'gallery' ? 'active' : '' ]">갤러리</a>
				<a v-on:click="type='webzine'" :class="[ type === 'webzine' ? 'active' : '' ]">웹진</a>
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
			<div v-if="type === 'list'" class="tab-content">
				<div class="table-wrap">
					<table>
						<colgroup>
							<col width="10%"/>
							<col />
							<col width="10%"/>
							<col width="20%"/>
						</colgroup>
						<thead>
						<tr>
							<th>번호</th>
							<th>제목</th>
							<th>작성자</th>
							<th>날짜</th>
						</tr>
						</thead>
						<tbody>
						<tr v-for="(item, key) in boardItem" v-bind:key="key">
							<td>{{item.num}}</td>
							<td class="subject"><a href="#" v-on:click.prevent="modalOpen(item)">{{item.subject}}</a></td>
							<td>{{item.name}}</td>
							<td>{{item.date}}</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div v-else-if="type === 'gallery'" class="tab-content">
				<div class="gallery-list">
					<ul>
						<li v-for="(item, key) in boardItem" :key="key">
							<a href="#" @click="modalOpen(item)">
								<div class="thumb">
									<img :src="item.imgsrc" :alt="item.subject" @error="errorImg" />
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div v-else="type === 'webzine'" class="tab-content">
				<div class="gallery-list v2">
					<ul>
						<li v-for="(item, key) in boardItem" :key="key">
							<a href="#" @click="modalOpen(item)">
								<div class="thumb">
									<img :src="item.imgsrc" @error="errorImg" />
								</div>
								<div class="cont">
									<p class="subject">{{item.subject}}</p>
									<p class="description">{{item.description}}</p>
									<p class="info">
										<span>{{item.name}}</span>
										<span>{{item.date}}</span>
									</p>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<Modal-View
					v-bind:modalData="modalData"
					v-bind:visible="visible"
					v-on:close="modalClose"
			/>
		</div>
	</div>

</template>

<script>
	import InputField from "@/components/form/inputField";
	import ModalView from "@/components/common/modal";
	import img from "@/assets/nodata.png"; //이미지 데이터 없을 경우

	export default {
		name: 'boardType',
		components: {
			InputField,
			ModalView
		},
		props: [
			'boardItem'
		],
		data() {
			return {
				inputSch: '',
				visible: false,
				type: 'list',
			};
		},
		methods: {
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
					width:calc(33.3% - 23px);
					min-height:300px;
					border:1px solid #ddd;
					vertical-align:top;
					transition:all 0.3s ease-in;
					&:nth-child(n+2){
						margin-left:35px;
					}
					img{
						width:100%;
						height:100%
					}
					.cont{
						//opacity:0;
						position:absolute;
						top:20px;
						left:20px;
						right:20px;
						transition:all 0.3s ease-in;
						p{
							//color:#fff;
							font-size:22px;
						}
					}
					&:before{
						transition:all 0.3s ease-in;
					}
					&:hover{
						border:1px solid #FF8F00;
						.cont{
							//opacity: 1;
						}
						&:before{
							transition:all 0.3s ease-in;
							display:none;
							content:'';
							position:absolute;
							top:0;
							left:0;
							width:100%;
							height:100%;
							background:rgba(0,0,0,0.4);
						}
					}
				}
				&.v2{
					li{
						width:calc(25% - 15px);
						min-height:480px;
						.cont{
							opacity: 1;
							border-top:1px solid #ddd;
							position:relative;
							top:inherit;
							left:inherit;
							right:inherit;
							padding:15px;
							p{
								font-size:16px;
								color:#333;
							}
							.subject{
								margin-bottom:10px;
								font-weight:700;
							}
							.description{
								margin-bottom:10px;
								line-height:18px;
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
						&:before{
							display:none;
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
</style>