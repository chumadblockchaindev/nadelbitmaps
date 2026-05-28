export default function NadelBitmapsLandingPage() {
  const services = [
    {
      title: 'Outdoor Advertising',
      description: 'Billboards, LED displays, transit branding, and strategic outdoor campaigns that capture attention.'
    },
    {
      title: 'Print & Branding',
      description: 'Premium flex printing, banners, business branding, corporate identity, and promotional materials.'
    },
    {
      title: 'Creative Design',
      description: 'Bold visual concepts, campaign creatives, social media graphics, and high-converting brand visuals.'
    }
  ];

  const benefits = [
    'Fast turnaround delivery',
    'Premium quality production',
    'Creative concepts that stand out',
    'Reliable project execution',
    'Affordable branding solutions',
    'Professional customer support'
  ];

  const testimonials = [
    {
      name: 'Kingsley Okafor',
      company: 'Real Estate Consultant',
      quote:
        'NadelBitmaps transformed our outdoor campaign completely. Their execution and attention to detail were exceptional.'
    },
    {
      name: 'Amara Joseph',
      company: 'Fashion Brand Owner',
      quote:
        'From design to print production, everything was clean, fast, and professional. Highly recommended.'
    },
    {
      name: 'Emmanuel Obi',
      company: 'School Administrator',
      quote:
        'Their billboard and branding solutions gave our school a premium and modern appearance.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="px-6 py-20 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              NadelBitmaps Services Ltd
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We Create Branding That Gets Attention.
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              From outdoor advertising to premium print production and visual branding,
              we help businesses become visible, memorable, and impossible to ignore.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl text-sm font-medium hover:opacity-90 transition">
                Get Started
              </button>

              <button className="border border-gray-300 px-8 py-4 rounded-2xl text-sm font-medium hover:bg-gray-100 transition">
                View Services
              </button>
            </div>
          </div>

          <div className="bg-gray-100 rounded-[2rem] p-8 shadow-sm">
            <div className="aspect-[4/3] rounded-[1.5rem] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-900 text-center p-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Bold Ideas. Premium Execution.</h2>
                <p className="text-gray-200">
                  Outdoor Advertising • Printing • Branding • Creative Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 bg-gray-50 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
              Our Services
            </p>
            <h2 className="text-4xl font-bold">Creative Solutions For Modern Brands</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-20 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
              Why Choose Us
            </p>
            <h2 className="text-4xl font-bold mb-6">
              We Help Your Brand Stand Out In Every Space.
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We combine creativity, strategy, and premium production to deliver
              branding solutions that attract attention and build credibility.
            </p>
          </div>

          <div className="grid gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex items-center gap-4"
              >
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <p className="font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 bg-gray-50 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
              Testimonials
            </p>
            <h2 className="text-4xl font-bold">What Clients Say About Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
              >
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  “{testimonial.quote}”
                </p>

                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="px-6 py-20 lg:px-20">
        <div className="max-w-4xl mx-auto bg-white text-slate-900 rounded-[2rem] p-10 lg:p-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
            Stay Connected
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Remarkable Together.
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Subscribe to receive updates, branding tips, and exclusive offers from NadelBitmaps Services Ltd.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-2xl text-black outline-none"
            />

            <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-gray-100 lg:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="font-bold text-xl">NadelBitmaps Services Ltd</h3>

          <p className="text-gray-500 text-sm text-center md:text-right">
            Outdoor Advertising • Printing • Branding • Creative Solutions
          </p>
        </div>
      </footer>
    </div>
  );
}