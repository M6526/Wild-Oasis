import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qzfjheyscoifsdjfhiyy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6ZmpoZXlzY29pZnNkamZoaXl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzNTM0NTYsImV4cCI6MjAyMTkyOTQ1Nn0.BsGL_g1ShbkvVkty504WEa1Fo1sEL_ajEprPTI8FwOE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
