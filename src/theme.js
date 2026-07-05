module.exports = {
  theme: {
    bg: "#0a0a0a", // terminal bg
    border: "#0a0a0a", // card border

    palette: {
      text: "#cdd6f4",
      subtext: "#6c7086",
      sep: "#45475a",

      red: "#dc2626",
    },

    swatches: {
      normal: [
        "#454758",
        "#E590A8",
        "#B3E1A7",
        "#F5E3B5",
        "#92B3F4",
        "#EDC4E5",
        "#A5E0D5",
        "#A7ADC6",
      ],
      bright: [
        "#595B6E",
        "#E37E99",
        "#9BD692",
        "#E7D499",
        "#7FA7F6",
        "#E8B1DB",
        "#87D4CA",
        "#BBC2DC",
      ],
    },
  },

  font: {
    import:
      "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap",
    family:
      "'JetBrainsMono Nerd Font', 'JetBrains Mono', 'Courier New', monospace",
    size: 13,
    keyWeight: 600,
    charRatio: 0.602,
  },

  layout: {
    width: 820,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 36,
    paddingBottom: 36,
    columnGap: 32,
    lineHeight: 19,
  },
};
