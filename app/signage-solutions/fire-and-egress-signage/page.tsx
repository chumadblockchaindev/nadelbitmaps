import ConnectWithUs from '@/components/ConnectWithUs'
import ServicesAbout from '@/components/ServicesAbout'
import ServicesGallery from '@/components/ServicesGallery'
import ServicesHero from '@/components/ServicesHero'
import React from 'react'

const page = () => {
  return (
    <>
       <ServicesHero
        title="Fire and Egress Signage"
        category="Signage Solutions"
        categorySlug="signage-solutions"
        description="From wayfinding to fire egress, we design signage that guides, informs, and commands attention."
      />
        <ServicesAbout
          title="Fire and Egress Signage"
           subtitle="Safety first. Style always."
           body="Our fire and egress signage solutions are designed to meet the highest safety standards while seamlessly integrating with your space — ensuring clear guidance during emergencies without compromising on aesthetics."
           highlights={[
              "NFPA & OSHA compliant",
              "Custom materials & finishes",
              "Site survey & planning included",
              "Indoor & outdoor solutions",
            ]}
            image="/img/fire-egress.jpg"
            stat={[
              { value: "150+", label: "Projects Done" },
              { value: "10yr", label: "Experience" },
            ]}
            reverse={false}
      />
      <ServicesGallery
        title="Fire & Egress Signage Projects"
        subtitle="Clear, compliant, and custom-designed"
        ctaHref="/gallery"
        images={[
          { src: "/img/fe1.jpg", caption: "Hospital Fire Exit Sign" },
          { src: "/img/fe2.jpg", caption: "Office Building Egress Pathway" },
          { src: "/img/fe3.jpg", caption: "Retail Mall Fire Safety Signage" },
          { src: "/img/fe4.jpg", caption: "Warehouse Exit Route Markings" },
          { src: "/img/fe5.jpg", caption: "Educational Facility Fire Signage" },
        ]}
      />
      <ConnectWithUs />
    </>
  )
}

export default page