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
				@input="change">
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
		],
		methods: {
			change: function($event) {
				this.$emit('input', $event.target.value)
			}
		}
	}
</script>