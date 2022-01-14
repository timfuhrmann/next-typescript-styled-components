import styled, { css } from "styled-components";
import { theme } from "@css/theme";
import { bp, bpRange } from "@css/helper/media";

type Size = "intrinsic" | keyof typeof theme.bp;
type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

const sizes: Size[] = ["intrinsic", "s", "m", "l", "xl", "xxl"];

const extendColumnsRecord = (columns: PartialRecord<Size, number>) => {
    const initialKey = Object.keys(columns)[0] as Size;

    const index = sizes.findIndex(key => key === initialKey);

    if (index === -1) {
        return columns;
    }

    return sizes.slice(index, sizes.length).reduce((map, sizeKey, index) => {
        map[sizeKey] = columns[sizeKey] || map[sizes[index - 1]] || columns[initialKey];
        return map;
    }, {} as PartialRecord<Size, number>);
};

const handleColumn = (size: Size, columns: number) => {
    switch (size) {
        case "intrinsic":
            return css`
                ${bpRange.max.s`
                    width: calc((100vw - 4.8rem) * (${columns} / 12));
                `};
            `;
        case "xxl":
            return css`
                ${p => bp.xxl`
                    width: calc(${p.theme.contentWidth} * (${columns} / 12));
                `};
            `;
        default:
            return css`
                ${bp[size]`
                    width: calc((100vw - 4.8rem) * (${columns} / 12));
                `};
            `;
    }
};

export const Columns = styled.div<{ $columns: PartialRecord<Size, number> }>`
    ${p =>
        Object.keys(extendColumnsRecord(p.$columns)).map(sizeKey => {
            const size = sizeKey as Size;
            const columns = extendColumnsRecord(p.$columns)[size];

            if (!columns) {
                return;
            }

            return handleColumn(size, columns);
        })};
`;
