```javascript
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://xyzcompany.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';

export const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function addElement(element) {
  const { data, error } = await db.from('timeline').insert([element]);
  if (error) {
    console.error('Error adding element:', error);
  } else {
    return data;
  }
}
```