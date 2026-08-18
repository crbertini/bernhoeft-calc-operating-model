import { notFound } from "next/navigation";
import { BulletList, Section } from "@/components/Section";
import { getAllRoles, getRole } from "@/lib/content/load";
export function generateStaticParams(){ return getAllRoles().map(r=>({slug:r.slug})); }
export default async function Page({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; const r=getRole(slug); if(!r) notFound(); return <>
<section className={`roleHero ${r.slug==="lucas"?"mentorHero":""}`}><div className="container"><div className="eyebrow">Role Chart</div><h1>{r.title}</h1><div className="roleMeta">{r.currentOwner&&<span>Ocupante: <strong>{r.currentOwner}</strong></span>}{r.reportsTo&&<span>Reporta a: <strong>{r.reportsTo}</strong></span>}<span>Status: <strong>{r.status}</strong></span></div><p>{r.mission}</p>{r.missionHighlight&&<blockquote>{r.missionHighlight}</blockquote>}</div></section>
<Section title="Resultados esperados"><BulletList items={r.expectedOutcomes}/></Section>
<section className="section alt"><div className="container twoCol"><div><h2>Responsabilidades</h2><BulletList items={r.responsibilities}/></div><aside><h3>Autoridade</h3><BulletList items={r.authority}/>{r.kpis&&<><h3>KPIs</h3><BulletList items={r.kpis}/></>}</aside></div></section>
{r.interfaces&&<Section title="Interfaces"><div className="chips large">{r.interfaces.map(x=><span key={x}>{x}</span>)}</div></Section>}
{r.boundaries?.length>0&&<section className="section warningSection"><div className="container"><div className="eyebrow">Limites</div><h2>O que este papel não deve absorver</h2><BulletList items={r.boundaries}/></div></section>}
{r.successDefinition&&<Section eyebrow="Definição de sucesso" title="Como saberemos que o papel funciona"><div className="callout"><strong>{r.successDefinition}</strong></div></Section>}
</> }
