import ConnectWithUs from '@/components/ConnectWithUs'
import ServicesAbout from '@/components/ServicesAbout'
import ServicesGallery from '@/components/ServicesGallery'
import ServicesHero from '@/components/ServicesHero'
import React from 'react'

const page = () => {
  return (
    <>
       <ServicesHero
        title="Channel Signage"
        category="Signage Solutions"
        categorySlug="signage-solutions"
        description="From wayfinding to fire egress, we design signage that guides, informs, and commands attention."
      />
      <ServicesAbout
        title="Channel Signage"
        subtitle="Built to guide. Designed to impress."
        body="Our channel signage solutions are crafted to provide clear direction and enhance the visual appeal of your space. Whether it's for retail environments, corporate offices, or public facilities, our custom channel signs ensure visitors can navigate with confidence."
        highlights={[
          "Customizable designs",
          "High-visibility materials",
          "Durable construction",
          "Seamless integration"
        ]}
        image="/asaba-mall-signage.jpg"
        stat={[
          { value: "200+", label: "Projects Done" },
          { value: "10yr", label: "Experience" },
        ]}
        reverse={false}
      />
      <ServicesGallery
        title="Channel Signage Projects"
        subtitle="Clear, compliant, and custom-designed"
        ctaHref="/gallery"
        images={[
          { src: "/3d-signage.jpg", caption: "Retail Store Channel Signage" },
          { src: "/channel-signs.jpg", caption: "Corporate Office Wayfinding" },
          { src: "/signage1.jpg", caption: "Hospital Directional Signage" },
          { src: "/signage4.jpg", caption: "Educational Facility Channel Signs" },
          { src: "/signage2.jpg", caption: "Public Building Signage" },
        ]}
      />
      <ConnectWithUs />
    </>
  )
}

export default page