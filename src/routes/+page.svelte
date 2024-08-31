<script lang="ts">
	import { Pencil } from 'lucide-svelte';
	import type { PageData } from './$types';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { OctagonX } from 'lucide-svelte';
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';

	const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);
	export let data: PageData;
	const { articles } = data;
	console.log(articles);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="mx-auto mt-5 w-full max-w-6xl px-3">
	<div class="flex items-center justify-between">
		<h1 class=" text-xl font-bold">My blogs</h1>
		<a href="./create">
			<Button class="border-2 " variant="default">+Create</Button>
		</a>
	</div>

	<ScrollArea class="h-[40rem] max-w-6xl rounded-md">
		<div class="">
			{#each articles as article}
				<div class="my-5 rounded-lg border-2 border-dotted p-3">
					<article>
						<div class="flex justify-end">
							<div class="flex gap-x-1">
								<a
									href={article.id}
									role="button"
									class="transition-colors duration-200 hover:text-sky-500"><Pencil size={20} /></a
								>

								<form action="?/deleteBlog&id={article.id}" method="POST">
									<button type="submit" class="transition-colors duration-200 hover:text-red-500"
										><OctagonX size={20} /></button
									>
								</form>
							</div>
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
						<p class="text-end text-sm">
							{new Date(article.createdAt).toLocaleTimeString()}
						</p>
					</article>
				</div>
			{/each}
		</div>
	</ScrollArea>
</div>
