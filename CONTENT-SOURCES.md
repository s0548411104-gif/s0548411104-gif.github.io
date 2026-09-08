# Content provenance

## Angular live link supplied by the owner

The owner supplied https://task-manager-8wxa.onrender.com/login for `task-manager-angular`. Added it as a demo button in its project card and Live Projects. The availability check failed with DNS resolution in this environment; no successful interactive run is claimed. Descriptions were checked against `src/app/app.routes.ts` and `src/app/components/task-board/task-board.ts`: guarded routes, teams/projects, Signals, Reactive Forms, Angular CDK drag-and-drop, search, priority updates and comments. The featured collection now includes seven projects. The additional React demo URL is still pending from the owner.

Reviewed 2026-09-08 against the public GitHub API, repository READMEs and selected source files. Repository count: 18. No private repositories or environment files were read. Research snapshots are excluded from Git and from the deployment artifact.

| Project | Evidence | Selection rationale |
| --- | --- | --- |
| [DirectVision](https://github.com/s0548411104-gif/Direct_Insurance_Hackathon) | README, repository tree, server/server.js, ai/main.py, frontend and dashboard API references | Broadest combination of AI, multiple services, real-time updates and cloud data/storage |
| [Agentic Docs RAG](https://github.com/s0548411104-gif/agentic-coding-rag) | README, workflow_chat.py, repository tree | Branching retrieval architecture with structured extraction and vector search |
| [Helpdesk](https://github.com/s0548411104-gif/HelpDesk-proj-react) | README, repository tree, src/services/api.service.ts | Role-aware frontend and nontrivial API integration; backend is external to this repository |
| [Fullstack ToDo](https://github.com/s0548411104-gif/ToDoList-Fullstack) | README, repository tree, TodoApi/Program.cs and client service.js | React / .NET / MySQL integration, database-first models and Dockerfile |
| [Weather MCP](https://github.com/s0548411104-gif/MCP-Playwright-AI) | README, repository tree, host.py | Model tool calls, multiple MCP clients and browser automation |
| [Outlook Drafts Helper](https://github.com/s0548411104-gif/outlook-helper) | README | Concrete automation problem and documented web-to-desktop architecture |

All 18 repository entries were reviewed. READMEs were retrieved where present. Mentor-AI and the Angular task manager also received source/tree inspection. The featured set prioritizes documented system behavior and complementary engineering examples, rather than stars. Not every source file was audited and none of the backend projects was executed.

## Claim boundaries

- Name, role, email and the Hackathon Winner claim come from the user's request. The hackathon repository supports the project description; the award itself was supplied by the user.
- No years of employment, employer relationship, performance benchmarks or production usage counts are claimed.
- DirectVision's README mentions time and compression metrics; they are omitted because no benchmark was run.
- Helpdesk's backend stack appears in its README, but the portfolio explicitly describes the checked repository as frontend code, not an independently verified backend implementation.
- ToDo authentication is future groundwork in the README and is not advertised as implemented.
- Architecture cards are original schematic illustrations, not application screenshots.
- LinkedIn is omitted because no LinkedIn URL was supplied.

## Deployment evidence

The ToDo API CORS configuration names https://todolist-fullstack2.onrender.com. This URL returned HTTP 200 with the React application document. Its referenced application JavaScript also returned HTTP 200. The backend URL discovered in that bundle, https://todolist-fullstack-server-eqpu.onrender.com/tasks, returned HTTP 200 with application/json in a read-only check. No tasks were created, modified or deleted. These checks do not prove every user flow succeeds. Interactive testing was unavailable because no browser backend was connected.

Other featured repositories have no GitHub deployment records and their reviewed documentation does not supply a verified public app URL. Localhost endpoints are not shown as live demos. The Angular repository's Render URL is an API endpoint, not a verified frontend demo.
