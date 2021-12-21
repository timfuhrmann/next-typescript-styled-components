export const theme = {
    //region Color
    gray50: "#080808",
    gray75: "#1A1A1A",
    gray100: "#1E1E1E",
    gray200: "#2C2C2C",
    gray300: "#393939",
    gray400: "#494949",
    gray500: "#5C5C5C",
    gray600: "#7C7C7C",
    gray700: "#A2A2A2",
    gray800: "#C8C8C8",
    gray900: "#EFEFEF",
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
