import { build, version } from "@/lib/assets.ts";
import { useState } from "preact/hooks";
import { API_URL } from "@/lib/assets.ts";

type Mode = "login" | "cadastro"; 

function passwordStrength(pw: string): {pct: number; label: string} {
    let score = 0;
    
    if(pw.length >= 8) {
        score++;
    }
    if(/[A-Z]/.test(pw)) { //Se conter uma letra maiscula 
        score++;
    }
    if(/[0-9]/.test(pw)) { //Se conter um número
        score++;
    }
    if(/^A-Za-z0-9/.test(pw)){
        score++;
    }

    const labels: string[] = ["fraca","média","boa","forte"];
    return {pct: (score / 4) * 100, label: labels[score] ?? "fraca"}
}

export default function Auth() {
    const [mode, setMode] = useState<Mode>("login");
    const [showLoginPw, setShowLoginPw] = useState(false);
    const [showCadPw, setShowCadPw] = useState(false);
    const [cadSenha, setCadSenha] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const strength = passwordStrength(cadSenha);

    async function handleLogin(e: Event) {
      e.preventDefault();
      setError(null);
      setSubmitting(true);
      const form = e.currentTarget as HTMLFormElement;
      const email = (form.querySelector("#loginEmail") as HTMLInputElement).value;
      const password = (form.querySelector("#loginSenha") as HTMLInputElement).value;
      try {
        const res = await fetch(`${API_URL}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        if (!res.ok) throw new Error("Credenciais inválidas");
        const data = await res.json();
        localStorage.setItem("apiKey", data.apiKey);
        globalThis.location.href = "/app/";
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao entrar");
      } finally {
        setSubmitting(false);
      }
  }
 
  async function handleCadastro(e: Event) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const form = e.currentTarget as HTMLFormElement;
    const name = (form.querySelector("#name") as HTMLInputElement).value;
    const email = (form.querySelector("#cadEmail") as HTMLInputElement).value;
    try {
      const res = await fetch(`${API_URL}/api/usuarios/criar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password: cadSenha }),
      });
      if (!res.ok) throw new Error("Não foi possível criar a conta");
      setMode("login");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao criar conta");
    } finally {
      setSubmitting(false);
    }
  }

 
    return (
        <div class="shell">
          <aside class="brand">
                  <svg class="grid-field" viewBox="0 0 600 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#33C9DE" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="#33C9DE" stop-opacity="0"/>
              </linearGradient>
            </defs>
            <g stroke="#33C9DE" stroke-opacity="0.16" stroke-width="1">
              <path d="M0 80 H600"/><path d="M0 180 H600"/><path d="M0 280 H600"/>
              <path d="M0 380 H600"/><path d="M0 480 H600"/><path d="M0 580 H600"/>
              <path d="M0 680 H600"/>
              <path d="M80 0 V800"/><path d="M180 0 V800"/><path d="M280 0 V800"/>
              <path d="M380 0 V800"/><path d="M480 0 V800"/>
            </g>
            <g>
              <circle cx="80" cy="180" r="3.5" fill="#33C9DE"/>
              <circle cx="280" cy="80" r="3.5" fill="#8FE3EE"/>
              <circle cx="480" cy="380" r="4.5" fill="#33C9DE"/>
              <circle cx="180" cy="480" r="3.5" fill="#8FE3EE"/>
              <circle cx="380" cy="580" r="3.5" fill="#33C9DE"/>
              <circle cx="80" cy="680" r="3.5" fill="#8FE3EE"/>
              <path d="M80 180 L280 80 L480 380 L180 480 L380 580" stroke="#33C9DE" stroke-opacity="0.4" stroke-width="1.2" fill="none"/>
            </g>
            <rect x="0" y="500" width="600" height="300" fill="url(#fade)"/>
          </svg>

           <div class="brand-top">
      <div class="brand-name">Sistema GME<span>Prefeitura Municipal de Araruna</span></div>
    </div>

    <div class="brand-mid">
      <div class="eyebrow">Acesso restrito</div>
      <h1 class="brand-title">Um único sistema para <em>gerenciar, monitorar<br></br>e decidir</em> com dados confiáveis.</h1>
      <p class="brand-desc">
        Entre com sua conta institucional para acompanhar processos, registros e indicadores
        em tempo real, com o mesmo nível de controle em qualquer unidade.
      </p>
    </div>
      
    <div class="brand-bottom">
      <span>© {new Date().getFullYear()} Elcio Angelo Negri</span>
      <span>{version} · build {build}</span>
    </div>
    </aside>

       <main class="panel">
        <div class="card">
          <div class="card-head">
            <h1 style="text-align: center; margin-top: 18px">Bem-vindo de volta</h1>
            <p style="text-align: center">Acesse sua conta para continuar no sistema GME.</p>
          </div>
          <div class="toggle" data-mode={mode}>
            <div class={`toggle-slider ${mode === "cadastro" ? "is-cadastro" : ""}`} />
            <button
              type="button"
              class={mode === "login" ? "active" : ""}
              onClick={() => setMode("login")}
            >
              Entrar
            </button>
            <button
              type="button"
              class={mode === "cadastro" ? "active" : ""}
              onClick={() => setMode("cadastro")}
            >
              Criar conta
            </button>
          </div>
 
          {error && <p class="error-text">{error}</p>}
 
          {mode === "login" && (
            <form id="formLogin" onSubmit={handleLogin} style="margin: 20px">
              <div class="field">
                <label for="loginEmail">E-mail institucional</label>
                <div class="input-wrap">
                  <input type="email" id="loginEmail" placeholder="nome@orgao.gov.br" required />
                </div>
              </div>
 
              <div class="field">
                <label for="loginSenha">Senha</label>
                <div class="input-wrap">
                  <input
                    type={showLoginPw ? "text" : "password"}
                    id="loginSenha"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    class="toggle-eye"
                    onClick={() => setShowLoginPw((v) => !v)}
                  >
                    {showLoginPw ? "OCULTAR" : "MOSTRAR"}
                  </button>
                </div>
              </div>
 
              <div class="aux-row">
                <a href="/recuperar-senha" class="link">Esqueci minha senha</a>
              </div>
 
              <button type="submit" class="btn-primary" disabled={submitting}>
                {submitting ? "Entrando..." : "Entrar no sistema"}
              </button>
            </form>
          )}
 
          {mode === "cadastro" && (
            <form id="formCadastro" onSubmit={handleCadastro}>
                <div class="field">
                  <label for="name">Nome</label>
                  <input type="text" id="name" placeholder="Seu nome" required />
                </div>
 
              <div class="field">
                <label for="cadEmail">E-mail institucional</label>
                <input type="email" id="cadEmail" placeholder="nome@orgao.gov.br" required />
              </div>
 
              <div class="field">
                <label for="cadSenha">Criar senha</label>
                <div class="input-wrap">
                  <input
                    type={showCadPw ? "text" : "password"}
                    id="cadSenha"
                    placeholder="Mínimo 8 caracteres"
                    required
                    value={cadSenha}
                    onInput={(e) => setCadSenha((e.target as HTMLInputElement).value)}
                  />
                  <button
                    type="button"
                    class="toggle-eye"
                    onClick={() => setShowCadPw((v) => !v)}
                  >
                    {showCadPw ? "OCULTAR" : "MOSTRAR"}
                  </button>
                </div>
                <div class="pw-meter">
                  <i style={{ width: `${strength.pct}%` }} />
                </div>
                <span class="pw-hint">Força da senha: {strength.label}</span>
              </div>
 
              <label class="check">
                <input type="checkbox" required />
                Li e aceito os <a href="/termos" class="link">termos de uso</a> e a{" "}
                <a href="/privacidade" class="link">política de privacidade</a>
              </label>
 
              <button type="submit" class="btn-primary" disabled={submitting}>
                {submitting ? "Criando..." : "Criar minha conta"}
              </button>
            </form>
          )}
 
          <p class="foot-note">
            {mode === "login" ? (
              <>Ainda não tem conta?{" "}
                <a href="#" class="link" onClick={(e) => { e.preventDefault(); setMode("cadastro"); }}>
                  Criar conta gratuita
                </a>
              </>
            ) : (
              <>Já tem conta?{" "}
                <a href="#" class="link" onClick={(e) => { e.preventDefault(); setMode("login"); }}>
                  Entrar
                </a>
              </>
            )}
          </p>
        </div>
      </main>
        </div>
    );
}
