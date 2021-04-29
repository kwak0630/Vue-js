<template>
	<div class="tab-wrap">
		<button @click="$emit('input', id)" :class="[active, 'tab']">
			{{ label }}
		</button>
	</div>
</template>
<script>
	export default {
		name: 'Tabs',
		props: {
			id: Number,
			label: String,
			value: Number
		},
		computed: {
			active() {
				return this.value === this.id ? 'active' : false
			}
		}
	}
</script>