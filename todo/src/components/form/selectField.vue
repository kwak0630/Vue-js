<template>
	<div class="form-item">
		<select v-on:change="change($event.target.value)">
			<option v-for="(option,key) in options" v-bind:key="key">
				{{option}}
			</option>
		</select>
	</div>
</template>

<script>
	export default {
		name: 'selectField',
		props: [
			'options'
		],
		methods: {
			change: function(value) {
				this.$emit('input', value);//부모로 보내는 value 값
			},
		}
	};
</script>