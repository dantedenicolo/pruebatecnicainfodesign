import { Carousel, Footer, HeaderLanding } from '../../components'

const Landing = () => {
  return (
    <div>
      <HeaderLanding />
      <div className='flex items-center justify-center h-screen'>
        <Carousel />
      </div>
      <Footer />
    </div>
  )
}

export default Landing
