/* @ds-bundle: {"format":4,"namespace":"DatarailsDesignSystem_89ee37","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"ProductIcon","sourcePath":"components/brand/ProductIcon.jsx"},{"name":"Accordion","sourcePath":"components/core/Accordion.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Pagination","sourcePath":"components/core/Pagination.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"AuthorMeta","sourcePath":"components/marketing/AuthorMeta.jsx"},{"name":"AwardBadge","sourcePath":"components/marketing/AwardBadge.jsx"},{"name":"BlogCard","sourcePath":"components/marketing/BlogCard.jsx"},{"name":"DemoBanner","sourcePath":"components/marketing/DemoBanner.jsx"},{"name":"LogoStrip","sourcePath":"components/marketing/LogoStrip.jsx"},{"name":"ProductCard","sourcePath":"components/marketing/ProductCard.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"e6011f71b567","components/brand/ProductIcon.jsx":"9843dcfa12dd","components/core/Accordion.jsx":"da521ea055cd","components/core/Button.jsx":"078f68766442","components/core/Input.jsx":"694b371f3fa0","components/core/Pagination.jsx":"97f2e3a4a3f0","components/core/Tag.jsx":"0719ae80e8db","components/marketing/AuthorMeta.jsx":"89c9c9a5575d","components/marketing/AwardBadge.jsx":"b9bd3df1d9a1","components/marketing/BlogCard.jsx":"cb180ef624e6","components/marketing/DemoBanner.jsx":"92f5b30326fa","components/marketing/LogoStrip.jsx":"57805ca99c56","components/marketing/ProductCard.jsx":"38625868d8d7","components/marketing/SectionHeading.jsx":"4e8823b2b469","components/navigation/Footer.jsx":"31024161218f","components/navigation/NavBar.jsx":"92976de17773","ui_kits/website/BlogScreen.jsx":"3c0f6f47dc89","ui_kits/website/DemoModal.jsx":"02a240d5cb32","ui_kits/website/HomeScreen.jsx":"0f8a15a768b4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DatarailsDesignSystem_89ee37 = window.DatarailsDesignSystem_89ee37 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Datarails logo. `variant="full"` renders the official "datarails"
 * wordmark SVG (mark + letterforms); `variant="mark"` is the "d" brand
 * mark alone. `tone` picks the wordmark colour for light vs dark
 * backgrounds (ink on light, cream on dark).
 *
 * `markSrc` is the path to the assets dir's logo-mark.png; the wordmark
 * SVGs (logo-wordmark-ink.svg / logo-wordmark-cream.svg) are resolved
 * from the same directory.
 */
