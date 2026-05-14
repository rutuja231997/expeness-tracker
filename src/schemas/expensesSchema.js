import { z } from "zod";

export const expenseSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),

  category: z.string().min(1, "Please select category"),

  amount: z.coerce
    .number()
    .min(1, "Amount is required")
    .refine((val) => Number(val) > 0, {
      message: "Amount must be greater than 0",
    }),

  date: z.string().min(1, "Date is required"),
});
