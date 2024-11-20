// source would be an HTTP call, but in this case just yields static data
// do not change anything in this file
import {defer, of} from "rxjs";

export const source = defer(() =>
  of(
    Array.from(Array(3).keys()).map(idx => ({
      id: idx,
      title: `Row ${idx + 1}`,
      lastFetched: new Date()
    }))
  )
);
