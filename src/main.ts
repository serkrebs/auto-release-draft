import * as core from '@actions/core'
import  * as event from './event'
import * as version from './version'

export default async function run(): Promise<void> {
  try {
    const tag = event.getCreatedTag()

    if (tag && version.isSemVer(tag)) {
      // TODO:
    }

    core.setOutput('release-url', 'https://www.krebsweb.com')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
