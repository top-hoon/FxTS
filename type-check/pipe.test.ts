import { pipe } from "../src";
import * as Test from "../src/types/Test";

const { checks, check } = Test;

const res1 = pipe(1, String);
const res2 = pipe("1", Number);

const res3 = pipe(Promise.resolve(1), String);
const res4 = pipe(Promise.resolve("1"), Number);

const res5 = pipe(1, (a) => Promise.resolve(String(a)));
const res6 = pipe("1", (a) => Promise.resolve(Number(a)));

const res7 = pipe(Promise.resolve(1), (a) => Promise.resolve(String(a)));
const res8 = pipe(Promise.resolve("1"), (a) => Promise.resolve(Number(a)));

checks([
  check<typeof res1, string, Test.Pass>(),
  check<typeof res2, number, Test.Pass>(),
  check<typeof res3, Promise<string>, Test.Pass>(),
  check<typeof res4, Promise<number>, Test.Pass>(),
  check<typeof res5, Promise<string>, Test.Pass>(),
  check<typeof res6, Promise<number>, Test.Pass>(),
  check<typeof res7, Promise<string>, Test.Pass>(),
  check<typeof res8, Promise<number>, Test.Pass>(),
]);
