import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://xyzcompany.supabase.co'
const SUPABASE_ANON_KEY = 'your-anon-key'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export const TimelineElement = supabase.from('TimelineElement')

export async function getTimelineElements() {
  let { data: timelineElements, error } = await TimelineElement.select('*')
  if (error) {
    console.error('Error fetching timeline elements:', error)
    return []
  }
  return timelineElements
}

export async function addTimelineElement(element) {
  let { data: newElement, error } = await TimelineElement.insert(element)
  if (error) {
    console.error('Error adding new timeline element:', error)
    return null
  }
  return newElement
}

export async function updateTimelineElement(id, updatedElement) {
  let { data: updatedElement, error } = await TimelineElement.update(updatedElement).match({ id })
  if (error) {
    console.error('Error updating timeline element:', error)
    return null
  }
  return updatedElement
}

export async function deleteTimelineElement(id) {
  let { data: deletedElement, error } = await TimelineElement.delete().match({ id })
  if (error) {
    console.error('Error deleting timeline element:', error)
    return null
  }
  return deletedElement
}