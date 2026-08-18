import Link from "next/link";
import { Section } from "@/components/Section";
import { getStrategy } from "@/lib/content/load";
export default function Home(){ const s=getStrategy(); return <>
  <section className="hero"><div className="container heroGrid"><div><div className="eyebrow">{s.hero.eyebrow}</div><h1>{s.hero.title}</h1><p>{s.hero.subtitle}</p><div className="heroActions"><Link className="button" href="/operating-model">Explorar Operating Model</Link><Link className="button ghost" href="/construa-sua-area">Como os líderes vão construir</Link></div></div><div className="heroThesis"><span>North Star econômica</span><strong>{s.thesis.economicNorthStar}</strong></div></div></section>
  <Section eyebrow="Tese" title={s.thesis.title}><div className="statement">{s.thesis.statement}</div></Section>
  <Section eyebrow="Evolução" title="Da empresa atual para a empresa que queremos construir"><div className="fromTo">{s.fromTo.map((x:any,i:number)=><div className="fromToRow" key={i}><div><small>Hoje</small>{x.from}</div><div className="arrow">→</div><div><small>Amanhã</small>{x.to}</div></div>)}</div></Section>
  <Section eyebrow="Portfólio" title={s.continuum.title} intro={s.continuum.description}><div className="continuum">{s.continuum.stages.map((x:string,i:number)=><div key={x}><span>{i+1}</span>{x}</div>)}</div></Section>
  <Section eyebrow="Princípios" title="Como vamos organizar a transformação"><div className="grid3">{s.principles.map((p:any)=><article className="card" key={p.title}><h3>{p.title}</h3><p>{p.description}</p></article>)}</div></Section>
  {s.futureCapabilities && <Section eyebrow="Próximo ciclo" title={s.futureCapabilities.title}><div className="grid3">{s.futureCapabilities.items.map((item:any)=><article className="card" key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></Section>}
  <Section eyebrow="Métricas" title="Como saberemos se a transformação está acontecendo"><div className="grid3">{s.transformationMetrics.map((m:any)=><article className="metric" key={m.id}><strong>{m.label}</strong><span>{m.intent}</span></article>)}</div></Section>
</> }
