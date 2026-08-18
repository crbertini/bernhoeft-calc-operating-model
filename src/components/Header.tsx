import Link from "next/link";
import { getSite } from "@/lib/content/load";
import { PresentationNav } from "@/components/PresentationNavigation";

export default function Header() {
  const { site, navigation } = getSite();
  return <header className="topbar">
    <div className="container navwrap">
      <Link href="/" className="brand"><span className="brandmark">B</span><span><strong>{site.name}</strong><small>{site.title}</small></span></Link>
      <div className="presentationMode"><strong>Modo apresentação</strong><span>{site.theme}</span></div>
    </div>
    <PresentationNav navigation={navigation}/>
  </header>;
}
