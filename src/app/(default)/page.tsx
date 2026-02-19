import Home from "../[locale]/page";

export default function DefaultHomePage() {
  return <Home params={Promise.resolve({ locale: "en" })} />;
}
