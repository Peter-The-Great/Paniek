import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import halfmoon from '../public/images/works/halfmoon.png'
import glr from '../public/images/works/stage-orgineel.png'
import pindah from '../public/images/works/pindah.png'
import pixel from '../public/images/works/pixel.png'

const Works = () => (
  <Layout mt={5} title="Works">
    <Container mt={4}>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="glr" thumbnail={glr} title="GLR Stage Website">
            This is an application i made with a few other student in order to make the process of finding a intership easier for students.
            Its not much but it was a fun project to work on.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="pindah"  thumbnail={pindah} title="Pindah">
            A magazine about Dutch Indonesian culture. I was responsible for the software that collects subscription fees. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="halfmoon" title="Halfmoon" thumbnail={halfmoon}>
            Front-end framework with a built-in dark mode and full customizability using CSS variables; great for building dashboards and tools
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="pixeldeluxe"
            title="Pixel Deluxe"
            thumbnail={pixel}
          >
            A web development company i worked at for 4 months helping them develop websites for different clients using CraftCMS 
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'