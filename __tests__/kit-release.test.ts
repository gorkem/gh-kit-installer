import { findMatchingRelease, getReleases } from '../src/releases/kit-release'
import { getToken } from './test-utils'

describe('getReleases', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should retrieve releases successfully', async () => {
    const release = await getReleases(getToken(), false)
    expect(release).toBeDefined()
    expect(release.length).toBeGreaterThan(0)
  })

  it('should retrieve latest release successfully', async () => {
    const release = await getReleases(getToken(), true)
    expect(release).toBeDefined()
    expect(release.length).toBe(1)
  })

  it('should find matching release', async () => {
    const releases = await getReleases(getToken(), false)
    const matchingRelease = findMatchingRelease(releases, 'v0.1.0')
    expect(matchingRelease).toBeDefined()
    expect(matchingRelease?.tag).toBe('v0.1.0')
  })
})
