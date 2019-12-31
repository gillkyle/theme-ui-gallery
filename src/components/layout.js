/** @jsx jsx */
import { jsx, Styled, useColorMode } from "theme-ui"
import React from "react"
import { Link, parsePath } from "gatsby"
import { Global } from "@emotion/core"
import { Button, Divider, Flex, Box, Heading, Text } from "@theme-ui/components"
import {
  FiAlertCircle,
  FiAirplay,
  FiBookOpen,
  FiCompass,
  FiCopy,
  FiGithub,
  FiTwitter,
} from "react-icons/fi"
import {
  Fonts,
  FontWeights,
  LineHeights,
  FontSizes,
  ColorMode,
  Space,
  Editor,
  Row,
} from "@theme-ui/editor"
import SkipLink from "./skip-link"
import Logo from "./logo"

const StyledRow = ({ children, title }) => (
  <>
    <Row sx={{ mt: `3`, mb: `1` }}>
      <b sx={{ fontSize: `2`, letterSpacing: 1, color: `grayPrimary` }}>
        {title}
      </b>
    </Row>
    <Row sx={{ mb: `3` }}>{children}</Row>
  </>
)

const NavLink = ({ children, to, ...props }) => {
  let parsedPath
  if (typeof window !== `undefined`) {
    parsedPath = parsePath(window.location.pathname)
  }

  return (
    <Link
      to={to}
      {...props}
      activeStyle={{
        color: `primary`,
      }}
      sx={{
        display: `flex`,
        alignItems: `center`,
        color:
          parsedPath && parsedPath.pathname.includes(to) ? `primary` : `text`,
        fontWeight:
          parsedPath && parsedPath.pathname.includes(to) ? `bold` : `regular`,
        textDecoration: `none`,
        px: `3`,
        py: `2`,
        transition: `0.25ms all ease-in-out`,
        borderRadius: `2`,
        "&:hover": {
          bg: `soft`,
        },
      }}
    >
      {children}
    </Link>
  )
}

const modes = ["light", "dark", "deep", "swiss"]

