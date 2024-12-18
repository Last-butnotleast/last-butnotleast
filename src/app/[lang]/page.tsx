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
      <p>
        Current locale: <b>{lang}</b>
      </p>
      <h1>{dictionary.home.title}</h1>
    </div>
  );
}
