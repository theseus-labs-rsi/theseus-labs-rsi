# Website copy sources

Reviewed on 2026-09-11 against the RSI综述 project's active LaTeX manuscript.
`git pull --ff-only` confirmed that `main` was current with `overleaf/main` at
`d5ba7f456c15bc4ed41730cd6134655f16a82e87`. The paper repository was read without
editing its manuscript or publishing a new version.

The public [arXiv record](https://arxiv.org/abs/2609.11873) confirms the title and
v1 submission date (2026-09-10). The bundled
[`2609.11873v1.pdf`](../public/research/2609.11873v1.pdf) contains the matching
definitions and results below. Page numbers refer to this 75-page PDF.

## Claim-to-source map

| Website copy | Active manuscript source | Public PDF |
| --- | --- | --- |
| Exact title: *The Last AI Built by Humans: Toward Genuine Recursive Self-Improvement* | `main.tex`, active `\title` | p. 1 |
| Persistent self-change that also affects future improvement | `main.tex`, abstract; `src/foundations.tex:125–127` | pp. 1, 10 |
| Improvement loop, autonomy criterion, recursion versus performance | `src/intro.tex:212–220` | §§1.7, pp. 6–7 |
| HCI methodology, 393 observations, ten domains; 52.6 / 39.9 / 85.8 values | `src/foundations.tex:46–74` | §2.1, pp. 7–9 |
| Post-2026 curves are illustrative | `src/foundations.tex:76–83` | §2.1, p. 9 |
| B0 is the non-RSI reference, without persistent system changes | `src/L0.tex:24–27` | §3.1, p. 12 |
| L1–L5 describe improvement responsibility | `src/intro.tex:148–156`; `src/cross_level.tex:4–9` | §§1.4, 3.7, pp. 5, 35–36 |
| Science, embodied intelligence, software engineering, healthcare | `src/intro.tex:161–176`; active `src/app_S1.tex` | §4, pp. 36–44 |
| Five fixed model–harness pairings; 30 tasks / 547 rubrics; 18.65–39.67 percentage-point gains; scope-creep regressions | `src/theseus.tex:19,45–51,69` | §5.1, Table 9b, pp. 44–45 |
| Theseus's full co-evolution cycle remains to be established | `src/future.tex:64` | §6, p. 50 |
| Bounded meta-improvement; sustained gains under comparable resources remain open | `src/L5.tex:119`; `src/cross_level.tex:9` | §§3.6–3.7, pp. 35–36 |

## Evidence boundaries

- HCI is normalized benchmark headroom closure relative to an entry-year
  frontier. It is not raw accuracy, an RSI intervention effect, or proof that RSI
  caused historical model gains. Do not report the illustrative future extension
  as a measured result or forecast.
- The Theseus productivity study and clean-versus-noise pilot are separate.
  The pilot uses eight configurations and 1,280 rubrics; do not combine those
  denominators with the productivity study's five pairings and 547 rubrics.
  The productivity comparison fixes model and harness; it does not establish
  equal total compute or multi-generation improvement.
- Autonomy levels classify control over improvement decisions. B0 is outside
  RSI, and a higher level is not a capability ranking or an efficiency guarantee.
- Distinguish structural recursion (a revised mechanism is retained and reused)
  from effective recursion (better successors under comparable budgets and
  independent evaluation). Keep preliminary and company-reported results qualified.
- The five perspectives in `CommunityComments.tsx` were supplied by the user.
  Echo, Kernel, Orbit, Relay, and Atlas are the requested pseudonyms; these are
  editorial viewpoints, not verbatim paper quotations or experimentally established
  conclusions. Do not attach real identities or affiliations to them.

## Updating research copy

Follow the active inputs in `main.tex`, excluding commented passages, `\iffalse`
blocks, and unused draft files. Check titles and numbers against the public paper,
retain experimental scope and limitations, and update this map when claims change.
Keep research content in `src/data/research.ts`; the homepage and detail page share
the report title and summary.
