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
3. Create or update the company-specific version in `archive/resumes/companies/<company>/` and record its application status in `archive/resumes/companies/APPLICATIONS.md`.
4. Do not modify the source resume unless the user explicitly asks.
5. Compare the customized version with the source, then verify important experience coverage, skill ordering, job-posting fit, local links/assets, and PDF page clipping.
6. Treat resume platforms such as Saramin as distribution channels, not target companies. Store platform-specific copy-paste content under `archive/resumes/platforms/<platform>/` and keep company-specific applications under `archive/resumes/companies/<company>/`.

## Application Completion

When the user says a company application is complete (e.g. “APR 지원완료”, “제출 완료”, “접수 완료”), treat that as confirmation and authorization to update both `archive/resumes/companies/APPLICATIONS.md` and the Notion application tracker in the same turn, without asking for permission again. Resolve the company and role from the conversation; clarify only if the target application remains ambiguous.

Follow the synchronization rules in [`archive/AGENTS.md`](archive/AGENTS.md#application-status-synchronization), including the CSV, related status notes, and verification. Do not finish after updating only the local file, and do not create a separate `application.md`.
