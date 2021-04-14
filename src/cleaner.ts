import * as fs from 'fs';

export class Cleaner {
    public clean(workspace: string): void {
        fs.rmdirSync(workspace, { recursive: true });
    }
}
