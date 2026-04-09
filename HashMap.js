class HashMap {
    #loadFactor;
    #capacity;
    #size;
    /**@type {Array[]} */
    #buckets;
    constructor() {
        this.#loadFactor = 0.75;
        this.#capacity = 16;
        this.#size = 0;
        this.#buckets = [];
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.#capacity;
        }

        return hashCode;
    }

    #resize() {
        // console.log("do resize")
        const oldBuckets = this.#buckets;
        this.#buckets = [];
        this.#capacity = this.#capacity * 2;
        this.#size = 0;
        // console.log("newinfo", this.#capacity, this.#size);

        oldBuckets.map((elem) => {
            // console.log("->", elem);
            for (const item of elem) {
                this.set(item[0], item[1]);
            }
        })
    }

    set(key, value) {
        // console.log("resize", (this.#size / this.#capacity), ((this.#size / this.#capacity) > this.#loadFactor))
        if ((this.#size / this.#capacity) > this.#loadFactor) {
            // console.log("chamar resize")
            this.#resize();
            // console.log("resize completo, constinua adicionando", key, value)
        }

        const hashValue = this.hash(key);
        if (this.#buckets[hashValue] == undefined) {
            this.#buckets[hashValue] = [];
            this.#buckets[hashValue].push([key, value]);
            this.#size = this.#size + 1;
            return;
        }

        for (const item of this.#buckets[hashValue]) {
            if (item[0] == key) {
                item[1] = value;
                return;
            }
        }
        // console.log("adicionou aqui", key, value)
        this.#buckets[hashValue].push([key, value]);
        this.#size = this.#size + 1;
        // console.log()
    }


    get(key) {
        const hashValue = this.hash(key);
        if(!this.#buckets[hashValue]) return null;
        for (const item of this.#buckets[hashValue]) {
            if (item[0] == key) return item[1];
        }
        return null;
    }

    has(key) {
        const hashValue = this.hash(key);
        if (this.#buckets[hashValue]) {
            for (const item of this.#buckets[hashValue]) {
                if (item[0] == key) return true;
            }
        }
        return false;
    }

    remove(key) {
        const hashValue = this.hash(key);
        let found = false;
        if (this.#buckets[hashValue]) {
            this.#buckets[hashValue] = this.#buckets[hashValue].filter((item) => {
                if (item[0] == key) {
                    found = true;
                    return false;
                }
                return true;
            }
            );
        }
        if (found) {
            this.#size = this.#size - 1;
        }
        return found;
    }

    get length() {
        return this.#size;
    }

    clear() {
        this.#size = 0;
        this.#buckets = [];
    }

    get keys() {
        return this.#buckets.reduce((acc, cur) => {
            cur.forEach((item) => {
                acc.push(item[0]);
            })
            return acc;
        }, []);
    }

    get values() {
        return this.#buckets.reduce((acc, cur) => {
            cur.forEach((item) => {
                acc.push(item[1]);
            })
            return acc;
        }, []);
    }

    get entries() {
        return this.#buckets.reduce((acc, cur) => {
            acc.push(`-> ${cur}`);
            return acc;
            cur.forEach((item) => {
                acc.push([item[0], item[1]]);
            })
            return acc;
        }, []);
    }
}

export default HashMap;
