<template>
	<div>
		<Lnb />
		<div class="content">
			<h2>일일업무</h2>
		</div>
		<Footer />
	</div>
</template>

<script>
	import Lnb from "@/components/lnb";
	import Footer from "@/components/Footer";

	export default {
		name: "work",
		components:	{
			Lnb,
			Footer
		},
	}
</script>