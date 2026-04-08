# 1.7 — Global Liquidity Context

> **Layer:** 1 — Strategy
> 

> **Question this answers:** What is the global liquidity architecture in real estate, and how does Liquid fit into it?
> 

> **Last updated:** April 2026
> 

> **Sources:** Territory Research (Liquidez RE Brasil — 22 chapters, USA, LATAM, EU, Global), Brain Dumps, Thesis Pack
> 

> **Note:** This report provides the macro liquidity context. Detailed regional analyses are available in the Territory section of the Notion workspace.
> 

---

## 1. Defining Liquidity in Real Estate Context

**Liquid's definition of liquidity** (from Territory Research):

> "By liquidity, I mean any operation that involves monetary transaction across the various cycles of the market — operations that can be originated, intermediated, structured, or operated by Liquid."
> 

This is deliberately broad. Liquidity in real estate is not just "selling a property." It encompasses a multidimensional spectrum of financial operations across the entire asset lifecycle.

### Liquidity Dimensions

| Dimension | Description | Examples |
| --- | --- | --- |
| **Direct asset transactions** | Sale/purchase of physical real estate | Residential sales, commercial transactions, land sales |
| **Credit origination** | New mortgage/financing creation | SBPE, FGTS, MCMV, pro-soluto, bank mortgages |
| **Mortgage transfer (repasse)** | Transfer of buyer financing from developer to bank | SBPE repasse, CEF repasse, multi-bank operations |
| **Securitization** | Conversion of receivables into tradeable securities | CRI (Certificados de Recebíveis Imobiliários), CCI |
| **Investment funds** | Collective investment vehicles | FIIs (Fundos Imobiliários), FIDCs |
| **Structured debt** | Bridge loans, mezzanine, structured financing | Development financing, bridge capital |
| **Corporate vehicles** | SPEs, SCPs, JVs for real estate operations | Project-level entities for development |
| **Tokenization** | Digital representation of real estate assets/receivables | Emerging — regulatory framework evolving |
| **Contractual liquidity** | Contract clauses that create or facilitate liquidity | Assignment clauses, buyback provisions, put/call options |
| **Secondary market** | Trading of existing financial instruments backed by RE | CRI trading, FII secondary market, portfolio sales |
| **Distress & restructuring** | Operations arising from default or financial difficulty | Workout, foreclosure, renegotiation |

---

## 2. Global Liquidity Architecture (Macro)

### The Universal Pattern

Across all geographies, real estate liquidity follows a similar structural pattern:

1. **Origination** → Asset is created (land acquired, development built, unit sold)
2. **Primary financing** → Credit enables the transaction (mortgage, construction financing)
3. **Servicing** → Ongoing management of the financial obligation
4. **Aggregation** → Individual obligations are pooled into portfolios
5. **Securitization/Structuring** → Portfolios are transformed into tradeable instruments
6. **Distribution** → Instruments are sold to investors (funds, institutions, individuals)
7. **Secondary trading** → Instruments trade in secondary markets
8. **Exit/Resolution** → Asset lifecycle ends (payoff, sale, default resolution)

**Liquid's opportunity exists at every junction in this chain.** Intelligence, risk assessment, compliance, and operational efficiency are needed at each stage.

### What Varies by Geography

| Factor | How It Varies | Impact on Liquid |
| --- | --- | --- |
| **Regulatory framework** | Each country has unique banking, securities, and consumer protection laws | Business rules must be modular; core platform is regulation-agnostic |
| **Financing structures** | US (30-year fixed), Brazil (SAC/Price/SBPE), EU (variable rate dominant) | Financial simulation engine must support multiple structures |
| **Securitization maturity** | US (very mature, MBS market), Brazil (growing, CRI), EU (moderate) | Opportunity size varies; Brazil is high-growth |
| **Data availability** | US (rich data, MLS), Brazil (fragmented), EU (varies) | Data infrastructure needs differ by market |
| **Currency** | USD, BRL, EUR, etc. | Multi-currency architecture required (Global by Design principle) |
| **Digital maturity** | US/EU (higher digital adoption), Brazil (growing rapidly, strong mobile/Pix ecosystem) | UX and channel strategy adapts per market |

---

## 3. Beachhead: Brazil as Initial Focus, Not End Focus

### Why Brazil First

