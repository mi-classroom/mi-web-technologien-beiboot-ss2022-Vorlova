# Decision for the Branch and Pull Request Management flow

## Status

Accepted.

## Context

To ensure a cleanly maintained codebase and versioning of the software, a workflow needs to be established for adding code to the `main` branch.

## Decision

The likely most commonly used approach of creating separate branches per issue will also be adapted in this project.

To indicate the function of the branch, it will be prefixed accordingly:

* `feature/[branch name]` when a new feature gets added

* `hotfix/[name]` when a quick fix needs to be made in between issues

The branch will then become a Pull Request, which first needs to be reviewed before it's merged into the main branch.

Ideally, *Clean Code* guidelines will be adopted to ensure an understandable codebase and the reviewer is a different developer than the one who made the changes for a new perspective and knowledge sharing.

## Consequences

### Pros:

* Clean code and repository

### Cons:

* Delay of code merges into main depending on availability of reviewer
