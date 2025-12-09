import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import Iceberg from '../public/images/contents/iceberg.jpg'
import substack from '../public/images/contents/substack.png'
import radio from '../public/images/contents/radio.jpg'
import ani from '../public/images/contents/ani.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container mt={4}>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Dutch Iceberg Image Part 1"
            thumbnail={Iceberg}
            href="https://www.youtube.com/watch?v=qoxFWlRxdOs"
          />
          <GridItem
            title="Dutch Iceberg Image Part 2 part 1 Yes i Know"
            thumbnail={Iceberg}
            href="https://www.youtube.com/watch?v=9A0S8XLhjgc"
          />
          <GridItem
            title="Discovering the World's Hidden Radio Stations with Radio Garden: A Journey Through Music"
            thumbnail={radio}
            href="https://www.youtube.com/watch?v=S1R5PLA-a3w"
          />
          <GridItem
            title="The Most Underrated YouTube Animator"
            thumbnail={ani}
            href="https://www.youtube.com/watch?v=Zkj1gUCiB4M"
          />
          <GridItem
            title="My Substack is Coming Soon page."
            thumbnail={substack}
            href="https://paniek.substack.com/p/coming-soon"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'