import { Section } from "@/components/Section";
import AreaCard from "@/components/AreaCard";
import OrgModel from "@/components/OrgModel";
import { getAllAreas } from "@/lib/content/load";
export default function Page(){ const areas=getAllAreas(); return <>
<section className="pageHero"><div className="container"><div className="eyebrow">Operating Model</div><h1>Macroestrutura clara. Desenho local flexível.</h1><p>A empresa define as cinco macroáreas, suas missões e accountabilities. Cada Head desenha os papéis necessários para cumprir sua missão.</p></div></section>
<Section title="Estrutura executiva"><OrgModel areas={areas}/></Section>
<Section eyebrow="Macroáreas" title="Cinco donos claros de capacidades diferentes"><div className="grid2">{areas.map(a=><AreaCard area={a} key={a.id}/>)}</div></Section>
<Section eyebrow="Princípio" title="Capacidade não é cargo"><div className="callout"><strong>Não estamos desenhando uma árvore definitiva de posições.</strong><p>Capabilities como RevOps, Product Operations ou Produtos de Dados podem ser necessárias sem existir imediatamente como cargos dedicados. O Head decide como combiná-las em papéis conforme escala e complexidade.</p></div></Section>
</> }
