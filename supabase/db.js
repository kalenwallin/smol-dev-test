```javascript
import { supabaseClient } from './index.js';

export async function fetchTimelineData() {
  let { data, error } = await supabaseClient
    .from('timeline')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching timeline data:', error);
    return null;
  }

  return data;
}

export async function addTimelineElement(element) {
  const { data, error } = await supabaseClient
    .from('timeline')
    .insert([element]);

  if (error) {
    console.error('Error adding timeline element:', error);
    return null;
  }

  return data;
}

export async function updateTimelineElement(id, updates) {
  const { data, error } = await supabaseClient
    .from('timeline')
    .update(updates)
    .eq('id', id);

  if (error) {
    console.error('Error updating timeline element:', error);
    return null;
  }

  return data;
}

export async function deleteTimelineElement(id) {
  const { data, error } = await supabaseClient
    .from('timeline')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting timeline element:', error);
    return null;
  }

  return data;
}
```