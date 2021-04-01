<template>
	<div>
		<Lnb />
		<div class="content">
			<h2>마이페이지</h2>

			<p class="sub-tit">커스텀 인풋 세트 만들기<br/> (Input 은 text, password, email 로 묶어 주시고 각각의 컴포넌트로 구현, selectbox와 textarea 포함)</p>
			<div class="form-wrap">
				<form>
					<div class="form-group">
						<input-field
								type="text"
								id="id"
								placeholder="sallykwak"
								disabled="disabled"
								readonly="readonly"
								label="아이디"
								value="sallykwak"
						/>
					</div>

					<div class="form-group">
						<input-field
								v-model="inputPw"
								type="password"
								id="password"
								placeholder="비밀번호를 입력해주세요"
								label="비밀번호"
						/>
					</div>

					<div class="form-group">
						<input-field
								v-model="inputName"
								type="text"
								id="name"
								placeholder="이름을 입력해주세요"
								label="이름"
						/>
					</div>


					<div class="form-group form-email">
						<input-field
								v-model="inputEmail"
								type="email"
								id="email"
								placeholder="이메일을 입력해주세요"
								label="이메일"
						/>
						<select-Field
								v-model="selectEmail"
								name="select"
								id="select"
								:options="formData.options"
						/>
					</div>

					<div class="form-group form-chk">
						<label>성별</label>
						<radio-field
								v-model="formData.gender"
								name="gender"
								v-for="(item,key) in formData.genders"
								:key="key"
								:label="item.label"
								:checked="item.checked"
						/>
					</div>

					<div class="form-group">
						<textarea-field
								v-model="inputMessage"
								id="message"
								placeholder="가입인사를 입력해주세요"
								label="가입인사"
						/>
					</div>
				</form>

				<div class="result-wrap">
					<p>아이디 : <strong>sallykwak</strong></p>
					<p>비밀번호 : <strong>{{inputPw}}</strong></p>
					<p>이름 : <strong>{{inputName}}</strong></p>
					<p>이메일 : <strong>{{inputEmail}}{{selectEmail}}</strong></p>
					<p>성별 : <strong>{{gender}}</strong></p>
					<p>가입인사 : <strong>{{inputMessage}}</strong></p>
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
	import RadioField from "@/components/form/radioField";
	import SelectField from "@/components/form/selectField";
	import TextareaField from "@/components/form/textareaField";


	export default {
		name: "mypage",
		components:	{
			Lnb,
			Footer,
			InputField,
			RadioField,
			SelectField,
			TextareaField
		},
		data() {
			return {
				inputName: '',
				inputPw: '',
				inputEmail: '',
				selectEmail: '',
				selected: '',
				inputMessage: '',
				gender:'',
				formData: {
					options: [
						'선택하세요',
						'@gmail.com',
						'@hanmail.net',
						'@naver.com',
					],
					genders: [
						{value: '남성', label: '남성', id: 'radio1', checked: 'false'},
						{value: '여성', label: '여성', id: 'radio2', checked: 'true'},
					],
				}
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	.sub-tit{font-size:13px;}
	.form-wrap{
		width:600px;
		margin-top:50px;
		.form-group{
			label{
				display:block;
				margin-bottom:7px;
				font-weight:600;
				font-size:15px
			}
			&+.form-group{
				margin-top:20px;
			}
			&.form-email{
				.form-item{
					display:inline-block;
					width:calc(50% - 7.5px);
					&+.form-item{
						margin-left:15px
					}
				}
			}
			&.form-chk{
				.form-item{
					display:inline-block;
					margin-top:15px;
					&+.form-item{
						margin-left:15px
					}
					label{
						display:inline-block;
						margin-left:5px;
						font-weight:400;
						vertical-align:top;
					}
					input{

					}
				}
			}
		}
	}
	.result-wrap{
		position:fixed;
		top:50%;
		right:30px;
		width:300px;
		padding:20px;
		background:#fff081;
		border-radius:10px;
		transform:translateY(-50%);
		p{
			strong{
				color:#ff8f00;
			}
			&+p{
				margin-top:15px;
			}
		}
	}
</style>