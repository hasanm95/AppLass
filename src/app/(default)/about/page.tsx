import AboutPage from "../[locale]/about/page";

export default function DefaultAboutPage() {
  return <AboutPage params={Promise.resolve({ locale: "en" })} />;
}
