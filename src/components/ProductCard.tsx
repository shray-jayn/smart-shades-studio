import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Volume2 } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  product: {
    slug: string;
    name: string;
    blurb: string;
    features?: string[];
  };
  imageSrc?: string;
}

const ProductCard = ({ product, imageSrc }: ProductCardProps) => {
  const features = [
    { icon: Volume2, label: "Quiet" },
    { icon: Zap, label: "Smart" },
    { icon: Shield, label: "Durable" },
  ];

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative glass rounded-3xl overflow-hidden hover:glass-heavy transition-all duration-300 hover:glow-soft"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-card-hover">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center gradient-mesh">
            <div className="text-6xl gradient-text">🪟</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
        
        {/* Feature Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {features.map((feature, idx) => (
            <Badge
              key={idx}
              variant="secondary"
              className="glass-heavy backdrop-blur-xl flex items-center gap-1"
            >
              <feature.icon className="h-3 w-3" />
              <span className="text-xs">{feature.label}</span>
            </Badge>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text transition-all">
          {product.name}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {product.blurb}
        </p>

        {product.features && product.features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {product.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <Button
          variant="ghost"
          className="w-full group/btn hover:bg-brand/10 hover:text-brand transition-all"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Shimmer Effect */}
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 pointer-events-none" />
    </motion.div>
  );
};

export default ProductCard;
