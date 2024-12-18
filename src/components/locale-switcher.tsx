"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, Locale } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GlobeIcon } from "lucide-react";

export default function LocaleSwitcher() {
  const pathname = usePathname();

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const currentLocale = pathname?.split("/")[1] as Locale;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <GlobeIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link
              href={redirectedPathname(locale)}
              className={`w-full ${
                locale === currentLocale ? "font-bold" : "font-normal"
              }`}
            >
              {getLanguageName(locale)}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function getLanguageName(locale: Locale): string {
  switch (locale) {
    case "en":
      return "English";
    case "de":
      return "Deutsch";
    case "es":
      return "Español";
    default:
      return locale;
  }
}
