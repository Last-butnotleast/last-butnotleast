"use client";

import { getDictionary } from "@/get-dictionary";

export default function ClientComponent({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["client-component"];
}) {
  return (
    <div>
      <p>{dictionary.text}</p>
    </div>
  );
}
