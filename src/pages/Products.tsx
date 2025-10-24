import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import QuoteWizard from "@/components/QuoteWizard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import productRollerImg from "@/assets/product-roller.jpg";
import productZebraImg from "@/assets/product-zebra.jpg";
import productRomanImg from "@/assets/product-roman.jpg";
import productHoneycombImg from "@/assets/product-honeycomb.jpg";
import productExteriorImg from "@/assets/product-exterior.jpg";
import productAwningImg from "@/assets/product-awning.jpg";

interface ProductDetail {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  features: string[];
  perfectFor: string[];
  finishes: string[];
  image: string;
}

const productDetails: ProductDetail[] = [
  {
    slug: "motorized-roller-shades",
    name: "Motorized Roller Shades",
    badge: "Most Popular",
    tagline: "Sleek, minimal, and effortlessly controlled",
    description: "Our most popular interior solution combines clean aesthetics with whisper-quiet motorization. Perfect for modern homes that demand both style and smart functionality.",
    features: [
      "Ultra-quiet Somfy motors",
      "Blackout to sheer fabric options",
      "Smart home integration ready",
      "Custom sizing up to 16 feet wide",
      "Cordless and child-safe"
    ],
    perfectFor: [
      "Living rooms and bedrooms",
      "Home offices and media rooms",
      "Floor-to-ceiling windows",
      "Skylights and high windows"
    ],
    finishes: ["Solar Screen", "Light Filtering", "Room Darkening", "Blackout"],
    image: productRollerImg
  },
  {
    slug: "zebra-dual-shades",
    name: "Dual / Zebra Blinds",
    badge: "Premium",
    tagline: "Precision light control with elegant stripes",
    description: "Alternating sheer and opaque fabric bands offer infinite light control. Shift between privacy and view with a single motor adjustment.",
    features: [
      "Variable opacity control",
      "Modern striped aesthetic",
      "Minimal light gaps",
      "Energy-efficient design",
      "Motorized or manual options"
    ],
    perfectFor: [
      "Dining rooms",
      "Home offices",
      "Bedrooms with varying light needs",
      "Spaces requiring glare control"
    ],
    finishes: ["Natural Linen", "Cool Gray", "Warm Beige", "Pure White"],
    image: productZebraImg
  },
  {
    slug: "roman-shades",
    name: "Shangri-La & Roman Shades",
    badge: "Premium",
    tagline: "Soft elegance meets motorized precision",
    description: "Fabric vanes suspended between sheer layers create a floating, luxurious look. Roman shades offer classic tailored folds with modern automation.",
    features: [
      "Floating fabric vanes",
      "Soft diffused lighting",
      "Luxurious fabric selections",
      "Motorized lift systems",
      "Custom color matching"
    ],
    perfectFor: [
      "Formal living spaces",
      "Master bedrooms",
      "Dining rooms",
      "Any space needing elegance"
    ],
    finishes: ["Silk Ivory", "Linen Cream", "Cotton Graphite", "Custom Fabrics"],
    image: productRomanImg
  },
  {
    slug: "honeycomb-shades",
    name: "Honeycomb Shades",
    badge: "Energy Saving",
    tagline: "Energy efficiency meets smart design",
    description: "Cellular construction traps air for superior insulation. Reduce heating and cooling costs while enjoying whisper-quiet motorized operation.",
    features: [
      "Cellular air-trapping design",
      "Up to 50% energy savings",
      "Top-down / bottom-up options",
      "Cordless motorization",
      "Single or double cell construction"
    ],
    perfectFor: [
      "Bedrooms and nurseries",
      "Energy-conscious homes",
      "Climate control priority",
      "Noise reduction needs"
    ],
    finishes: ["Arctic White", "Desert Sand", "Storm Gray", "Midnight Blue"],
    image: productHoneycombImg
  },
  {
    slug: "exterior-zip-track",
    name: "Exterior Zip-Track Patio Blinds",
    badge: "Outdoor",
    tagline: "Outdoor living, perfected",
    description: "Transform your patio into a year-round retreat. Our zip-track system handles wind, rain, and sun while maintaining clear sightlines and motorized convenience.",
    features: [
      "Wind-rated up to 60+ mph",
      "Guided side channels (no flapping)",
      "UV-blocking and waterproof fabrics",
      "Integrated wind sensors",
      "Solar-powered options"
    ],
    perfectFor: [
      "Covered patios and decks",
      "Outdoor dining areas",
      "Pool cabanas",
      "Balconies and terraces"
    ],
    finishes: ["Solar Mesh 5%", "Solar Mesh 10%", "Blackout PVC", "Clear Vinyl"],
    image: productExteriorImg
  },
  {
    slug: "motorized-awnings",
    name: "Motorized Awnings",
    badge: "Outdoor",
    tagline: "Shade on demand for outdoor spaces",
    description: "Retractable awnings extend your living space outdoors. Motorized operation with sun and wind sensors provides automatic climate adaptation.",
    features: [
      "Retractable motorized arms",
      "Weather-resistant Sunbrella fabrics",
      "Automatic sun/wind sensors",
      "Powder-coated aluminum frames",
      "LED lighting integration available"
    ],
    perfectFor: [
      "Patios and decks",
      "Outdoor kitchens",
      "Restaurant seating areas",
      "West or south-facing exposures"
    ],
    finishes: ["Sunbrella Acrylic (100+ colors)", "Solution-Dyed Acrylics", "Custom Stripes"],
    image: productAwningImg
  }
];

