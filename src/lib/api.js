```javascript
import { writable } from 'svelte/store';
import { supabaseClient } from '../../supabase/index.js';

export const timelineData = writable([]);

export async function fetchTimelineData() {
  try {
    let { data, error } = await supabaseClient
      .from('timeline')
      .select('*')
      .order('date', { ascending: false });

    if (error) throw error;

    timelineData.set(data);
  } catch (error) {
    console.error('Error fetching timeline data:', error);
  }
}
```