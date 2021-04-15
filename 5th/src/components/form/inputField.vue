<template>
	<div class="form-item">
		<label
				:for="id"
		>{{label}}</label>
		<input
				:value="value"
				:type="type"
				:id="id"
				:disabled="disabled"
				:readonly="readonly"
				:placeholder="placeholder"
				:maxlength="maxlength"
				:class="[(isErr === true) ? 'box-error' : '']"
				@input="change"
				@keyup.enter="enterSubmit">
		<div v-if="isMessage"
			 class="error-text"
			 :class="[(isErr === true) ? 'text-error' : '']">
			{{ message }}
		</div>
	</div>
</template>
<script>
	export default {
		name: 'inputField',
		props: [
			'label',
			'type',
			'name',
			'id',
			'value',
			'disabled',
			'readonly',
			'placeholder',
			'rules',
			'maxlength'
		],

		data() {
			return {
				isMessage: false,
				message: [],
				isErr: false,
			}
		},
		methods: {
			change: function($event) {

				this.checkValue($event);
				this.$emit('input', $event.target.value)
			},

			checkValue($event) {
				if (this.required) {
					if (!this.value) {
						this.isMessage = true;
						this.isErr = true;
						this.message = "필수값입니다.";
						return false;
					} else {
						this.isMessage = false;
						this.message = '';
					}
				}
				// 입력받은 rules에 맞춰서 유효성 검사
				if (this.rules) {
					let checkVal = $event.target.value;
					let isMsg = false;
					let msg = [];
					this.rules.forEach(function (value) {
						let check = value(checkVal);
						if (check !== true) {
							isMsg = true;
							msg.push(check);
						}
					});
					this.isMessage = isMsg;
					this.isErr = isMsg;
					this.message = msg[0];
				}
			},
			enterSubmit:function($event) {
				if ( $event.target.value == '')
					return;
				console.log("submit 완료!" + this.value);
				document.querySelector("#enterResult").innerHTML += this.value + '<br>';
				this.value = '';
			}
		}
	}
</script>