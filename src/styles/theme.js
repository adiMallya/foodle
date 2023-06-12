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

    bg: {
        'light-primary': '#E5E7EB',
        'light-secondary': '#D1D5DB',
        'dark-primary': '#1F2937',
        'dark-secondary': '#111827'
    }
}

const fontSizes = ['1rem', '1.15rem', '1.25rem', '1.5rem', '1.75rem', '2rem'];

const fontWeights = [200, 300, 500, 600, 700, 800];

const lineHeights = [1, 1.2, 1.5];

let theme = {
    colors,

    color: {
        primary: colors.amber[400],
        secondary: colors.gray[200]
    },

    fontSizes,

    fontColor: {
        primary: colors.white[900],
        secondary: colors.gray[400]
    },

    fontWeight: {
        normal: fontWeights[1],
        semibold: fontWeights[3],
        bold: fontWeights[5]
    },

    lineHeight: {
        normal: lineHeights[0],
        title: lineHeights[1],
        para: lineHeights[2]
    },

    bgColor: {
        primary: colors.bg["dark-primary"],
        secondary: colors.bg["dark-secondary"]
    }
}

export { theme };
