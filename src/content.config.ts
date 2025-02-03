import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

function removeDupsAndLowerCase(array: string[]) {
	return [...new Set(array.map((str) => str.toLowerCase()))];
}

const baseSchema = z.object({
	title: z.string().max(60),
});

const post = defineCollection({
	loader: glob({ base: "./src/content/post", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		baseSchema.extend({
			description: z.string(),
			coverImage: z
				.object({
					alt: z.string(),
					src: image(),
				})
				.optional(),
			draft: z.boolean().default(false),
			ogImage: z.string().optional(),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
		}),
});

const note = defineCollection({
	loader: glob({ base: "./src/content/note", pattern: "**/*.{md,mdx}" }),
	schema: baseSchema.extend({
		description: z.string().optional(),
		publishDate: z
			.string()
			.refine((val) => {
				// 修改：解析自定义格式的日期字符串，兼容 "YYYY-MM-DD"
				const datePattern = /^\d{4}-\d{2}-\d{2}$/;
				return datePattern.test(val);
			}, "Invalid date format. Expected YYYY-MM-DD")
			.transform((val) => {
				// 解析日期字符串为 Date 对象
				const [year, month, day] = val.split("-");
				if (!year || !month || !day) {
					throw new Error("Invalid date format. Expected YYYY-MM-DD");
				}
				return new Date(Number(year), Number(month) - 1, Number(day));
			}),
	}),
});

export const collections = { post, note };
