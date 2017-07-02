/*
 * Use this file to configure what work-types and scopes are available to commitizen
 * and control what commit-types require a major, minor or patch version increase
 *
 * E.g.
 * MAJOR: Commit message includes the text 'BREAKING CHANGE'
 * MINOR: Commit type: 'feat'
 * PATCH: Commit type: 'fix'
 *
 * https://github.com/conventional-changelog-archived-repos/conventional-changelog-angular/blob/master/convention.md
 */

module.exports = {
  types: [
    {value: 'feat',     name: 'feat:     A new feature'},
    {value: 'fix',      name: 'fix:      A bug fix'},
    {value: 'docs',     name: 'docs:     Documentation only changes'},
    {value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature'},
    {value: 'test',     name: 'test:     Add/fix/update tests'},
    {value: 'chore',    name: 'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation'},
    {value: 'revert',   name: 'revert:   Revert to a commit'},
    {value: 'WIP',      name: 'WIP:      Work in progress'}
  ],

  // the main features
  scopes: [
    {name: 'app'},
    {name: 'build'},
    {name: 'styles'},
    {name: 'tests'},
    {name: 'mocks'}
  ],

  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],

  // Appends the branch name to the footer of the commit. Useful for tracking commits after branches have been merged
  appendBranchNameToCommitMessage: false
};
