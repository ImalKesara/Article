<script lang="ts">
	import type { PageData } from './$types';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';

	const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);
	export let data: PageData;
	const { articles } = data;
	console.log(articles);
</script>

<div class="mx-auto mt-5 w-full max-w-6xl px-3">
	<h1 class=" text-xl font-bold">My blogs</h1>
	<ScrollArea class="h-[40rem] max-w-6xl  rounded-md">
		<div class="">
			{#each articles as article}
				<div class="my-5 border-2 rounded-lg p-3">
					<article>
						<div class="flex justify-end">
							<button>Delete</button>
							<a href="/" role="button">Edit article</a>
						</div>
						<header>{article.title}</header>
						<p>
							{article.content}
						</p>
					</article>
				</div>
			{/each}
		</div>
	</ScrollArea>
</div>
