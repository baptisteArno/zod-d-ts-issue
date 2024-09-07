import { schema } from "package-two";

const yos = [
  { id: "1", name: "yo" },
  { id: "2", name: "yo" },
].map((item) => schema.parse(item));

yos.map((yo) => yo.id);
