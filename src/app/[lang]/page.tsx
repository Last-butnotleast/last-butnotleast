import ClientComponent from "@/components/client-component";
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
    <main className="flex flex-col items-center justify-center h-screen">
      <p>
        Current locale: <b>{lang}</b>
      </p>
      <h1>{dictionary["server-component"].welcome}</h1>
      <ClientComponent dictionary={dictionary["client-component"]} />
    </main>
  );
}
