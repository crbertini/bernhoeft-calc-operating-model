import Link from "next/link";
import { Section } from "@/components/Section";
import { getAllRoles } from "@/lib/content/load";
export default function Page(){ const roles=getAllRoles(); const by=(slug:string)=>roles.find(r=>r.slug===slug)!; return <>
<section className="pageHero"><div className="container"><div className="eyebrow">Modelo de liderança</div><h1>Autonomia com accountability.</h1><p>Os Heads respondem hierarquicamente ao CEO. Lucas apoia transversalmente a evolução dos líderes sem criar uma segunda linha de comando.</p></div></section>
<Section title="Quatro níveis com responsabilidades diferentes"><div className="leadershipStack">
{[["CEO",by("ceo")],["Heads",by("head-operacoes")],["L3",by("l3")],["L4",by("l4")]].map(([label,r]:any)=><Link href={`/papeis/${r.slug}`} className="leadershipRow" key={label}><span>{label}</span><div><strong>{r.title}</strong><p>{r.mission}</p></div></Link>)}</div></Section>
<Section eyebrow="Apoio transversal" title="O papel de Lucas"><div className="mentorFeature"><div><h3>{by("lucas").title}</h3><p>{by("lucas").mission}</p><blockquote>{by("lucas").missionHighlight}</blockquote><Link className="textLink" href="/papeis/lucas">Ver Role Chart completo →</Link></div><div className="mentorRule"><strong>Responsável pela evolução operacional dos líderes</strong><span>Sem ser chefe deles.</span><span>Mentoria, conhecimento, desenho de desafios e pequenos projetos especiais.</span><span>Sempre apoiando um líder accountable.</span></div></div></Section>
<Section eyebrow="Operações" title="Head → L3 → L4 → Squads"><div className="hierarchyDiagram"><div>Head de Operações</div><span>↓</span><div>L3 — lidera vários L4</div><span>↓</span><div className="multiple">L4 Alpha · L4 Beta · L4 Gamma</div><span>↓</span><div className="multiple">Squads com nomes e escopos específicos</div></div></Section>
</> }
