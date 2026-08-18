import { z } from "zod";

export const CapabilitySchema = z.object({
  name: z.string().min(1),
  required: z.boolean().optional(),
  note: z.string().optional(),
  strategicHorizon: z.string().optional(),
});

export const AreaSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  leaderRole: z.string().min(1),
  reportsTo: z.string().min(1),
  mission: z.string().min(1),
  accountabilities: z.array(z.string()).min(1),
  capabilities: z.array(CapabilitySchema).default([]),
  exampleRoles: z.array(z.string()).optional(),
  customerModel: z.record(z.string(), z.string()).optional(),
  principle: z.string().optional(),
});

export const RoleSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  shortTitle: z.string().optional(),
  currentOwner: z.string().nullable().optional(),
  status: z.string().optional(),
  reportsTo: z.string().nullable().optional(),
  hierarchicalAuthority: z.boolean().optional(),
  orgChartPosition: z.string().optional(),
  relationshipStyle: z.string().optional(),
  nature: z.array(z.string()).min(1),
  mission: z.string().min(1),
  missionHighlight: z.string().optional(),
  expectedOutcomes: z.array(z.string()).default([]),
  responsibilities: z.array(z.string()).default([]),
  authority: z.array(z.string()).default([]),
  kpis: z.array(z.string()).optional(),
  interfaces: z.array(z.string()).optional(),
  rituals: z.array(z.string()).optional(),
  ritualSuggestion: z.array(z.string()).optional(),
  boundaries: z.array(z.string()).default([]),
  priorities12Months: z.array(z.string()).optional(),
  successDefinition: z.string().optional(),
  squadName: z.string().nullable().optional(),
  note: z.string().optional(),
});

export const InnovationFlowSchema = z.object({
  title: z.string(),
  description: z.string(),
  steps: z.array(z.string()).default([]),
  principles: z.array(z.string()).default([]),
});

export const DecisionItemSchema = z.object({
  topic: z.string(),
  accountable: z.string(),
  participants: z.array(z.string()).default([]),
  recommends: z.array(z.string()).default([]),
  decides: z.string(),
  committee: z.string(),
});

export const DecisionRightsSchema = z.object({
  title: z.string(),
  description: z.string(),
  innovationFlow: InnovationFlowSchema.optional(),
  items: z.array(DecisionItemSchema),
});

export type Area = z.infer<typeof AreaSchema>;
export type Role = z.infer<typeof RoleSchema>;
export type DecisionRights = z.infer<typeof DecisionRightsSchema>;
