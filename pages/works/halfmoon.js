import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Halfmoon">
    <Container mt={4}>
      <Title>
        Halfmoon <Badge>2020</Badge>
      </Title>
      <P>
      Halfmoon is a responsive front-end framework that is great for building dashboards and tools.
      Built-in dark mode, full customizability using CSS variables (around 1,500 variables, learn more), optional JavaScript library (no jQuery),
      Bootstrap like classes, and cross-browser compatibility (including IE11).
      </P>
      <P style={{ fontWeight: 'bold' }}>I helped a little bit with adding a few features</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.gethalfmoon.com/">
          https://www.gethalfmoon.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Electron, React Native</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/halfmoon.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
