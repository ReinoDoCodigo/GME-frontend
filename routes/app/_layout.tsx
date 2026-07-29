import Navbar from "@/islands/Navbar.tsx";
import { define } from "@/utils.ts";
import Sidebar from "@/islands/Sidebar.tsx";

export default define.page(function App({ Component }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GME-front</title>
      </head>
      <body>
          <header>
            <Navbar/>
          </header>
       <div class="app-body">
            <Sidebar/>
          <main class="app-main">
            <Component/>
          </main>
       </div>
      </body>
    </html>
  );
});
