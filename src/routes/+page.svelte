<script lang="ts">
	import { Pencil } from 'lucide-svelte';
	import type { PageData } from './$types';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { OctagonX } from 'lucide-svelte';
	import { enhance } from '$app/forms';

	const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);
	export let data: PageData;
	const { articles } = data;
	console.log(articles);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="mx-auto mt-5 w-full max-w-6xl px-3">
	<h1 class=" text-xl font-bold">My blogs</h1>
	<ScrollArea class="h-[40rem] max-w-6xl  rounded-md">
		<div class="">
			{#each articles as article}
				<div class="my-5 rounded-lg border-2 p-3">
					<article class=" relative">
						<div class="flex items-center justify-end gap-x-2">
							<button type="submit" class="transition-colors duration-200 hover:text-sky-500"
								><Pencil size={19} /></button
							>
							<form action="?/deleteBlog&id={article.id}" method="POST">
								<button type="submit" class="transition-colors duration-200 hover:text-sky-500"
									><OctagonX size={20} /></button
								>
							</form>
						</div>
						<div class="grid gap-y-2">
							<header class="font-bold underline">{article.title}</header>
							<p>
								{article.content}
							</p>
						</div>
						<p class="text-end text-sm">
							{new Date(article.createdAt).toLocaleDateString()}
						</p>
					</article>
				</div>
			{/each}
		</div>
	</ScrollArea>
</div>
