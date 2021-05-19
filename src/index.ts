/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import http from './http'
import { CacheManager } from './util'
import { User, Message, Match, Profile, Swipe } from './models'

export class Tinder {
  private cache: CacheManager

  cacheOptions: {
    users: boolean
    messages: boolean
    matches: boolean
  }

  constructor(
    authToken: AuthToken,
    {
      maxCacheItems = 500,
      maxAgeCacheItems = 1000 * 60 * 60,
      cacheUsers = true,
      cacheMessages = true,
      cacheMatches = true,
    }: { maxCacheItems: number; maxAgeCacheItems: number; cacheUsers: boolean; cacheMessages: boolean; cacheMatches: boolean },
  ) {
    http.setToken(authToken)
    this.cache = new CacheManager({ max: maxCacheItems, maxAge: maxAgeCacheItems })
    this.cacheOptions = {
      users: cacheUsers,
      messages: cacheMessages,
      matches: cacheMatches,
    }
  }

  async getUpdatesSince(date: Date) {
    // eslint-disable-next-line camelcase
    return http.post('/updates', {
      last_activity_date: date.toISOString(),
    })
  }

  async getSwipes(): Promise<Swipe[]> {
    const swipes = await http.get('/v2/recs/core')

    swipes.data.results.forEach((res: any) => {
      console.log(res)
    })
    return swipes.data.results.map((swipe: any) => new Swipe(swipe))
  }

  async getMeta() {
    const meta = await http.get('/v2/meta')
    return meta.data
  }

  async reportUser(id: string | any[], cause: any, explanation: any) {
    if (id && id.length > 0) await http.post(`/report/${id}`, { cause, explanation })
  }

  async resetUsername() {
    return this.changeUsername()
  }

  async changeUsername(username?: string): Promise<void> {
    if (username && username.length > 0) await http.put('/profile/username', { username })
    else await http.delete('/profile/username')
  }

  async travelToLocation(lat: string | number, lon: string | number): Promise<void> {
    await http.post('/passport/user/travel', { lat, lon })
  }

  async changeLocation(lat: string | number, lon: string | number): Promise<void> {
    await http.post('/user/ping', { lat, lon })
  }

  async resetLocation(): Promise<void> {
    await http.post('/passport/user/reset')
  }

  async getLikeCount(): Promise<number> {
    const res = await http.get('/v2/fast-match/count')
    return res.data.count
  }

  async changePreferences(ageFilterMin: any, ageFilterMax: any, genderFilter: any, gender: any, distanceFilter: any): Promise<Profile> {
    const res = await http.post('/v2/profile', {
      user: Object.fromEntries(
        Object.entries({
          ageFilterMin,
          ageFilterMax,
          genderFilter,
          gender,
          distanceFilter,
        })
          .filter(([, val]) => Number.isInteger(val) || val === false || val === true)
          .map(([key, val]) => [key.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase(), val]),
      ),
    })
    return new Profile(res.data.user)
  }

  async getProfile(): Promise<Profile> {
    return new Profile(await http.get('/profile'))
  }

  async getRecommendedUsers(): Promise<User[]> {
    const res = await http.get('/user/recs')
    return res.results.map((rec: any) => new User(rec))
  }

  async getMatches(count: number = 60, pageToken?: any): Promise<Match[]> {
    let res = await http.get(`/v2/matches?count=${count}&is_tinder_u=false${pageToken ? `&page_token=${pageToken}` : ''}`)
    const matches = res.data.matches.map((match: any) => new Match(match))
    if (matches.count < count && res.page_token) {
      while (matches.count < count) {
        // eslint-disable-next-line no-await-in-loop
        res = await http.get(`/v2/matches?count=${count}&page_token=${res.page_token}`)
        matches.push(res.data.matches.map((match: any) => new Match(match)))
      }
    }
    return matches.splice(0, count)
  }

  async getMatch(id: string): Promise<Match | undefined> {
    if (id && id.length > 0) {
      if (this.cache.has(id)) return new Match(JSON.parse(this.cache.get(id)))
      const rawMatch = (await http.get(`/v2/matches/${id}`)).data
      if (this.cacheOptions.matches !== false) this.cache.set(id, JSON.stringify(rawMatch))
      return new Match(rawMatch)
    }
    return undefined
  }

  async getMatchesByName(name: string): Promise<Match[]> {
    const matches = await this.getMatches()
    const matchesWithName = await Promise.all(matches.map(async (match: { getUser: () => any }) => [(await match.getUser()).name, match]))
    return (
      matchesWithName
        // @ts-ignore
        .filter(([username]) => username === name)
        // @ts-ignore
        .map(([, match]) => match)
    )
  }

  async getUser(id: string): Promise<User | undefined> {
    const rawUser = (await http.get(`/user/${id}`)).results
    console.log(rawUser)
    rawUser.spotify_top_artists.forEach((artist: any) => console.log(artist))
    if (id && id.length > 0) {
      if (this.cache.has(id)) return new User(JSON.parse(this.cache.get(id)))
      if (this.cacheOptions.users !== false) this.cache.set(id, JSON.stringify(rawUser))
      return new User(rawUser)
    }
    return undefined
  }

  async getMessage(id: string): Promise<Message | undefined> {
    if (id && id.length > 0) {
      if (this.cache.has(id)) return new Message(JSON.parse(this.cache.get(id)))
      const rawMsg = await http.get(`/message/${id}`)
      if (this.cacheOptions.messages !== false) this.cache.set(id, JSON.stringify(rawMsg))
      return new Message(rawMsg)
    }
    return undefined
  }
}
