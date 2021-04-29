<template>
	<div>
		<Lnb />
		<div class="content">
			<h2>todo list</h2>
			<p class="sub-tit">
				- 팀 프로젝트로 투두리스트 만들기
			</p>
			<div style="position:fixed;top:50%;right:50px;transform:translateY(-50%)">
				<p>
					현재 날짜 : <strong>{{ year }} {{ month }} {{ date }} {{ day }}</strong>
				</p>
				<p>
					현재 시간 : <strong>{{ time }}</strong>
				</p>
				<p>
					현재 시간 타이틀 : <strong>{{ timeText }}</strong>
				</p>
				<p>
					현재 시간 아이콘 : 
					<strong id="time-icon">
						{{ timeIcon }}
					</strong>
				</p>

				<p>할일 추가 인풋 박스 : </p>
				<div class="form-group">
					<input-field
							v-model="inputTodo"
							type="text"
							id="todo2"
							placeholder="할 일을 적어주세요"
					/>
				</div>
			</div>
			<br/>
			<div class="todo-wrap">
				<div class="todo-header">
					<div class="time-box">
						{{ time }} <!-- {{ timeText }} -->
						<span v-if="type === 'morning'">
							<img src="@/assets/ico-morning.png" class="ico-time"/>
						</span>
						<span v-else-if="type === 'afternoon'">
							<img src="@/assets/ico-afternoon.png" class="ico-time"/>
						</span>
						<span v-else-if="type === 'night'">
							<img src="@/assets/ico-night.png" class="ico-time"/>
						</span>
					</div>
					<div class="date-box">
						<div>
							<span class="day">{{ day }}</span>
						</div>
						<div>
							<span class="year">{{ year }}</span><br/>
							<span class="month">{{ month }}</span>
							<span class="date">{{ date }}</span>
						</div>
					</div>
					<div class="task-box">
						<strong>{{ todoChkNum }}</strong><span>{{ todoList.length }}</span>
					</div>
					<div class="add-box" :class="{ active: isShow }">
						<button class="add-btn" @click="todoShow">추가</button>
						<form name="todo-form" method="post" action="" v-on:submit.prevent="addTodo">
							<div class="form">
								<div class="form-group">
									<input-field
											v-model="inputTodo"
											type="text"
											id="todo"
											placeholder="오늘 할 일!"
									/>
								</div>
								<button type="button" @click="addTodo">
									입력
									<i class="i-arr"></i>
								</button>
							</div>
						</form>
					</div>
				</div>
				<div class="todo-body">
					<div class="todo-list">
						<ul>
							<!--
							<li>
								<p id="enterResult"></p>
							</li>
							<li>
								<p>머리 자르러 가기</p>
							</li>
							<li>
								<p>강아지 산책 가기</p>
							</li>
							-->
							<li v-for="item in todoList" :key="item.id" :id="'list'+item.id">
								<label :for="'chk'+item.id">
									<input :id="'chk'+item.id" type="checkbox" v-model="item.done">
									{{item.content}}
								</label>
								<button class="del-btn" @click="removeTodo(item)">삭제</button>
							</li>
						</ul>
					</div>
				</div>
				<div class="todo-footer">
					vue-friends
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
	import Lnb from "@/components/layout/Lnb";
	import Footer from "@/components/layout/Footer";
	import InputField from "@/components/form/inputField";

	export default {
		name: "todo",
		components:	{
			Lnb,
			Footer,
			InputField
		},
		data() {
			return {
				year: "",
				month: "",
				day: "",
				date: "",
				time: "",
				timeText: "",
				timeIcon: "",
				inputTodo: '',
				isShow: false,
				isActive: false,

				todoChkNum:0,
				todoList:[],
				type: 'morning'
				/*
				todoList:[
					{
						id: new Date().getTime(),
						content: "강아지 산책하기",
						done: false
					},
					{
						id: new Date().getTime(),
						content: "머리 자르러 가기 (차홍룸 신논현점)",
						done: true
					}
				]
				*/
			}
		},
		methods: {
			dateInfo: function() {
				const today = new Date();

				// 날짜
				const year = today.getFullYear();
				this.year = year;
				const month = today.getMonth()+1;
				this.month = month;
				const date = today.getDate();
				this.date = date;
				const
					days = [
						'일',
						'월',
						'화',
						'수',
						'목',
						'금',
						'토'
					]
				//const day = today.getDay();
				this.day = days[today.getDay()];

				// 시간
				const time = this.timeLeft(''+today.getHours()) + ":" + this.timeLeft(''+today.getMinutes());
				this.time = time;

				// 시간 텍스트
				const timeBox = today.getHours();
				//const timeIconText = document.querySelector("#time-icon");

				//console.log(timeIcon.innerHtml+"?");
				if(timeBox < 12){
					this.timeText = "Good morning";
					this.type = 'morning'
				} else if(timeBox < 18){
					this.timeText = "Good afternoon"
					this.type = 'afternoon'
				} else{
					this.timeText = "Good night"
					this.type = 'night'
				}

			},
			timeLeft: function(str) {
				// 한자리 숫자 앞에 0 붙이기
				const timeLeft = '00';
				return timeLeft.substring(0, timeLeft.length - str.length) + str;
			},
			todoShow: function () {
				this.isShow = !this.isShow;
			},
			addTodo: function(){
				this.todoList.push({
					id:this.todoList.length+1,
					content: this.inputTodo,
					done: false
				});

				this.inputTodo = '';
			},
			removeTodo: function(todo) {
				//하나씩 삭제
			},
		},
		mounted () {
			//this.dateInfo();
			setInterval(this.dateInfo, 100); //실시간 반영
		},
	}
