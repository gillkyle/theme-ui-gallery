// src/gatsby-plugin-theme-ui/components.js
import Prism from "@theme-ui/prism"

export default {
  pre: props => props.children,
  code: Prism,
}
