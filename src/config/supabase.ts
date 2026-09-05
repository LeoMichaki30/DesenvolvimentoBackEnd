import {createClient} from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPASEBASE_URL!;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY!;

const supabase = createClient(
    supabaseUrl,
    supabaseSecretKey
);

export default supabase;