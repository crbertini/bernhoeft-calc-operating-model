import Link from "next/link";
import { Section } from "@/components/Section";
import AreaCard from "@/components/AreaCard";
import OrgModel from "@/components/OrgModel";
import { getAllAreas, getGovernance, getStrategy } from "@/lib/content/load";

export default function Page(){
  const areas=getAllAreas();
  const g=getGovernance().governance;
  const s=getStrategy();
  const conselho=g.bodies.find((x:any)=>x.id==="conselho");
  const comite=g.bodies.find((x:any)=>x.id==="comite");
  return <>
    <section className="pageHero"><div className="container"><div className="eyebrow">Operating Model</div><h1>Macroestrutura clara. Desenho local flexível.</h1><p>Separamos explicitamente o sistema que executa do sistema que governa. A empresa define cinco macroáreas e cada Head constrói os papéis necessários dentro de seu contorno.</p></div></section>
    <Section title="Dois sistemas, funções diferentes"><div className="systemSplit"><div className="systemPanel"><OrgModel areas={areas}/></div><div className="systemPanel governancePanel"><div className="systemLabel">Sistema de Governança</div><div className="governanceMiniGrid"><Link href="/governanca" className="governanceMini"><strong>{conselho.name}</strong><span>Orienta • tensiona • acompanha</span><small>Não gerencia áreas</small></Link><Link href="/governanca" className="governanceMini"><strong>{comite.name}</strong><span>Aprofunda • aprende • recomenda</span><small>Não dá ordem operacional</small></Link></div><div className="authorityRule"><strong>Orientação não transfere accountability.</strong><p>CEO e Heads continuam donos das decisões executivas dentro de suas alçadas.</p></div></div></div></Section>
    <Section eyebrow="Macroáreas" title="Cinco donos claros de capacidades diferentes"><div className="grid2">{areas.map(a=><AreaCard area={a} key={a.id}/>)}</div></Section>
    <Section eyebrow="Inovação" title="Inovar sem quebrar a operação"><div className="callout"><strong>Portfólio & Ofertas é a porta de entrada estruturada da inovação.</strong><p>Hipóteses e MVPs são incubados antes de virarem backlog permanente de Engenharia, promessa comercial de Crescimento ou exceção recorrente de Operações.</p><Link className="textLink" href="/direitos-de-decisao">Ver jornada Hipótese → MVP → Oferta oficial →</Link></div></Section>
    {s.futureCapabilities && <Section eyebrow="Ambição futura" title={s.futureCapabilities.title}><div className="grid3">{s.futureCapabilities.items.map((x:any)=><article className="card" key={x.title}><h3>{x.title}</h3><p>{x.description}</p></article>)}</div></Section>}
    <Section eyebrow="Princípio" title="Capacidade não é cargo"><div className="callout"><strong>Não estamos desenhando uma árvore definitiva de posições.</strong><p>Capabilities como RevOps, Excelência Operacional, Experimentação ou Produtos de Dados podem ser necessárias sem existir imediatamente como cargos dedicados. O Head decide como combiná-las em papéis conforme escala e complexidade.</p></div></Section>
  </>
}
