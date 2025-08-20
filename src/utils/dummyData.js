// dummyData.js

// Users
export const user = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+201234567890",
  linkedin: "linkedin.com/in/johndoe",
  github: "github.com/johndoe",
  twitter: "@johndoe",
};


// Projects
export const projects = [
  {
    id: 1,
    name: "E-Commerce Website",
    client: "TechMart",
    status: "In Progress",
    deadline: "2025-09-30",
    budget: 3000,
    earnings: 2000,
    manager: "John Doe",
  },
  {
    id: 2,
    name: "Portfolio Website",
    client: "Sarah Johnson",
    status: "Completed",
    deadline: "2025-08-10",
    budget: 1200,
    earnings: 1200,
    manager: "Sarah Johnson",
  },
  {
    id: 3,
    name: "Mobile App UI",
    client: "GreenBank",
    status: "In Progress",
    deadline: "2025-09-25",
    budget: 5000,
    earnings: 2500,
    manager: "Michael Smith",
  },
  {
    id: 4,
    name: "Landing Page",
    client: "StartupHub",
    status: "Pending",
    deadline: "2025-10-05",
    budget: 800,
    earnings: 0,
    manager: "John Doe",
  },
  {
    id: 5,
    name: "CRM System",
    client: "BizCorp",
    status: "In Progress",
    deadline: "2025-11-15",
    budget: 7000,
    earnings: 3500,
    manager: "Sarah Johnson",
  },
  {
    id: 6,
    name: "Blog Platform",
    client: "ContentKing",
    status: "Completed",
    deadline: "2025-08-20",
    budget: 1500,
    earnings: 1500,
    manager: "Michael Smith",
  },
];

// Tasks
export const tasks = [
  { id: 1, projectId: 1, title: "Design homepage", dueDate: "2025-09-20", completed: false },
  { id: 2, projectId: 1, title: "API integration", dueDate: "2025-09-28", completed: false },
  { id: 3, projectId: 2, title: "Deploy website", dueDate: "2025-08-09", completed: true },
  { id: 4, projectId: 3, title: "Create wireframes", dueDate: "2025-09-18", completed: true },
  { id: 5, projectId: 3, title: "Frontend development", dueDate: "2025-09-25", completed: false },
  { id: 6, projectId: 4, title: "Client review meeting", dueDate: "2025-10-02", completed: false },
  { id: 7, projectId: 5, title: "Database setup", dueDate: "2025-10-10", completed: false },
  { id: 8, projectId: 5, title: "Backend API development", dueDate: "2025-11-05", completed: false },
  { id: 9, projectId: 6, title: "Write blog module", dueDate: "2025-08-15", completed: true },
  { id: 10, projectId: 6, title: "SEO optimization", dueDate: "2025-08-18", completed: true },
];

// Activities
export const activities = [
  // Project completions
  { id: 1, message: "Completed Portfolio Website for Sarah Johnson", date: "2025-08-10", type: "completed" },

  // Project starts
  { id: 3, message: "Started E-Commerce Website project for TechMart", date: "2025-08-15", type: "started" },

  // Milestones/deliveries
  { id: 5, message: "Submitted Mobile App wireframes to GreenBank", date: "2025-09-05", type: "delivery" },
  { id: 6, message: "Added new project Landing Page for StartupHub", date: "2025-09-12", type: "new_project" },

  // Client interactions
  { id: 7, message: "Client meeting with TechMart to discuss requirements", date: "2025-08-14", type: "meeting" },
  { id: 8, message: "Received feedback from Sarah Johnson on portfolio design", date: "2025-08-08", type: "feedback" },

  // Payments
  { id: 9, message: "Received payment of $1,200 for Portfolio Website", date: "2025-08-11", type: "payment" },
  { id: 10, message: "Invoice sent to GreenBank for Mobile App UI", date: "2025-09-06", type: "invoice" },

  // Task completions
  { id: 11, message: "Completed task: Deploy website for Portfolio project", date: "2025-08-09", type: "task_completed" },

  // System/account activities
  { id: 13, message: "Updated profile information", date: "2025-09-01", type: "profile_update" },
  { id: 14, message: "Changed account password", date: "2025-08-25", type: "security" },

  // New features/updates
  { id: 15, message: "Integrated new analytics dashboard", date: "2025-09-15", type: "update" },
  { id: 16, message: "Added dark mode to application settings", date: "2025-09-08", type: "feature" }
];

// Monthly earnings (for charts)
export const monthlyEarnings = [
  { month: "Jan", earnings: 1200 },
  { month: "Feb", earnings: 1800 },
  { month: "Mar", earnings: 2400 },
  { month: "Apr", earnings: 1000 },
  { month: "May", earnings: 2000 },
  { month: "Jun", earnings: 3000 },
  { month: "Jul", earnings: 2500 },
  { month: "Aug", earnings: 2700 },
  { month: "Sep", earnings: 4500 },
  { month: "Oct", earnings: 3800 },
  { month: "Nov", earnings: 5000 },
  { month: "Dec", earnings: 4200 },
];

// Task stats (for pie chart)
export const taskStats = [
  { name: "Completed", value: tasks.filter(t => t.completed).length },
  { name: "Pending", value: tasks.filter(t => !t.completed).length },
];


export const notifications = [
  {
    id: 1,
    type: 'project',
    message: 'New project "Website Redesign" assigned',
    time: '10 minutes ago',
    read: false
  },
  {
    id: 2,
    type: 'payment',
    message: 'Payment of $1,200 received',
    time: '2 hours ago',
    read: false
  },
  {
    id: 3,
    type: 'message',
    message: 'New message from Sarah Johnson',
    time: '5 hours ago',
    read: true
  },
  {
    id: 4,
    type: 'task',
    message: 'Task "Update documentation" due tomorrow',
    time: '1 day ago',
    read: true
  }
];