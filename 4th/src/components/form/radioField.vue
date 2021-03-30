<template>
	<div class="chk-box">
		<input
				:id="label"
				:type="type"
				:value="value"
				:name="name"
				:checked="checked"
				@input="check($event.target.id)"
		>
		<label v-bind:for="label">{{title}}</label>
	</div>
</template>

<script>
	export default {
		name: 'RadioField',

		props: [
			'value',
			'type',
			'name',
			'checked',
			'label',
			'title'],
		methods: {
			check: function(id) {
				this.$emit('input', id);
			},
		},
	}
</script>
