<div align="center">
  <img src="public/brand/full-black.svg" alt="Theseus Lab" width="420" />
</div>

<div align="center">
  <h3>Building intelligence that can evolve.</h3>
  <p>
    We study how AI systems turn experience into lasting changes to their
    capabilities and the mechanisms that guide future improvement.
  </p>
</div>

<div align="center">
  <a href="https://theseus-labs-rsi.github.io/">
    <img alt="Website" src="https://img.shields.io/badge/Website-Theseus%20Lab-168af4?logo=googlechrome&logoColor=white" />
  </a>
  <a href="https://arxiv.org/abs/2609.11873">
    <img alt="arXiv" src="https://img.shields.io/badge/arXiv-2609.11873-b31b1b?logo=arxiv&logoColor=white" />
  </a>
  <a href="https://github.com/theseus-labs-rsi">
    <img alt="GitHub Organization" src="https://img.shields.io/badge/GitHub-Theseus%20Lab-181717?logo=github&logoColor=white" />
  </a>
</div>

## 📰 News

- **[September 11, 2026]** The Theseus Lab website is now live.
- **[September 10, 2026]** Our survey on genuine recursive self-improvement was released on arXiv.

## 👋 About Theseus Lab

Theseus Lab studies **recursive self-improvement (RSI)**: how experience can
produce persistent system changes that also affect subsequent improvement.
Our survey examines what is changed, what successors inherit, and which
decisions remain under human control.

The Theseus case study explores environment–data–model co-evolution: reconstruct
environments, identify capability gaps and generate training data, train task
models, and use stronger models to support further environment iteration.

## 🔎 Featured Report

### The Last AI Built by Humans: Toward Genuine Recursive Self-Improvement

The survey analyzes capability gaps using the **Headroom-Closed Index (HCI)**
and organizes improvement loops by the decisions entrusted to AI. It connects
this framework to science, embodied intelligence, software engineering,
healthcare, and industrial practice.

<div align="center">
  <a href="https://arxiv.org/abs/2609.11873">
    <img src="public/research/roadmap.svg" alt="Five levels of improvement autonomy, with B0 as a non-RSI reference" width="960" />
  </a>
</div>

Key contributions include:

- the improvement loop as the unit of analysis: triggers, proposed changes,
  verification, persistence, and reuse;
- five levels of responsibility: **L1 improvement execution**, **L2 strategy
  selection**, **L3 future experience acquisition**, **L4 deployment and
  environmental adaptation**, and **L5 recursive meta-improvement**;
- analysis of how revised improvement mechanisms are inherited and reused;
- connections between academic research and industrial systems.

**B0** marks in-task iteration; **L1–L5** track autonomy over persistent improvement.

Selected findings:

- **Capability gaps (§2.1):** HCI traces uneven progress across ten domains,
  highlighting remaining headroom in software engineering and tool-using agents.
- **Theseus workspace study (§5.1, Table 9b):** reconstructing agent workspaces
  improved aggregate rubric scores by 18.65–39.67 percentage points.
- **Meta-improvement (§§3.6–3.7):** systems can revise and pass on improvers,
  evaluators, and research policies, making future improvement mechanisms
  an object of change.

**Paper:** [arXiv:2609.11873](https://arxiv.org/abs/2609.11873)  
**Project page:** [theseus-labs-rsi.github.io](https://theseus-labs-rsi.github.io/)

Copy provenance and evidence boundaries are recorded in
[`docs/copy-sources.md`](docs/copy-sources.md).

## 🧭 Research and Updates

New research projects, technical reports, and lab notes will be added as they
become ready.

## 🌐 Website

This repository contains the public Theseus Lab website. It is built with
**React**, **TypeScript**, and **Vite**, and is deployed automatically through
**GitHub Pages**.

For maintainers, research listings are defined in
[`src/data/research.ts`](src/data/research.ts). Every push to `main` triggers the
deployment workflow.

```bash
npm install
npm run dev
```

## 📬 Follow the Work

- Visit the [Theseus Lab website](https://theseus-labs-rsi.github.io/)
- Explore the [Theseus Lab GitHub organization](https://github.com/theseus-labs-rsi)
- Read the [featured RSI report](https://arxiv.org/abs/2609.11873)

---

<div align="center">
  <sub>Theseus Lab · Systems that improve how they improve.</sub>
</div>
