import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Steps from "@/components/Steps";
import ReviewCard from "@/components/ReviewCard";
import BrandMarquee from "@/components/BrandMarquee";
import ScrollReveal from "@/components/ScrollReveal";
import QuoteWizard from "@/components/QuoteWizard";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import Footer from "@/components/Footer";
import { products } from "@/content/products";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Home, CheckCircle, Phone, Clock, Award, Smartphone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import productRollerImg from "@/assets/product-roller.jpg";
import productZebraImg from "@/assets/product-zebra.jpg";
import productHoneycombImg from "@/assets/product-honeycomb.jpg";
import productRomanImg from "@/assets/product-roman.jpg";
import productExteriorImg from "@/assets/product-exterior.jpg";
import productAwningImg from "@/assets/product-awning.jpg";

const Index = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title="Motorized Blinds & Smart Shading"
        subtitle="We manufacture, program, and install motorized window coverings for homes and businesses. Voice control, schedules, energy savings."
      />

      {/* Stats Bar */}
      <section className="py-12 glass border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5,000+", label: "Installations" },
              { number: "15+", label: "Years Experience" },
              { number: "4.9/5", label: "Customer Rating" },
              { number: "100%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Smart Shading Products
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Every product is custom-manufactured, motorized, and compatible with your smart home
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product, index) => {
              const productImages = [
                productRollerImg,
                productZebraImg,
                productHoneycombImg,
                productRomanImg,
                productExteriorImg,
                productAwningImg
              ];
              
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <ProductCard 
                    product={product}
                    imageSrc={productImages[index]}
                  />
                </ScrollReveal>
              );
            })}
          </div>
          <ScrollReveal delay={0.6}>
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild className="magnetic">
                <a href="/products">View All Products</a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <BrandMarquee />

      {/* Why Choose Us */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose MB&M?
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                California expertise, premium quality, and unmatched service
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Home, 
                title: "SoCal & Vegas Focused", 
                description: "Serving LA, OC, SD, Coachella Valley & Las Vegas with local expertise" 
              },
              { 
                icon: Shield, 
                title: "Premium Motors", 
                description: "Somfy & Lutron motors for whisper-quiet, reliable operation" 
              },
              { 
                icon: Zap, 
                title: "Fast Turnaround", 
                description: "Quick manufacturing & installation—typically 2-4 weeks" 
              },
              { 
                icon: Award, 
                title: "Price-Match Pledge", 
                description: "We'll beat any competitor's quote by 10%—guaranteed" 
              },
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="glass rounded-2xl p-6 hover:glass-heavy transition-all hover:glow-soft"
                >
                  <feature.icon className="h-12 w-12 text-brand mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted leading-relaxed">{feature.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                From initial consultation to ongoing support, we're with you every step
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { 
                number: "1", 
                title: "Measure", 
                description: "Precision in-home measurement and consultation" 
              },
              { 
                number: "2", 
                title: "Manufacture", 
                description: "Custom production to your exact specifications" 
              },
              { 
                number: "3", 
                title: "Install", 
                description: "Expert installation by certified technicians" 
              },
              { 
                number: "4", 
                title: "Configure", 
                description: "Smart home setup and programming" 
              },
              { 
                number: "5", 
                title: "Support", 
                description: "Ongoing local service and assistance" 
              },
            ].map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="glass rounded-2xl p-6 hover:glass-heavy transition-all text-center group">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by SoCal & Vegas Homeowners</h2>
              <p className="text-lg text-muted">Real experiences from customers across our service areas</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Sarah M.", 
                city: "West Hollywood, CA", 
                rating: 5, 
                review: "The zip-track blinds transformed our patio into a year-round space. Installation was flawless and the smart home integration works perfectly." 
              },
              { 
                name: "David K.", 
                city: "Newport Beach, CA", 
                rating: 5, 
                review: "MB&M handled our whole-home motorization project with incredible professionalism. The shades are beautiful and the Alexa integration is seamless." 
              },
              { 
                name: "Jennifer L.", 
                city: "Las Vegas, NV", 
                rating: 5, 
                review: "Finally, outdoor blinds that can handle Vegas winds! The automatic sensors give us peace of mind, and the quality is outstanding." 
              },
              { 
                name: "Michael T.", 
                city: "San Diego, CA", 
                rating: 5, 
                review: "We love our honeycomb shades! They've noticeably reduced our energy bills and the motorization makes them so convenient. Great investment." 
              },
              { 
                name: "Amanda R.", 
                city: "Pasadena, CA", 
                rating: 5, 
                review: "The team was professional from start to finish. Our dual shades look stunning and the light control is exactly what we needed for our home office." 
              },
              { 
                name: "Robert & Lisa C.", 
                city: "Palm Desert, CA", 
                rating: 5, 
                review: "Being able to control all our shades from our phone while we're away is fantastic. The local service and warranty support give us confidence." 
              },
            ].map((review, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <ReviewCard {...review} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 glow-ring-hover opacity-30" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Request a Free In-Home Consultation
            </h2>
            <p className="text-lg text-muted mb-8">
              Get expert advice, accurate measurements, and a detailed quote all at no cost
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <QuickQuoteForm />
          </ScrollReveal>
        </div>
      </section>

      <QuoteWizard open={quoteOpen} onOpenChange={setQuoteOpen} />
      <Footer />
    </div>
  );
};

export default Index;
