import z from "zod";

export const userIdSchema = z.object({
  id: z.coerce.number(),
});

export const createUserSchema = z.object({
  name: z.string(),
  email: z.email(),
  phone: z.string().min(11).max(11),
  address: z.string(),
});

export type createUserSchemaInput = z.infer<typeof createUserSchema>;

export const updateUserSchema = z.object({
  name: z.string().optional(),
  email: z.email().optional(),
  phone: z.string().min(11).max(11).optional(),
  address: z.string().optional(),
});

export type updateUserSchemaInput = z.infer<typeof updateUserSchema>