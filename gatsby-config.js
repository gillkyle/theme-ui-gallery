module.exports = {
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
      },
    },
    "gatsby-theme-style-guide",
  ],
}
