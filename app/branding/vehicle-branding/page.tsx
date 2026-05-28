import ConnectWithUs from '@/components/ConnectWithUs'
import ServicesAbout from '@/components/ServicesAbout'
import ServicesGallery from '@/components/ServicesGallery'
import ServicesHero from '@/components/ServicesHero'
import React from 'react'

const page = () => {
  return (
    <>
        <ServicesHero
        title="Vehicle Branding"
        category="Branding"
        categorySlug="branding"
        description="Transform your fleet into mobile billboards with our custom vehicle branding solutions."
      />
      <ServicesAbout
        title="Vehicle Branding"
        subtitle="Drive your brand forward."
        body="Our vehicle branding services turn your cars, trucks, and vans into powerful marketing tools. From full wraps to subtle decals, we create eye-catching designs that promote your brand wherever you go. Whether you have a single company car or an entire fleet, our custom solutions help you make a lasting impression on the road."
        highlights={[
          "Custom vehicle wrap design",
          "Durable materials for all weather conditions",
            "Professional installation",
            "Fleet branding solutions",
        ]}
        image="/vehicle-branding.jpg"
        stat={[
          { value: "100+", label: "Vehicles Branded" },
          { value: "10yr", label: "Experience" },
            { value: "99%", label: "Customer Satisfaction" }
        ]}
        reverse={false}
       />
       <ServicesGallery
        title="Vehicle Branding Projects"
        subtitle="Branded vehicles that turn heads on the road"
        ctaHref="/gallery"
        images={[
          { src: "/vehicle-branded.jpg", caption: "Full Wrap for Delivery Van" },
          { src: "/vehicle-branding.jpg", caption: "Custom Decals for Company Car" },
          { src: "/vehicle-branding3.jpg", caption: "Fleet Branding for Service Trucks" },
          { src: "/vehicle4.jpg", caption: "Partial Wrap for SUV" },
          { src: "/vehicle5.jpg", caption: "Branded Van for Mobile Business" },
        ]}
       />
       <ConnectWithUs />
    </>
  )
}

export default page