import * as core from '@actions/core';
import * as state from './state';
import * as cleaner from './cleaner';

const workspace = core.getInput('workspace');

if (state.isPost) {
    cleaner.clean(workspace);
}
