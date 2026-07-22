import { useState } from "preact/hooks";
import type { JSX } from "preact";

/* -------------------------------------------------------------------------
 * Ícones inline (svg)
 * ---------------------------------------------------------------------- */
const icons = {
  home: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-4v-6H9v6H5a1 1 0 01-1-1v-9z" />
    </svg>
  ),
  users: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="9" cy="8" r="3" /><path d="M2 21c0-3.3 3.1-6 7-6s7 2.7 7 6" />
      <circle cx="17" cy="8" r="2.5" /><path d="M22 21c0-2.6-2-4.8-4.7-5.6" />
    </svg>
  ),
  settings: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-1.8-.3 1.6 1.6 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.6 1.6 0 00-1-1.5 1.6 1.6 0 00-1.8.3l-.1.1a2 2 0 112.8-2.8l.1-.1a1.6 1.6 0 00.3-1.8 1.6 1.6 0 00-1.5-1H3a2 2 0 110-4h.1a1.6 1.6 0 001.5-1 1.6 1.6 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.6 1.6 0 001.8.3H9a1.6 1.6 0 001-1.5V3a2 2 0 114 0v.1a1.6 1.6 0 001 1.5 1.6 1.6 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 00-.3 1.8V9a1.6 1.6 0 001.5 1h.1a2 2 0 110 4h-.1a1.6 1.6 0 00-1.5 1z" />
    </svg>
  ),
  building: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="4" y="3" width="10" height="18" /><rect x="14" y="8" width="6" height="13" />
      <path d="M7 7h1M7 11h1M7 15h1M11 7h1M11 11h1M11 15h1" />
    </svg>
  ),
  chart: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 20V10M12 20V4M20 20v-7" />
    </svg>
  ),
  logout: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
    </svg>
  ),
  chevron: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M15 6l-6 6 6 6" />
    </svg>
  ),
  menu: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  close: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
};

interface MenuItem {
  key: string;
  label: string;
  icon: JSX.Element;
  href: string;
}

interface MenuGroup {
  label: string;
  items: MenuItem[];
}

const groups: MenuGroup[] = [
  {
    label: "Geral",
    items: [
      { key: "dashboard", label: "Dashboard", icon: icons.home, href: "/" },
      { key: "usuarios", label: "Usuários", icon: icons.users, href: "/usuarios" },
      { key: "relatorios", label: "Relatórios", icon: icons.chart, href: "/relatorios" },
    ],
  },
  {
    label: "Administração",
    items: [
      { key: "departamentos", label: "Departamentos", icon: icons.building, href: "/departamentos" },
      { key: "config", label: "Configurações", icon: icons.settings, href: "/config" },
    ],
  },
];

export interface SidebarProps {
  activeKey?: string;
}

export default function Sidebar({ activeKey = "dashboard" }: SidebarProps) {
  const [colapsado, setColapsado] = useState(false);
  const [mobileAberto, setMobileAberto] = useState(false);
  const largura = colapsado ? "4rem" : "15rem";

  return (
    <>
      {/* ===================== DESKTOP: coluna fixa ===================== */}
      <aside
        class="is-hidden-touch"
        style={{
          width: largura,
          minHeight: "100vh",
          backgroundColor: "#0A2D57",
          color: "#fff",
          transition: "width 0.2s ease",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Cabeçalho: logo + botão de colapsar */}
        <div
          class="is-flex is-align-items-center is-justify-content-space-between px-3 py-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,.1)" }}
        >
          {!colapsado && (
            <span class="has-text-weight-bold" style={{ fontSize: "1.1rem", whiteSpace: "nowrap" }}>
              Painel
            </span>
          )}
          <button
            class="button is-small is-rounded"
            style={{ background: "transparent", border: "1px solid rgba(255,255,255,.3)", color: "#fff" }}
            onClick={() => setColapsado(!colapsado)}
            aria-label={colapsado ? "Expandir menu" : "Recolher menu"}
          >
            <span
              class="icon is-small"
              style={{ transform: colapsado ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
            >
              {icons.chevron}
            </span>
          </button>
        </div>

        {/* Menu (Bulma) */}
        <div class="menu px-2 py-3" style={{ flex: 1, overflowY: "auto" }}>
          {groups.map((grupo) => (
            <>
              {!colapsado && (
                <p class="menu-label" style={{ color: "rgba(255,255,255,.5)" }}>
                  {grupo.label}
                </p>
              )}
              <ul class="menu-list">
                {grupo.items.map((item) => {
                  const ativo = item.key === activeKey;
                  return (
                    <li>
                      <a
                        href={item.href}
                        class={ativo ? "is-active" : ""}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          color: ativo ? "#fff" : "rgba(255,255,255,.75)",
                          backgroundColor: ativo ? "rgba(255,255,255,.12)" : "transparent",
                          whiteSpace: "nowrap",
                        }}
                        title={colapsado ? item.label : undefined}
                      >
                        <span class="icon is-small">{item.icon}</span>
                        {!colapsado && <span>{item.label}</span>}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </>
          ))}
        </div>

        {/* Rodapé: sair */}
        <div class="px-2 py-3" style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}>
          <a
            href="/logout"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              color: "rgba(255,255,255,.75)",
              padding: "0.5rem 0.75rem",
              whiteSpace: "nowrap",
            }}
            title={colapsado ? "Sair" : undefined}
          >
            <span class="icon is-small">{icons.logout}</span>
            {!colapsado && <span>Sair</span>}
          </a>
        </div>
      </aside>

      {/* ===================== MOBILE/TABLET: barra no topo ===================== */}
      <nav class="is-hidden-desktop" style={{ backgroundColor: "#0A2D57", color: "#fff" }}>
        <div class="is-flex is-align-items-center is-justify-content-space-between px-3 py-3">
          <span class="has-text-weight-bold" style={{ fontSize: "1.1rem" }}>Painel</span>
          <button
            class="button is-small is-rounded"
            style={{ background: "transparent", border: "1px solid rgba(255,255,255,.3)", color: "#fff" }}
            onClick={() => setMobileAberto(!mobileAberto)}
            aria-label={mobileAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileAberto}
          >
            <span class="icon is-small">{mobileAberto ? icons.close : icons.menu}</span>
          </button>
        </div>

        {mobileAberto && (
          <div class="menu px-3 pb-3" style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}>
            {groups.map((grupo) => (
              <>
                <p class="menu-label" style={{ color: "rgba(255,255,255,.5)", marginTop: "0.75rem" }}>
                  {grupo.label}
                </p>
                <ul class="menu-list">
                  {grupo.items.map((item) => {
                    const ativo = item.key === activeKey;
                    return (
                      <li>
                        <a
                          href={item.href}
                          class={ativo ? "is-active" : ""}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            color: ativo ? "#fff" : "rgba(255,255,255,.75)",
                            backgroundColor: ativo ? "rgba(255,255,255,.12)" : "transparent",
                          }}
                        >
                          <span class="icon is-small">{item.icon}</span>
                          <span>{item.label}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </>
            ))}
            <a
              href="/logout"
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,.75)", padding: "0.5rem 0", marginTop: "0.5rem" }}
            >
              <span class="icon is-small">{icons.logout}</span>
              <span>Sair</span>
            </a>
          </div>
        )}
      </nav>
    </>
  );
}