import { schema } from "package-two";
import type { schemaType } from "package-two";

const yos: schemaType[] = schema.parse([
  { id: "1", name: "yo" },
  { id: "2", name: "yo" },
]);

yos.map((yo) => yo.id);
