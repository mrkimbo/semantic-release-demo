# semantic-release-demo [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Test/Demo Repo for experimenting and demoing semantic release

## Versioning <a name="versioning"></a>

This project uses the [corp-semantic-release](https://github.com/leonardoanalista/corp-semantic-release/) 
module to manage semantic releases. 
Instead of manually updating the changelog and package version, just provide meaningful commit
messages, using the format described below and versioning will automatically be performed during the
bamboo builds.

[Commit message format reference](https://github.com/leonardoanalista/corp-semantic-release/blob/master/config/release/commitMessageConfig.js)

```text
# Commit message format:
# [task-type]([affected-project-aspect]): [issue-id]? - [description]
# Examples:
 
feat(app): US12345 - Added new link in footer
chore(build): Updated istanbul reporting type
style(app): Updated eslint rules to latest version and applied formatting changes
```
