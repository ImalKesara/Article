import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { error, fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const getArticles = async () => {
		const article = await prisma.article.findUnique({
			where: {
				id: Number(params.articleid)
			}
		});
		if (!article) {
			throw error(404, 'Article not found');
		}
		return article;
	};

	return {
		article: getArticles()
	};
};

export const actions: Actions = {
	updateArticle: async ({ request, params }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};

		try {
			await prisma.article.update({
				where: {
					id: Number(params.articleid)
				},
				data: {
					title,
					content
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not update the article.' });
		}

		return {
			status: 200
		};
	}
};
