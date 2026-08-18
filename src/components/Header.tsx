import Link from "next/link";
import { getSite } from "@/lib/content/load";

export default function Header() {
  const { site, navigation } = getSite();
  return <header className="topbar"><div className="container navwrap">
    <Link href="/" className="brand"><span className="brandmark">B</span><span><strong>{site.name}</strong><small>{site.title}</small></span></Link>
    <nav>{navigation.map((item:any)=><Link key={item.id} href={item.path}>{item.label}</Link>)}</nav>
  </div></header>;
}
