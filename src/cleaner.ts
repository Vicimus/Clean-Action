import * as core from '@actions/core';
import * as github from '@actions/github';
import * as fs from 'fs';

export class Cleaner {
    public async clean(): Promise<void> {
        core.info('Going to remove some files brah');
        core.info(github.context['workspace']);
        core.info(JSON.stringify(process.env));
    }
}
