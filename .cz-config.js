module.exports = {
  types: [
    {value: 'feat',     name: 'feat:     A new feature'},
    {value: 'fix',      name: 'fix:      A bug fix'},
    {value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature'},
    {value: 'chore',    name: 'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation'},
    {value: 'revert',   name: 'revert:   Revert to a commit'},
    {value: 'WIP',      name: 'WIP:      Work in progress'}
  ],

  // the main features
  scopes: [
    {name: 'build'},
    {name: 'app'},
    {name: 'docs'},
    {name: 'styles'},
    {name: 'tests'},
    {name: 'mocks'}
  ],

  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],

  // Appends the branch name to the footer of the commit. Useful for tracking commits after branches have been merged
  appendBranchNameToCommitMessage: false
}