1. **Domain expertise:** Team has deep Brazilian RE credit knowledge
2. **Existing operations:** Soma Repasse, Liquid Pass clients are Brazilian
3. **Relationships:** Bank and incorporadora relationships are in Brazil
4. **Market size:** R$324 billion in annual housing credit origination
5. **Fragmentation advantage:** Lack of standardization creates more acute pain
6. **Regulatory specificity:** Complex regulatory environment (Bacen, CVM, LGPD) is a barrier to entry for competitors

### Why Not Just Brazil

1. **Global ambition:** Real estate is a global asset class with similar structural challenges everywhere
2. **TAM expansion:** Brazilian market alone may not support $10M+ ARR at target pricing
3. **Investor narrative:** Global platform story is more compelling for fundraising
4. **Architecture efficiency:** Building global from day one avoids costly migration later
5. **Regulatory arbitrage:** Different markets have different maturity levels, creating diverse opportunities

### Brazil → Global Expansion Path

| Phase | Geography | Rationale |
| --- | --- | --- |
| **Phase 1** | Brazil | Beachhead — existing assets, knowledge, relationships |
| **Phase 2** | LATAM (Mexico, Colombia) | Similar regulatory dynamics, Portuguese/Spanish language proximity, growing markets |
| **Phase 3** | US | Largest, most liquid RE market; different but massive opportunity |
| **Phase 4** | EU | Diverse markets with regulatory complexity that Liquid's governance layer addresses |

---

## 4. Brazilian Liquidity Landscape (Deep)

The Territory Research contains 22 chapters analyzing Brazilian real estate liquidity. Key highlights:

### Primary Market Operations

**Credit origination (SBPE + FGTS + MCMV + Pro-Soluto):**

- SBPE (poupança-funded): Primary source of housing credit, regulated by Bacen
- FGTS: Government fund providing subsidized housing credit
- MCMV (Minha Casa Minha Vida): Social housing program with specific credit rules
- Pro-soluto: Developer-financed sales with seller-carried risk

**Repasse (Mortgage Transfer):**

- The process of transferring the buyer from developer financing to bank financing
- Involves qualification, credit analysis, legal analysis, contract signing, registry
- Liquid (Soma) operates this with ~962 contracts across 5 incorporadoras and 4 banks
- This is the most immediately productizable liquidity operation

### Secondary Market Operations

**Securitization (CRI/CCI):**

- CRI (Certificado de Recebíveis Imobiliários): Primary securitization instrument
- CCI (Cédula de Crédito Imobiliário): Credit instrument that can be securitized
- Growing market with significant data quality and risk assessment needs

**Portfolio Transactions:**

- Sale/purchase of mortgage portfolios between institutions
- Liquid (Transação Carteira) already participates in this space
- Requires deep portfolio analysis, risk assessment, and pricing capabilities

**FIIs (Fundos Imobiliários):**

- Brazilian REITs traded on B3 (stock exchange)
- Relevant for distribution of structured products

### Emerging Operations

**Tokenization:**

- Digital representation of real estate receivables on blockchain
- Regulatory framework evolving (CVM sandbox, Bacen tokenization initiatives)
- Liquid has prior experience (Phygit/Cryptorastas) that can be leveraged
- Could become a default layer in Liquid's infrastructure

**Distress & Restructuring:**

- Default management, workout, foreclosure
- Counter-cyclical opportunity — increases in economic downturns

### Regulatory Framework

| Regulator | Scope | Key Regulations |
| --- | --- | --- |
| **Bacen** | Banking, credit, Open Finance | Resolution 4.676 (SFI), Resolution 4.893 (Open Finance), SBPE rules |
| **CVM** | Securities, securitization, funds | CRI/CCI regulation, FII rules, crowdfunding |
| **ANPD** | Data protection | LGPD enforcement |
| **Receita Federal** | Tax | Tax implications of real estate transactions |
| **Cartórios** | Registry | Property registration, contract formalization |

---

## 5. Relevant Geographic Comparisons

The Territory Research covers four additional regions:

**USA:**

- Largest, most liquid RE market globally
- MBS (Mortgage-Backed Securities) market is massive and mature
- GSEs (Fannie Mae, Freddie Mac) standardize much of the market
- Data-rich environment (MLS, public records)
- Different opportunity: Liquid's value is in the intelligence layer, not standardization

