/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Container, Divider, Heading, Text } from "@theme-ui/components"

import Logo from "../components/logo"

export default () => (
  <Container
    sx={{
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      flexDirection: `column`,
      height: `100%`,
    }}
  >
    <Logo sx={{ height: 60, width: 75 }} />
    <Heading sx={{ mb: `3` }} as="h1">
      Theme UI Gallery
    </Heading>
    <Text
      sx={{
        fontSize: `1`,
        mb: `4`,
        color: `text`,
        textAlign: `center`,
        maxWidth: 420,
      }}
    >
      Theme UI is a library for building "consistent, themeable React apps based
      on constraint-based design principles".
      <Divider sx={{ my: `3` }} />
      The <code>@theme-ui/components</code> package contains useful components
      that will automatically be styled by tokens in your Theme UI
      configuration. This site contains pre-built compositions of those
      components as a launchpad to start building your own components using
      Theme UI. You can modify the theme for the site in the editor on the right
      and watch changes propagate across the page.
    </Text>
    <Link sx={{ variant: "links.button" }} to="/buttons">
      Get Started
    </Link>
  </Container>
)
