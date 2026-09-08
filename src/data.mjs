export const profile = {
  name: 'Shulamit Katzenbogen', username: 's0548411104-gif',
  email: 's0548411104@gmail.com', linkedin: null,
  phone: '0548411104', phoneHref: '+972548411104',
  site: 'https://s0548411104-gif.github.io', repositories: 19,
  reviewed: '2026-09-08'
};

// Demo URLs refer to frontend applications; record availability checks in CONTENT-SOURCES.md.
export const projects = [
  {
    id: 'directvision', name: 'DirectVision', repo: 'Direct_Insurance_Hackathon', category: 'AI & Full Stack', filters: ['AI', 'Full Stack'], label: 'HACKATHON PROJECT',
    description: 'AI-powered property verification. From a smartphone photo to an informed underwriting decision.',
    technologies: ['React', 'TypeScript', 'Node.js', 'FastAPI', 'Gemini', 'Claude', 'MongoDB', 'Cloudinary', 'Socket.io'],
    overview: 'An insurance underwriting platform connecting property photo capture, AI analysis and a real-time underwriter dashboard.',
    problem: 'Property inspections involve manual review and reconciling customer declarations with evidence from the property.',
    solution: 'A React client collects photos. An Express service stores images and session data, calls a Python AI service, and publishes analysis results to the dashboard through Socket.io.',
    features: ['Property photo capture and location data', 'Vision analysis and underwriting logic', 'Comparison with customer declarations', 'Risk indicators and an evidence log', 'Live dashboard updates'],
    architecture: ['React clients', 'Express / Socket.io', 'FastAPI → Gemini + Claude'],
    architectureNote: 'Express also connects to MongoDB Atlas for session data and Cloudinary for image storage.',
    sources: ['server/server.js', 'ai/main.py', 'README.md'], demo: null
  },
  {
    id: 'agentic-rag', name: 'Agentic Docs RAG', repo: 'agentic-coding-rag', category: 'AI & Knowledge Systems', filters: ['AI'], label: 'EVENT-DRIVEN ARCHITECTURE',
    description: 'Turning scattered development documentation into a searchable, context-aware knowledge system.',
    technologies: ['Python', 'LlamaIndex', 'Cohere', 'Pinecone', 'Pydantic', 'Gradio'],
    overview: 'An event-driven knowledge router for documentation produced while working with AI coding tools.',
    problem: 'Technical decisions and coding rules become difficult to retrieve when spread across Markdown documents.',
    solution: 'A workflow validates input and routes structured requests to extracted JSON or open-ended questions to semantic retrieval in Pinecone. Cohere generates a response from the retrieved context.',
    features: ['Structured and semantic retrieval paths', 'Pydantic schemas for extracted decisions and rules', 'Input validation before retrieval', 'Context-grounded generation prompts', 'Asynchronous Gradio interface'],
    architecture: ['Gradio → Validation', 'Router → JSON or Pinecone', 'Cohere → Answer'],
    architectureNote: 'LlamaIndex events connect validation, retrieval and generation. This is a branching retrieval flow, not a single sequential search pipeline.',
    sources: ['workflow_chat.py', 'extract_data.py', 'README.md'], demo: null
  },
  {
    id: 'helpdesk', name: 'Helpdesk', repo: 'HelpDesk-proj-react', category: 'Frontend & API Integration', filters: ['Full Stack'], label: 'ROLE-AWARE WORKFLOWS',
    description: 'A support workspace with ticket management, threaded conversations and role-aware interfaces.',
    technologies: ['React', 'TypeScript', 'React Router', 'Axios', 'CSS'],
    overview: 'A React and TypeScript helpdesk frontend for users, support agents and administrators.',
    problem: 'Support teams need a shared place to track requests, assign ownership and keep communication attached to each issue.',
    solution: 'Dedicated ticket views, search and filters connect to a backend API through Axios, with authentication context and role-specific controls.',
    features: ['Ticket search and status filtering', 'Agent assignment and priority controls', 'Ticket comments', 'Authentication context and guarded routes'],
    architecture: ['React + AuthContext', 'Axios + bearer token', 'External helpdesk API'],
    architectureNote: 'This repository contains the frontend. Its README describes a Node.js / Express and MySQL backend; the checked API service targets localhost:4000.',
    sources: ['src/services/api.service.ts', 'src/context/AuthContext.tsx', 'README.md'], demo: null
  },
  {
    id: 'todo', name: 'Fullstack ToDo', repo: 'ToDoList-Fullstack', category: 'Full Stack & Backend', filters: ['Full Stack'], label: 'END-TO-END DEVELOPMENT',
    description: 'A focused task application connecting a React interface to a .NET Minimal API and MySQL.',
    technologies: ['React', 'C#', '.NET', 'Entity Framework Core', 'MySQL', 'Docker'],
    overview: 'A full-stack task management application with a React client and a relational database-backed API.',
    problem: 'Task changes need to persist beyond the browser and stay consistent through a clear API contract.',
    solution: 'An Axios service connects the client to .NET Minimal API endpoints. Entity Framework Core maps the API models to a MySQL database using a database-first approach.',
    features: ['Task creation, updates and deletion', 'Database-first Entity Framework models', 'Swagger / OpenAPI documentation', 'Environment-based configuration and Dockerfile'],
    architecture: ['React → Axios', '.NET Minimal API', 'EF Core → MySQL'],
    architectureNote: 'The repository includes deployment configuration. Authentication is described as future groundwork, so it is not presented as an implemented feature.',
    sources: ['TodoApi/Program.cs', 'TodoApi/Dockerfile', 'README.md'], demo: 'https://todolist-fullstack2.onrender.com'
  },
  {
    id: 'weather-mcp', name: 'Weather MCP', repo: 'MCP-Playwright-AI', category: 'AI & Automation', filters: ['AI', 'Automation'], label: 'TOOL-USING AI',
    description: 'Connecting conversational AI to browser automation through the Model Context Protocol.',
    technologies: ['Python', 'MCP', 'Playwright', 'Gemini'],
    overview: 'A Gemini-powered chat host that discovers and calls tools exposed by weather MCP servers.',
    problem: 'An AI assistant needs current weather information beyond its built-in knowledge.',
    solution: 'The host maps model tool calls to MCP clients. The Israel weather tool uses Playwright to navigate a weather website and extract forecast content from the page.',
    features: ['MCP tool discovery', 'Multiple MCP clients', 'Model-driven tool calls', 'Browser-based forecast extraction'],
    architecture: ['Gemini chat host', 'MCP client → tools', 'Playwright → Weather page'],
    architectureNote: 'Tool results are returned to the model to continue the conversation.',
    sources: ['host.py', 'weather_Israel.py', 'README.md'], demo: null
  },
  {
    id: 'outlook', name: 'Outlook Drafts Helper', repo: 'outlook-helper', category: 'Backend & Automation', filters: ['Automation'], label: 'WORKFLOW AUTOMATION',
    description: 'Bridging a web form and desktop Outlook to prepare individual email drafts with attachments.',
    technologies: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS', 'pywin32'],
    overview: 'A local Windows utility that prepares Outlook drafts from a web interface for recruitment workflows.',
    problem: 'A mailto link cannot attach local CV files, making repetitive draft preparation cumbersome.',
    solution: 'A web form posts draft data to a local Flask service. The service uses the Outlook COM interface to create a separate draft for each recipient, with the selected attachment.',
    features: ['Separate drafts for each recipient', 'Local file attachments', 'Background thread for draft creation', 'Human review before sending'],
    architecture: ['HTML / JavaScript form', 'Local Flask service', 'win32com → Outlook drafts'],
    architectureNote: 'Requires Windows and desktop Outlook. Drafts are displayed for review rather than sent automatically. Architecture is documented in the repository README.',
    sources: ['README.md'], demo: null
  },
  {
    id: 'angular-tasks', name: 'Angular Task Manager', repo: 'task-manager-angular', category: 'Frontend & API Integration', filters: ['Full Stack'], label: 'TEAM TASK MANAGEMENT',
    description: 'A team workspace with project task boards, drag-and-drop status changes and task conversations.',
    technologies: ['Angular', 'TypeScript', 'Angular CDK', 'Signals', 'Reactive Forms'],
    overview: 'An Angular frontend with login, registration, teams, projects and task boards connected to an external API.',
    problem: 'Teams need to organize tasks by project, track their status and keep discussions connected to the work.',
    solution: 'Guarded Angular routes connect teams and projects to task boards. Signals compute filtered task columns, while service calls persist task updates and comments.',
    features: ['Login and registration screens with guarded routes', 'Drag-and-drop between task statuses', 'Search by title and description', 'Task creation, deletion and priority updates', 'Task comments'],
    architecture: ['Angular routes + components', 'Signals + task services', 'External REST API'],
    architectureNote: 'The repository contains the Angular frontend. The task board uses Angular CDK drag-and-drop and Reactive Forms; the backend is external.',
    sources: ['src/app/app.routes.ts', 'src/app/components/task-board/task-board.ts', 'src/environments/environment.ts'],
    demo: 'https://task-manager-8wxa.onrender.com/login'
  }
];

