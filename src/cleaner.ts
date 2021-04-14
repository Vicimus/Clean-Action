import * as fs from 'fs';

export function clean(workspace: string): void {
    fs.rmdirSync(workspace + '/../', { recursive: true });
}
