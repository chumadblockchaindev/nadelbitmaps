import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, MessageCircle, Ruler } from "lucide-react";
import BillboardGallery from "@/components/BillboardGallery";
import { fetchInventoryById, WHATSAPP_BOOKING_NUMBER } from "@/lib/inventory";

interface BillboardDetailPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ status?: string }>;
}

export default async function BillboardDetailPage({
  params,
  searchParams,
}: BillboardDetailPageProps) {
  const { id } = await params;
  const { status } = await searchParams;

  const billboard = await fetchInventoryById(id);

  if (!billboard) {
    notFound();
  }

  const isAvailable = status === "available";

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in booking this billboard space:\n${billboard.location}\nType: ${billboard.type} (${billboard.subtype})\nSize: ${billboard.size}\nRef: #${id}`
  );
  const whatsappHref = `https://wa.me/${WHATSAPP_BOOKING_NUMBER}?text=${whatsappMessage}`;

  return (
    <main className="relative w-full bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Link
          href="/outdoor-advertising/billboards"
          className="mb-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-gray-500 transition-colors hover:text-[#DA1C21]"
        >
          <ArrowLeft size={14} />
          Back to Billboards
        </Link>

        <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
          <BillboardGallery images={[billboard.imageUrl]} alt={billboard.location} />

          <div>
            {status && (
              <span
                className={`mb-4 inline-flex rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] ${
                  isAvailable ? "bg-emerald-500 text-white" : "bg-[#0A0A0A]/80 text-white"
                }`}
              >
                {status}
              </span>
            )}

            <h1 className="mb-4 flex items-start gap-3 text-3xl font-black uppercase leading-tight tracking-[0.04em] text-[#0A0A0A] sm:text-4xl">
              <MapPin size={28} className="mt-1 shrink-0 text-[#DA1C21]" />
              <span>{billboard.location}</span>
            </h1>

            <div className="mb-8 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
              <span className="rounded-full bg-gray-100 px-4 py-2 capitalize">
                {billboard.type}
              </span>
              <span className="rounded-full bg-gray-100 px-4 py-2 capitalize">
                {billboard.subtype}
              </span>
              <span className="flex items-center gap-1 rounded-full bg-gray-100 px-4 py-2">
                <Ruler size={14} />
                {billboard.size}
              </span>
            </div>

            <p className="mb-8 text-sm leading-relaxed text-gray-600">
              Reach thousands of daily commuters and residents with a premium{" "}
              {billboard.subtype} {billboard.type} placement at this location. Chat
              with our team on WhatsApp to confirm availability, pricing, and
              booking details.
            </p>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#DA1C21] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#0A0A0A]"
            >
              <MessageCircle size={18} />
              Book on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