export const additionalLiveProjects = [
  {
    name: 'Country Finder',
    description: 'A Flutter app for searching country information, including capitals, languages, currencies, population and flags.',
    architecture: ['Flutter Web', 'REST Countries API', 'Country information'],
    technologies: ['Flutter', 'Dart', 'REST API'],
    demo: 'https://s0548411104-gif.github.io/Flutter-Project/'
  }
];

export const stack = [
  { name: 'Languages', icon: '⌘', items: [['Python', 'agentic-rag'], ['TypeScript', 'directvision'], ['JavaScript', 'outlook'], ['C#', 'todo'], ['SQL / MySQL', 'todo']] },
  { name: 'Frontend', icon: '▣', items: [['React', 'helpdesk'], ['Angular', 'angular-tasks'], ['HTML & CSS', 'outlook'], ['React Router', 'helpdesk'], ['Gradio', 'agentic-rag']] },
  { name: 'Backend', icon: '⇄', items: [['Node.js / Express', 'directvision'], ['FastAPI', 'directvision'], ['.NET Minimal API', 'todo'], ['Flask', 'outlook'], ['REST APIs', 'todo']] },
  { name: 'AI & Agents', icon: '✳', items: [['RAG / LlamaIndex', 'agentic-rag'], ['Gemini / Claude', 'directvision'], ['Cohere', 'agentic-rag'], ['MCP', 'weather-mcp'], ['Multi-agent workflows', 'directvision']] },
  { name: 'Data & Cloud', icon: '▤', items: [['Pinecone', 'agentic-rag'], ['MongoDB Atlas', 'directvision'], ['MySQL / EF Core', 'todo'], ['Cloudinary', 'directvision'], ['Docker', 'todo']] },
  { name: 'Automation', icon: '↗', items: [['Playwright', 'weather-mcp'], ['Socket.io', 'directvision'], ['Pydantic', 'agentic-rag'], ['Outlook COM', 'outlook']] }
];
