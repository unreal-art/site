# Unreal AI

 OpenAI-compatible, on-chain metered AI compute network. Unreal unifies access to AI models, provides transparent on-chain receipts for every call, and lets independent datacenters monetize capacity under common meters and SLAs.

 • Products: Studio, Console, OpenAI-compatible API, and a ranked provider marketplace.  
 • Billing: Deterministic metering with UNREAL-denominated rates across input/output tokens and media units (images, video, audio).  
 • Mission: Make AI feel like a vending machine—choose a model, pay for exactly what meters record, and receive auditable receipts.

 Refer to the founding backstory in `aidocs/info-about-founding/backstory.md` for deeper context.

 ---

 ## Why Unreal

 - Unified access: One OpenAI-compatible interface across multiple models and providers.
 - Verifiable billing: Each inference produces an on-chain receipt containing cryptographic usage meters.
 - Predictable pricing: Governance-set bands keep rates sustainable for providers and transparent for buyers.
 - Enterprise ready: Keys, wallets, project-centric workflows, audit-friendly receipts.

 ## Product Surface

 - Studio: Project-based workspace for text, images, video, embeddings, and agents with versioning and collaboration.
 - Console: Wallet-connected key management, developer airdrops, and business registration for managed access.
 - OpenAI-compatible API: One-line migration from OpenAI SDKs with standardized metering and settlement in UNREAL.
 - Marketplace: Ranked provider directory with regional routing and lanes (Priority vs Flex) tied to SLA performance.
 - Art: High-speed surface that proved UX and supply; now a funnel and live showcase for latency and cost.

 ## Pricing & Metering (T1)

 - Token meters: UNREAL per 1M input tokens (R_in) and per 1M output tokens (R_out).
 - Media meters: Clearly defined units for images, video, and audio. Rates validated against provider costs.
 - Settlement: Prepay in UNREAL or top up via fiat/stablecoin bridges; every call writes a verifiable on-chain receipt.

 ## Architecture (High Level)

 - Router logs deterministic meters per call and writes receipts (e.g., Merkle-hashed usage) on-chain.
 - Provider program validates costs and SLAs; marketplace placement rewards reliability over raw price.
 - Governance oversees pricing bands, dispute rules, and SLA definitions.

 ## Quickstart (This Repository)

 This repo contains the Unreal website (React + TypeScript + Vite).

 Prerequisites
 - Node.js 20+ and npm 9+ (or newer)

 Install and run
 ```bash
 npm install
 npm run dev
 ```

 Build and preview
 ```bash
 npm run build
 npm run preview
 ```

 Project layout
 - `src/` — React app source
 - `public/` — static assets
 - `aidocs/` — internal docs, including the founding backstory

 ## Using the OpenAI-Compatible API

 Unreal speaks the OpenAI API so you can migrate with a baseURL change. Example (Node):

 ```ts
 import OpenAI from 'openai'

 const client = new OpenAI({
   baseURL: process.env.UNREAL_API_BASE, // e.g. https://api.unreal.example/v1
   apiKey: process.env.UNREAL_API_KEY,
 })

 const response = await client.chat.completions.create({
   model: 'gpt-4o-mini',
   messages: [
     { role: 'system', content: 'You are a helpful assistant.' },
     { role: 'user', content: 'Hello, Unreal!' },
   ],
 })

 console.log(response.choices[0]?.message?.content)
 ```

 Or via cURL:

 ```bash
 curl -X POST "$UNREAL_API_BASE/chat/completions" \
   -H "Authorization: Bearer $UNREAL_API_KEY" \
   -H "Content-Type: application/json" \
   -d '{
     "model": "gpt-4o-mini",
     "messages": [
       {"role": "user", "content": "Hello, Unreal!"}
     ]
   }'
 ```

 Note: Actual models, lanes, and rate cards are subject to governance bands and provider availability.

 ## Roadmap (At a Glance)

 - Launch T1 metered billing with cryptographic receipts and high-RPM enterprise lanes.
 - Onboard 20–50 providers with validated rate cards; open the ranked marketplace with regional routing.
 - Expand multimodal coverage and activate governance for pricing bands and dispute workflows.

 ## Contributing

 We welcome issues and PRs. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for branching, commits, linting, and PR guidelines.

 ## Docs

 - Founding backstory: `aidocs/info-about-founding/backstory.md`
 - Additional internal docs live under `aidocs/`.
