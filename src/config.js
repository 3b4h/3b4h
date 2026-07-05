module.exports = {
  user: "3b4h",
  host: "ebahhh",

  info: [
    { key: "User", value: "3b4h", color: "red" },
    { key: "OS", value: "Debian · Arch Linux", color: "red" },
    { key: "Editor", value: " VSCode · IntelliJ · Neovim · Zed", color: "red" },
    {
      key: "Interests",
      value: "Programming · Networking · Cybersecurity",
      color: "red",
    },

    {
      key: "Languages",
      value: "Java · JavaScript · Bash ",
      color: "red",
    },

    {
      key: "Frameworks",
      value: "Springboot · React · Tailwind",
      color: "red",
    },

    { key: "Databases", value: "MySQL · MongoDB", color: "red" },

    {
      key: "Tools",
      value: "Nmap · NetCat · WireShark · Metasploit",
      color: "red",
    },
  ],

  options: {
    blankBetweenGroups: false, // auto-skip line when neighboring items have different colors
    userHostSep: "@",
    showSwatches: true,
  },

  logo: {
    type: "text", // "text" | "image"

    // Config for text logo mode (ascii)
    text: {
      file: "logo.txt",
      color: "sky",
      fontSize: 8,
    },
  },
};
