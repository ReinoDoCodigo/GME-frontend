import { define } from "../utils.ts";
export default define.page(function Home(ctx) {

  return (
    <div class="px-4 py-8 mx-auto min-h-screen">
        <section>
          <nav class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Computadores</p>
                <p class="title">10</p>
              </div>
            </div>
             <div class="level-item has-text-centered">
              <div>
                <p class="heading">Impressoras</p>
                <p class="title">10</p>
              </div>
            </div>
             <div class="level-item has-text-centered">
              <div>
                <p class="heading">Equipamentos de rede</p>
                <p class="title">10</p>
              </div>
            </div>
             <div class="level-item has-text-centered">
              <div>
                <p class="heading">NoBreaks</p>
                <p class="title">10</p>
              </div>
            </div>
          </nav>
        </section>
    </div>
  );
});
