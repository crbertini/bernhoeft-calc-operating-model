import { getDecisionRights } from "@/lib/content/load";

export default function Page(){
  const d=getDecisionRights(); const flow=d.innovationFlow;
  return <>
    <section className="pageHero"><div className="container"><div className="eyebrow">Direitos de decisão</div><h1>{d.title}</h1><p>{d.description}</p></div></section>
    {flow && <section className="section"><div className="container"><div className="eyebrow">Jornada crítica</div><h2>{flow.title}</h2><p className="sectionIntro">{flow.description}</p><div className="innovationFlow">{flow.steps.map((x:string,i:number)=><div className="innovationStep" key={x}><span>{i+1}</span><strong>{x}</strong>{i<flow.steps.length-1&&<em>→</em>}</div>)}</div><div className="grid3">{flow.principles.map((x:string)=><div className="card compactCard" key={x}><strong>{x}</strong></div>)}</div></div></section>}
    <section className="section alt"><div className="container"><h2>Quem é accountable, quem participa e quem decide</h2><div className="tableWrap"><table><thead><tr><th>Tema</th><th>Accountable</th><th>Participam</th><th>Recomendam</th><th>Decide</th><th>Comitê</th></tr></thead><tbody>{d.items.map((x:any)=><tr key={x.topic}><td><strong>{x.topic}</strong></td><td>{x.accountable}</td><td>{x.participants.join(", ")}</td><td>{x.recommends.join(", ")}</td><td>{x.decides}</td><td>{x.committee}</td></tr>)}</tbody></table></div></div></section>
  </>
}
