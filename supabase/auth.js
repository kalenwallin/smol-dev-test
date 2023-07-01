```javascript
import { supabaseClient } from './index.js';

let user;

export async function signIn(email, password) {
  const { user, error } = await supabaseClient.auth.signIn({ email, password });
  if (error) throw error;
  return user;
}

export async function signOut() {
  const { error } = await supabaseClient.auth.signOut();
  if (error) throw error;
}

export async function signUp(email, password) {
  const { user, error } = await supabaseClient.auth.signUp({ email, password });
  if (error) throw error;
  return user;
}

export function getUser() {
  user = supabaseClient.auth.user();
  return user;
}

export function onAuthStateChange(callback) {
  return supabaseClient.auth.onAuthStateChange((event, session) => {
    user = session?.user;
    callback(event, session);
  });
}
```