import HashMap from "./HashMap.js"

const map = new HashMap();

map.set("a1b2", "x9y8");
map.set("k3l4", "p0q1");
map.set("z7x6", "m2n3");
map.set("d5f6", "r4s5");
map.set("u8v9", "t6w7");
map.set("h1j2", "c8d9");
map.set("e3r4", "b0a1");
map.set("y5u6", "g2h3");
map.set("i7o8", "j4k5");
map.set("p9a0", "l6z7");
map.set("s1d2", "x8c9");
map.set("f3g4", "v0b1");
map.set("h5j6", "n2m3");
map.set("k7l8", "q4w5");
map.set("z9x0", "e6r7");
map.set("c1v2", "t8y9");
map.set("b3n4", "u0i1");
map.set("m5a6", "o2p3");
map.set("q7w8", "a4s5");
map.set("e9r0", "d6f7");
map.set("t1y2", "g8h9");
map.set("u3i4", "j0k1");
map.set("o5p6", "l2z3");
map.set("a7s8", "x4c5");
map.set("d9f0", "v6b7");
map.set("g1h2", "n8m9");
map.set("j3k4", "q0w1");
map.set("l5z6", "e2r3");
map.set("x7c8", "t4y5");
map.set("v9b0", "u6i7");



console.log("Length: ", map.length);
console.log("Get a9d3: ", map.get("a9d3"));
console.log("Get 98xd: ", map.get("98xd"));
console.log("Get a7s8, espera x4c5: ", map.get("a7s8"));
console.log("Get x7c8, espera t4y5: ", map.get("x7c8"));
console.log("Has a7uo:", map.has("a7uo"));
console.log("Has g1h2:", map.has("g1h2"));
console.log("Remove e3r4", map.remove("e3r4"));
console.log("Has e3r4: ", map.has("e3r4"));
console.log("Length: ", map.length);
console.log("Keys: ", map.keys);
console.log("values: ", map.values);
console.log("Entries: ", map.entries);