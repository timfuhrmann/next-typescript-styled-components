import { css, CSSObject } from "styled-components";

type Format = "min" | "max";

export const isTablet = (styles: CSSObject, format: Format = "min") => css`
      @media screen and (${format}-width: ${p => p.theme.bp.m}px) {
          ${styles};
      }
`;

export const isDesktop = (styles: CSSObject, format: Format = "min") => css`
      @media screen and (${format}-width: ${p => p.theme.bp.l}px) {
          ${styles};
      }
`;

export const isDesktopXL = (styles: CSSObject, format: Format = "min") => css`
    @media screen and (${format}-width: ${p => p.theme.bp.xl}px) {
          ${styles};
      }
`;

export const isDesktopXXL = (styles: CSSObject, format: Format = "min") => css`
    @media screen and (${format}-width: ${p => p.theme.bp.xxl}px) {
          ${styles};
      }
`;