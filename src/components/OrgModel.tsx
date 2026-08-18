import Link from "next/link";
import type { Area } from "@/lib/content/schema";

export default function OrgModel({areas}:{areas:Area[]}) {
  return <div className="executiveOrg">
    <div className="systemLabel">Sistema Executivo</div>
    <Link
      href="/papeis/ceo"
      className="orgNode ceoNode"
      style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}
    >
      <strong>CEO — Paulo</strong>
      <span>Direção, prioridades e accountability executiva</span>
    </Link>
    <div className="orgLine"/>
    <div className="orgAreas">{areas.map(a=><Link href={`/papeis/${a.leaderRole}`} key={a.id} className={`orgNode areaNode ${a.id==="operacoes"?"currentAccumulation":""}`}><strong>{a.name}</strong><span>{a.id==="operacoes"?"Paulo acumula esta liderança":"Head responde ao CEO"}</span></Link>)}</div>
    <div className="mentorRail"><span className="dots">············································</span><Link href="/papeis/lucas" className="orgNode mentorNode"><strong>Lucas — Mentor transversal</strong><span>Dotted line • desenvolve capacidade • não cria hierarquia paralela</span></Link><span className="dots">············································</span></div>
  </div>
}
