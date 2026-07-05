module.exports = {
  user: "3b4h",
  host: "ebahhh",

  info: [
    { key: "User", value: "3b4h", color: "red" },
    { key: "OS", value: "Debian · Arch Linux", color: "red" },
    { key: "Shell", value: "Bash · Zsh", color: "red" },
    {
      key: "Editor",
      value: "VSCode · IntelliJ IDEA · Neovim · Zed",
      color: "red",
    },

    {
      key: "Languages",
      value: "Java · JavaScript · Bash",
      color: "red",
    },

    {
      key: "Frameworks",
      value: "Spring Boot · React · Tailwind CSS",
      color: "red",
    },

    {
      key: "Databases",
      value: "MySQL",
      color: "red",
    },

    {
      key: "Networking",
      value: "Cisco · Ubiquiti",
      color: "red",
    },

    {
      key: "Security Tools",
      value: "Nmap · Netcat · Wireshark · Metasploit",
      color: "red",
    },

    {
      key: "Version Control",
      value: "Git · GitHub",
      color: "red",
    },

    {
      key: "Certifications",
      value: "Cisco Networking Fundamentals · Introduction to Cybersecurity",
      color: "red",
    },

    {
      key: "Learning",
      value: "CCNA · Routing · Offensive Security",
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
