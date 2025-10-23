import z from "zod";

export const createUserSchema = z.object({
    name: z.string(),
    email: z.email(),
    phone: z.string().min(11).max(11),
    address: z.string()
})

export type createUserSchemaInput = z.infer<typeof createUserSchema>