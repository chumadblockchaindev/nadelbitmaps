import ConnectWithUs from '@/components/ConnectWithUs'
import ServicesAbout from '@/components/ServicesAbout'
import ServicesGallery from '@/components/ServicesGallery'
import ServicesHero from '@/components/ServicesHero'

const page = () => {
  return (
    <>
       <ServicesHero
        title="Fabric Branding"
        category="Branding"
        categorySlug="branding"
        description="Custom fabric branding solutions that elevate your team's appearance and reinforce your brand identity."
      />
      <ServicesAbout
        title="Fabric Branding"
        subtitle="Wear your brand with pride."
        body="Our fabric branding services offer a unique way to showcase your brand identity through custom apparel and textiles. From embroidered uniforms to branded fabric banners, we create high-quality solutions that turn your team and space into walking billboards for your brand."
        highlights={[
          "Custom apparel design",
          "Branded fabric banners",
          "Bulk order discounts",
          "Fast turnaround times",
        ]}
        image="/img/fabric-branding.jpg"
        stat={[
          { value: "500+", label: "Items Branded" },
          { value: "10yr", label: "Experience" },
          { value: "99%", label: "Customer Satisfaction" }
        ]}
        reverse={false}
       />
       <ServicesGallery 
        title="Fabric Branding Projects"
        subtitle="Branded apparel and textiles that make an impact"
        ctaHref="/gallery"
        images={[
          { src: "/img/fb1.jpg", caption: "Custom Embroidered Uniforms for Corporate Team" },
          { src: "/img/fb2.jpg", caption: "Branded Fabric Banners for Event Promotion" },
          { src: "/img/fb3.jpg", caption: "Custom Branded T-Shirts for Sports Team" },
          { src: "/img/fb4.jpg", caption: "Personalized Fabric Tote Bags for Giveaway" },
          { src: "/img/fb5.jpg", caption: "Embroidered Polo Shirts for Retail Staff" },
        ]}
       />
       <ConnectWithUs />
    </>
  )
}

export default page