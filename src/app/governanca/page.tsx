import { Section } from "@/components/Section";
import { getGovernance } from "@/lib/content/load";

export default function Page(){
  const g=getGovernance().governance;
  return <>
    <section className="pageHero"><div className="container"><div className="eyebrow">Governança</div><h1>{g.title}</h1><p>{g.principles[0]}</p></div></section>
    <Section eyebrow="Regra de ouro" title="Orientação não transfere accountability"><div className="authorityFlow"><div className="authorityNode"><small>CONSELHO</small><strong>Orienta e tensiona</strong></div><div className="authorityNode"><small>COMITÊ</small><strong>Aprofunda e recomenda</strong></div><div className="authorityNode executive"><small>CEO</small><strong>Dirige e prioriza</strong></div><div className="authorityNode executive"><small>HEAD</small><strong>Decide e responde pelo resultado</strong></div></div><div className="warningBanner"><strong>Não existe “fiz porque Luiz, Lucas, César, Murilo ou o Comitê mandou”.</strong><span>O Head pode receber orientação e ampliar suas alternativas, mas a decisão dentro da sua alçada continua sendo sua e sua prestação de contas é ao CEO.</span></div></Section>
    <Section title="Fóruns com funções diferentes"><div className="grid2">{g.bodies.map((b:any)=><article className={`card governanceCard ${b.id}`} key={b.id}><div className="cardKicker">{b.question||"Governança"}</div><h3>{b.name}</h3><p>{b.purpose}</p>{b.composition && <><div className="miniLabel">Composição</div><ul>{Object.values(b.composition).flat().map((x:any)=><li key={x}>{x}</li>)}</ul></>}{b.does && <><div className="miniLabel">Faz</div><ul>{b.does.map((x:string)=><li key={x}>{x}</li>)}</ul></>}{b.doesNot && <><div className="miniLabel danger">Não faz</div><ul>{b.doesNot.map((x:string)=><li key={x}>{x}</li>)}</ul></>}{b.mantra && <blockquote>{b.mantra}</blockquote>}</article>)}</div></Section>
  </>
}
