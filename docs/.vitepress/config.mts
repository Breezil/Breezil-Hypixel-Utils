interface CodeInlineToken {
  content: string;
}
interface CodeInlineSelf {
  renderToken: (tokens: unknown[], idx: number, options: unknown) => string;
}
type CodeInlineRule = (
  tokens: CodeInlineToken[],
  idx: number,
  options: unknown,
  env: unknown,
  self: CodeInlineSelf,
) => string;
interface MarkdownLike {
  renderer: { rules: { code_inline?: CodeInlineRule } };
}

const MC_COLORS: Record<string, string> = {
  "0": "#000000",
  "1": "#0000aa",
  "2": "#00aa00",
  "3": "#00aaaa",
  "4": "#aa0000",
  "5": "#aa00aa",
  "6": "#ffaa00",
  "7": "#aaaaaa",
  "8": "#555555",
  "9": "#5555ff",
  a: "#55ff55",
  b: "#55ffff",
  c: "#ff5555",
  d: "#ff55ff",
  e: "#ffff55",
  f: "#ffffff",
};

function escapeHtml(text: string): string {
  return text.replace(/[&<>"]/g, (ch) => {
    if (ch === "&") return "&amp;";
    if (ch === "<") return "&lt;";
    if (ch === ">") return "&gt;";
    return "&quot;";
  });
}

// Render a section-sign coloured string into real Minecraft-coloured HTML.
function renderMinecraft(raw: string): string {
  let html = "";
  let color: string | null = null;
  let bold = false;
  let italic = false;
  let underline = false;
  let strike = false;
  let buffer = "";
  const flush = () => {
    if (!buffer) return;
    let style = "";
    if (color) style += "color:" + color + ";";
    const deco: string[] = [];
    if (underline) deco.push("underline");
    if (strike) deco.push("line-through");
    if (deco.length) style += "text-decoration:" + deco.join(" ") + ";";
    if (bold) style += "font-weight:600;";
    if (italic) style += "font-style:italic;";
    html += style
      ? '<span style="' + style + '">' + escapeHtml(buffer) + "</span>"
      : escapeHtml(buffer);
    buffer = "";
  };
  for (let i = 0; i < raw.length; i += 1) {
    if (raw[i] === "§" && i + 1 < raw.length) {
      flush();
      const code = raw[i + 1].toLowerCase();
      i += 1;
      const hex = MC_COLORS[code];
      if (hex) {
        color = hex;
        bold = false;
        italic = false;
        underline = false;
        strike = false;
      } else if (code === "l") {
        bold = true;
      } else if (code === "o") {
        italic = true;
      } else if (code === "n") {
        underline = true;
      } else if (code === "m") {
        strike = true;
      } else if (code === "r") {
        color = null;
        bold = false;
        italic = false;
        underline = false;
        strike = false;
      }
      // §k (obfuscated) and any unknown code: no visible style change.
    } else {
      buffer += raw[i];
    }
  }
  flush();
  return html;
}

// Render a bare colour code (for example `§c`, with no visible text) as a
// colour swatch followed by the literal code, so colour reference tables and
// inline code mentions show the actual colour.
function renderBareCodes(raw: string): string {
  let html = "";
  for (let i = 0; i < raw.length; i += 1) {
    if (raw[i] === "§" && i + 1 < raw.length) {
      const code = raw[i + 1].toLowerCase();
      const token = escapeHtml(raw.slice(i, i + 2));
      const hex = MC_COLORS[code];
      if (hex) {
        html +=
          '<span class="vp-mc-sw" style="background:' +
          hex +
          '"></span>' +
          token;
      } else {
        html += token;
      }
      i += 1;
    } else {
      html += escapeHtml(raw[i]);
    }
  }
  return html;
}

// markdown-it plugin: render inline code that carries section-sign colours as
// real Minecraft-coloured text. Bare codes (for example `§c` in the colour
// table) render as a colour swatch, since they have no visible text.
function minecraftColors(md: MarkdownLike): void {
  const fallback = md.renderer.rules.code_inline;
  md.renderer.rules.code_inline = (tokens, idx, options, env, self) => {
    const content = tokens[idx].content;
    if (content.includes("§")) {
      const hasText = content.replace(/§./g, "").trim() !== "";
      const inner = hasText
        ? renderMinecraft(content)
        : renderBareCodes(content);
      return (
        '<code class="vp-mc" title="' +
        escapeHtml(content) +
        '">' +
        inner +
        "</code>"
      );
    }
    if (fallback) return fallback(tokens, idx, options, env, self);
    return self.renderToken(tokens, idx, options);
  };
}

const mcStyles =
  ".vp-mc{background:#2b2b2b!important;border:1px solid #1a1a1a;color:#fff;" +
  "padding:2px 7px;border-radius:5px;font-family:var(--vp-font-family-mono);" +
  "font-size:.92em;white-space:nowrap}" +
  ".vp-mc span{text-shadow:1px 1px 0 rgba(0,0,0,.45)}" +
  ".vp-mc-sw{display:inline-block;width:.8em;height:.8em;border:1px solid #888;" +
  "border-radius:2px;vertical-align:-1px;margin-right:.35em}";

export default {
  base: "/Breezil-Hypixel-Utils/",
  title: "@breezil/hypixel-utils",
  description:
    "Static Hypixel reference data and render helpers: ranks, colours, and the full BedWars info hub.",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: "/Breezil-Hypixel-Utils/logo.png" }],
    ["style", {}, mcStyles],
  ],
  markdown: {
    config: minecraftColors,
  },
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Reference", link: "/reference/ranks" },
      {
        text: "npm",
        link: "https://www.npmjs.com/package/@breezil/hypixel-utils",
      },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [{ text: "Getting Started", link: "/guide/getting-started" }],
      },
      {
        text: "General",
        items: [{ text: "Ranks and Colours", link: "/reference/ranks" }],
      },
      {
        text: "BedWars",
        items: [
          { text: "Prestiges", link: "/reference/bedwars/prestiges" },
          { text: "Shop and Upgrades", link: "/reference/bedwars/shop" },
          {
            text: "Teams, Maps, Events, XP, Modes",
            link: "/reference/bedwars/game",
          },
          {
            text: "Challenges, Quests, Achievements",
            link: "/reference/bedwars/progression",
          },
          {
            text: "Cosmetics: Gameplay",
            link: "/reference/bedwars/cosmetics-gameplay",
          },
          {
            text: "Cosmetics: Visual",
            link: "/reference/bedwars/cosmetics-visual",
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Breezil/Breezil-Hypixel-Utils",
      },
      { icon: "discord", link: "https://discord.gg/7SxbNMYQNa" },
    ],
    search: { provider: "local" },
    editLink: {
      pattern:
        "https://github.com/Breezil/Breezil-Hypixel-Utils/edit/main/docs/:path",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Built with 💙 by Breezil",
    },
  },
};

