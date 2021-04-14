import * as core from '@actions/core';
import * as github from '@actions/github';
import * as fs from 'fs';

export class Cleaner {
    public clean(): void {
        core.info('Going to remove some files brah');
        core.info(github.context['workspace']);
        core.info(JSON.stringify(process.env));
        console.info('Going to remove some files brah');
        console.info(github.context['workspace']);
        console.info(JSON.stringify(process.env));
    }
}