function Logo({
  variant = "full",
  tone = "dark",
  height = 26,
  markSrc = "assets/logo-mark.png",
  style = {},
  ...rest
}) {
  const dir = markSrc.replace(/\/[^/]*$/, "");
  const wordmarkSrc = `${dir}/${tone === "light" ? "logo-wordmark-cream.svg" : "logo-wordmark-ink.svg"}`;
  const src = variant === "mark" ? markSrc : wordmarkSrc;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Datarails",
    style: {
      height,
      width: "auto",
      display: "block"
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/ProductIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Rounded product-icon tile — the coloured squares that front every
 * Datarails product (FP&A pink, Cash green, Month-End blue, Spend
 * indigo, Connector amber). Pass an `icon` SVG node and a `color`
 * (token or hex). Preset product colours via `product`.
 */
function ProductIcon({
  icon,
  color,
  product,
  size = 64,
  style = {},
  ...rest
}) {
  const presets = {
    fpa: "var(--product-fpa)",
    cash: "var(--product-cash)",
    close: "var(--product-close)",
    spend: "var(--product-spend)",
    connector: "var(--product-connector)",
    ai: "var(--dr-ink)"
  };
  const bg = color || presets[product] || "var(--dr-pink)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-grid",
      placeItems: "center",
      width: size,
      height: size,
      borderRadius: "var(--radius-lg)",
      background: bg,
      color: "var(--dr-white)",
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: size * 0.6,
      height: size * 0.6
    },
    "aria-hidden": true
  }, icon));
}
Object.assign(__ds_scope, { ProductIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ProductIcon.jsx", error: String((e && e.message) || e) }); }

// components/core/Accordion.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Expandable list used in the "All your financial data" section — each
 * row shows a title, expands to reveal body copy, hairline dividers
 * between rows. `items` is an array of { title, body }. `defaultOpen`
 * is the index open on mount (0 by default).
 */
function Accordion({
  items = [],
  defaultOpen = 0,
  style = {}
}) {
  const [open, setOpen] = useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--dr-border)",
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: "1px solid var(--dr-border)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "20px 4px",
        background: "transparent",
        border: "none",
        textAlign: "left",
        font: "var(--type-h3)",
        color: "var(--dr-ink-heading)"
      }
    }, /*#__PURE__*/React.createElement("span", null, it.title), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true,
      style: {
        flexShrink: 0,
        width: 12,
        height: 12,
        borderRight: "2px solid var(--dr-pink)",
        borderBottom: "2px solid var(--dr-pink)",
        transform: isOpen ? "rotate(-135deg)" : "rotate(45deg)",
        transition: "transform var(--dur-base) var(--ease-standard)",
        marginRight: 6
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows var(--dur-slow) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        padding: "0 4px 22px",
        font: "var(--type-body-sm)",
        color: "var(--dr-gray-600)",
        maxWidth: 620
      }
    }, it.body))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Datarails pill button. Pink is the single hero accent — `primary`
 * for the main CTA on any surface, `outline` for the pink-bordered
 * secondary used inside product cards, `dark` for the flat
 * ink-bordered utility button (cookie / form actions), `ghost` for a
 * bare link-style action.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconRight,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    md: {
      font: "var(--type-button)",
      padY: 8,
      padX: "var(--pad-btn-x)",
      gap: 8
    },
    sm: {
      font: "var(--type-button-sm)",
      padY: 8,
      padX: "var(--pad-btn-sm-x)",
      gap: 6
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--dr-pink)",
      color: "var(--dr-white)",
      border: "0.909px solid var(--dr-pink)"
    },
    outline: {
      background: "transparent",
      color: "var(--dr-pink-600)",
      border: "1.364px solid var(--dr-pink-600)"
    },
    dark: {
      background: "var(--dr-white)",
      color: "var(--dr-navy-700)",
      border: "1.818px solid var(--dr-navy-700)",
      borderRadius: "var(--radius-xs)"
    },
    ghost: {
      background: "transparent",
      color: "var(--dr-pink)",
      border: "0.909px solid transparent"
    }
  };
  const v = variants[variant] || variants.primary;
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    padding: `${s.padY}px ${s.padX}`,
    borderRadius: "var(--radius-pill)",
    font: s.font,
    lineHeight: 1.6,
    textDecoration: "none",
    whiteSpace: "nowrap",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "opacity var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), background var(--dur-base) var(--ease-standard)",
    ...v,
    ...style
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: "1em",
      height: "1em"
    },
    "aria-hidden": true
  }, icon) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: "1em",
      height: "1em"
    },
    "aria-hidden": true
  }, iconRight) : null);
  const hover = e => {
    if (!disabled) e.currentTarget.style.opacity = "0.85";
  };
  const leave = e => {
    if (!disabled) e.currentTarget.style.opacity = "1";
  };
  const down = e => {
    if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
  };
  const up = e => {
    if (!disabled) e.currentTarget.style.transform = "scale(1)";
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    disabled: href ? undefined : disabled,
    style: baseStyle,
    onMouseEnter: hover,
    onMouseLeave: e => {
      leave(e);
      up(e);
    },
    onMouseDown: down,
    onMouseUp: up
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text / email input matching the newsletter field — rounded rectangle,
 * hairline border, Poppins placeholder. Pass `label` for a stacked
 * label, `type` for email / password etc.
 */
function Input({
  label,
  type = "text",
  placeholder,
  required,
  style = {},
  id,
  ...rest
}) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const field = /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    required: required,
    style: {
      width: "100%",
      padding: "13px 18px",
      font: "var(--type-body)",
      color: "var(--dr-ink)",
      background: "var(--dr-white)",
      border: "1px solid var(--dr-border-200)",
      borderRadius: "var(--radius-sm)",
      outline: "none",
      transition: "border-color var(--dur-base) var(--ease-standard)",
      boxSizing: "border-box",
      ...style
    },
    onFocus: e => e.currentTarget.style.borderColor = "var(--dr-pink)",
    onBlur: e => e.currentTarget.style.borderColor = "var(--dr-border-200)"
  }, rest));
  if (!label) return field;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontWeight: "var(--fw-medium)",
      color: "var(--dr-ink)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dr-pink)"
    }
  }, "*") : null), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Pagination.jsx
