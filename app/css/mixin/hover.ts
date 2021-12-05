import { css, CSSObject } from "styled-components";

type FallbackHover = "static" | "active";

const handleHoverFallback = (styles: CSSObject, fallback?: FallbackHover) => {
    switch (fallback) {
        case "static":
            return styles;
        case "active":
            return active(styles);
        default:
            return null;
    }
};

export const active = (styles: CSSObject) => css`
    &:active {
        ${styles};
    }
`;


export const hover = (styles: CSSObject, fallback?: FallbackHover) => css`
    @media (hover: none) {
        ${handleHoverFallback(styles, fallback)};
    }
  
    @media (hover: hover) {
        &:hover {
            ${styles};
        }
    }
`;