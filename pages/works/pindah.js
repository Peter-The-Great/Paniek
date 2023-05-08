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
  <Layout title="Pindah">
    <Container mt={4}>
      <Title>
        Pindah <Badge>2022</Badge>
      </Title>
      <P>
      With Pindah, I made software that can help publishers automatically collect montly subscription fees from their subscribers.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.pindah-magazine.nl/">
          https://www.pindah-magazine.nl/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>Dutch/Indonesian</span>
        </ListItem>
        <ListItem>
          <Meta>Software made in</Meta>
          <span>Filemaker</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/pindah.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
