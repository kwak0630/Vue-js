<template>
	<div>
		<Lnb />
		<div class="content">
			<h2>Form - components</h2>

			<form class="form-wrap">
				<!--
				<div class="form-group">
					<input-field
							v-model="formData.name"
							:inputLabel="formData[0].inputLabel"
							:inputId="formData[0].inputId"
							:inputClass="formData[0].inputClass"
							:inputPlaceholder="formData[0].inputPlaceholder"/>
				</div>
				<div class="form-group">
					<input-field
							v-model="formData.password"
							:inputType="formData[1].inputType"
							:inputLabel="formData[1].inputLabel"
							:inputId="formData[1].inputId"
							:inputClass="formData[1].inputClass"
							:inputPlaceholder="formData[1].inputPlaceholder"/>
				</div>
				<div class="form-group">
					<label class="form-label">{{formData[2].labelName}}</label>
					<div class="form-item chk-wrap">
						<radio-field
								v-model="formData.gender"
								:inputLabel="formData[2].inputLabel"
								:inputId="formData[2].inputId"
								:boxClass="formData[2].boxClass"
								:inputName="formData[2].inputName"
								:checked="formData.gender === formData[2].inputValue"
								:pv="formData[2].inputValue"
						/>
						<radio-field
								v-model="formData.gender"
								:inputLabel="formData[3].inputLabel"
								:inputId="formData[3].inputId"
								:boxClass="formData[3].boxClass"
								:inputName="formData[3].inputName"
								:checked="formData.gender === formData[3].inputValue"
								:pv="formData[3].inputValue"
						/>
					</div>
				</div>
				<div class="form-group">
					<textarea-field
							v-model="formData.massage"
							:inputLabel="formData[4].inputLabel"
							:inputId="formData[4].inputId"
							:inputClass="formData[4].inputClass"
							:inputPlaceholder="formData[4].inputPlaceholder"
					/>
				</div>
				<div class="btn-wrap">
					<button class="btn">확인</button>
				</div>
				-->

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
			/*
			return {
				formData: [
					{
						inputLabel: '이름',
						inputId: 'name',
						inputPlaceholder: '이름을 입력해주세요.',
						inputValue: 'sallykwak',
						inputClass: 'form-input',
					},
					{
						inputLabel: '비밀번호',
						inputId: 'password',
						inputType: 'password',
						inputPlaceholder: '비밀번호를 입력해주세요.',
						inputValue: '',
						inputClass: 'form-input',
					},
					{
						labelName: '성별',
						inputLabel: '남성',
						inputId: 'male',
						inputValue: '남성',
						inputName: 'gender',
					},
					{
						labelName: '성별',
						inputLabel: '여성',
						inputId: 'female',
						inputValue: '여성',
						inputName: 'gender',
					},
					{
						inputLabel: '메세지',
						inputId:'massage',
						inputPlaceholder: '메세지를 입력해주세요.',
						inputClass: 'form-textarea',
					}
				]
			}

			 */
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
	.form-wrap{
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