import styled from "styled-components";
import { bp, bpRange } from "@css/helper/media";

export const Content = styled.div`
    ${bpRange.max.s`
        margin-right: 2.4rem;
        margin-left: 2.4rem;
    `};

    ${p => bp.l`
        max-width: ${p.theme.contentWidth};
        width: calc(100% - 19rem);
        margin-left: auto;
        margin-right: auto;
    `}
`;
