import * as core from '@actions/core';
import * as state from './state';
import { Cleaner } from './cleaner';

const cleaner = new Cleaner();

if (!state.isPost) {
    core.debug('Do nothing because this is not post');
} else {
    cleaner.clean();
}
