<template>
	<div>
		<Lnb />
		<div class="content">
			<h2>원격근무 관리</h2>
		</div>
		<Footer />
	</div>
</template>

<script>
	import Lnb from "@/components/lnb";
	import Footer from "@/components/Footer";

	export default {
		name: "remotework",
		components:	{
			Lnb,
			Footer
		},
	}
</script>