const productFAQs = [
  {
    q: "Can I control these with my phone or voice assistant?",
    a: "Yes! All our motorized products integrate with Alexa, Google Home, and Apple HomeKit. Control individual shades or create whole-home scenes."
  },
  {
    q: "How long does installation take?",
    a: "Most residential projects are completed within 1-3 days depending on the number of windows. We'll provide a detailed timeline during your consultation."
  },
  {
    q: "What warranty do you offer?",
    a: "All motorized products come with a comprehensive warranty covering motors, components, and installation workmanship."
  },
  {
    q: "Do you offer free consultations?",
    a: "Absolutely! We provide free in-home consultations with measurements and detailed quotes for all our service areas."
  }
];

const Products = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title="Our Products"
        subtitle="From elegant interiors to durable exterior systems, our motorized solutions fit every SoCal & Vegas home"
        showCTA={false}
      />

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {productDetails.map((product, index) => (
              <ScrollReveal key={product.slug} delay={0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`glass rounded-3xl overflow-hidden hover:glass-heavy transition-all ${
                    index % 2 === 0 ? "" : ""
                  }`}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}>
                    {/* Image */}
                    <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <Badge className="absolute top-6 left-6 glass-heavy backdrop-blur-xl">
                        {product.badge}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                        {product.name}
                      </h3>
                      <p className="text-xl text-muted-foreground mb-4">
                        {product.tagline}
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-lg">Key Features</h4>
                        <ul className="grid grid-cols-1 gap-2">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="h-4 w-4 text-brand mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Perfect For */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-lg">Perfect For</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.perfectFor.map((use, idx) => (
                            <Badge key={idx} variant="outline" className="glass">
                              {use}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Available Finishes */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-lg">Available Finishes</h4>
                        <p className="text-sm text-muted-foreground">
                          {product.finishes.join(" • ")}
                        </p>
                      </div>

                      <Button 
                        onClick={() => setQuoteOpen(true)}
                        className="w-full lg:w-auto"
                        size="lg"
                      >
                        Request Quote for {product.name}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted">
                Common questions about our motorized shading products
              </p>
            </div>
          </ScrollReveal>

          <Accordion type="single" collapsible className="space-y-4">
            {productFAQs.map((faq, idx) => (
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

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 glow-ring-hover opacity-30" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Not sure which option is right for you?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let us help you compare options and find the perfect shading solution for your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setQuoteOpen(true)}>
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:3104980110">
                  <Phone className="mr-2 h-5 w-5" />
                  (310) 498-0110
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <QuoteWizard open={quoteOpen} onOpenChange={setQuoteOpen} />
      <Footer />
    </div>
  );
};

export default Products;