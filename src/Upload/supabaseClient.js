import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sdwbehwxwdorcacpffpv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkd2JlaHd4d2RvcmNhY3BmZnB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2MTgwOTcsImV4cCI6MjA4NDE5NDA5N30.jrKrSWLNf7jiMocgHa2AvuNkKN0tCPeFdG_nEBz_SXk";

export const supabase = createClient(supabaseUrl, supabaseKey);
