<template>
	<div class="form-item chk-box">
		<input
				:id="label"
				type="radio"
				:value="value"
				:name="name"
				:checked="checked"
				@change="checkValue"
		>
		<label v-bind:for="label">{{label}}</label>
	</div>
</template>

<script>
	export default {
		name: 'RadioField',

		model: {
			event: "change", //이벤트를 change로 사용하고 싶은 경우
		},
		props: [
			'value',
			'type',
			'name',
			'checked',
			'label',
		],
		methods: {
			checkValue: function() {
				this.$emit("change", this.value); //체크된 값 넘겨줌
			},
		},
	}
</script>
