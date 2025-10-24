import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { getCityInfo } from "@/content/cities";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Check, ArrowRight, Sun, Shield, Zap, Award, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import NotFound from "./NotFound";
import productRollerImg from "@/assets/product-roller.jpg";
import productHoneycombImg from "@/assets/product-honeycomb.jpg";
import heroModernImg from "@/assets/hero-modern.jpg";

const CityPage = () => {
  const { cityName } = useParams<{ cityName: string }>();
  
  if (!cityName) {
    return <NotFound />;
  }

  const formattedCityName = cityName
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  
  const cityInfo = getCityInfo(formattedCityName);

  if (!cityInfo) {
    return <NotFound />;
  }

  const benefits = [
    { icon: Sun, title: "UV Protection", description: "Shield against intense sun exposure" },
    { icon: Shield, title: "Energy Efficient", description: "Reduce cooling costs" },
    { icon: Zap, title: "All Weather", description: "Handles heat, wind & dust" }
  ];

  const features = [
    { icon: Check, title: "Perfect Fit", description: "Custom measured for your windows" },
    { icon: Clock, title: "Fast Install", description: "2-4 weeks from measurement" },
    { icon: Award, title: "Warranty", description: "Full coverage on all products" },
    { icon: MapPin, title: "Local Service", description: "SoCal & Vegas based team" }
  ];

  const recommendedProducts = [
    {
      name: "Motorized Roller Shades",
      tagline: "Sleek, minimal, and effortlessly controlled",
      description: "Our most popular interior solution combines clean aesthetics with whisper-quiet motorization. Perfect for modern homes that demand both style and smart functionality.",
      image: productRollerImg,
      link: "/products"
    },
    {
      name: "Honeycomb Shades",
      tagline: "Energy efficiency meets smart design",
      description: "Cellular construction traps air for superior insulation. Reduce heating and cooling costs while enjoying whisper-quiet motorized operation.",
      image: productHoneycombImg,
      link: "/products"
    }
  ];

  const faqs = [
    {
      q: `Do you serve all neighborhoods in ${formattedCityName}?`,
      a: `Yes! We provide service throughout ${formattedCityName} and the surrounding ${cityInfo.region} area. Call us at ${cityInfo.phone} to confirm service in your specific neighborhood.`
    },
    {
      q: `What's the typical timeline for a project in ${formattedCityName}?`,
      a: `Most ${formattedCityName} projects are completed within 2-4 weeks from measurement to installation.`
    },
    {
      q: "Is there a charge for the consultation?",
      a: `No. We provide free in-home consultations and measurements throughout ${cityInfo.region}, including ${formattedCityName}.`
    },
    {
      q: `What makes motorized shades ideal for ${formattedCityName}?`,
      a: `${formattedCityName}'s climate (${cityInfo.climate.toLowerCase()}) makes motorized shades perfect for energy efficiency, UV protection, and smart home integration.`
    },
    {
      q: "Do you offer smart home integration?",
      a: "Absolutely! Our motorized shades work seamlessly with Google Home, Amazon Alexa, Apple HomeKit, and other popular smart home systems."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroModernImg} 
            alt={`Motorized blinds in ${formattedCityName}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 glass-heavy backdrop-blur-xl">
              {cityInfo.region}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Motorized Blinds in {formattedCityName}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {cityInfo.climate}. Perfect for smart shading solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${cityInfo.phone.replace(/\D/g, '')}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {cityInfo.phone}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Motorized Shading */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Perfect for {formattedCityName} Climate
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Why Motorized Shading for {formattedCityName}?
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass rounded-2xl p-8 text-center hover:glass-heavy transition-all hover:glow-soft"
                >
                  <benefit.icon className="h-12 w-12 text-brand mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transform Your Home */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transform Your {formattedCityName} Home
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="glass rounded-2xl p-6 text-center hover:glass-heavy transition-all">
                  <feature.icon className="h-10 w-10 text-brand mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4 glass-heavy backdrop-blur-xl">Top Picks for Your Area</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Recommended for {formattedCityName}
              </h2>
              <p className="text-lg text-muted-foreground">
                Popular shading solutions for homes in your area
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recommendedProducts.map((product, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass rounded-3xl overflow-hidden hover:glass-heavy transition-all"
                >
                  <div className="relative h-64">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-lg text-muted-foreground mb-4">{product.tagline}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <Button variant="ghost" className="group" asChild>
                      <a href={product.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4 glass-heavy backdrop-blur-xl">Local Insights</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Common Questions from {formattedCityName} Residents
              </h2>
            </div>
          </ScrollReveal>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <AccordionItem
                  value={`item-${idx}`}
                  className="glass rounded-xl px-6 border-border"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 glow-ring-hover opacity-30" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <Badge className="mb-4 glass-heavy backdrop-blur-xl">Transform Your Space Today</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your {formattedCityName} home?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule your free consultation and discover the perfect motorized shading solution for your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${cityInfo.phone.replace(/\D/g, '')}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {cityInfo.phone}
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `Motorized Blinds & More — ${formattedCityName}`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": formattedCityName,
            "addressRegion": cityInfo.region
          },
          "telephone": cityInfo.phone,
          "areaServed": formattedCityName,
          "url": window.location.href
        })}
      </script>

      <Footer />
    </div>
  );
};

export default CityPage;