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

Localhost endpoints are not shown as live demos. The Angular frontend URL supplied by the owner, https://task-manager-8wxa.onrender.com/login, returned HTTP 200 with the TaskManager document on 2026-09-08. Its source targets a separate backend, https://task-project-azk0.onrender.com/api. An OPTIONS request to /api/auth/login returned HTTP 204 and allowed the GitHub Pages origin; this does not verify authenticated user flows.

## Additional cloud publication — 2026-09-08

- Published `task-manager-angular` at https://s0548411104-gif.github.io/task-manager-angular/#/login (successful run 34265540535, commit 80256fa). Enabled hash routing for direct navigation and refresh on static hosting, built with the repository base path, and synchronized its pre-existing outdated lockfile with package.json. Updated the portfolio demo link to this deployment. The existing Render frontend remains an alternative; authenticated flows were not tested.
- The account now has 19 public repositories, including the portfolio itself.
- `Flutter-Project` already had a successful GitHub Pages workflow (run 34235059676). Added its published URL, https://s0548411104-gif.github.io/Flutter-Project/, to Live Projects. Source inspection of `lib/main.dart` and `lib/services/api_service.dart` confirms country search through REST Countries, with capitals, languages, currencies, population and flags. This environment's NetFree filter blocks the external country API and GitHub Pages, so no successful interactive search is claimed.
- `lesson-git` contains three introductory HTML pages. Added an index with navigation, and a workflow that uploads only those public pages. Deployment run 34265206115 succeeded. Added https://s0548411104-gif.github.io/lesson-git/ to Live Projects, explicitly described as an introductory exercise.
- Rechecked the ToDo frontend and its `/tasks` API: both returned HTTP 200; the API returned JSON. No user data was created, changed or deleted.
- The browser runtime reported no available browsers. Verification uses source inspection, build/tests, GitHub deployment records and the HTTP checks documented above.
- The other projects' current deployment blockers are recorded in DEPLOYMENT-PLAN.md. Source checkouts and diagnostic logs remain under ignored `research/` and are not included in the portfolio artifact.

## Owner correction — 2026-09-08

The owner clarified that Angular was already live and that lesson-git is a lesson to remove. Restored the Angular portfolio link to https://task-manager-8wxa.onrender.com/login. Removed lesson-git from Live Projects, unpublished its GitHub Pages site and disabled its deployment workflow; the repository and lesson source remain intact. The earlier publication entries above are historical, not the current status.

## Helpdesk server supplied and deployment prepared

The owner supplied https://github.com/s0548411104-gif/HelpDesk-react-server and explicitly selected a free demo with temporary data. Source inspection confirms Express, TypeScript and SQLite (not the MySQL mentioned in the frontend README). The server initializes its own database, so no separate MySQL service is needed.

Prepared and pushed frontend commit 2431d8a and server commit 7fd910b. The Render Blueprint creates a free Node service and a static frontend, shares the API's public hostname through RENDER_EXTERNAL_HOSTNAME, enables sample accounts and generates a JWT secret. The frontend shows a shared/temporary-data notice. Replaced plaintext password authentication and credential logs with bcrypt hashing, preserved legacy records through a startup migration, and fixed TypeScript JSON imports. Server and client builds passed locally; two server integration tests passed with an isolated temporary SQLite database.

Render deployment is still pending account access. No Helpdesk URL is presented as live and no cloud service was claimed to have been created. Launch configuration: https://github.com/s0548411104-gif/HelpDesk-react-server/blob/main/render.yaml. Hosting limits verified against https://render.com/docs/free; the selected free SQLite demo loses changes on restarts/redeploys/idle shutdowns.

