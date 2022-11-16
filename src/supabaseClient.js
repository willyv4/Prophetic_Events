import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://rrvlynmopzpnicnulwco.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJydmx5bm1vcHpwbmljbnVsd2NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ0MTYxMDcsImV4cCI6MTk3OTk5MjEwN30.vP-gMKp3xOcjVh-VaBEmDejSmQOZQfEB4hk5wpK8ZUM"
);

export default supabase;
