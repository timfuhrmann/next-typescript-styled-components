import { css, DefaultTheme, FlattenInterpolation, ThemeProps } from "styled-components";
import { theme } from "@css/theme";

type Size = keyof typeof theme.bp;
type Range = "min" | "max";
type LiteralsFunction = (
    l: TemplateStringsArray,
    ...p: any[]
) => FlattenInterpolation<ThemeProps<DefaultTheme>>;

const bpRanges: Range[] = ["min", "max"];

export const bpRange = bpRanges.reduce((rangeMap, range) => {
    rangeMap[range as Range] = Object.keys(theme.bp).reduce((sizeMap, size) => {
        sizeMap[size as Size] = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
            @media screen and (${range}-width: ${p => p.theme.bp[size as Size]}px) {
                ${css(literals, ...placeholders)};
            }
        `;

        return sizeMap;
    }, {} as Record<Size, LiteralsFunction>);

    return rangeMap;
}, {} as Record<Range, Record<Size, LiteralsFunction>>);

export const bp = Object.keys(theme.bp).reduce((map, size) => {
    map[size as Size] = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
        @media screen and (min-width: ${p => p.theme.bp[size as Size]}px) {
            ${css(literals, ...placeholders)};
        }
    `;

    return map;
}, {} as Record<Size, LiteralsFunction>);
