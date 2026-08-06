import { define } from "@/utils.ts";
import StatCard from "@/islands/StatCard.tsx";
export default define.page(function Home(ctx) {

  return (
    <div class="px-4 py-8 mx-auto min-h-screen">
        <section class="container">
          <p class="text-2xl font-bold text-slate-800">Dashboard</p>
          <StatCard titulo="Computadores" valor={100} />
        
        </section>
    </div>
  );
});
