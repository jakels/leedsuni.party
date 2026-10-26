<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import Navbar from '#lib/components/navbar_component.svelte';
	import Footer from '#lib/components/footer.svelte';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="mx-auto w-full max-w-4xl">
	<Navbar />
	{@render children()}
	<Footer />
</div>