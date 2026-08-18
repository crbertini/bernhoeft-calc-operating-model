import { validateReferences, getAllAreas, getAllRoles, getDecisionRights } from "../src/lib/content/load";
validateReferences();
getDecisionRights();
console.log(`OK: ${getAllAreas().length} áreas e ${getAllRoles().length} papéis validados.`);
