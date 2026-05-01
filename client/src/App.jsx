import { useState } from 'react';

const COLUMNS = ['Todo', 'In Progress', 'Done'];
const COLORS  = { 'Todo': '#8b5cf6', 'In Progress': '#f59e0b', 'Done': '#10b981' };

const initialTasks = [
  { id: 1, title: 'Design UI mockups',      priority: 'High',   column: 'Done' },
  { id: 2, title: 'Set up database schema', priority: 'High',   column: 'Done' },
  { id: 3, title: 'Build REST API',         priority: 'High',   column: 'In Progress' },
  { id: 4, title: 'Implement drag & drop',  priority: 'Medium', column: 'In Progress' },
  { id: 5, title: 'Write unit tests',       priority: 'Low',    column: 'Todo' },
  { id: 6, title: 'Deploy to production',   priority: 'Medium', column: 'Todo' },
];

const PRIORITY_COLORS = { High: '#ef4444', Medium: '#f59e0b', Low: '#10b981' };

function TaskCard({ task, onMove }) {
  return (
    <div style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:10, padding:14, marginBottom:10 }}>
      <div style={{ fontWeight:600, marginBottom:8, color:'#f1f5f9' }}>{task.title}</div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <span style={{ fontSize:'0.75rem', padding:'2px 8px', borderRadius:100, background:`${PRIORITY_COLORS[task.priority]}22`, color:PRIORITY_COLORS[task.priority], fontWeight:600 }}>
          {task.priority}
        </span>
        <div style={{ display:'flex', gap:4 }}>
          {COLUMNS.filter(c => c !== task.column).map(col => (
            <button key={col} onClick={() => onMove(task.id, col)}
              style={{ fontSize:'0.7rem', padding:'2px 8px', borderRadius:6, border:`1px solid ${COLORS[col]}44`, background:`${COLORS[col]}11`, color:COLORS[col], cursor:'pointer' }}>
              â†’ {col}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const moveTask = (id, column) => setTasks(t => t.map(task => task.id === id ? { ...task, column } : task));

  return (
    <div style={{ minHeight:'100vh', background:'#0a0a0f', color:'#f1f5f9', fontFamily:'Inter, sans-serif', padding:24 }}>
      <h1 style={{ marginBottom:32 }}>ðŸ“ Task Manager</h1>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
        {COLUMNS.map(col => (
          <div key={col} style={{ background:'rgba(255,255,255,0.03)', border:`1px solid ${COLORS[col]}33`, borderRadius:14, padding:16 }}>
            <h3 style={{ color:COLORS[col], marginBottom:16, display:'flex', justifyContent:'space-between' }}>
              {col} <span style={{ background:`${COLORS[col]}22`, borderRadius:100, padding:'2px 10px', fontSize:'0.8rem' }}>
                {tasks.filter(t => t.column === col).length}
              </span>
            </h3>
            {tasks.filter(t => t.column === col).map(task => (
              <TaskCard key={task.id} task={task} onMove={moveTask} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
