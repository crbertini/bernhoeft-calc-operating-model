# Bernhoeft CALC — Operating Model

Site executivo orientado por conteúdo YAML para documentar transformação, Operating Model, liderança, governança, direitos de decisão e Role Charts da Bernhoeft CALC.

## Arquitetura de publicação

```text
Google Drive (espelho editável)
          ↕ sync controlado/manual
GitHub (fonte canônica)
          ↓ automático
Vercel (site publicado)
```

### Regra principal

**GitHub é a fonte oficial do site.**

Quando o repositório estiver importado na Vercel, todo push em branch gera Preview Deployment e todo push/merge na branch de produção (`main`) atualiza Production automaticamente.

O Google Drive funciona como espelho editável e backup operacional. Evite armazenar a pasta `.git` dentro de uma pasta sincronizada pelo Google Drive Desktop.

## Conteúdo editável

Todo conteúdo de negócio vive em `content/`:

- `content/strategy.yaml` — tese e transformação
- `content/site.yaml` — navegação e metadados
- `content/areas/*.yaml` — macroáreas e capabilities
- `content/roles/*.yaml` — Role Charts institucionais
- `content/governance.yaml` — Conselho, Comitê e Gestão Executiva
- `content/decision-rights.yaml` — matriz de direitos de decisão
- `content/role-template.yaml` — template para novos papéis

A camada visual fica em `src/` e não precisa ser alterada para mudanças normais de conteúdo.

## Fluxos de edição

### Editou no GitHub

1. Altere o YAML.
2. Commit/push.
3. A Vercel publica automaticamente.
4. Quando quiser manter o Drive alinhado, copie/sincronize a versão aprovada para a pasta espelho no Drive.

### Editou primeiro no Google Drive

1. Edite o YAML no Drive.
2. Leve a alteração para o mesmo caminho em `content/` no clone/repositório GitHub.
3. Faça commit/push.
4. A Vercel publica a nova versão.

## Por que não fazer sincronização bidirecional automática cega

Dois lados editáveis criam risco de conflito, loop e sobrescrita silenciosa. A evolução recomendada é criar posteriormente um fluxo explícito de **Promover alterações do Drive para GitHub**, que gere commit ou pull request e preserve histórico e revisão.

## Rodar localmente

```bash
npm install
npm run dev
```

## Validar e construir

```bash
npm run build
```

O build valida referências entre macroáreas e papéis. YAML inválido ou referência inexistente deve interromper a publicação.

## Princípios do modelo organizacional

- Macroestrutura clara, desenho local flexível.
- Capability não é cargo.
- Pessoa não é papel.
- Accountability exige autoridade.
- Heads respondem hierarquicamente ao CEO.
- Lucas atua transversalmente como mentor e acelerador da evolução dos líderes, sem linha hierárquica sobre eles.
