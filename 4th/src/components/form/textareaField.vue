<template>
	<textarea
			:name="name"
			:id="id"
			:value="value"
			@input="change">
    </textarea>
</template>

<script>
	export default {
		name: 'VueTextarea',
		props: [
			'name',
			'id',
			'value'
		],
		methods: {
			change: function($event) {
				this.$emit('input', $event.target.value);
			}
		}
	}
</script>