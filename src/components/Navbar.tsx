import { useState } from "react"
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu"
import { cn } from "@/lib/utils"

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  )
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div
      className={cn(
        "fixed inset-x-0 padding-max-w-4xl mx-auto z-[100]",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-2 text-sm min-w-[200px]">
            <HoveredLink href="#mission" setActive={setActive}>
              Mission
            </HoveredLink>
            <HoveredLink href="#about" setActive={setActive}>
              About & Backers
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Platforms">
          <div className="text-sm grid grid-cols-2 gap-4 max-w-[800px]">
            <ProductItem
              title="Open AI"
              href="https://docs.unreal.art"
              src="/static/logos/unreal-ai-logo/unreal-ai-rocket.webp"
              description="Open AI compatible API router with transparent on-chain metered billing"
              setActive={setActive}
            />
            <ProductItem
              title="Console"
              href="https://console.unreal.art"
              src="/static/logos/unreal-ai-logo/unreal-ai-rocket.webp"
              description="Your web3 console for managing Unreal AI"
              setActive={setActive}
            />
            <ProductItem
              title="Art Platform"
              href="https://art.unreal.art"
              src="/static/logos/unreal-art-platform/unreal-art-small-logo-white.png"
              description="Open AI art creation platform"
              setActive={setActive}
            />
            <ProductItem
              title="Whitepaper"
              href="https://tokenomics.unreal.art"
              src="/media/home/whitepaper.png"
              description="Token economics and utility details"
              setActive={setActive}
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Community">
          <div className="flex flex-col space-y-2 text-sm min-w-[200px]">
            <HoveredLink
              href="https://discord.gg/Tug7uKCf"
              setActive={setActive}
            >
              Discord
            </HoveredLink>
            <HoveredLink href="https://t.me/ideomind" setActive={setActive}>
              Telegram
            </HoveredLink>
            <HoveredLink href="https://x.com/ideomind" setActive={setActive}>
              Twitter
            </HoveredLink>
            <HoveredLink
              href="https://github.com/unreal-art"
              setActive={setActive}
            >
              GitHub
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Navbar
