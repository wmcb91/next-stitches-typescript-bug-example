import tw, { styled } from 'twin.macro'
import { Logo, Button } from '../components'

const Container = styled.div({
  ...tw`flex flex-col items-center justify-center h-screen`,
  variants: {
    hasBackground: {
      true: tw`bg-gradient-to-b from-electric to-ribbon`,
    },
  },
})

const ButtonBox = tw.div`flex flex-col justify-center h-full gap-y-5`

const CustomButtonBox = tw(ButtonBox)`bg-black`

const IndexPage = () => (
  <Container hasBackground>
    <CustomButtonBox>
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
      <Button isSmall>Close</Button>
    </CustomButtonBox>
    <Logo />
  </Container>
)

export default IndexPage
