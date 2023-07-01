```javascript
import { session } from '$app/stores';
import { init as initSupabase } from '../supabase/init';
import { user as supabaseUser } from '../supabase/auth';
import { theme, toggleTheme } from './lib/theme';

let user;

supabaseUser.subscribe((value) => {
	user = value;
});

export let themeClass = '';

theme.subscribe((value) => {
	themeClass = value;
});

async function init() {
	await initSupabase();
	const sessionData = get(session);
	if (sessionData.user) {
		user = sessionData.user;
	}
}

init();

function switchTheme() {
	toggleTheme();
}

export { user, switchTheme };
```