**LATAM:**

- Similar structural challenges to Brazil (fragmentation, regulatory complexity)
- Growing markets (Mexico, Colombia, Chile)
- Natural expansion path due to cultural and linguistic proximity

**EU:**

- Diverse regulatory environments per country
- Complex cross-border dynamics
- Growing sustainable finance requirements create compliance needs

**Global Overview:**

- Real estate as asset class estimated at $326+ trillion globally
- Residential represents the largest segment
- Institutional investment in real estate growing
- Cross-border investment increasing

---

## 6. Financial Flows and Funding Structures

### How Money Flows in Brazilian RE Credit

```
Savings/FGTS/Investors
      ↓
Banks / Securitizadoras / Funds
      ↓ (credit origination)
Developers (incorporadoras/loteadoras)
      ↓ (unit sale + financing)
Buyers (consumers / investors)
      ↓ (monthly payments)
Servicers (banks / specialized servicers)
      ↓ (aggregation)
Securitization (CRI) / Portfolio Sales
      ↓ (distribution)
Investors (institutional / retail)
```

**Liquid touches every arrow in this diagram** — credit analysis at origination, repasse management, portfolio monitoring, transaction intermediation, risk assessment for securitization.

---

## 7. Incumbent and Emerging Players

### By Function

| Function | Incumbents | Emerging Players | Liquid's Position |
| --- | --- | --- | --- |
| **Credit data** | Serasa, Equifax, PH3A | Open Finance providers | Connector/consumer of data, not competitor |
| **Decision engines** | Neurotech, internal bank systems | AI-powered credit scoring startups | Direct competitor in decisioning, but broader scope |
| **Securitization** | Oliveira Trust, Nuclea, banks | Fintech securitizers | Intelligence and analysis layer |
| **Portfolio management** | Legacy bank systems | Proptech monitoring tools | Liquid Play competes here |
| **Repasse operations** | Internal bank teams, small brokerages | Soma (Liquid) | Market leader potential |
| **Market intelligence** | Bloomberg (general finance), consultancies | AI-powered research tools | "Agentic Bloomberg" for RE credit — whitespace |

---

## 8. Connection to Other Reports

- **→ 1.1 Business & Market Overview:** Market sizing and competitive landscape
- **→ 1.6 Strategic Thesis Pack:** How liquidity context supports the funding and economics theses
- **→ 2.1 Problem Architecture:** Specific problems in this liquidity landscape
- **→ 2.4 Opportunity Map:** Opportunities derived from liquidity gaps
- **→ 5.2 Bounded Context Map:** "Liquidity Operations" as core bounded context
- **→ 6.3 Billing Architecture:** How liquidity transactions generate revenue

---

## 9. Detailed Research Available

For deep dives, the following detailed research exists in the Territory section:

| # | Chapter | Topic |
| --- | --- | --- |
| 00 | Master Index & Executive Summary | Overview of all Brazilian RE liquidity |
| 01 | Multidimensional Definition of RE Liquidity | Framework for understanding liquidity |
| 02 | Direct Asset Transactions | Physical property transactions |
| 03 | Real Estate Credit & Production Financing | SBPE, FGTS, construction financing |
| 04 | Securitization: CRI, CCI & Capital Markets | Securities market for RE receivables |
| 05 | Real Estate Funds (FIIs) | Collective investment vehicles |
| 06 | Structured Debt, Bridge & Mezzanine | Advanced financing structures |
| 07 | Corporate Vehicles: SPE, SCP, JVs | Project-level entities |
| 08 | Tokenization & Digital Liquidity | Blockchain-based RE assets |
| 09 | Contracts & Clauses that Create Liquidity | Legal instruments for liquidity |
| 10 | Secondary Market & Exit Mechanisms | Trading and exit strategies |
| 11 | Distress, Default & Restructuring | Workout and recovery |
| 12 | Real vs. Apparent Liquidity | Critical analysis of liquidity claims |
| 13 | Brazilian Regulatory Framework | Complete regulatory mapping |
| 14 | Comparative Matrices & Expanded Glossary | Cross-reference tools |
| 15-21 | Additional Deep Dives | Asset types, guarantees, lifecycle, non-obvious ops, investor profiles, informal structures, gaps |

Similar research exists for USA, LATAM, EU, and Global contexts.