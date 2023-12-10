import { AppRouter } from "@/trpc";
import { createTRPCNext } from "@trpc/next";
import { CreateTRPCReact, createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>({});
