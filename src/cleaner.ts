import * as core from '@actions/core';

export class Cleaner {
    public clean(): void {
        core.debug('Cleaning up real nice');
    }
}
