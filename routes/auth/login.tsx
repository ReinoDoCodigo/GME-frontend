import { define } from "@/utils.ts";

export default define.page(function login() {
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
      <h1 class="brand-title">Um único painel para <em>gerenciar, monitorar<br></br>e decidir</em> com dados confiáveis.</h1>
      <p class="brand-desc">
        Entre com sua conta institucional para acompanhar processos, registros e indicadores
        em tempo real, com o mesmo nível de controle em qualquer unidade.
      </p>

      <div class="status-strip">
        <div class="status-row"><span><span class="dot"></span>Ambiente</span><b>Produção · região BR-S1</b></div>
        <div class="status-row"><span>Disponibilidade</span><b>99,97% nos últimos 30 dias</b></div>
        <div class="status-row"><span>Autenticação</span><b>Criptografia de ponta a ponta</b></div>
      </div>
    </div>

    <div class="brand-bottom">
      <span>© 2026 SISTEMA GME</span>
      <span>v3.2.0 · build 0728</span>
    </div>
    </aside>

    <main class="panel">
         <div class="card">

      <div class="card-head" id="cardHead">
        <h1>Bem-vindo de volta</h1>
        <p>Acesse sua conta para continuar no sistema GME.</p>
      </div>

      <div class="toggle" id="toggle" data-mode="login">
        <div class="toggle-slider"></div>
        <button type="button" class="active" data-target="login">Entrar</button>
        <button type="button" data-target="cadastro">Criar conta</button>
      </div>

      <form id="formLogin">
        <div class="field">
          <label for="loginEmail">E-mail institucional</label>
          <div class="input-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z" opacity="0"/><path d="M3 6l9 7 9-7"/><path d="M3 6h18v12H3z"/></svg>
            <input type="email" id="loginEmail" placeholder="nome@orgao.gov.br" required/>
          </div>
        </div>

        <div class="field">
          <label for="loginSenha">Senha</label>
          <div class="input-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/></svg>
            <input type="password" id="loginSenha" placeholder="••••••••" required/>
            <button type="button" class="toggle-eye" data-forinput="loginSenha">MOSTRAR</button>
          </div>
        </div>

        <div class="aux-row">
          <a href="#" class="link">Esqueci minha senha</a>
        </div>

        <button type="submit" class="btn-primary">
          Entrar no sistema
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
        </button>
      </form>

      <form id="formCadastro" style="display:none;">
        <div class="row-2">
          <div class="field">
            <label for="nome">Nome</label>
            <div class="input-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c1.5-4 5-6 7-6s5.5 2 7 6"/></svg>
              <input type="text" id="nome" placeholder="Seu nome" required/>
            </div>
          </div>
          <div class="field">
            <label for="sobrenome">Sobrenome</label>
            <div class="input-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c1.5-4 5-6 7-6s5.5 2 7 6"/></svg>
              <input type="text" id="sobrenome" placeholder="Seu sobrenome" required/>
            </div>
          </div>
        </div>

        <div class="field">
          <label for="cadEmail">E-mail institucional</label>
          <div class="input-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l9 7 9-7"/><path d="M3 6h18v12H3z"/></svg>
            <input type="email" id="cadEmail" placeholder="nome@orgao.gov.br" required />
          </div>
        </div>

        <div class="field">
          <label for="cadSenha">Criar senha</label>
          <div class="input-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/></svg>
            <input type="password" id="cadSenha" placeholder="Mínimo 8 caracteres" required />
            <button type="button" class="toggle-eye" data-forinput="cadSenha">MOSTRAR</button>
          </div>
          <div class="pw-meter"><i></i></div>
          <span class="pw-hint">Força da senha: média</span>
        </div>

        <label class="check" style="margin-top:2px;">
          <input type="checkbox" required/>
          Li e aceito os <a href="#" class="link">termos de uso</a> e a <a href="#" class="link">política de privacidade</a>
        </label>

        <button type="submit" class="btn-primary">
          Criar minha conta
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
        </button>
      </form>

      <div class="divider">ou continue com</div>
      <div class="sso">
        <button type="button">
          <svg width="15" height="15" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.63h6.47a5.53 5.53 0 01-2.4 3.63v3h3.87c2.27-2.09 3.58-5.17 3.58-8.81z"/><path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.92l-3.87-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.11A12 12 0 0012 24z"/><path fill="#FBBC05" d="M5.27 14.27a7.2 7.2 0 010-4.54V6.62H1.27a12 12 0 000 10.76z"/><path fill="#EA4335" d="M12 4.77c1.76 0 3.34.6 4.58 1.79l3.43-3.43C17.95 1.19 15.24 0 12 0A12 12 0 001.27 6.62l4 3.11C6.22 6.88 8.87 4.77 12 4.77z"/></svg>
          Google
        </button>
        <button type="button">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--navy-900)"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM13.16 7.24c-.15-2.23 1.66-4.07 3.74-4.24.29 2.58-2.34 4.5-3.74 4.24z"/></svg>
          Apple
        </button>
      </div>

      <p class="foot-note" id="footNote">
        Ainda não tem conta? <a href="#" class="link" id="footLink">Criar conta gratuita</a>
      </p>

    </div>
    </main>
        </div>
    );
})
