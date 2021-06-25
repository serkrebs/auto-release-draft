import * as core from '@actions/core'

export default async function run(): Promise<void> {
  try {
    // Implementation
    core.setOutput('release-url', 'https://www.krebsweb.com')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
