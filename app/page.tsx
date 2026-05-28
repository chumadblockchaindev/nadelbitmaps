import ConnectWithUs from '@/components/ConnectWithUs'
import HomeHero from '@/components/HomeHero'
import ProductsServicesSlider from '@/components/ProductsAndServices'
import SearchBillboard from '@/components/SearchBillboard'
import WhatClientsSay from '@/components/WhatClientsSay'
import WhoWeAre from '@/components/WhoWeAre'

const page = () => {
  return (
    <main>
      {/* <HeroSlider /> */}
      <HomeHero />
      <WhoWeAre />
      <SearchBillboard />
      <ProductsServicesSlider />
      <WhatClientsSay />
      <ConnectWithUs />
    </main>
  )
}

export default page