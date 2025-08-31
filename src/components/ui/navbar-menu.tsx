import React from "react";
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div 
      onMouseEnter={() => setActive(item)} 
      className="relative group"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:text-[#8788f4] font-bold text-xl px-6 py-3 rounded-lg hover:bg-[#8788f4]/10 transition-all duration-300"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2 z-50">
              <motion.div
                transition={transition}
                layoutId="active"
                className="dropdown-card"
              >
                <motion.div
                  layout
                  className="dropdown-content"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('nav') && !target.closest('.dropdown-card')) {
        setActive(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [setActive]);

  return (
    <nav
      className="relative rounded-full border-2 border-[#8788f4]/30 bg-black/95 backdrop-blur-xl shadow-2xl flex justify-center items-center gap-20 px-16 py-6"
      style={{
        boxShadow: '0 25px 50px -12px rgba(135, 136, 244, 0.4), 0 0 40px rgba(135, 136, 244, 0.1)'
      }}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
  setActive,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
  setActive?: (item: string | null) => void;
}) => {
  const handleClick = () => {
    if (href.startsWith('http')) {
      window.open(href, '_blank');
    } else {
      window.location.href = href;
    }
    if (setActive) setActive(null);
  };

  return (
    <div className="product-item-wrapper">
      <button 
        onClick={handleClick}
        className="product-item-link"
      >
        <img
          src={src}
          width={140}
          height={70}
          alt={title}
          className="product-item-image"
        />
        <div className="product-item-content">
          <h4 className="product-item-title">
            {title}
          </h4>
          <p className="product-item-description">
            {description}
          </p>
        </div>
      </button>
    </div>
  );
};

export const HoveredLink = ({ children, setActive, ...rest }: any) => {
  return (
    <div className="menu-item-wrapper">
      <a
        {...rest}
        onClick={() => setActive && setActive(null)}
        className="menu-item-link"
      >
        <span className="menu-item-text">{children}</span>
      </a>
    </div>
  );
};
