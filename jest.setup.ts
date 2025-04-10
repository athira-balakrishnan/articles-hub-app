import {
  TextEncoder as NodeTextEncoder,
  TextDecoder as NodeTextDecoder,
} from 'util';

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = NodeTextEncoder;
}

if (typeof global.TextDecoder === 'undefined') {
  // @ts-expect-error: Temporarily suppressing type error due to dynamic property access
  global.TextDecoder = NodeTextDecoder;
}
