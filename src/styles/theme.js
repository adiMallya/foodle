const colors = {
    amber: {
        500: "#f59e0b",
        400: "#fbbf24",
        300: "#fcd34d",
        200: "#fde68a"
    },

    gray: {
        400: "#9ca3af",
        300: "#d1d5db",
        200: "#e5e7eb",
        100: "#f3f4f6"
    },

    white: {
        900: "#fffffa"
    },

    green: {
        400: "#4ade80",
        100: "#dcfce7"
    },

    red: {
        400: "#f87171",
    },

    rose: {
        400: "#fb7185",
        100: "#ffe4e6"
    },

    bg: {
        'light-primary': '#E5E7EB',
        'light-secondary': '#D1D5DB',
        'dark-primary': '#1F2937',
        'dark-secondary': '#111827'
    }
};

const fontSizes = ['0.85rem', '1rem', '1.15rem', '1.25rem', '1.5rem', '1.75rem', '2rem'];

const fontWeights = [200, 300, 500, 600, 700, 800];

const lineHeights = [1, 1.2, 1.5];

const radii = ["0.25rem", "0.5rem", "0.75rem", "1rem"];

const z = {
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
};

let theme = {
    colors,

    color: {
        primary: colors.amber[400],
        secondary: colors.gray[200],
        success: colors.green[400],
        error: colors.red[400]
    },

    fontSizes,

    font: {
        xs: fontSizes[0],
        sm: fontSizes[1],
        md: fontSizes[3],
        lg: fontSizes[5],
        primary: colors.white[900],
        secondary: colors.gray[400],
        normal: fontWeights[1],
        semibold: fontWeights[3],
        bold: fontWeights[5]
    },

    lineHeight: {
        normal: lineHeights[0],
        title: lineHeights[1],
        para: lineHeights[2]
    },

    border: {
        rounded: radii[0],
        roundedMd: radii[1],
        roundedLg: radii[2],
        roundedXl: radii[3],
    },

    bgColor: {
        primary: colors.bg["dark-primary"],
        secondary: colors.bg["dark-secondary"]
    },

    z,
};

export { theme };
