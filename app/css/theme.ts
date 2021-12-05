export const theme = {
    //region Color
    black: "#000",
    white: "#fff",
    //endregion

    //region Breakpoints
    bp: {
        m: 768,
        l: 1024,
        xl: 1340,
        xxl: 2000,
    },
    //endregion
};

type Theme = typeof theme;

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}
