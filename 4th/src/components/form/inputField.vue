<template>
	<input
			:type="type"
			:name="name"
			:id="id"
			:value="value"
			:placeholder="placeholder"
			@input="change">
</template>

<script>
	export default {
		name: 'VueInput',
		props: [
			'type',
			'name',
			'id',
			'value',
			'placeholder',
		],
		methods: {
			change: function($event) {
				this.$emit('input', $event.target.value)
			}
		}
	}
</script>