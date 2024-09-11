import { z } from "zod";

export const schema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
  }),
);
