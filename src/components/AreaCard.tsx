import Link from "next/link";
import type { Area } from "@/lib/content/schema";
export default function AreaCard({area}:{area:Area}) { return <article className="card areaCard">
  <div className="cardKicker">Macroárea</div><h3>{area.name}</h3><p>{area.mission}</p>
  <div className="miniLabel">Accountabilities</div><ul>{area.accountabilities.slice(0,4).map((x,i)=><li key={i}>{x}</li>)}</ul>
  <div className="miniLabel">Capabilities</div><div className="chips">{area.capabilities.map((c)=><span key={c.name}>{c.name}</span>)}</div>
  <Link className="textLink" href={`/papeis/${area.leaderRole}`}>Ver Role Chart do líder →</Link>
</article> }
