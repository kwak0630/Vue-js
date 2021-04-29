<template>
	<div class="form-item chk-box">
		<input
				:id="label"
				type="checkbox"
				:value="value"
				:name="name"
				:checked="checked"
				@input="check($event.target.id)"
		>
		<label v-bind:for="label">{{label}}</label>
	</div>
</template>

<script>
	export default {
		name: 'CheckField',

		props: [
			'value',
			'type',
			'name',
			'checked',
			'label',
		],
		methods: {
			check: function(id) {
				this.$emit('input', id);
			},
		},
	}
</script>
