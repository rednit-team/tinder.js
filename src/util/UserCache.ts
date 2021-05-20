export default class UserCache {
    private maxItems: number;

    private maxAge: number;

    constructor({ maxItems, maxAge }: { maxItems: number, maxAge: number }) {
        this.maxItems = maxItems;
        this.maxAge = maxAge
    }

    // eslint-disable-next-line class-methods-use-this
    set(key: string, value: any): void {
        // eslint-disable-next-line no-void
        void(key)
        void(value)
    }

    // eslint-disable-next-line class-methods-use-this
    get(key: string): any {
        // eslint-disable-next-line no-void
        void(key)
    }

    // eslint-disable-next-line class-methods-use-this
    has(key: string): boolean {
        return true;
    }

    // eslint-disable-next-line class-methods-use-this
    reset(): void { console.log('reset cache') }

    // eslint-disable-next-line class-methods-use-this
    del(key: string): void {
        // eslint-disable-next-line no-void
        void(key)
    }



}