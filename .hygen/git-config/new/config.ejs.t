---
to: .git/config
---
[core]
  repositoryformatversion = 0
  filemode = true
  bare = false
  logallrefupdates = true
  ignorecase = true
  precomposeunicode = true
  # https://github.blog/2022-06-29-improve-git-monorepo-performance-with-a-file-system-monitor/
  fsmonitor = true
  hooksPath = .husky/_
[remote "origin"]
  url = git@gitlab.com:<%= organization %>/<%= repo %>.git
  fetch = +refs/heads/*:refs/remotes/origin/*
  fetch = +refs/merge-requests/*/head:refs/remotes/origin/mr/*
[branch "master"]
  remote = origin
  merge = refs/heads/master
# To fetch and merge in MR/PR from GitHub
[remote "mirror"]
  url = git@github.com:<%= organization %>/<%= repo %>.git
  fetch = +refs/heads/*:refs/remotes/mirror/*
  fetch = +refs/pull/*/head:refs/remotes/mirror/pr/*