try { (() => {
/**
 * Blog-style pagination — numbered pages with a pink active pill and
 * ellipsis gaps. `page` (1-based) is active; `total` is the last page;
 * `onChange(n)` fires on click.
 */
function Pagination({
  page = 1,
  total = 1,
  onChange = () => {},
  style = {}
}) {
  const pages = [];
  const push = n => pages.push(n);
  push(1);
  if (page > 3) push("…");
  for (let n = Math.max(2, page - 1); n <= Math.min(total - 1, page + 1); n++) push(n);
  if (page < total - 2) push("…");
  if (total > 1) push(total);
  const arrow = (dir, enabled, target) => /*#__PURE__*/React.createElement("button", {
    onClick: () => enabled && onChange(target),
    disabled: !enabled,
    style: {
      width: 32,
      height: 32,
      display: "grid",
      placeItems: "center",
      background: "transparent",
      border: "none",
      color: enabled ? "var(--dr-gray-700)" : "var(--dr-border-200)",
      cursor: enabled ? "pointer" : "default",
      font: "var(--type-body)"
    },
    "aria-label": dir === "prev" ? "Previous" : "Next"
  }, dir === "prev" ? "‹" : "›");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      ...style
    }
  }, arrow("prev", page > 1, page - 1), pages.map((p, i) => p === "…" ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    style: {
      color: "var(--dr-gray-500)",
      padding: "0 4px"
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => onChange(p),
    style: {
      minWidth: 32,
      height: 32,
      padding: "0 6px",
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--radius-xs)",
      border: "none",
      font: "var(--type-body-sm)",
      background: p === page ? "var(--dr-pink)" : "transparent",
      color: p === page ? "var(--dr-white)" : "var(--dr-gray-700)",
      cursor: "pointer"
    }
  }, p)), arrow("next", page < total, page + 1));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small category / status label. On the blog it marks a post's topic
 * ("AI", "How To", "FP&A") as a soft grey pill; `tone` recolours it
 * for status use.
 */
