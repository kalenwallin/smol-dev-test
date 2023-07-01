import { createClient } from '@supabase/supabase-js'
import { timelineData } from './store.js'

const supabaseUrl = 'https://xyzcompany.supabase.co'
const supabaseKey = 'public-anon-key'
const supabase = createClient(supabaseUrl, supabaseKey)

export const TimelineElement = {
  title: String,
  description: String,
  date: Date,
  icon: String
}

export async function fetchTimelineData() {
  let { data, error } = await supabase
    .from('TimelineElement')
    .select('*')
    .order('date', { ascending: false })

  if (error) console.error('Error fetching timeline data:', error)
  else timelineData.set(data)
}