export default ({ children }) => {
  const [mode, setMode] = useColorMode()

  const cycleMode = e => {
    const i = modes.indexOf(mode)
    const next = modes[(i + 1) % modes.length]
    setMode(next)
  }

  return (
    <Styled.root>
      <Global
        styles={{
          "*": {
            boxSizing: "border-box",
            transitionProperty: `background-color, background, margin, padding, line-height, font-size`,
            transitionTimingFunction: `ease-in-out`,
            transitionDuration: `0.3s`,
          },
          // hacky way to target divs in style guide theme
          "#typography": {
            "& > div > div > div > div": {
              fontSize: 28,
            },
            code: {
              backgroundColor: "transparent",
              color: "inherit",
            },
          },
          body: {
            margin: 0,
          },
        }}
      />
      <Helmet>
        <title>Theme UI Gallery</title>
        <meta
          name="description"
          content="Copy and paste-able component structures pre-styled to match your theme"
        />
        <meta
          property="og:image"
          content="https://repository-images.githubusercontent.com/229687702/bb68c000-2b4a-11ea-9479-2b99236c15a9"
        />
      </Helmet>
      <SkipLink>Skip to content</SkipLink>
      <Flex
        sx={{
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Flex
          as="header"
          sx={{
            height: 64,
            px: 3,
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: theme => `1px solid ${theme.colors.border}`,
          }}
        >
          <Flex sx={{ alignItems: "center" }}>
            <Link
              to="/"
              sx={{
                variant: "links.nav",
                "&:hover": {
                  bg: "transparent",
                },
                fontSize: `3`,
                display: `flex`,
                alignItems: `center`,
              }}
            >
              <Logo />
              Theme UI Gallery
            </Link>
          </Flex>
          <Flex
            as={`a`}
            sx={{
              variant: `links.nav`,
              width: `fit-content`,
              display: `flex`,
              alignItems: `center`,
              textTransform: `uppercase`,
              fontWeight: `400`,
              color: `grayPrimary`,
            }}
            href="https://github.com/gillkyle/theme-ui-gallery"
          >
            View Source
            <FiGithub sx={{ ml: 1 }} />
          </Flex>
        </Flex>
        <div
          sx={{
            display: `grid`,
            gridTemplateColumns: `240px 3fr 2fr`,
            justifyContent: "space-between",
            height: `calc(100vh - 64px)`,
          }}
        >
          <Box
            sx={{
              p: `3`,
              borderRight: theme => `1px solid ${theme.colors.border}`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: `space-between`,
              height: `calc(100vh - 64px)`,
              "& *+*": {
                mt: `1`,
              },
            }}
          >
            <div>
              <NavLink to="buttons">
                <FiAirplay sx={{ mr: `1` }} />
                Buttons
              </NavLink>
              <NavLink to="cards">
                <FiCopy sx={{ mr: `1` }} />
                Cards
              </NavLink>
              <NavLink to="navigation">
                <FiCompass sx={{ mr: `1` }} />
                Navigation
              </NavLink>
              <NavLink to="notices">
                <FiAlertCircle sx={{ mr: `1` }} />
                Notices
              </NavLink>
              <Divider />
              <NavLink
                to="style-guide"
                sx={{
                  fontSize: 1,
                  "&::before": {
                    borderTop: `1px solid red`,
                  },
                }}
              >
                <FiBookOpen sx={{ mr: `1` }} />
                View Theme
              </NavLink>
            </div>
            <Text
              sx={{ fontSize: `0`, color: `grayPrimary`, textAlign: `center` }}
            >
              Made by{" "}
              <a
                sx={{ textDecoration: `none` }}
                href="https://twitter.com/gill_kyle"
              >
                @gill_kyle
              </a>
              <FiTwitter sx={{ ml: `1` }} size={8} />
            </Text>
          </Box>
          <Box
            sx={{
              p: `3`,
              bg: `soft`,
              overflowY: `auto`,
              height: `calc(100vh - 64px)`,
            }}
          >
            {children}
          </Box>
          <Box
            sx={{
              position: `relative`,
              borderLeft: theme => `1px solid ${theme.colors.border}`,
              height: `calc(100vh - 64px)`,
            }}
          >
            <Box
              sx={{
                p: `3`,
                height: `100%`,
                overflowY: `scroll`,
              }}
            >
              <Heading>Theme Editor</Heading>
              <Editor
                fontSize={12}
                sx={{
                  "& * > label": {
                    color: `graySecondary`,
                  },
                  "& * > label[for='color-mode']": {
                    display: `none`,
                  },
                  "& * > input": {
                    color: `text`,
                    bg: `background`,
                    borderColor: `border`,
                  },
                  "& * > select": {
                    color: `text`,
                    bg: `background`,
                    borderColor: `border`,
                  },
                  "& *": {
                    borderRadius: `2`,
                  },
                }}
              >
                <Text sx={{ color: `grayPrimary` }}>
                  Editing your theme will update all elements styled on the page
                  by Theme UI.
                </Text>
                <StyledRow title="Fonts">
                  <Fonts
                    sx={{
                      borderRadius: `2`,
                      variant: "@theme-ui/editor.select",
                    }}
                  />
                </StyledRow>
                <StyledRow title="Font Sizes">
                  <FontSizes />
                </StyledRow>
                <StyledRow title="Font Weights">
                  <FontWeights />
                </StyledRow>
                <StyledRow title="Line Heights">
                  <LineHeights />
                </StyledRow>
                <StyledRow title="Color Mode">
                  <Button
                    sx={{
                      py: `1`,
                      px: `2`,
                      fontSize: `1`,
                    }}
                    onClick={cycleMode}
                  >
                    Cycle Colors
                  </Button>
                  <ColorMode />
                </StyledRow>
                <Row sx={{ mt: `3`, mb: `1` }}>
                  <b
                    sx={{
                      fontSize: `2`,
                      letterSpacing: 1,
                      color: `grayPrimary`,
                    }}
                  >
                    Space
                  </b>
                </Row>
                <Row sx={{ mb: 2 }}>
                  <Text sx={{ color: `grayPrimary` }}>
                    Space is used by margin, padding, and CSS grid gaps.
                  </Text>
                </Row>
                <Row sx={{ mb: `3` }}>
                  <Space />
                </Row>
              </Editor>
            </Box>
            <Box
              sx={{
                position: `absolute`,
                p: `3`,
                bg: `background`,
                borderTop: theme => `1px solid ${theme.colors.border}`,
                bottom: 0,
                right: 0,
                left: 0,
                color: `grayPrimary`,
                fontSize: `0`,
              }}
            >
              Edit the Theme to see changes!
            </Box>
          </Box>
        </div>
      </Flex>
    </Styled.root>
  )
}
