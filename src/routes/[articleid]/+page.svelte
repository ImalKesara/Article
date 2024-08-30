<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import Input from '$lib/components/ui/input/input.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	const { article } = data;
	console.log(article);
</script>

<div class="m-auto mt-5 grid max-w-5xl grid-cols-1 px-3">
	<form class="grid gap-y-3" method="POST" action="?/updateArticle" use:enhance>
		<h3>Editing blog</h3>
		{#await article}
			<p>Loading...</p>
		{:then resolvedArticle}
			<Input
				type="text"
				placeholder="Title"
				class="max-w-xs"
				name="title"
				required
				value={resolvedArticle.title}
			/>
			<label for="content">Content</label>
			<Textarea
				placeholder="Type your message here."
				name="content"
				required
				value={resolvedArticle.content}
                rows={10}
			/>
		{/await}
		<Button type="submit">Update</Button>
	</form>
</div>
