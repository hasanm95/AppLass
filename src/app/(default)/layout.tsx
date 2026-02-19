import { ReactNode } from "react";
import LocaleLayout from "../[locale]/layout";

type Props = {
  children: ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  // Force English for prefixless routes
  return <LocaleLayout params={Promise.resolve({ locale: "en" })}>{children}</LocaleLayout>;
}
