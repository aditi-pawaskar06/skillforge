#Project name
SkillForge 

#Overview
SkillForge is a personal knowledge-tracking and productivity platform that helps you collect notes, track learning goals, log micro-tasks, and quickly capture idea via a CLI.

#Feature List
MVP -  Minimum Viable Product
1. User can sign up / sign in (using email + password, simple auth).
2. Web UI: Dashboard showing skills, notes and tasks.
3. Create/Read/Update/Delete (CRUD) for:
    -skills (title, progress, tags)
    -notes (markdown or plain text)
    -tasks (title, status, due date)
4. local persistance + backend storage (DB)
5. Fetch API calls from frontend to backend
6. Local storage fro small client-side cache / session
7. CLI tool to quickly add a task or note (stores to backend via API or local queue)

#Tech Stack
Frontend: HTML, CSS, Vanila JS (ES modules)
Backend: Node.js + Express
DB: SQLite (Simple and Good for small scale application)
CLI: Node.js Script
Testing: Jest
Version control: Git + GitHub
Deploy: Frontend (GitHub Pages) + Backend (Render)

#Folder Structure
skillforge/
├─ README.md
├─ .gitignore
├─ frontend/
│  ├─ index.html
│  ├─ styles.css
│  ├─ src/
│  │  ├─ app.js            # main entry
│  │  ├─ api.js            # fetch wrappers
│  │  ├─ components/
│  │  │  ├─ SkillCard.js
│  │  │  └─ TaskList.js
│  │  └─ utils.js
│  └─ static/
├─ backend/
│  ├─ package.json
│  ├─ src/
│  │  ├─ server.js
│  │  ├─ routes/
│  │  ├─ controllers/
│  │  ├─ services/
│  │  └─ db/
│  └─ data/
│     └─ skillforge.db     # sqlite file
├─ cli/
│  ├─ add.js
│  └─ package.json
└─ tests/
   ├─ backend/
   └─ frontend/
