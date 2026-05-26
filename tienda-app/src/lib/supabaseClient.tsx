import { createClient } from '@supabase/supabase-js'; 

const supabaseUrl = 'https://mnbpvsrrkttudkollyxo.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uYnB2c3Jya3R0dWRrb2xseXhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3NTcwNDYsImV4cCI6MjA5NTMzMzA0Nn0.EF-ETobX5xsHqAhCVt3ROgreqymXTM2G9922pK9YFjQ'; 
export const supabase = createClient(supabaseUrl, supabaseKey);