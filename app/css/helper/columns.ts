import { css } from "styled-components";
import { Breakpoint, breakpoints } from "@css/helper/breakpoints";

type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

export const columns = (columns: PartialRecord<Breakpoint, number>) => {
    return (Object.keys(columns) as Breakpoint[]).map(breakpoint => {
        const column = columns[breakpoint];

        if (!column) {
            return;
        }

        return css`
            ${breakpoints().only(breakpoint)} {
                width: calc(${p => p.theme.contentWidth[breakpoint]} * (${column} / 12));
            }
        `;
    });
};
