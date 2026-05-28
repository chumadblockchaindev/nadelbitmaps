import ConnectWithUs from '@/components/ConnectWithUs'
import ServicesAbout from '@/components/ServicesAbout'
import ServicesGallery from '@/components/ServicesGallery'
import ServicesHero from '@/components/ServicesHero'
import React from 'react'

const page = () => {
  return (
    <>
       <ServicesHero
        title="Cap and Mug Branding"
        category="Branding"
        categorySlug="branding"
        description="Custom fabric branding, caps, mugs, and merchandise that turn your team into walking billboards."
      />
        <ServicesAbout
          title="Cap and Mug Branding"
           subtitle="Wear your brand with pride."
           body="Our cap and mug branding solutions offer a unique way to showcase your brand identity. From custom embroidered caps to personalized mugs, we create high-quality merchandise that turns your team and customers into walking billboards for your brand."
            highlights={[
              "Custom cap design",
              "Personalized mug branding",
              "Bulk order discounts",
              "Fast turnaround times",
            ]}
            image="/branded-cap.jpg"
            stat={[
              { value: "500+", label: "Items Branded" },
              { value: "10yr", label: "Experience" },
              { value: "99%", label: "Customer Satisfaction" }
            ]}
            reverse={false}
       />
       <ServicesGallery
        title="Cap & Mug Branding Projects"
        subtitle="Branded merchandise that makes an impact"
        ctaHref="/gallery"
        images={[
          { src: "/branded-cap.jpg", caption: "Custom Embroidered Caps for Corporate Team" },
          { src: "/branded-bag.jpg", caption: "Personalized Mugs for Employee Gifts" },
          { src: "/img/cm3.jpg", caption: "Branded Caps for Sports Team" },
          { src: "/img/cm4.jpg", caption: "Custom Mugs for Promotional Giveaway" },
          { src: "/img/cm5.jpg", caption: "Embroidered Caps for Event Staff" },
        ]}
       />
       <ConnectWithUs />
    </>
  )
}

export default page