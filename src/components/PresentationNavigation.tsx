"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { id:string; label:string; short?:string; path:string };

function activeIndex(pathname:string, navigation:NavItem[]) {
  if (pathname === "/") return 0;
  const idx = navigation.findIndex((item) => item.path !== "/" && pathname.startsWith(item.path));
  return idx >= 0 ? idx : 0;
}

export function PresentationNav({navigation}:{navigation:NavItem[]}) {
  const pathname = usePathname();
  const current = activeIndex(pathname, navigation);
  return <div className="chapterBar"><div className="container">
    <div className="chapterIntro"><span>Roteiro da conversa</span><small>avance pelos blocos para construir o entendimento</small></div>
    <nav className="chapterNav" aria-label="Roteiro da apresentação">
      {navigation.map((item,index)=><Link key={item.id} href={item.path} className={`chapterBlock ${index===current?"active":""} ${index<current?"done":""}`}>
        <span className="chapterNumber">{String(index+1).padStart(2,"0")}</span>
        <span className="chapterText"><strong>{item.label}</strong><small>{item.short}</small></span>
      </Link>)}
    </nav>
  </div></div>;
}

export function ChapterPager({navigation}:{navigation:NavItem[]}) {
  const pathname = usePathname();
  const current = activeIndex(pathname, navigation);
  const previous = current > 0 ? navigation[current-1] : null;
  const next = current < navigation.length-1 ? navigation[current+1] : null;
  return <section className="chapterPagerSection"><div className="container chapterPager">
    {previous ? <Link className="pagerCard previous" href={previous.path}><small>← Capítulo anterior</small><strong>{previous.label}</strong><span>{previous.short}</span></Link> : <div/>}
    {next ? <Link className="pagerCard next" href={next.path}><small>Próximo capítulo →</small><strong>{next.label}</strong><span>{next.short}</span></Link> : <Link className="pagerCard next final" href="/"><small>Fechar a conversa</small><strong>Voltar ao início</strong><span>Revisar a transformação como um todo</span></Link>}
  </div></section>;
}
