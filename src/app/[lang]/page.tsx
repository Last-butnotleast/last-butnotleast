import Hero from "@/components/hero";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <Hero dictionary={dictionary.hero} />
    </div>
  );
}
