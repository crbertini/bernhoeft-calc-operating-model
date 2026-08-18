import Link from "next/link";
import type { Area } from "@/lib/content/schema";
export default function OrgModel({areas}:{areas:Area[]}) { return <div className="org">
  <div className="orgNode governanceNode">Conselho Estratégico</div><div className="orgLine"/>
  <Link href="/papeis/ceo" className="orgNode ceoNode"><strong>CEO — Paulo</strong><span>Direção, transformação e accountability executiva</span></Link><div className="orgLine"/>
  <div className="orgAreas">{areas.map(a=><Link href={`/papeis/${a.leaderRole}`} key={a.id} className="orgNode areaNode"><strong>{a.name}</strong><span>Head responde ao CEO</span></Link>)}</div>
  <div className="mentorRail"><span className="dots">············································</span><Link href="/papeis/lucas" className="orgNode mentorNode"><strong>Lucas — Sócio Especialista & Mentor</strong><span>Dotted line • apoio transversal • sem autoridade hierárquica</span></Link><span className="dots">············································</span></div>
</div> }