function Tag({
  children,
  tone = "neutral",
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      background: "var(--dr-surface)",
      color: "var(--dr-gray-700)"
    },
    pink: {
      background: "var(--dr-pink-050)",
      color: "var(--dr-pink-600)"
    },
    positive: {
      background: "var(--dr-green-050)",
      color: "#0b7a5a"
    },
    info: {
      background: "var(--dr-lavender)",
      color: "var(--dr-blue)"
    },
    dark: {
      background: "var(--dr-navy-800)",
      color: "var(--dr-white)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 12px",
      borderRadius: "var(--radius-xs)",
      font: "var(--type-body-sm)",
      lineHeight: 1.4,
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/marketing/AuthorMeta.jsx
try { (() => {
/**
 * Author + date + read-time meta row used under blog titles. Avatar is
 * an <img> (pass `avatarSrc`) or falls back to an initials circle.
 */
function AuthorMeta({
  name,
  date,
  readTime,
  avatarSrc,
  style = {}
}) {
  const initials = (name || "?").split(" ").map(w => w[0]).slice(0, 2).join("");
  const metaItem = (glyph, label) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      color: "var(--dr-gray-500)",
      font: "var(--type-caption)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: 13,
      lineHeight: 1
    }
  }, glyph), label);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      flexWrap: "wrap",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, avatarSrc ? /*#__PURE__*/React.createElement("img", {
    src: avatarSrc,
    alt: name,
    style: {
      width: 24,
      height: 24,
      borderRadius: "50%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: "var(--dr-lavender)",
      color: "var(--dr-blue)",
      display: "grid",
      placeItems: "center",
      font: "var(--fw-semibold) 10px/1 var(--font-sans)"
    }
  }, initials), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--dr-gray-700)"
    }
  }, name)), date ? metaItem("🗓", date) : null, readTime ? metaItem("⏱", readTime) : null);
}
Object.assign(__ds_scope, { AuthorMeta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/AuthorMeta.jsx", error: String((e && e.message) || e) }); }

// components/marketing/AwardBadge.jsx
try { (() => {
/**
 * Recognition / rating medal (G2-style) shown on the dark CFO CTA band.
 * White card with a top eyebrow, a bold center label, and a coloured
 * ribbon foot. `period` sits under the label (e.g. "Summer 2026").
 */
function AwardBadge({
  label,
  eyebrow,
  period,
  ribbon = "var(--dr-amber)",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: 132,
      background: "var(--dr-white)",
      borderRadius: "var(--radius-sm) var(--radius-sm) 0 0",
      paddingTop: 14,
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) 11px/1.3 var(--font-sans)",
      color: "var(--dr-gray-700)",
      textAlign: "center",
      padding: "0 10px"
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) 20px/1.1 var(--font-sans)",
      color: "var(--dr-ink)",
      textAlign: "center",
      padding: "8px 8px 6px"
    }
  }, label), period ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--dr-gray-500)",
      paddingBottom: 12
    }
  }, period) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      width: "100%"
    },
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 14,
      background: ribbon,
      clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 14,
      background: ribbon,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 8% 100%)",
      filter: "brightness(0.85)"
    }
  })));
}
Object.assign(__ds_scope, { AwardBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/AwardBadge.jsx", error: String((e && e.message) || e) }); }

// components/marketing/BlogCard.jsx
try { (() => {
/**
 * Blog post card — cover image, category tag, title, excerpt, author
 * meta, and a "Read more" link. Matches the Datarails blog index grid.
 */
function BlogCard({
  image,
  category,
  title,
  excerpt,
  author,
  date,
  readTime,
  avatarSrc,
  href = "#",
  cta = "Read more",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      border: "1px solid var(--border-card)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      textDecoration: "none",
      boxShadow: "var(--shadow-card)",
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)",
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
      e.currentTarget.style.transform = "translateY(-2px)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = "var(--shadow-card)";
      e.currentTarget.style.transform = "translateY(0)";
    }
  }, image ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: 180,
      background: `#0b1030 url(${image}) center / cover no-repeat`
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: 20,
      flex: 1
    }
  }, category ? /*#__PURE__*/React.createElement(__ds_scope.Tag, null, category) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      color: "var(--dr-ink-heading)",
      lineHeight: 1.3
    }
  }, title), excerpt ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--dr-gray-600)",
      margin: 0,
      flex: 1
    }
  }, excerpt) : null, author ? /*#__PURE__*/React.createElement(__ds_scope.AuthorMeta, {
    name: author,
    date: date,
    readTime: readTime,
    avatarSrc: avatarSrc
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--dr-ink)",
      fontWeight: "var(--fw-medium)",
      marginTop: 4
    }
  }, cta)));
}
Object.assign(__ds_scope, { BlogCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/BlogCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/DemoBanner.jsx
try { (() => {
/**
 * Dark navy call-to-action band — the "Make the CFO's office the home
 * of business insights" section. Centered heading, primary CTA, and an
 * optional row of children (award badges) beneath.
 */
function DemoBanner({
  title,
  cta = "Request a demo",
  href = "#",
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-dark)",
      borderRadius: "var(--radius-xl)",
      padding: "64px 40px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 28,
      textAlign: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-regular) 40px/1.15 var(--font-sans)",
      letterSpacing: "-0.4px",
      color: "var(--dr-white)",
      maxWidth: 760
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    href: href
  }, cta), children ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "flex-end",
      marginTop: 12
    }
  }, children) : null);
}
Object.assign(__ds_scope, { DemoBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/DemoBanner.jsx", error: String((e && e.message) || e) }); }

// components/marketing/LogoStrip.jsx
try { (() => {
/**
 * Horizontal integration-logo strip ("Connect every system"). Pass
 * `logos` as [{ src, alt }] for images, or arbitrary `children`.
 * Renders muted/greyscale by default; set `mono={false}` for full
 * colour.
 */
function LogoStrip({
  logos,
  children,
  mono = true,
  gap = 56,
  height = 32,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      gap,
      ...style
    }
  }, logos ? logos.map((l, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: l.src,
    alt: l.alt || "",
    style: {
      height,
      width: "auto",
      opacity: mono ? 0.65 : 1,
      filter: mono ? "grayscale(1)" : "none"
    }
  })) : children);
}
Object.assign(__ds_scope, { LogoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/LogoStrip.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProductCard.jsx
try { (() => {
/**
 * Product feature card — coloured icon tile, title, one-line
 * description, and an outline "Learn more" CTA. Used in the "Built for
 * the office of the modern CFO" grid.
 */
function ProductCard({
  icon,
  product,
  color,
  title,
  description,
  cta = "Learn more",
  href = "#",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 4,
      padding: 24,
      background: "var(--surface-card)",
      border: "1px solid var(--border-card)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-card)",
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)",
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
      e.currentTarget.style.transform = "translateY(-2px)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = "var(--shadow-card)";
      e.currentTarget.style.transform = "translateY(0)";
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ProductIcon, {
    icon: icon,
    product: product,
    color: color,
    size: 64
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      color: "var(--dr-ink-heading)",
      padding: "20px 0 8px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--dr-gray-600)",
      margin: 0,
      paddingBottom: 20,
      minHeight: 66
    }
  }, description), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "sm",
    href: href
  }, cta));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
/**
 * Centered section header — optional pink eyebrow, a large heading, and
 * a muted lead paragraph. `align` can be "center" (default) or "left".
 * `size` picks the heading scale: "display" (hero) or "h1" (section).
 */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  size = "h1",
  maxWidth = 720,
  style = {}
}) {
  const headFont = size === "display" ? "var(--type-display)" : "var(--type-h1)";
  const tracking = size === "display" ? "var(--type-display-tracking)" : "var(--type-h1-tracking)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      maxWidth,
      marginInline: align === "center" ? "auto" : 0,
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) 14px/1 var(--font-sans)",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--dr-pink)"
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: headFont,
      letterSpacing: tracking,
      color: "var(--dr-ink)"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      letterSpacing: "var(--type-body-lg-tracking)",
      color: "var(--dr-ink)",
      margin: 0,
      opacity: 0.85
    }
  }, subtitle) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const DEFAULT_COLUMNS = [{
  heading: "Solutions",
  links: ["Consolidation", "Planning, Budgeting, and Forecasting", "Financial Reporting", "Data Visualization", "AI for FP&A", "Datarails FP&A", "Datarails Month-End Close", "Datarails Cash", "Datarails Spend Control"]
}, {
  heading: "Blog",
  links: ["FP&A Analysts", "Consolidated Financial Statements", "Business Budgeting Software", "How to Choose the Best FP&A Software", "Financial Dashboard", "Finance Glossary"]
}, {
  heading: "Legal & Compliance",
  links: ["Terms of Service", "Privacy Policy", "Data Processing Agreement", "AI Terms", "Sub Processors", "Trust Center", "Do Not Sell or Share My Personal Information"]
}];

