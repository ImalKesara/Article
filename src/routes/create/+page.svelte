<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
</script>

<svelte:head>
	<title>Create</title>
</svelte:head>

<div class="m-auto mt-5 grid max-w-5xl grid-cols-1 px-3">
	<form class="grid gap-y-3" method="POST" action="?/createArticle" use:enhance>
		<h3>New article</h3>
		<label for="title">Title</label>
		<Input type="text" placeholder="Title" class="max-w-xs" name="title" required />
		<label for="content">Content</label>
		<Textarea placeholder="Type your message here." name="content"  required/>
		<Button type="submit">Submit</Button>
	</form>
</div>
