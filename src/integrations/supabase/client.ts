// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://hpqqzsjcjfhjqxtkcdul.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwcXF6c2pjamZoanF4dGtjZHVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxMjEwNjgsImV4cCI6MjA2NDY5NzA2OH0.ISJdWurRwut7T_oYrtnWKHDf-IIp_nXUeUPjxEWS9Uo";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);