import { app, BrowserWindow } from 'electron';
import path from 'path';

app.on('ready', () => {
	const window = new BrowserWindow({
		width: 800,
		height: 600,
	});

	window.loadFile(path.join(app.getAppPath(), 'dist-react/index.html'));
});
