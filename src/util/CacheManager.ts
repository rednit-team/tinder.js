import LRU from 'lru-cache'
import UserCache from "./UserCache";

export default class CacheManager {
  private readonly cache: UserCache | LRU<any, any>

  private readonly maxAge: number | undefined;

  private readonly maxItems: number;

  constructor({ max = 500, maxAge = 100 * 60 * 60 }: { max: number; maxAge?: number }, UserCacheManager?: typeof UserCache) {
    this.maxItems = max

    this.maxAge = maxAge

    this.cache = UserCacheManager ? new UserCacheManager({ max: this.maxItems, maxAge: this.maxAge }) : new LRU({ max, maxAge })
  }

  set(key: string, value: any) {
    this.cache.set(key, JSON.stringify(value))
  }

  get(key: string) {
    return JSON.parse(this.cache.get(key))
  }

  reset() {
    this.cache.reset()
  }

  has(key: string): boolean {
    return this.cache.has(key)
  }

  del(key: string) {
    this.cache.del(key)
  }

  getLRU() {
    return this.cache
  }
}
