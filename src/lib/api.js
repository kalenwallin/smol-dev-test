import { writable } from 'svelte/store';
import { supabase } from './db.js';

export const timelineData = writable([]);

export async function fetchTimelineData() {
  try {
    let { data, error } = await supabase
      .from('TimelineElement')
      .select('*')
      .order('date', { ascending: false });

    if (error) throw error;

    timelineData.set(data);
  } catch (error) {
    console.error('Error fetching timeline data:', error);
  }
}