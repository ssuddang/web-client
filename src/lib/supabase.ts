import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mexdptyyyfuinfzogdqe.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1leGRwdHl5eWZ1aW5mem9nZHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMTU0ODUsImV4cCI6MjA1NTc5MTQ4NX0.gDKV-0PnUEhxNrT8D41O8a7tgPdkpFb2CA8qr0JxQRI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
