<template>
	<div>
		<Lnb />
		<div class="content">
			<h2>Form2</h2>

			<form class="form-wrap">
				<div class="form-group">
					<input-field
							v-model="sendData.name"
							:labelClass="formData[0].labelClass"
							:inputLabel="formData[0].inputLabel"
							:inputId="formData[0].inputId"
							:inputClass="formData[0].inputClass"
							:inputPlaceholder="formData[0].inputPlaceholder"/>
				</div>
				<div class="form-group">
					<input-field
							v-model="sendData.password"
							:labelClass="formData[1].labelClass"
							:inputType="formData[1].inputType"
							:inputLabel="formData[1].inputLabel"
							:inputId="formData[1].inputId"
							:inputClass="formData[1].inputClass"
							:inputPlaceholder="formData[1].inputPlaceholder"/>
				</div>
				<div class="form-group">
					<textarea-field
							v-model="sendData.massage"
							:value="sendData.massage"
							:labelClass="formData[2].labelClass"
							:inputLabel="formData[2].inputLabel"
							:inputId="formData[2].inputId"
							:inputClass="formData[2].inputClass"
							:inputPlaceholder="formData[2].inputPlaceholder"
					/>
				</div>

			</form>
		</div>
		<Footer />
	</div>
</template>

<script>
	import Lnb from "@/components/lnb";
	import Footer from "@/components/Footer";
	import InputField from "@/components/form/inputField";
	import TextareaField from "@/components/form/textareaField";


	export default {
		name: "form2",
		components:	{
			Lnb,
			Footer,
			InputField,
			TextareaField
		},
		data() {
			return {
				sendData: {
					name: null,
					password:null,
					massage: 'dddd',
				},
				formData: [
					{
						labelClass: 'form-label',
						inputLabel: '이름',
						inputId: 'name',
						inputPlaceholder: '이름을 입력해주세요.',
						inputValue: 'sallykwak',
						inputClass: 'form-input',
					},
					{
						labelClass: 'form-label',
						inputLabel: '비밀번호',
						inputId: 'password',
						inputType: 'password',
						inputPlaceholder: '비밀번호를 입력해주세요.',
						inputValue: '',
						inputClass: 'form-input',
					},
					{
						labelClass: 'form-label',
						inputLabel: '메세지',
						inputId:'massage',
						inputPlaceholder: '메세지를 입력해주세요.',
						inputClass: 'form-textarea',
					}
				]
			}
		},
		methods: {
			submit() {
				let data = this.sendData;

				console.log('입력정보');
				console.log(data);
				console.log('submit');

			}
		}
	}
</script>

<style lang="scss">
	.form-wrap{
		.form-item{
			label{
				font-size:16px
			}
		}
	}
</style>