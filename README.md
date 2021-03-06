# CI Tools Workshop
[![Build Status](https://travis-ci.org/alexcanessa/ci-tools-workshop.svg?branch=master)](https://travis-ci.org/alexcanessa/ci-tools-workshop)
[![codecov](https://codecov.io/gh/alexcanessa/ci-tools-workshop/branch/master/graph/badge.svg)](https://codecov.io/gh/alexcanessa/ci-tools-workshop)

Workshop repo, created to help the explanation of several code sessions in a CI tools workshop

## Getting started

`master` will be at the current stage of the workshop. Once a session is completed, will be left in a branch with the same name of the session itself.

1. Fork this repo and run `npm install`
2. Sign in into [TravisCI](https://travis-ci.org) with GitHub
3. Follow the slides / speaker

## Slides

The slides for each section are in the `./slides` folder, starting with the session number.

- [Starting from zero](./slides/01.starting-from-zero.md)
- [Unit testing](./slides/02.unit-testing.md)
- [Integration testing](./slides/03.integration-testing.md)

To run the slides you'll need [reveal-md](https://github.com/webpro/reveal-md) and use:

```shell
reveal-md slides/ --theme alexcanessa
```
