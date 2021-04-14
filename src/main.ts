import * as core from '@actions/core';
import * as state from './state';
import { Cleaner } from './cleaner';

const cleaner = new Cleaner();

const workspace = core.getInput('workspace');

if (state.isPost) {
    cleaner.clean(workspace);
}
