



/**
 * Recursively flattens a JSON object using dot notation.
 *
 * NOTE: input must be an object as described by JSON spec. Arbitrary
 * JS objects (e.g. {a: () => 42}) may result in unexpected output.
 * MOREOVER, it removes keys with empty objects/arrays as value (see
 * examples bellow).
 *
 * @example
 * // returns {a:1, 'b.0.c': 2, 'b.0.d.e': 3, 'b.1': 4}
 * flatten({a: 1, b: [{c: 2, d: {e: 3}}, 4]})
 * // returns {a:1, 'b.0.c': 2, 'b.0.d.e.0': true, 'b.0.d.e.1': false, 'b.0.d.e.2.f': 1}
 * flatten({a: 1, b: [{c: 2, d: {e: [true, false, {f: 1}]}}]})
 * // return {a: 1}
 * flatten({a: 1, b: [], c: {}})
 *
 * @param obj item to be flattened
 * @param {Array.string} [prefix=[]] chain of prefix joined with a dot and prepended to key
 * @param {Object} [current={}] result of flatten during the recursion
 *
 * @see https://docs.mongodb.com/manual/core/document/#dot-notation
 */
function flatten (obj, prefix, current) {
  prefix = prefix || []
  current = current || {}

  // Remember kids, null is also an object!
  if (typeof (obj) === 'object' && obj !== null) {
    Object.keys(obj).forEach(key => {
      this.flatten(obj[key], prefix.concat(key), current)
    })
  } else {
    current[prefix.join('.')] = obj
  }

  return current
}