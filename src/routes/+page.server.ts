import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		articles: await prisma.article.findMany()
	};
};

export const actions: Actions = {
	deleteBlog: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'invalid request' });
		}
		try {
			await prisma.article.delete({
				where: {
					id: Number(id)
				}
			});
		} catch (exception) {
			console.error(exception);
			return fail(500, { message: 'internal server error' });
		}

		return {
			status: 200
		};
	}
};
