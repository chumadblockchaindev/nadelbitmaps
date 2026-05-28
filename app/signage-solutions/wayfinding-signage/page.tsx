import ConnectWithUs from '@/components/ConnectWithUs'
import ServicesAbout from '@/components/ServicesAbout'
import ServicesGallery from '@/components/ServicesGallery'
import ServicesHero from '@/components/ServicesHero'
import React from 'react'

const page = () => {
  return (
    <>
       <ServicesHero
        title="Wayfinding Signage"
        category="Signage Solutions"
        categorySlug="signage-solutions"
        description="From wayfinding to fire egress, we design signage that guides, informs, and commands attention."
      />
      <ServicesAbout
        title="Wayfinding Signage"
        subtitle="Built to guide. Designed to impress."
        body="We design and install intuitive wayfinding systems that guide people through complex environments with ease — from hospitals and airports to retail malls and corporate campuses."
        highlights={[
          "ADA & safety compliant",
          "Custom materials & finishes",
          "Site survey & planning included",
          "Indoor & outdoor solutions",
        ]}
        image="/wayfinding.jpg"
        stat={[
          { value: "200+", label: "Projects Done" },
          { value: "12yr", label: "Experience" },
        ]}
        reverse={false}
      />
      <ServicesGallery
        title="Billboard Projects"
        subtitle="Bold placements across Lagos & beyond"
        ctaHref="/gallery"
        images={[
          { src: "/egress.jpg", caption: "Lekki Expressway Billboard", tag: "Featured" },
          { src: "/egress.jpg", caption: "Victoria Island Hoarding" },
          { src: "/egress.jpg", tag: "2024" },
          { src: "/egress.jpg", caption: "Ikeja Along Gantry" },
          { src: "/egress.jpg" },
          { src: "/egress.jpg", caption: "Apapa Bridge Banner" },
          { src: "/egress.jpg" },
        ]}
      />
      <ConnectWithUs />
    </>
  )
}

export default page