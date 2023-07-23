export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number') throw new TypeError('Length must be a number');
  if (typeof position !== 'number') throw new TypeError('Position must be a number');
  if (typeof value !== 'number') throw new TypeError('Value must be a number');
  if (position > length - 1) throw new RangeError('Position outside range');
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}
