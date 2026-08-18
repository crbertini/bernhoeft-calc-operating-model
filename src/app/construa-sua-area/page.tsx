import { Section } from "@/components/Section";
import { getRoleTemplate } from "@/lib/content/load";

const areaExample=`# content/areas/crescimento.yaml
id: crescimento
name: "Crescimento"
mission: >
  Construir crescimento previsível...
capabilities:
  - name: "Marketing e geração de demanda"
  - name: "Vendas Enterprise"
  - name: "Revenue Operations"
  - name: "Gestão de parceiros"`;

const roleExample=`# novo arquivo: content/roles/revenue-operations.yaml
slug: revenue-operations
title: "Revenue Operations"
nature: ["receita", "dados", "processo comercial"]
mission: >
  Aumentar previsibilidade e qualidade da máquina de receita.
responsibilities:
  - "CRM e qualidade dos dados"
  - "Pipeline e forecast"
  - "Conversão e analytics"
authority:
  - "Definir padrões de CRM e processo"
kpis:
  - "Acurácia do forecast"
  - "Conversão por etapa"
boundaries:
  - "Não substitui o Head de Crescimento"`;

export default function Page(){
  const t=getRoleTemplate();
  return <>
    <section className="pageHero"><div className="container"><div className="eyebrow">Construção pelos líderes</div><h1>Área → Capabilities → Papéis → Pessoas</h1><p>Você não recebe uma organização pronta. Recebe missão, accountabilities e um método para desenhar sua área — com autonomia, revisão e histórico.</p></div></section>
    <Section title="O método em quatro passos"><div className="steps detailedSteps">{[["1","Missão e accountabilities","Revise o resultado pelo qual sua macroárea existe e responde. Se algo estiver pouco claro, discuta antes de desenhar caixas."],["2","Capabilities","Liste tudo que precisa saber fazer para cumprir a missão. Não pense ainda em cargos nem em pessoas."],["3","Papéis","Agrupe capabilities em Role Charts com missão, resultados, responsabilidades, autoridade, KPIs, interfaces e limites."],["4","Pessoas","Só então atribua pessoas. Uma pessoa pode exercer vários papéis e um papel pode permanecer sem ocupante."]].map(x=><div className="step" key={x[0]}><span>{x[0]}</span><div><strong>{x[1]}</strong><p>{x[2]}</p></div></div>)}</div></Section>
    <Section eyebrow="Exemplo concreto" title="Como Crescimento poderia começar"><div className="exampleCompare"><div className="examplePanel"><div className="codeLabel">1. Primeiro: capabilities da área</div><pre className="yamlPreview">{areaExample}</pre><p>Esse arquivo alimenta a página <strong>Operating Model</strong>: missão, accountabilities e capabilities de Crescimento.</p></div><div className="examplePanel"><div className="codeLabel">2. Depois: um Role Chart</div><pre className="yamlPreview">{roleExample}</pre><p>Esse arquivo passa a aparecer em <strong>Papéis</strong> e pode ser associado a uma pessoa quando fizer sentido.</p></div></div></Section>
    <Section eyebrow="Arquivos" title="O que editar e onde aparece"><div className="fileMap"><div><code>content/areas/&lt;sua-area&gt;.yaml</code><span>Edita missão, accountabilities e capabilities.</span><strong>Aparece em Operating Model.</strong></div><div><code>content/roles/&lt;papel&gt;.yaml</code><span>Cria ou evolui um Role Chart.</span><strong>Aparece em Papéis / Role Chart.</strong></div><div><code>content/role-template.yaml</code><span>Modelo-base para copiar ao criar um novo papel.</span><strong>Não altere o código do site.</strong></div></div></Section>
    <Section eyebrow="Workflow" title="Edite sem mexer no site oficial"><div className="workflowTrack"><div><span>1</span><strong>Crie/abra sua branch</strong><small>Não edite a main.</small></div><em>→</em><div><span>2</span><strong>Edite o YAML</strong><small>GitHub salva histórico.</small></div><em>→</em><div><span>3</span><strong>Commit</strong><small>A Vercel cria um Preview.</small></div><em>→</em><div><span>4</span><strong>Revise no site</strong><small>Você + Lucas/César provocam e refinam.</small></div><em>→</em><div><span>5</span><strong>Merge</strong><small>Só então vira oficial.</small></div></div><div className="branchNote"><strong>Por que branch?</strong><p>Você pode experimentar o desenho da sua área, ver a página funcionando e receber feedback sem alterar a versão oficial que todos consultam.</p></div></Section>
    <Section eyebrow="Princípios" title="Regras do sistema"><div className="grid3"><div className="card"><h3>Pessoa ≠ papel</h3><p>Uma pessoa pode exercer mais de um papel.</p></div><div className="card"><h3>Papel pode existir sem pessoa</h3><p>Desenhar uma necessidade não obriga contratar imediatamente.</p></div><div className="card"><h3>Accountability exige autoridade</h3><p>O Role Chart deve deixar explícito o que o dono do papel pode decidir.</p></div></div></Section>
    <Section eyebrow="Template" title="Estrutura mínima de um Role Chart"><pre className="yamlPreview">{Object.entries(t).map(([k,v])=>`${k}: ${Array.isArray(v)?"[...]":typeof v==="object"?"{...}":String(v??"")}`).join("\n")}</pre><p className="sectionIntro">O arquivo-base completo está em <code>content/role-template.yaml</code>. Copie, renomeie o slug e preencha os campos. Comece simples; a qualidade vem das revisões.</p></Section>
  </>
}
