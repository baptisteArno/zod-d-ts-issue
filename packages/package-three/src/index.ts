import { schema } from "package-two";

const yos = schema.parse([
  { id: "1", name: "yo" },
  { id: "2", name: "yo" },
]);

yos.forEach((yo) => console.log(yo.id));
