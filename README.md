# semantic-release-demo [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Test/Demo Repo for experimenting and demoing auto-releasing using [corp]Semantic Release

## Versioning <a name="versioning"></a>

This project uses the [corp-semantic-release](https://github.com/leonardoanalista/corp-semantic-release/) 
module to manage project versioning and releases.
Instead of manually updating the changelog and package version, just provide meaningful commit
messages, using the format described below and versioning will automatically be performed during the
CI builds.

```text
# Commit message format:
# [task-type]([affected-project-aspect]): [issue-id]? - [description]
# Examples:
 
feat(app): US12345 - Added new link in footer
chore(build): Updated istanbul reporting type
style(app): Updated eslint rules to latest version and applied formatting changes
```
**Note:** By default, commitizen uses angular-centric scopes ($location, $browser, $compile, etc) 
so we use cz-customizable to allow us to override them and define our own.

In addition this project supports [commitizen](http://commitizen.github.io/cz-cli/) and a 
[local commitizen install/npm script](https://github.com/tripleaxis/semantic-release-demo/blob/master/package.json#L18) is available for use if command-line git is your thing.

#### Reference Links
- [General commit message conventions](https://github.com/conventional-changelog-archived-repos/conventional-changelog-angular/blob/master/convention.md)
- [Custom scopes for this project](./.cz-config.js)

## GitHooks

This project uses [Husky](https://github.com/typicode/husky) to execute the following git hooks:

- pre-commit: Validate commit message format (as per semantic release commit message rules)
- pre-push: Run linter to ensure no javascript lint errors exist in commits

