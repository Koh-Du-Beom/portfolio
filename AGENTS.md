# Portfolio Agent Instructions

## Next.js

This repository uses Next.js 16.2.6, whose APIs and conventions may differ from prior versions. Before changing Next.js code, read the relevant guide in `node_modules/next/dist/docs/` completely and follow its current deprecations and conventions.

## Karpathy-Inspired Working Rules

Based on the [Andrej Karpathy coding guidelines](https://github.com/multica-ai/andrej-karpathy-skills):

1. **Think before coding.** State material assumptions, surface ambiguity and tradeoffs, and ask when different interpretations would produce meaningfully different results.
2. **Prefer the simplest sufficient solution.** Do not add speculative features, premature abstractions, or configurability that the request does not require.
3. **Make surgical changes.** Touch only lines required by the task, preserve existing style, and do not refactor or delete unrelated code. Remove only dead code created by the current change.
4. **Work toward verifiable outcomes.** Define concrete success checks, run the smallest relevant test or build, and iterate until those checks pass.

Use judgment for trivial edits; these rules should reduce mistakes without turning one-line changes into process overhead.

## Resume Customization

When the user asks "아래의 채용공고를 참고하여, 이력서를 작성해줘" or makes an equivalent request, treat it as customization of the existing resume—not creation of a new resume from scratch.

1. Read `archive/resumes/CUSTOMIZATION_RULES.md` and inspect the existing files under `archive/resumes/`.
2. Use `archive/resumes/original/` as the source resume.
3. Create or update the company-specific version in `archive/resumes/companies/<company>/`.
4. Do not modify the source resume unless the user explicitly asks.
5. Compare the customized version with the source, then verify important experience coverage, skill ordering, job-posting fit, local links/assets, and PDF page clipping.
6. Treat resume platforms such as Saramin as distribution channels, not target companies. Store platform-specific copy-paste content under `archive/resumes/platforms/<platform>/` and keep company-specific applications under `archive/resumes/companies/<company>/`.
