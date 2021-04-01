<template>
	<div class="form-item">
		<label
				:for="id"
		>{{label}}</label>
		<textarea
				:name="name"
				:id="id"
				:value="value"
				:placeholder="placeholder"
				@input="change">
		</textarea>
	</div>
</template>

<script>
	export default {
		name: 'textareaField',
		props: [
			'name',
			'id',
			'value',
			'label',
			'isHide',
			'placeholder',
		],
		methods: {
			change: function($event) {
				this.$emit('input', $event.target.value);
			}
		}
	}
</script>