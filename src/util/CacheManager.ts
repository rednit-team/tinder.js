import LRU from 'lru-cache'

export default class CacheManager {
  private _LRU: LRU<string, any>

  constructor({ max = 500, maxAge = 100 * 60 * 60 }: { max: number; maxAge?: number }) {
    this._LRU = new LRU({ max, maxAge })
  }

  set(key: string, value: any, maxAge?: number) {
    this._LRU.set(key, value, maxAge)
  }

  get(key: string) {
    return this._LRU.get(key)
  }

  reset() {
    this._LRU.reset()
  }

  has(key: string): boolean {
    return this._LRU.has(key)
  }

  getLRU() {
    return this._LRU
  }
}
