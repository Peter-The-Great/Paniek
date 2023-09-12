import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoDiscord, IoLogoGithub, IoLogoReddit } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.jpg'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container mt={4}>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Paniek
          </Heading>
          <p>PolyMath ( Software Engingeer / Professional Movie critic (JK) / Jazz Fan / Video-Editor / OSINT / Games Enjoyer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/links/Emblem.png"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Paniek a student and developer based in The hague, with a
          passion for programming and other stuff. I am currently studying at The Hague University of Applied Sciences (THUAS).
          My hobbies are playing video games, making content for youtube, piano, developing software, OSINT and more importantly, learning new things.
          I like to make content to not only improve my editing skills,
          but also to work on my writing &quot;
          <Link
            as={NextLink}
            href="https://www.youtube.com/channel/UCw8xAVInc_-Uj9tsPSQkVHA"
            passHref
            target="_blank"
          >
            My Youtube Channel
          </Link>
          &quot; with more than 30 subscribers.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}    
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Delft, Nederland.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed Highschool (VMBO-TL) at College St. Paul
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Worked at my first job at my local surfclub (Surfclub Dreams Ter Heijde)
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Worked at the national video game museum (Zoetermeer)
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at PixelDeluxe (Internship Software Developer)
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Worked at MIMM B.V. (Internship Software Developer)
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Completed my MBO 4 degree at the Grafisch Lyceum Rotterdam (Media Developer)
        </BioSection>
        <BioSection>
          <BioYear>2023 to present</BioYear>
          Student at the Hague University of Applied Sciences (HBO-ICT)
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Surfing, Video Games, Jazz-fusion, Movies, Anime, Manga Playing Piano, AI, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Peter-The-Great" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple500"
                leftIcon={<IoLogoGithub />}
              >
                @Peter-The-Great
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://discord.com/app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple500"
                leftIcon={<IoLogoDiscord />}
              >
                @Paniek#5537
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/Pimmetje_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple500"
                leftIcon={<IoLogoTwitter />}
              >
                @Pimmetje_
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.reddit.com/user/pimmetje_paniek" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple500"
                leftIcon={<IoLogoReddit />}
              >
                @pimmetje_paniek
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UCw8xAVInc_-Uj9tsPSQkVHA"
            thumbnail={thumbYouTube}
            title={"YouTube Channel"}
          >
            My YouTube channel (&gt;40 subs)
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/posts"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="purple500"
          >
            Popular posts
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
