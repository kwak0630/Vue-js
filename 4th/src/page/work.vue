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
	import Lnb from "@/components/layout/Lnb";
	import Footer from "@/components/layout/Footer";

	export default {
		name: "work",
		components:	{
			Lnb,
			Footer
		},
	}
</script>