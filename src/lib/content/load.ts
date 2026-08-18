import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { AreaSchema, DecisionRightsSchema, RoleSchema, type Area, type Role } from "./schema";

const CONTENT_ROOT = path.join(process.cwd(), "content");

type Parser<T> = { parse: (value: unknown) => T };

function readYaml<T>(relativePath: string, parser?: Parser<T>): T {
  const fullPath = path.join(CONTENT_ROOT, relativePath);
  const raw = fs.readFileSync(fullPath, "utf8");
  const data = YAML.parse(raw);
  if (!parser) return data as T;
  try {
    return parser.parse(data);
  } catch (error) {
    console.error(`Invalid content file: ${relativePath}`);
    throw error;
  }
}

function yamlFiles(relativeDir: string): string[] {
  const fullDir = path.join(CONTENT_ROOT, relativeDir);
  return fs.readdirSync(fullDir).filter((name) => /\.ya?ml$/.test(name)).sort();
}

export function getSite() { return readYaml<any>("site.yaml"); }
export function getStrategy() { return readYaml<any>("strategy.yaml"); }
export function getGovernance() { return readYaml<any>("governance.yaml"); }
export function getRoleTemplate() { return readYaml<any>("role-template.yaml"); }
export function getAllAreas(): Area[] { return yamlFiles("areas").map((name) => readYaml(`areas/${name}`, AreaSchema)); }
export function getAllRoles(): Role[] { return yamlFiles("roles").map((name) => readYaml(`roles/${name}`, RoleSchema)); }
export function getRole(slug: string): Role | undefined { return getAllRoles().find((role) => role.slug === slug); }
export function getDecisionRights() { return readYaml("decision-rights.yaml", DecisionRightsSchema); }

export function validateReferences() {
  const roles = getAllRoles();
  const areas = getAllAreas();
  const roleSlugs = new Set(roles.map((r) => r.slug));
  for (const area of areas) {
    if (!roleSlugs.has(area.leaderRole)) throw new Error(`Area ${area.id} references missing leaderRole: ${area.leaderRole}`);
    if (area.reportsTo && !roleSlugs.has(area.reportsTo)) throw new Error(`Area ${area.id} references missing reportsTo role: ${area.reportsTo}`);
  }
  for (const role of roles) {
    if (role.reportsTo && !roleSlugs.has(role.reportsTo)) {
      const looksLikeSlug = /^[a-z0-9-]+$/.test(role.reportsTo);
      if (looksLikeSlug) throw new Error(`Role ${role.slug} references missing reportsTo role: ${role.reportsTo}`);
    }
  }
  return true;
}
