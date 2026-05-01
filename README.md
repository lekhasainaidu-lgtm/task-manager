# ðŸ“ Task Manager

A feature-rich productivity app with drag-and-drop Kanban boards, deadlines, priorities, and team collaboration.

## ðŸš€ Tech Stack

- **Frontend:** React.js, React DnD
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL, Sequelize ORM
- **Auth:** JWT

## âœ¨ Features

- Drag-and-drop Kanban board (Todo / In Progress / Done)
- Task priorities (Low, Medium, High, Urgent)
- Due dates & reminders
- Team collaboration & task assignment
- Comments on tasks
- Activity log
- Dark/light mode

## ðŸ“ Project Structure

```
task-manager/
â”œâ”€â”€ client/
â”‚   â””â”€â”€ src/
â”‚       â”œâ”€â”€ components/
â”‚       â”‚   â”œâ”€â”€ Board.jsx
â”‚       â”‚   â”œâ”€â”€ Column.jsx
â”‚       â”‚   â”œâ”€â”€ TaskCard.jsx
â”‚       â”‚   â””â”€â”€ TaskModal.jsx
â”‚       â””â”€â”€ App.jsx
â”œâ”€â”€ server/
â”‚   â”œâ”€â”€ controllers/
â”‚   â”œâ”€â”€ models/
â”‚   â”‚   â”œâ”€â”€ Task.js
â”‚   â”‚   â””â”€â”€ User.js
â”‚   â”œâ”€â”€ routes/
â”‚   â””â”€â”€ server.js
â””â”€â”€ README.md
```

## âš™ï¸ Setup

```bash
git clone https://github.com/lekhasainaidu-lgtm/task-manager.git

# Backend
cd server && npm install
# Configure PostgreSQL in .env
npm start

# Frontend
cd client && npm install
npm run dev
```

## ðŸŒ Environment Variables

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=taskmanager
DB_USER=postgres
DB_PASSWORD=yourpassword
JWT_SECRET=your_secret
```

---
Made with â¤ï¸ by [Lekha](https://github.com/lekhasainaidu-lgtm)
