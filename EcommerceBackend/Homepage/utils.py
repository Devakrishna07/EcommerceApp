from supabase import create_client
from django.conf import settings

# utils/supabase_client.py
from supabase import create_client
from django.conf import settings
import os
from dotenv import load_dotenv
load_dotenv()


supabase = create_client(os.getenv('supabaseurl'), os.getenv('supabase_key'))
