import ReleasedLabelPlugin from '..';
import makeCommitFromMsg from '../../../__tests__/make-commit-from-msg';
import Auto from '../../../auto';
import Git from '../../../git';
import LogParse from '../../../log-parse';
import { defaultLabelDefinition } from '../../../release';
import { dummyLog } from '../../../utils/logger';
import { makeHooks } from '../../../utils/make-hooks';

const git = new Git({ owner: '1', repo: '2' });
const log = new LogParse();

const createComment = jest.fn();
git.createComment = createComment;

const addLabelToPr = jest.fn();
git.addLabelToPr = addLabelToPr;

const getPr = jest.fn();
git.getPullRequest = getPr;
getPr.mockReturnValue({ data: { body: '' } });

const commits = jest.fn();
git.getCommitsForPR = commits;
commits.mockReturnValue([]);

const getLabels = jest.fn();
git.getLabels = getLabels;
getLabels.mockReturnValue([]);

const lockIssue = jest.fn();
git.lockIssue = lockIssue;
lockIssue.mockReturnValue([]);

describe('release label plugin', () => {
  beforeEach(() => {
    createComment.mockClear();
    addLabelToPr.mockClear();
    commits.mockClear();
    lockIssue.mockClear();
  });

  test('should so nothing without PRs', async () => {
    const releasedLabel = new ReleasedLabelPlugin();
    const autoHooks = makeHooks();
    releasedLabel.apply({
      hooks: autoHooks,
      labels: defaultLabelDefinition,
      logger: dummyLog(),
      args: {},
      git
    } as Auto);

    const commit = makeCommitFromMsg('normal commit with no bump');
    await autoHooks.afterRelease.promise('1.0.0', [commit]);

    expect(createComment).not.toHaveBeenCalled();
  });

  test('should do nothing without new version', async () => {
    const releasedLabel = new ReleasedLabelPlugin();
    const autoHooks = makeHooks();
    releasedLabel.apply({
      hooks: autoHooks,
      labels: defaultLabelDefinition,
      logger: dummyLog(),
      args: {},
      git
    } as Auto);

    const commit = makeCommitFromMsg('normal commit with no bump');
    await autoHooks.afterRelease.promise(undefined, [commit]);

    expect(createComment).not.toHaveBeenCalled();
  });

  test('should do nothing without commits', async () => {
    const releasedLabel = new ReleasedLabelPlugin();
    const autoHooks = makeHooks();
    releasedLabel.apply({
      hooks: autoHooks,
      labels: defaultLabelDefinition,
      logger: dummyLog(),
      args: {},
      git
    } as Auto);

    await autoHooks.afterRelease.promise('1.0.0', []);

    expect(createComment).not.toHaveBeenCalled();
  });

  test('should do nothing with skip release label', async () => {
    const releasedLabel = new ReleasedLabelPlugin();
    const autoHooks = makeHooks();
    releasedLabel.apply({
      hooks: autoHooks,
      labels: defaultLabelDefinition,
      release: {
        options: { skipReleaseLabels: ['skip-release'] }
      },
      logger: dummyLog(),
      args: {},
      git
    } as Auto);

    const commit = makeCommitFromMsg('normal commit with no bump (#123)', {
      labels: ['skip-release']
    });
    await autoHooks.afterRelease.promise(
      '1.0.0',
      await log.normalizeCommits([commit])
    );

    expect(createComment).not.toHaveBeenCalled();
  });

  test('should comment and label PRs', async () => {
    const releasedLabel = new ReleasedLabelPlugin();
    const autoHooks = makeHooks();
    releasedLabel.apply({
      hooks: autoHooks,
      labels: defaultLabelDefinition,
      logger: dummyLog(),
      args: {},
      git
    } as Auto);

    const commit = makeCommitFromMsg('normal commit with no bump (#123)');
    await autoHooks.afterRelease.promise(
      '1.0.0',
      await log.normalizeCommits([commit])
    );

    expect(createComment).toHaveBeenCalledWith(
      ':rocket: PR was released in 1.0.0 :rocket:',
      123,
      'released'
    );
  });

  test('should do nothing with dryRun flag', async () => {
    const releasedLabel = new ReleasedLabelPlugin();
    const autoHooks = makeHooks();

    releasedLabel.apply({
      hooks: autoHooks,
      labels: defaultLabelDefinition,
      logger: dummyLog(),
      args: { dryRun: true },
      git
    } as Auto);

    await autoHooks.afterRelease.promise(
      '1.0.0',
      await log.normalizeCommits([
        makeCommitFromMsg('normal commit with no bump (#123)')
      ])
    );

    expect(createComment).not.toHaveBeenCalled();
  });

  test('should do nothing when label is already present', async () => {
    const releasedLabel = new ReleasedLabelPlugin();
    const autoHooks = makeHooks();

    releasedLabel.apply({
      hooks: autoHooks,
      labels: defaultLabelDefinition,
      logger: dummyLog(),
      args: {},
      git
    } as Auto);

    getLabels.mockReturnValueOnce(['released']);

    await autoHooks.afterRelease.promise(
      '1.0.0',
      await log.normalizeCommits([
        makeCommitFromMsg('normal commit with no bump (#123)')
      ])
    );

    expect(addLabelToPr).not.toHaveBeenCalled();
  });

  test('should not add released label for canary releases', async () => {
    const releasedLabel = new ReleasedLabelPlugin();
    const autoHooks = makeHooks();

    releasedLabel.apply({
      hooks: autoHooks,
      labels: defaultLabelDefinition,
      logger: dummyLog(),
      args: {},
      git
    } as Auto);

    await autoHooks.afterRelease.promise(
      '1.0.0-canary',
      await log.normalizeCommits([
        makeCommitFromMsg('normal commit with no bump (#123)')
      ])
    );

    expect(addLabelToPr).not.toHaveBeenCalled();
  });

  test('should comment and lined Issues', async () => {
    const releasedLabel = new ReleasedLabelPlugin();
    const autoHooks = makeHooks();
    releasedLabel.apply({
      hooks: autoHooks,
      labels: defaultLabelDefinition,
      logger: dummyLog(),
      args: {},
      git
    } as Auto);

    commits.mockReturnValueOnce(
      Promise.resolve([{ commit: { message: 'fixes #420' } }])
    );

    const commit = makeCommitFromMsg(
      'normal commit with no bump closes (#123)'
    );
    await autoHooks.afterRelease.promise(
      '1.0.0',
      await log.normalizeCommits([commit])
    );

    expect(createComment).toHaveBeenCalledWith(
      ':rocket: Issue was released in 1.0.0 :rocket:',
      420,
      'released'
    );
  });

  test('should lock Issues', async () => {
    const releasedLabel = new ReleasedLabelPlugin({ lockIssues: true });
    const autoHooks = makeHooks();
    releasedLabel.apply({
      hooks: autoHooks,
      labels: defaultLabelDefinition,
      logger: dummyLog(),
      args: {},
      git
    } as Auto);

    const commit = makeCommitFromMsg(
      'normal commit with no bump (#123) closes #100'
    );
    await autoHooks.afterRelease.promise(
      '1.0.0',
      await log.normalizeCommits([commit])
    );

    expect(lockIssue).toHaveBeenCalled();
  });

  test('should not lock Issues for canaries', async () => {
    const releasedLabel = new ReleasedLabelPlugin();
    const autoHooks = makeHooks();
    releasedLabel.apply({
      hooks: autoHooks,
      labels: defaultLabelDefinition,
      logger: dummyLog(),
      args: {},
      git
    } as Auto);

    const commit = makeCommitFromMsg(
      'normal commit with no bump (#123) closes #100'
    );
    await autoHooks.afterRelease.promise(
      '1.0.0-canary',
      await log.normalizeCommits([commit])
    );

    expect(lockIssue).not.toHaveBeenCalled();
  });
});
