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
  <Layout title="GLR">
    <Container mt={4}>
      <Title>
        GLR Stage <Badge>2020</Badge>
      </Title>
      <P>
      The GLR Stage website was a project that i developed with some fellow students for our GLR intership event. The website is made with bootstrap and PHP using Medoo.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://google.com/404">
          Sadly not available <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Made with</Meta>
          <span><Link href='https://getbootstrap.com/'>Bootstrap</Link>, <Link href="https://medoo.in/">Medoo</Link></span>
        </ListItem>
        <ListItem>
          <Meta>Made By</Meta>
          <span>Me, larsjarred9</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/stage-orgineel.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