/**
 * Datarails site footer — dark navy, light logo, an "about" blurb, and
 * link columns. Column heads are Poppins Bold 14px with 40px line
 * height; links are white at 16px.
 */
function Footer({
  blurb = "Datarails® is the financial operating system for modern finance teams. It consolidates data from every financial and operational data source into a single governed source of truth, and connects that data to the AI tools your team already uses. Finance teams can stay in Excel, and every number is connected, governed, and AI-ready.",
  columns = DEFAULT_COLUMNS,
  social = ["LinkedIn", "X", "YouTube", "Facebook", "Instagram", "TikTok"],
  logoSrc = "assets/logo-mark.png",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-dark)",
      color: "var(--dr-white)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "80px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "full",
    tone: "light",
    height: 28,
    markSrc: logoSrc
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "300px repeat(3, 1fr) 220px",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) 16px/40px var(--font-sans)",
      color: "var(--dr-white)",
      margin: 0,
      maxWidth: 260
    }
  }, blurb), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.heading
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-overline)",
      color: "var(--dr-white)"
    }
  }, col.heading), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "block",
      font: "var(--fw-regular) 14px/40px var(--font-sans)",
      color: "var(--dr-white)",
      opacity: 0.85
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-overline)",
      color: "var(--dr-white)"
    }
  }, "Follow Us"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      paddingTop: 12
    }
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s,
    title: s,
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,0.35)",
      display: "grid",
      placeItems: "center",
      color: "var(--dr-white)",
      font: "var(--fw-semibold) 12px/1 var(--font-sans)"
    }
  }, s[0])))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/**
 * Datarails marketing header — sticky 70px white bar with a soft
 * shadow, logo left, centered nav (items with dropdown carets),
 * search, Login link, and the pink "Request a Demo" CTA.
 */
function NavBar({
  items = ["Solutions", "Product", "Pricing", "Resources", "Customer Stories", "About"],
  hasCaret = {
    Solutions: true,
    Product: true
  },
  logoSrc = "assets/logo-mark.png",
  onDemo,
  style = {}
}) {
  const caret = /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 6,
      height: 6,
      borderRight: "1.5px solid var(--dr-ink)",
      borderBottom: "1.5px solid var(--dr-ink)",
      transform: "rotate(45deg)",
      marginLeft: 6,
      opacity: 0.7
    }
  });
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      width: "100%",
      height: "var(--nav-height)",
      background: "var(--dr-white)",
      boxShadow: "var(--shadow-header)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-nav)",
      height: "100%",
      margin: "0 auto",
      padding: "0 20px",
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "full",
    height: 24,
    markSrc: logoSrc
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "0 18.2px",
      font: "var(--type-nav)",
      color: "var(--dr-ink)"
    }
  }, it, hasCaret[it] ? caret : null))))), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Search",
    style: {
      background: "transparent",
      border: "none",
      padding: 8,
      display: "grid",
      placeItems: "center",
      color: "var(--dr-ink)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: "var(--type-nav)",
      color: "var(--dr-ink)"
    }
  }, "Login"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "sm",
    onClick: onDemo
  }, "Request a Demo")));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BlogScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DSB = window.DatarailsDesignSystem_89ee37;
