import * as core from '@actions/core';
import * as state from './state';
import { Cleaner } from './cleaner';

const cleaner = new Cleaner();

const workspace = core.getInput('workspace');
console.info(workspace);
console.info(process.env);

if (!state.isPost) {
    console.info('Do nothing because this is not post');
} else {
    console.log('cleaning');
    cleaner.clean();
}
