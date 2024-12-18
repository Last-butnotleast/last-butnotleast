import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Projects({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{dict.projects.title}</h1>
      <p className="text-xl">{dict.projects.description}</p>
    </div>
  );
}