const {
  SectionHeading,
  BlogCard,
  Tag,
  Input,
  Button,
  Pagination
} = DSB;
const POSTS = [{
  image: "../../assets/img/blog-thumb-1.png",
  category: "AI",
  title: "Generative AI in Finance: What Auditors Will Ask and How to Be Ready",
  excerpt: "The audit conversation around generative AI in finance is coming. For most finance functions it has not arrived yet, but…",
  author: "Andrew Mort",
  date: "Jun 23, 2026",
  readTime: "8 min read"
}, {
  image: "../../assets/img/blog-thumb-2.png",
  category: "FP&A",
  title: "AI for FP&A: How Analysts Can Generate Insightful Narratives Faster",
  excerpt: "FP&A teams worry less about whether AI is right and more about whether they'd be willing to sign their name…",
  author: "Zvi Korn",
  date: "Jun 22, 2026",
  readTime: "8 min read"
}, {
  image: "../../assets/img/blog-thumb-3.png",
  category: "Financial Reports",
  title: "Why Uploading a Spreadsheet to an AI is Not a Finance Data Strategy",
  excerpt: "Most finance teams discovered the ceiling quickly. With 89% of finance professionals running more than half of their workflows through…",
  author: "Andrew Mort",
  date: "Jun 23, 2026",
  readTime: "8 min read"
}, {
  image: "../../assets/img/blog-thumb-1.png",
  category: "How To",
  title: "GRR vs NRR: How to Calculate and Interpret Revenue Retention",
  excerpt: "Why revenue retention is the metric that tells the real story. Retaining an existing customer costs a fraction of acquiring…",
  author: "Zvi Korn",
  date: "Jun 26, 2026",
  readTime: "14 min read"
}, {
  image: "../../assets/img/blog-thumb-2.png",
  category: "General",
  title: "The Most Profitable Companies in the World (2026)",
  excerpt: "The most profitable companies in the world are now led by technology. As of June 2026, Alphabet, Google's parent, sits…",
  author: "Anouk Amar",
  date: "Jun 24, 2026",
  readTime: "22 min read"
}, {
  image: "../../assets/img/blog-thumb-3.png",
  category: "Excel",
  title: "Why Native Excel Automation Tools Have a Ceiling (And What Sits Above It)",
  excerpt: "Finance teams have been automating Excel for decades because the bottleneck was never the spreadsheet itself. Everything from macros to…",
  author: "Anouk Amar",
  date: "Jun 17, 2026",
  readTime: "19 min read"
}];
function BlogScreen() {
  const [page, setPage] = React.useState(1);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: "var(--dr-surface)",
      padding: "56px 24px 88px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display)",
      letterSpacing: "var(--type-display-tracking)",
      color: "var(--dr-ink)",
      fontSize: 56
    }
  }, "Datarails Blog"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      color: "var(--dr-gray-600)",
      margin: "8px 0 40px"
    }
  }, "Discover the most helpful resources to level up your FP&A skills"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 32,
      background: "var(--dr-white)",
      border: "1px solid var(--dr-border)",
      borderRadius: 16,
      padding: 24,
      marginBottom: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/blog-featured.png",
    alt: "AI for Financial Forecasting",
    style: {
      width: "100%",
      borderRadius: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "AI"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-regular) 28px/1.25 var(--font-sans)",
      color: "var(--dr-ink)"
    }
  }, "AI for Financial Forecasting and Scenario Analysis: A Practical Guide"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--dr-gray-600)",
      margin: 0
    }
  }, "For most finance teams, a forecast is already out of date by the time it lands in front of the CFO. An analyst spends ten days pulling data from five systems\u2026"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    href: "#"
  }, "Read article"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28,
      maxWidth: 220
    }
  }, /*#__PURE__*/React.createElement("select", {
    style: {
      width: "100%",
      padding: "12px 16px",
      font: "var(--type-body-sm)",
      border: "1px solid var(--dr-border-200)",
      borderRadius: 6,
      color: "var(--dr-ink)",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("option", null, "All Posts"), /*#__PURE__*/React.createElement("option", null, "AI"), /*#__PURE__*/React.createElement("option", null, "FP&A"), /*#__PURE__*/React.createElement("option", null, "How To"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, POSTS.map((p, i) => /*#__PURE__*/React.createElement(BlogCard, _extends({
    key: i
  }, p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: 32,
      background: "var(--dr-white)",
      border: "1px solid var(--dr-border)",
      borderRadius: 16,
      padding: 24,
      margin: "40px 0",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/blog-panda.png",
    alt: "Datarails mascot",
    style: {
      width: "100%",
      borderRadius: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-regular) 34px/1.2 var(--font-sans)",
      color: "var(--dr-ink)"
    }
  }, "Subscribe to Our Newsletter"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--dr-gray-600)",
      margin: 0
    }
  }, "Get the latest FP&A insights, tips, and best practices delivered straight to your inbox."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-end",
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "Name@work.mail",
    required: true
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Subscribe")), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--dr-gray-500)"
    }
  }, "We respect your privacy. Unsubscribe at any time."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    total: 61,
    onChange: setPage
  }))));
}
window.BlogScreen = BlogScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BlogScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DemoModal.jsx
try { (() => {
const DSM = window.DatarailsDesignSystem_89ee37;
const {
  Input,
  Button,
  Logo
} = DSM;
function DemoModal({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) setSent(false);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(12,20,43,0.55)",
      display: "grid",
      placeItems: "center",
      zIndex: 100,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 460,
      maxWidth: "100%",
      background: "#fff",
      borderRadius: 12,
      boxShadow: "var(--shadow-dialog)",
      padding: 32,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: "absolute",
      top: 16,
      right: 16,
      background: "transparent",
      border: "none",
      fontSize: 22,
      color: "var(--dr-gray-500)",
      cursor: "pointer",
      lineHeight: 1
    }
  }, "\xD7"), /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    height: 40,
    markSrc: "../../assets/logo-mark.png"
  }), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      color: "var(--dr-ink)",
      marginBottom: 8
    }
  }, "Thanks \u2014 you're all set."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--dr-gray-600)",
      marginBottom: 24
    }
  }, "A Datarails specialist will reach out to schedule your FinanceOS demo."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onClose
  }, "Done")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      color: "var(--dr-ink)"
    }
  }, "Request a Demo"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--dr-gray-600)",
      margin: "-6px 0 4px"
    }
  }, "See how FinanceOS connects, governs, and AI-readies your financial data."), /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Jane Levi",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "Name@work.mail",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    placeholder: "Acme Inc.",
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit",
    style: {
      marginTop: 4
    }
  }, "Request a Demo"))));
}
window.DemoModal = DemoModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DemoModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const DS = window.DatarailsDesignSystem_89ee37;
const {
  SectionHeading,
  Button,
  Accordion,
  ProductCard,
  DemoBanner,
  AwardBadge,
  LogoStrip
} = DS;
const IS = {
  width: "100%",
  height: "100%",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const ic = n => /*#__PURE__*/React.createElement("img", {
  src: `../../assets/icons/product-${n}.svg`,
  style: {
    width: "100%",
    height: "100%",
    display: "block"
  }
});
const Wrap = ({
  children,
  bg,
  pad = "88px 24px"
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    background: bg || "transparent",
    padding: pad
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1200,
    margin: "0 auto"
  }
}, children));
function HomeScreen({
  onDemo
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
    pad: "72px 24px 56px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display)",
      letterSpacing: "var(--type-display-tracking)",
      color: "var(--dr-ink)"
    }
  }, "The operating system finance teams run on."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      letterSpacing: "var(--type-body-lg-tracking)",
      color: "var(--dr-ink)",
      maxWidth: 488,
      margin: 0
    }
  }, "FinanceOS is the governed data foundation at the heart of Datarails. It connects your financial and operational systems, consolidates your numbers, and gives every person one clear, reliable view of the business with the controls and audit trails finance requires."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onDemo
  }, "Request a Demo")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/hero-dashboard.png",
    alt: "FinanceOS dashboard connecting your systems",
    style: {
      width: "100%",
      borderRadius: 16
    }
  }))), /*#__PURE__*/React.createElement(Wrap, {
    bg: "var(--dr-white)",
    pad: "40px 24px 72px"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Connect every system. Own every workflow.",
    subtitle: "FinanceOS connects to 600+ systems and data sources \u2014 ERPs, CRMs, HRIS platforms, banks, billing systems, and spreadsheets. Data is automatically synchronized, consolidated, and governed in a single operational layer built for finance."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      margin: "28px 0 48px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onDemo
  }, "Request a demo")), /*#__PURE__*/React.createElement(LogoStrip, null, ["HubSpot", "Power BI", "Snowflake", "Microsoft Dynamics 365", "BambooHR", "OneDrive"].map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      font: "var(--fw-semibold) 20px/1 var(--font-sans)",
      color: "var(--dr-gray-500)",
      opacity: 0.7
    }
  }, l)))), /*#__PURE__*/React.createElement(Wrap, {
    bg: "var(--dr-surface)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "All your financial data. Governed, connected, AI-ready.",
    subtitle: "Finance teams are being asked to do more with more data, more systems, and more pressure to move faster. FinanceOS provides the operational layer that brings everything together."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "40px auto 0"
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      title: "One source of truth across every financial system",
      body: "FinanceOS consolidates, maps, and harmonizes financial data across entities, currencies, and systems. Multi-entity consolidation, FX conversion, intercompany eliminations, and allocations are built in, creating trusted, finance-ready data for every workflow."
    }, {
      title: "Business context built into every number",
      body: "Every figure carries its drivers, owners, and audit trail — so the story behind the numbers travels with them."
    }, {
      title: "Consistent outputs, every time",
      body: "Reports, dashboards, and models draw from the same governed layer, so the numbers reconcile everywhere."
    }, {
      title: "Governance built for finance",
      body: "Permissions, version control, and controls designed for the office of the CFO."
    }, {
      title: "Lower effort. Lower AI costs.",
      body: "Clean, mapped, governed data means less prep and cheaper, more reliable AI outputs."
    }]
  }))), /*#__PURE__*/React.createElement(Wrap, {
    bg: "var(--dr-white)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/excel-dashboard.png",
    alt: "Excel-native dashboard",
    style: {
      width: "100%",
      borderRadius: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    title: "Don't replace Excel. Make it better.",
    maxWidth: 520,
    subtitle: "FinanceOS connects your existing Excel models to a centralized data foundation with automated synchronization, governance, version control, and live reporting. Your team keeps the workflows they know while gaining consistency, reliability, and scale."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onDemo
  }, "Request a demo")))), /*#__PURE__*/React.createElement(Wrap, {
    bg: "var(--dr-surface)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Built for the office of the modern CFO",
    subtitle: "See how FinanceOS turns your data into real business impact."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24,
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(ProductCard, {
    product: "fpa",
    icon: ic("fpa"),
    title: "Datarails FP&A",
    description: "Plan, budget, forecast, and report with real-time insights"
  }), /*#__PURE__*/React.createElement(ProductCard, {
    product: "cash",
    icon: ic("cash"),
    title: "Datarails Cash",
    description: "Real-time visibility into cash positions with forecasting and scenario analysis"
  }), /*#__PURE__*/React.createElement(ProductCard, {
    product: "close",
    icon: ic("close"),
    title: "Datarails Month-End Close",
    description: "Plan, track, and execute every close activity from start to finish"
  }), /*#__PURE__*/React.createElement(ProductCard, {
    product: "spend",
    icon: ic("spend"),
    title: "Datarails Spend Control",
    description: "Control spend with approvals and real-time visibility"
  }))), /*#__PURE__*/React.createElement(Wrap, {
    bg: "var(--dr-white)",
    pad: "24px 24px 88px"
  }, /*#__PURE__*/React.createElement(DemoBanner, {
    title: "Make the CFO's office the home of business insights",
    href: "#"
  }, /*#__PURE__*/React.createElement(AwardBadge, {
    eyebrow: "ACCOUNTING & FINANCE",
    label: "Top 50",
    period: "2026",
    ribbon: "var(--dr-amber)"
  }), /*#__PURE__*/React.createElement(AwardBadge, {
    label: "Leader",
    period: "Summer 2026",
    ribbon: "var(--dr-pink)"
  }), /*#__PURE__*/React.createElement(AwardBadge, {
    label: "Best Est. ROI",
    period: "2026",
    ribbon: "var(--dr-green)"
  }), /*#__PURE__*/React.createElement(AwardBadge, {
    label: "Fastest Implementation",
    ribbon: "var(--dr-blue)"
  }))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ProductIcon = __ds_scope.ProductIcon;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.AuthorMeta = __ds_scope.AuthorMeta;

__ds_ns.AwardBadge = __ds_scope.AwardBadge;

__ds_ns.BlogCard = __ds_scope.BlogCard;

__ds_ns.DemoBanner = __ds_scope.DemoBanner;

__ds_ns.LogoStrip = __ds_scope.LogoStrip;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
