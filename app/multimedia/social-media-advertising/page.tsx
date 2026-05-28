import ConnectWithUs from '@/components/ConnectWithUs'
import ServicesAbout from '@/components/ServicesAbout'
import ServicesGallery from '@/components/ServicesGallery'
import ServicesHero from '@/components/ServicesHero'
import React from 'react'

const page = () => {
  return (
    <>
       <ServicesHero
        title="Social Media Advertising"
        category="Multimedia"
        categorySlug="multimedia"
        description="Engage your audience on social platforms with targeted ads that drive results."
      />
      <ServicesAbout
        title="Social Media Advertising"
        subtitle="Targeted. Engaging. Effective."
        body="Our social media advertising services help you connect with your audience on platforms like Facebook, Instagram, Twitter, and LinkedIn. We create targeted ad campaigns that drive engagement, increase brand awareness, and deliver measurable results."
        highlights={[
          "Custom ad strategy",
          "Creative content development",
          "Audience targeting & segmentation",
          "Performance tracking & optimization",
        ]}
        image="/img/social-media-advertising.jpg"
        stat={[
          { value: "200+", label: "Campaigns Managed" },
          { value: "10yr", label: "Experience" },
        ]}
        reverse={false}
       />
       <ServicesGallery
        title="Social Media Advertising Campaigns"
        subtitle="Engaging content that connects with your audience"
        ctaHref="/gallery"
        images={[
          { src: "/img/sma1.jpg", caption: "Facebook Ad Campaign for Retail Brand" },
          { src: "/img/sma2.jpg", caption: "Instagram Story Ads for Food Service" },
          { src: "/img/sma3.jpg", caption: "LinkedIn Sponsored Content for B2B" },
          { src: "/img/sma4.jpg", caption: "Twitter Promoted Tweets for Event Promotion" },
          { src: "/img/sma5.jpg", caption: "YouTube Video Ads for Product Launch" },
        ]}
      />
      <ConnectWithUs />
    </>
  )
}

export default page