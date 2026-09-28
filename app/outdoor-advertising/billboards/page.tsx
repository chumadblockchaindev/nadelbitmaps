import AvailableBillboards from '@/components/AvailableBillboards'
import ConnectWithUs from '@/components/ConnectWithUs'
import SearchBillboard from '@/components/SearchBillboard'
import ServicesAbout from '@/components/ServicesAbout'
import ServicesGallery from '@/components/ServicesGallery'
import ServicesHero from '@/components/ServicesHero'

const page = () => {
  return (
    <>
      <ServicesHero
        title="OOH Billboards"
        category="Signage Solutions"
        categorySlug="signage-solutions"
        description="Put your message where the world can't miss it — bold billboards, strategic placements, maximum reach."
      />
      <ServicesAbout
        title="OOH Billboards"
        subtitle="Bold. Strategic. Unmissable."
        body="Our outdoor billboard solutions deliver high-impact visibility in the busiest areas of Lagos and beyond. From design to deployment, we handle every aspect to ensure your message reaches the right audience at the right time."
        highlights={[
          "Custom billboard design",
          "Strategic location planning",
          "Permitting & logistics",
          "Real-time campaign tracking",
        ]}
        image="/billboard.jpg"
        stat={[
          { value: "100+", label: "Campaigns Deployed" },
          { value: "10yr", label: "Experience" },
        ]}
        reverse={false}
       />
       <ServicesGallery
        title="Billboard Projects"
        subtitle="Bold placements across Lagos & beyond"
        ctaHref="/gallery"
        images={[
          { src: "/electric-billboard.jpg", caption: "Lekki Expressway Billboard", tag: "Featured" },
          { src: "/electric-billboard2.jpg", caption: "Victoria Island Hoarding" },
          { src: "/electric-billboard3.jpg", tag: "2024" },
          { src: "/electric-billboard4.jpg", caption: "Ikeja Along Gantry" },
          { src: "/electric-billboard5.jpg" },
          { src: "/electric-billboard6.jpg", caption: "Apapa Bridge Banner" },
          { src: "/electric-billboard7.jpg" },
          ]}
      />
      <SearchBillboard />
      <AvailableBillboards />
      <ConnectWithUs />
    </>
  )
}

export default page