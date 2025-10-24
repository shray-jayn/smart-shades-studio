import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import QuoteWizard from "@/components/QuoteWizard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Smartphone, 
  Mic, 
  Clock, 
  Wifi, 
  Sun, 
  Moon, 
  Video, 
  Waves,
  Home,
  Zap
} from "lucide-react";
import smartControlImg from "@/assets/smart-control.jpg";

const SmartHome = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const platforms = [
    { name: "Amazon Alexa", icon: Mic },
    { name: "Google Home", icon: Home },
    { name: "Apple HomeKit", icon: Smartphone },
    { name: "Control4", icon: Wifi },
    { name: "Crestron", icon: Zap },
    { name: "SmartThings", icon: Waves }
  ];

  const motorPartners = [
    { name: "Somfy", description: "Premium quiet motors" },
    { name: "Lutron PowerView", description: "Precision control" },
    { name: "Hunter Douglas", description: "Industry leader" },
    { name: "Sonesse", description: "RF Motors" }
  ];

  const smartScenes = [
    {
      icon: Sun,
      title: "Morning Warmth",
      description: "Open east-facing shades at sunrise to welcome natural light",
      badge: "Fully Customizable"
    },
    {
      icon: Video,
      title: "Work Mode",
      description: "Close shades to reduce screen glare during video calls",
      badge: "Fully Customizable"
    },
    {
      icon: Moon,
      title: "Movie Night",
      description: "Lower all shades and dim lights with one command",
      badge: "Fully Customizable"
    },
    {
      icon: Waves,
      title: "Patio Evening",
      description: "Lower patio zip-tracks, adjust lighting, and play music",
      badge: "Fully Customizable"
    }
  ];

  const capabilities = [
    {
      icon: Mic,
      title: "Voice Control",
      description: "\"Alexa, close the living room shades\" — hands-free control throughout your home."
    },
    {
      icon: Smartphone,
      title: "Remote Access",
      description: "Control your shades from anywhere using your smartphone or tablet."
    },
    {
      icon: Clock,
      title: "Automatic Scheduling",
      description: "Program shades to open and close based on sunrise, sunset, or your daily routine."
    },
    {
      icon: Home,
      title: "Whole-Home Scenes",
      description: "Coordinate shades with lighting, HVAC, and entertainment systems."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title="Smart Home Integration"
        subtitle="Seamlessly integrate your motorized shading with Alexa, Google, HomeKit, Control4, and more"
        backgroundImage={smartControlImg}
        showCTA={false}
      />

      {/* Intro */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Voice Control • Automation • Remote Access
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MB&M specializes in complete smart home integration, ensuring your shading systems 
              work seamlessly with your existing home automation setup. Whether you're using voice 
              assistants, control panels, or mobile apps, we create a unified experience that puts 
              you in control.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Motor Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4 glass-heavy backdrop-blur-xl">Trusted Partners</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Premium Motor Partners
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We work with the industry's leading motorization brands
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {motorPartners.map((partner, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass rounded-2xl p-6 text-center hover:glass-heavy transition-all hover:glow-soft"
                >
                  <div className="text-4xl mb-4">⚙️</div>
                  <h3 className="font-semibold mb-2">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground">{partner.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Platforms */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4 glass-heavy backdrop-blur-xl">Works With Your Favorite Platforms</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Compatible Platforms
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect with the smart home system you already use
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-2xl p-6 text-center hover:glass-heavy transition-all"
                >
                  <platform.icon className="h-10 w-10 text-brand mx-auto mb-3" />
                  <p className="text-sm font-medium">{platform.name}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Scenes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4 glass-heavy backdrop-blur-xl">Automation Examples</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Smart Scene Examples
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Create automated routines that adapt to your lifestyle
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {smartScenes.map((scene, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass rounded-3xl p-8 hover:glass-heavy transition-all hover:glow-soft"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-2xl gradient-primary">
                      <scene.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{scene.title}</h3>
                      <Badge variant="secondary" className="glass mb-3">
                        {scene.badge}
                      </Badge>
                      <p className="text-muted-foreground leading-relaxed">
                        {scene.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4 glass-heavy backdrop-blur-xl">Advanced Capabilities</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Powerful Features
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="glass rounded-2xl p-6 hover:glass-heavy transition-all text-center">
                  <capability.icon className="h-12 w-12 text-brand mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 glow-ring-hover opacity-30" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for a smarter home?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a free consultation to discuss your smart home integration needs
            </p>
            <Button size="lg" onClick={() => setQuoteOpen(true)}>
              Get Free Smart Home Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <QuoteWizard open={quoteOpen} onOpenChange={setQuoteOpen} />
      <Footer />
    </div>
  );
};

export default SmartHome;