// src/components/QuoteWizard.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check, ArrowRight, ArrowLeft, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface QuoteWizardProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteWizard = ({ open, onOpenChange }: QuoteWizardProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    timeline: "",
    productInterest: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description:
        "We'll contact you within 24 hours to schedule your free consultation.",
    });
    onOpenChange(false);
    setStep(1);
    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      timeline: "",
      productInterest: "",
      message: "",
    });
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] glass-heavy border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl">Get Your Free Quote</DialogTitle>
          <DialogDescription>
            Step {step} of 3 - Tell us about your project
          </DialogDescription>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="flex gap-2 mb-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all ${
                i <= step ? "bg-brand" : "bg-border"
              }`}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="mt-1"
                  />
                </div>
                <Button
                  type="button"
                  onClick={nextStep}
                  className="w-full mt-4"
                >
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="city">City / ZIP Code *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Input
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({ ...formData, timeline: e.target.value })
                    }
                    placeholder="e.g., Within 2 weeks, 1-3 months"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="productInterest">Product Interest</Label>
                  <Input
                    id="productInterest"
                    value={formData.productInterest}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        productInterest: e.target.value,
                      })
                    }
                    placeholder="e.g., Motorized Roller Shades, Patio Blinds"
                    className="mt-1"
                  />
                </div>
                <div className="flex gap-2 mt-4">
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                    className="flex-1"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button type="button" onClick={nextStep} className="flex-1">
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your windows, rooms, or any specific requirements..."
                    className="mt-1 min-h-[120px]"
                  />
                </div>
                <div className="glass rounded-lg p-4 text-sm">
                  <p className="text-muted mb-2">What happens next?</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-success mt-0.5" />
                      <span>We'll call within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-success mt-0.5" />
                      <span>Schedule your free in-home consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-success mt-0.5" />
                      <span>Receive a detailed quote with no obligation</span>
                    </li>
                  </ul>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                    className="flex-1"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button type="submit" className="flex-1">
                    Submit Request <Check className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        {/* Contact info always visible in the wizard */}
        <div className="mt-6 text-xs sm:text-sm text-muted-foreground space-y-1 border-t border-border pt-4">
          <p className="font-medium mb-1">Prefer to talk right now?</p>
          <div className="flex items-center gap-2">
            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>
              <strong>Los Angeles:</strong>{" "}
              <a href="tel:+13104980110" className="hover:text-brand">
                (310) 498-0110
              </a>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>
              <strong>Las Vegas:</strong>{" "}
              <a href="tel:+17253167780" className="hover:text-brand">
                (725) 316-7780
              </a>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>
              <strong>Orange County:</strong>{" "}
              <a href="tel:+16578955989" className="hover:text-brand">
                (657) 895-5989
              </a>
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteWizard;
