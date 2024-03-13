import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ramieupwggqvslsltkes.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhbWlldXB3Z2dxdnNsc2x0a2VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4NDQ0MjMsImV4cCI6MjAyNTQyMDQyM30.hOqRYJOGrnpaf6qb1kLHtl1P0Muee81hR_e0lFDPNYI';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export { supabase };
