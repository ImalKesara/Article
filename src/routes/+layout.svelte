<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
</script>

<section>
	<Navbar />
	<main>
		<ModeWatcher />
		<slot></slot>
	</main>
</section>

<Footer />
