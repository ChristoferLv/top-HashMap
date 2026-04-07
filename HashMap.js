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








//set(key, value) takes two arguments: the first is a key, and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten, and we can say that we update the key’s value (e.g. Carlos is our key but it is called twice: once with value I am the old value., and once with value I am the new value.. Following this logic, Carlos should contain only the latter value).

//Recall that collisions occur when TWO DIFFERENT keys generate the same hash code and get assigned to the same bucket. (e.g. Rama and Sita are both hashed to 3, so 3 becomes a location for Rama AND Sita. However, we know that this is not an update because the keys are different). Review the dealing with collisions section of the previous lesson to find a way to handle our collisions.

//Remember to grow your buckets to double their capacity when your hash map reaches the load factor. The methods mentioned later in this assignment can help you handle the growth logic, so you may want to implement this feature near the end. However, we mention this with set() because it’s important to grow buckets exactly as they are being expanded.

//get(key) takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.

//has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.

//remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.

//length() returns the number of stored keys in the hash map.

//clear() removes all entries in the hash map.

//keys() returns an array containing all the keys inside the hash map.

//values() returns an array containing all the values.

//entries() returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]