</script>
<style lang="scss">
	.todo-wrap{
		position:relative;
		width:400px;
		height:80%;
		border:1px solid #ddd;
		.todo-header{
			height:40%;
			background:#fff081;
			.time-box{
				position:absolute;
				top:15px;
				right:15px;
				color:#ff8f00;
				font-weight:700;
				.ico-time{
					width:40px;
				}
			}
			.date-box{
				padding:70px 40px 0;
				>div{
					display:inline-block;
					vertical-align:middle;
					font-size:0;
					text-align:center;
					span{
						display:inline-block;
						font-size:16px;
						line-height:20px;
						color:#333;
					}
				}
				.day{
					font-size:34px;
					font-weight:900;
					margin-right:5px;
				}
				.month{
					&:after{
						content:'/';
						padding:0 1px;
					}
				}
			}
			.task-box{
				position:absolute;
				top:12%;
				right:10%;
				font-size:0;
				span{
					display:inline-block;
					font-size:20px;
					font-weight:800;
					color:#333;
				}
				strong{
					display:inline-block;
					font-size:30px;
					font-weight:800;
					color:#ff8f00;
					&:after{
						content:'/';
						color:#333;
						font-size:20px;
						padding:0 5px;
						display:inline-block;
					}
				}
			}
			
			.add-box{
				//position:relative;
				transition:all 0.5s ease-in;
				.add-btn {
					position: absolute;
					top: 20%;
					right: 7%;
					width: 40px;
					height: 40px;
					border: 1px solid #ff8f00;
					background:#ff8f00;
					line-height: 40px;
					text-align: center;
					border-radius: 100%;
					font-size:0;
					&:before, &:after{
						content:'';
						position:absolute;
						top:50%;left:50%;
						transform:translate(-50%, -50%);
						background:#ffeb3b;
					}
					&:before{
						width:2px;height:18px;
					}
					&:after{
						width:18px;height:2px;
					}
				}
				.form{
					position:absolute;
					top:20%;
					right:5%;
					width:0%;
					text-align:center;
					transition:all 0.5s ease-in;
					//opacity:0;
					.form-group{
						input{
							padding:0;
							border:0;
							border-radius:30px;
							box-shadow:7px 7px 7px rgba(0,0,0,0.06);
						}
					}
					button{
						position: absolute;
						top: 50%;
						right: 15px;
						transform: translateY(-50%);
						background: #ffc107;
						border-radius: 100%;
						width: 30px;
						height: 30px;
						font-size: 0;
						opacity: 0;
						z-index: -1;
						.i-arr{
							&::before{
								content:'';
								position:absolute;top:50%;left:50%;
								display:inline-block; 
								width: 15px;height:1px;
								background:#fff;
								transform: translate(-50%,-50%);
							}
							&::after{
								content:'';
								position:absolute;top:50%;left:65%;
								display:inline-block; 
								width: 8px; height:8px;
								border-style: solid;border-color: transparent #fff #fff transparent;border-width: 0 1px 1px 0;
								-webkit-transform: rotate(-45deg);
								-ms-transform: rotate(-45deg);
								transform: translate(-50%,-50%) rotate(-45deg);
								margin-left:-1px;
								-webkit-transition: all .3s ease;-moz-transition: all .3s ease;transition: all .3s ease;
							}
						}
					}
				}
				&.active{
					.form {
						width: 90%;
						//opacity:1;
						.form-group {
							input {
								padding: 0 20px;
							}
						}
						button{
							opacity: 1;
							z-index: 1;
							transition: all .3s ease;
							transition-delay: 0.3s;
						}
					}
				}
			}
		}
		.todo-body{
			overflow:hidden;
			position:absolute;
			top:30%;
			left:50%;
			background:#f8f8f8;
			width:90%;
			height:60%;
			transform:translateX(-50%);
			.todo-list{
				height:100%;
				overflow-y:scroll;
			}
			ul{
				padding:20px;
				li{
					position:relative;
					padding:15px 10px;
					background:#fff;
					&+li{
						margin-top:20px;
					}
					.del-btn{
						position:absolute;
						top:50%;
						right:10px;
						transform:translateY(-50%);
						background:transparent;
					}
					p{

					}
				}
			}
		}
		.todo-footer{
			position:absolute;
			bottom:20px;
			width:100%;
			text-align:center;
			font-size:10px;
		}
	}
</style>