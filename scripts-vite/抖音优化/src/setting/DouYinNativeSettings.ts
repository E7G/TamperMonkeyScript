import { Panel } from "@components/setting/panel";
import { PanelContent } from "@components/setting/panel-content";

/**
 * Integrate only into Douyin's native icon group:
 * <div class="WYX6tGGi"> Settings / About / Help / #btn-feelgood </div>
 *
 * Keep the original Settings button intact. This entry is a sibling of
 * the native gear, not a floating button or an element in the left nav.
 */
export const DouYinNativeSettings = {
  init() {
    if (window.top !== window) return;
    if (!document.documentElement) {
      document.addEventListener("DOMContentLoaded", () => this.init(), { once: true });
      return;
    }

    const marker = "data-douyin-optimization-settings";
    const className = "dy-optimization-icon-entry";
    const svgNamespace = "http://www.w3.org/2000/svg";

    const style = document.createElement("style");
    style.textContent = `
      /* The old versions had separate floating and sidebar entries. */
      .dy-optimization-settings-fallback,
      .dy-optimization-settings-native,
      .dy-optimization-settings-inline {
        display: none !important;
      }
      .WYX6tGGi > .${className} {
        cursor: pointer;
        flex-shrink: 0;
      }
      .WYX6tGGi > .${className}:focus-visible {
        outline: 2px solid #fe2c55;
        outline-offset: 2px;
        border-radius: 6px;
      }
    `;
    (document.head || document.documentElement).appendChild(style);

    let pending = false;

    const mount = () => {
      pending = false;
      // The stable #btn-feelgood lives in the SAME group as the gear icon.
      // The supplied Douyin markup puts the gear in the first .XXWRlaaY.
      const feelgood = document.getElementById("btn-feelgood");
      const group = feelgood?.parentElement;
      if (!group || !group.classList.contains("WYX6tGGi")) return;

      const gear = Array.from(group.children).find((child) => {
        return child instanceof HTMLElement &&
          child.classList.contains("XXWRlaaY") &&
          Boolean(child.querySelector('svg path[d^="M13.6032 3.57455"]'));
      });
      if (!(gear instanceof HTMLElement)) return;

      const existing = group.querySelector<HTMLElement>(`[${marker}]`);
      if (existing) {
        if (gear.nextElementSibling !== existing) {
          gear.insertAdjacentElement("afterend", existing);
        }
        return;
      }

      const entry = document.createElement("div");
      entry.className = `${gear.className} ${className}`;
      entry.setAttribute(marker, "");
      entry.setAttribute("role", "button");
      entry.setAttribute("tabindex", "0");
      entry.setAttribute("aria-label", "抖音优化设置");
      entry.title = "抖音优化设置";

      const iconShell = document.createElement("div");
      const originalShell = gear.firstElementChild;
      if (originalShell instanceof HTMLElement) {
        iconShell.className = originalShell.className;
      }

      const svg = document.createElementNS(svgNamespace, "svg");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("width", "1em");
      svg.setAttribute("height", "1em");
      svg.setAttribute("fill", "none");
      svg.setAttribute("focusable", "false");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("class", gear.querySelector("svg")?.getAttribute("class") ?? "");
      const path = document.createElementNS(svgNamespace, "path");
      path.setAttribute("d", "M4 7h16M4 12h16M4 17h16M9 4.5v5M15 9.5v5M11 14.5v5");
      path.setAttribute("stroke", "currentColor");
      path.setAttribute("stroke-width", "1.6");
      path.setAttribute("stroke-linecap", "round");
      svg.appendChild(path);
      iconShell.appendChild(svg);
      entry.appendChild(iconShell);

      const open = (event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        Panel.showPanel(PanelContent.getConfig(0));
      };
      entry.addEventListener("click", open);
      entry.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") open(event);
      });
      // Insert INSIDE the native icon group, immediately next to its gear.
      gear.insertAdjacentElement("afterend", entry);
    };

    const schedule = () => {
      if (pending) return;
      pending = true;
      window.setTimeout(mount, 120);
    };
    new MutationObserver(schedule).observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
    schedule();
  },
};
