import ConnectWithUs from '@/components/ConnectWithUs'
import ServicesAbout from '@/components/ServicesAbout'
import ServicesGallery from '@/components/ServicesGallery'
import ServicesHero from '@/components/ServicesHero'
import React from 'react'

const page = () => {
  return (
    <>
       <ServicesHero
        title="Mobile Billboards"
        category="Signage Solutions"
        categorySlug="signage-solutions"
        description="Put your message where the world can't miss it — bold billboards, strategic placements, maximum reach."
      />
      <ServicesAbout
        title="Mobile Billboards"
        subtitle="Bold. Mobile. Unmissable."
        body="Our mobile billboard solutions take your advertising on the road, delivering high-impact visibility in the busiest areas of Lagos and beyond. From design to deployment, we handle every aspect to ensure your message reaches the right audience at the right time."
        highlights={[
          "Custom billboard design",
          "Strategic route planning",
          "Permitting & logistics",
          "Real-time campaign tracking",
        ]}
        image="/img/mobile-billboard.jpg"
        stat={[
          { value: "100+", label: "Campaigns Deployed" },
          { value: "10yr", label: "Experience" },
        ]}
        reverse={false}
       />
       <ServicesGallery
        title="Mobile Billboard Projects"
        subtitle="Bold placements across Lagos & beyond"
        ctaHref="/gallery"
        images={[
          { src: "/img/mb1.jpg", caption: "Lekki Expressway Mobile Billboard", tag: "Featured" },
          { src: "/img/mb2.jpg", caption: "Victoria Island Mobile Hoarding" },
          { src: "/img/mb3.jpg", tag: "2024" },
          { src: "/img/mb4.jpg", caption: "Ikeja Mobile Billboard Along Gantry" },
          { src: "/img/mb5.jpg" },
          { src: "/img/mb6.jpg", caption: "Apapa Bridge Mobile Banner" },
          { src: "/img/mb7.jpg" },
        ]}
      />
      <ConnectWithUs />
    </>
  )
}

export default page