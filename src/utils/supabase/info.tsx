// Supabase configuration from environment variables
// Set these in Vercel: VITE_SUPABASE_PROJECT_ID and VITE_SUPABASE_ANON_KEY
// For local development, create a .env.local file with these values

export const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID || "fhwkzompilrjqguajqmf"
export const publicAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZod2t6b21waWxyanFndWFqcW1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwMzM4MzYsImV4cCI6MjA3NTYwOTgzNn0.R31dfuSwPjspETHFCesh6dv-H1naNUwCsZ3fC_atN3A"