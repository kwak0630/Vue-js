<template>
	<div>
		<Lnb />
		<div class="content">
			<h2>Form</h2>
			<!--
			<div class="form-wrap">
				<form v-on:submit.prevent="submitForm">
					<div class="form-group">
						<label for="formData.username">이름</label>
						<input type="text" class="form-input" id="formData.username" v-model="formData.username" />
					</div>
					<div class="form-group">
						<label for="formData.birth">생년월일</label>
						<input type="text" class="form-input" id="formData.birth" v-model="formData.birth" />
					</div>
					<div class="form-group">
						<label for="formData.massage">메세지</label>
						<textarea type="text" class="form-input form-textarea" id="formData.massage" v-model="formData.massage"></textarea>
					</div>
					<div class="result">
						<div class="form-group">
							<span>이름 : </span>
							<span>{{ formData.username }}</span>
						</div>
						<div class="form-group">
							<span>생년월일 : </span>
							<span>{{ formData.birth }}</span>
						</div>
						<div class="form-group">
							<span>메세지 : </span>
							<span>{{ formData.massage }}</span>
						</div>
					</div>
				</form>
			</div>
			-->
			<div>
				<form class="form-wrap2">
					<div v-if="step === 1">
						<div class="form-group">
							<label class="form-label" for="formData.userid">아이디</label>
							<input type="text" class="form-input" id="formData.userid" v-model="formData.userid" />
						</div>
						<div class="form-group">
							<label class="form-label" for="formData.password">비밀번호</label>
							<input type="password" class="form-input" id="formData.password" v-model="formData.password" />
						</div>
						<div class="form-group">
							<label class="form-label">성별</label>
							<span class="form-chk-wrap">
								<span v-for="g in genders">
									<input type="radio" v-model="formData.gender" :value="g.value" :id="g.id" />
									<label class="form-chk" :for="g.id"> {{ g.label }}</label>
								</span>
							</span>
						</div>
						<div class="form-group">
							<label class="form-label">수신동의</label>
							<span class="form-chk-wrap">
								<span v-for="a in agree">
									<input type="checkbox" v-model="formData.agree" :value="a.value" :id="a.id"  />
									<label class="form-chk" :for="a.id"> {{ a.label }}</label>
								</span>
							</span>
						</div>
						<div class="form-group">
							<label class="form-label" for="formData.massage">메세지</label>
							<textarea type="text" class="form-input form-textarea" id="formData.massage" v-model="formData.massage"></textarea>
						</div>

						<div class="btn-wrap">
							<button @click.prevent="next()" class="btn">결과보기</button>
						</div>

					</div>

					<div v-if="step === 2">
						<div class="result">
							<div class="form-group">
								<span>아이디 : </span>
								<span>{{ formData.userid }}</span>
							</div>
							<div class="form-group">
								<span>비밀번호 : </span>
								<span>{{ formData.password }}</span>
							</div>
							<div class="form-group">
								<span>성별 : </span>
								<span>{{ formData.gender }}</span>
							</div>
							<div class="form-group">
								<span>수신동의 : </span>
								<span>{{ formData.agree }}</span>
							</div>
							<div class="form-group">
								<span>메세지 : </span>
								<span>{{ formData.massage }}</span>
							</div>
						</div>
						<div class="btn-wrap">
							<button @click.prevent="prev()" class="btn btn-prev">이전</button>
							<button @click.prevent="submit()" class="btn">보내기</button>
							<!--<button @click.prevent="submit()">Save</button>-->
						</div>
					</div>
				</form>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
	import Lnb from "@/components/layout/Lnb";
	import Footer from "@/components/layout/Footer";


	export default {
		name: "form",
		components:	{
			Lnb,
			Footer
		},
		//el: '#form',
		/*
		data() {
			return {
				formData: {
					username: 'sally',
					birth: '19920630',
					gender: 'male',
					interests: ['cola', 'coffee'],
					favouriteIDE: 'sublime',
					softwares: ['win10', 'phpstorm', 'sublime'],
					massage: "",
					subscribe: true
				},
			}
		},
		methods: {
			submitForm: function() {
				alert('Submit button is clicked.')
			}
		}
		*/
		//el: '#form',
		data() {
			return {
				step:1,
				formData: {
					userid: "sallykwak",
					password: "",
					gender: "",
					agree: [],
					massage: "",
				},
				genders: [
					{value: '남성', label: '남성', id: 'radio1'},
					{value: '여성', label: '여성', id: 'radio2'},
				],
				agree: [
					{value: 'SMS 수신동의', label: 'SMS 수신 동의', id: 'check1'},
					{value: '메일 수신동의', label: '메일 수신동의', id: 'check2'},
				],
			}
		},
		methods:{
			prev() {
				this.step--;
			},
			next() {
				this.step++;
			},
			submit() {
				alert('보내기 성공!');
			}
		}
	}
</script>

<style lang="scss">


	.form-wrap2 {
		width: 50%;
		margin:0 auto;
		.form-group {
			font-size: 0;
			& + .form-group {
				margin-top: 15px
			}
			.form-label {
				display: inline-block;
				width: 20%;
				height:50px;
				margin: 0 0 10px 0;
				font-size: 16px;
				line-height:50px;
				vertical-align:top;
			}
			.form-input {
				width: 80%;
				height: 50px;
				font-size:16px;
				transition:all 0.3s ease-in;
				&:focus{
					border:1px solid #ff8f00;
				}
			}
			.form-textarea{
				height: 150px;
				padding: 10px;
				width: 80%;
				border-radius: 5px;
				border: 1px solid #A0A0A0;
				font-size:16px;
				transition:all 0.3s ease-in;
				&:focus{
					border:1px solid #ff8f00;
				}
			}
			.form-chk-wrap{
				line-height:50px;
				&>span{
					display:inline-block;
					margin-right:15px;
				}
				.form-chk{
					display:inline-block;
					margin-left:5px;
					font-size:16px;
					vertical-align:top;
				}
			}
		}
		.btn-wrap {
			padding-top:50px;
			text-align:center;
			.btn {
				display: inline-block;
				padding: 15px 45px;
				background: #fff081;
				border: 2px solid #ff8f00;
				border-radius: 40px;
				font-size: 16px;
				text-transform: uppercase;
				&.btn-prev{
					background:#f7f7f7;
					border:2px solid #000
				}
				&+.btn{
					margin-left:15px;
				}
			}
		}
		.result {
			margin-top:20px;
			padding:20px;
			border:1px solid #ddd;
			border-radius:10px;
			.form-group{
				font-size:16px;
				span{
					&+span{
						color:#ff8f00;
						font-weight:800;
					}
				}
			}
		}
	}
</style>