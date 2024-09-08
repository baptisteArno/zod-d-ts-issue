import { schema } from "package-two";

const yos = schema.parse([
  { id: "1", name: "yo" },
  { id: "2", name: "yo" },
]);

yos.map((yo) => yo.id);
