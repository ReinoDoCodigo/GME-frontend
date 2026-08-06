import { define } from "@/utils.ts";
import Sidebar from "@/islands/Sidebar.tsx";

export default define.page(function App({ Component, url }) {
  const pathname = url.pathname;
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GME-front</title>
      </head>
      <body>
       <div class="app-body">
          <aside>
            <Sidebar actualPage={pathname}/>
          </aside>
          <main class="app-main">
            <Component/>
          </main>
       </div>
      </body>
    </html>
  );
});
