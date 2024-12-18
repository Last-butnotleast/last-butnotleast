import { components } from "@/components/mdx-components";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import * as fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";

export default async function Blog({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  const fileData = await fs.promises.readFile("public/README.md", "utf-8");
  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: fileData,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    },
    components,
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{dict.blog.title}</h1>
      <p className="text-xl">{dict.blog.description}</p>
      <article className="prose prose-invert">
        {frontmatter.title && (
          <h1 className="text-4xl font-semibold mb-2 underline">
            {frontmatter.title}
          </h1>
        )}
        <div className="space-y-6">{content}</div>
      </article>
    </div>
  );
}
