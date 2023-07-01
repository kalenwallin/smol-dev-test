```javascript
import { init } from './app.js';
import { supabaseClient } from '../supabase/index.js';

export async function startServer() {
  try {
    await init(supabaseClient);
    console.log('Server started successfully');
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

startServer();
```