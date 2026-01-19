from supabase import create_client, Client
url='https://klsnsvcrjehnyqtfpcpb.supabase.co'
key='sb_publishable_xm4hbiaLecC6Jp28gAjSVw_qaDG8KA3'
# sb_secret_Lp-pqG8i7_dVhlbOy-a9OQ_q5ZV3iIv
supabase: Client = create_client(url, key)
response = supabase.table("students").select("*").execute()