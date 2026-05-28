import ConnectWithUs from '@/components/ConnectWithUs'
import ServicesAbout from '@/components/ServicesAbout'
import ServicesGallery from '@/components/ServicesGallery'
import ServicesHero from '@/components/ServicesHero'
import React from 'react'

const page = () => {
  return (
    <>
       <ServicesHero
        title="Video Coverage"
        category="Multimedia"
        categorySlug="multimedia"
        description="Capture your events and activities with professional video coverage that tells your story."
      />
        <ServicesAbout
          title="Video Coverage"
           subtitle="Professional. Engaging. Memorable."
           body="Our video coverage services provide high-quality recordings of your events, activities, and projects. Whether it's a corporate event, community gathering, or behind-the-scenes footage, we capture the moments that matter and create compelling videos that resonate with your audience."
           highlights={[
              "Event coverage",
              "Project documentation",
              "Promotional video production",
              "Post-production editing",
            ]}
            image="/img/video-coverage.jpg"
            stat={[
              { value: "100+", label: "Videos Produced" },
              { value: "10yr", label: "Experience" },
            ]}
            reverse={false}
       />
       <ServicesGallery 
        title="Video Coverage Projects"
        subtitle="Capturing moments that matter"
        ctaHref="/gallery"
        images={[
          { src: "/img/vc1.jpg", caption: "Corporate Event Video Coverage" },
          { src: "/img/vc2.jpg", caption: "Community Gathering Video Documentation" },
          { src: "/img/vc3.jpg", caption: "Behind-the-Scenes Project Footage" },
          { src: "/img/vc4.jpg", caption: "Promotional Video Production for Product Launch" },
          { src: "/img/vc5.jpg", caption: "Event Highlights Video for Conference" },
        ]}
       />
       <ConnectWithUs />
    </>
  )
}

export default page