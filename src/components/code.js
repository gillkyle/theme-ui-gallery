/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live"
import * as components from "@theme-ui/components"
import Logo from "../components/logo"

const images = {
  beach:
    "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
}

const scope = {
  jsx,
  Styled,
  Link: props => {
    if (props.activeClassName)
      return <span className={props.activeClassName} {...props} />
    return <span {...props} sx={{ cursor: "pointer" }} />
  },
  Logo,
  ...images,
  ...components,
}

const transformCode = (src, containerSx = ``) =>
  `/** @jsx jsx */\n<div ${containerSx}>${src}</div>`

// night owl theme taken from https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/themes/nightOwl.js
const prismTheme = {
  plain: {
    color: "#d6deeb",
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)",
        fontStyle: "italic",
      },
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: "rgb(173, 219, 103)",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(99, 119, 119)",
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "url"],
      style: {
        color: "rgb(173, 219, 103)",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(214, 222, 235)",
      },
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)",
      },
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "rgb(130, 170, 255)",
      },
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ["punctuation"],
      style: {
        color: "rgb(199, 146, 234)",
      },
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(255, 203, 139)",
      },
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "rgb(127, 219, 202)",
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)",
      },
    },
    {
      types: ["property"],
      style: {
        color: "rgb(128, 203, 196)",
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)",
      },
    },
  ],
}

export const LiveCode = ({ children, preview, containerSx }) => {
  if (preview) {
    return (
      <LiveProvider
        theme={prismTheme}
        code={children}
        scope={scope}
        transformCode={src => transformCode(src, containerSx)}
      >
        <LivePreview />
      </LiveProvider>
    )
  }

  return (
    <LiveProvider
      theme={prismTheme}
      code={children}
      scope={scope}
      transformCode={src => transformCode(src, containerSx)}
    >
      <div
        sx={{
          p: 3,
          bg: `background`,
          borderColor: `#cbd5e0`,
          borderTopLeftRadius: `3`,
          borderTopRightRadius: `3`,
          border: t => `1px solid ${t.colors.border}`,
        }}
      >
        <LivePreview />
        <LiveError
          sx={{
            p: 3,
            fontFamily: "monospace",
            fontSize: 0,
            color: "secondary",
            bg: "highlight",
          }}
        />
      </div>
      <Styled.pre
        sx={{
          mt: 0,
          mb: 3,
          p: 0,
          borderColor: `#cbd5e0`,
          borderBottomLeftRadius: `3`,
          borderBottomRightRadius: `3`,
        }}
      >
        <LiveEditor
          padding={10}
          sx={{
            p: `3`,
            "& > textarea": {
              boxShadow: `0 0 3px red`,
            },
          }}
        />
      </Styled.pre>
    </LiveProvider>
  )
}

export default LiveCode
