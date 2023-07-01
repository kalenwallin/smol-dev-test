```javascript
import { supabase } from '$lib/db.js';

export async function createTimelineElement(element) {
    const { data, error } = await supabase
        .from('TimelineElement')
        .insert([element]);
    if (error) throw error;
    return data;
}

export async function updateTimelineElement(id, updates) {
    const { data, error } = await supabase
        .from('TimelineElement')
        .update(updates)
        .match({ id });
    if (error) throw error;
    return data;
}

export async function deleteTimelineElement(id) {
    const { data, error } = await supabase
        .from('TimelineElement')
        .delete()
        .match({ id });
    if (error) throw error;
    return data;
}
```