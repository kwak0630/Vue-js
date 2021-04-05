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
	import Lnb from "@/components/layout/Lnb";
	import Footer from "@/components/layout/Footer";

	export default {
		name: "remotework",
		components:	{
			Lnb,
			Footer
		},
	}
</script>