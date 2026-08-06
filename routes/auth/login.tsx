import { define } from "@/utils.ts";
import Auth from "@/islands/Auth.tsx";

export default define.page(function login() {
    return (
          <Auth/>
    );
})
