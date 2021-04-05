<template>
	<div>
		<Lnb />
		<div class="content">
			<h2>Form - components</h2>

			<form class="form-wrap2">
				<div class="form-group">
					<label>아이디</label>
					<input-field
							v-model="inputId"
							type="text"
							name="id"
							id="id"
							value="sallykwak"
							placeholder="아이디를 입력해주세요."
							class="form-input"/>
					</div>
				<div class="form-group">
					<label>비밀번호</label>
					<input-field
							v-model="inputPw"
							type="password"
							name="pw"
							id="pw"
							placeholder="비밀번호를 입력해주세요."
							class="form-input"/>
				</div>
				<div class="form-group">
					<label>이메일</label>
					<input-field
							v-model="inputEmail"
							type="email"
							name="email"
							id="email"
							placeholder="E-mail을 입력해주세요."
							class="form-input"/>
				</div>

				<div class="form-group">
					<label>성별</label>
					<div class="chk-wrap">
						<radio-field
								type="radio"
								name="gender"
								v-for="(item,key) in items.genders"
								:key="key"
								v-model="items.gender"
								:title="item.value"
								:label="item.label"
								:checked="item.checked"
						/>
					</div>
				</div>
				<div class="form-group">
					<label>메세지</label>
					<textarea-field
							v-model="textarea"
							id="textarea"
							name="textarea"
							placeholder="메세지를 입력해주세요."
							class="form-item form-textarea"/>
				</div>


				<div class="result">
					<div class="form-group">
						<span>아이디 : </span>
						<span>{{ inputId }}</span>
					</div>
					<div class="form-group">
						<span>비밀번호 : </span>
						<span>{{ inputPw }}</span>
					</div>
					<div class="form-group">
						<span>이메일 : </span>
						<span>{{ inputEmail }}</span>
					</div>
					<div class="form-group">
						<span>성별 : </span>
						<span>{{ genders }}</span>
					</div>
					<div class="form-group">
						<span>메세지 : </span>
						<span>{{ textarea }}</span>
					</div>
				</div>
			</form>
		</div>
		<Footer />
	</div>
</template>

<script>
	import Lnb from "@/components/layout/Lnb";
	import Footer from "@/components/layout/Footer";
	import InputField from "@/components/form/inputField";
	import RadioField from "@/components/form/radioField";
	import TextareaField from "@/components/form/textareaField";


	export default {
		name: "form2",
		components:	{
			Lnb,
			Footer,
			InputField,
			RadioField,
			TextareaField
		},
		data() {
			return {
				inputId: '',
				inputPw: '',
				inputEmail: '',
				gender:[],
				textarea: '',
				items:{
					genders: [
						{value: '남성', label: '남성', id: 'radio1'},
						{value: '여성', label: '여성', id: 'radio2'},
					],
				}
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	.form-wrap2{
		.form-group {
			> label {
				display: inline-block;
				width: 20%;
				height: 50px;
				margin: 0 0 10px 0;
				font-size: 16px;
				line-height: 50px;
				vertical-align: top;
			}

			.form-item {

			}
		}
		.chk-wrap {
			 display: inline-block;
			 width: 80%;

			 .chk-box {
				 display: inline-block;
				 height: 50px;
				 line-height: 50px;
				 font-size: 16px;

				 label {
					 display: inline-block;
					 margin-left: 5px;
					 font-size: 16px;
					 vertical-align: middle;
				 }

				 & + .chk-box {
					 margin-left: 15px;
				 }
			 }
		 }
	}
</style>