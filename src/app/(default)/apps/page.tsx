import AppsPage from "../[locale]/apps/page";

export default function DefaultAppsPage() {
  return <AppsPage params={Promise.resolve({ locale: "en" })} />;
}
