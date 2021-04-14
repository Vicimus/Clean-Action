import * as coreCommand from '@actions/core/lib/command'

export const isPost = !!process.env['STATE_isPost'];

if (!isPost) {
    coreCommand.issueCommand('save-state', { name: 'isPost' }, 'true')
}
