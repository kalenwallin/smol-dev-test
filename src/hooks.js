```javascript
import { session } from '$app/stores';
import { supabaseClient } from '../supabase/index.js';

export const handle = async ({ request, resolve }) => {
  const cookies = cookie.parse(request.headers.cookie || '');
  supabaseClient.auth.setAuth(cookies['sb:token']);

  const response = await resolve(request);

  return {
    ...response,
    headers: {
      ...response.headers,
      'Set-Cookie': `sb:token=${supabaseClient.auth.session().access_token}; Path=/; HttpOnly`
    }
  };
};

export const getSession = async ({ locals }) => {
  const user = supabaseClient.auth.user();

  return {
    user: {
      ...user,
      avatar_url: user.user_metadata.avatar_url,
      full_name: user.user_metadata.full_name
    }
  };
};
```