import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="PixelDeluxe">
    <Container>
      <Title>
        Pixel Deluxe <Badge>2021-2022</Badge>
      </Title>
      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/works/pixel.jpg" alt="PixelDeluxe" />
      </SimpleGrid>
      <P>
        Pixeldeluxe is a really cool webdevelopment company in Rotterdam. I worked here for 4 months as a intern. They make websites for a lot of different companies.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.pixeldeluxe.nl/">
          https://www.pixeldeluxe.nl/ 
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Specialised in</Meta>
          <span>CraftCMS, PHP, TailwindCSS</span>
        </ListItem>
        <ListItem>
          <Meta>Where</Meta>
          <span>Boomgaardsstraat 166, Rotterdam</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://craftcms.com/partners/pixeldeluxe">
            <Badge mr={2}>CraftCMS Partners</Badge>
            PixelDeluxe is partner of CraftCMS
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
