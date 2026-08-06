import { define } from "@/utils.ts";
import { Context } from "fresh";
export const handlers = define.handlers({
    GET(ctx) {
        return ctx.redirect("/auth/login");
    }
})