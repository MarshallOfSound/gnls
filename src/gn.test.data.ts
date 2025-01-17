export type TestAnalyzeResultType = {
  location: string
  root: string
  token: {
    type: string
    value: string
    range: {
      begin: string
      end: string
    }
  }
  function: {
    name: string
    arguments: string[]
  }
  variable: string
}

export const rootGNAnalyzeResult: TestAnalyzeResultType[] = [
  {
    // ':hello_static' in executable('hello')
    location: '10:10',
    root: 'addon/gn/examples/simple_build',
    token: {type: 'literal', value: '":hello_static"', range: {begin: '10:5', end: '10:20'}},
    function: {name: 'executable', arguments: ['"hello"']},
    variable: 'deps',
  },
  {
    // 'HELLO_SHARED_IMPLEMENTATION' in shared_library('hello_shared')
    location: '20:33',
    root: 'addon/gn/examples/simple_build',
    token: {
      type: 'literal',
      value: '"HELLO_SHARED_IMPLEMENTATION"',
      range: {begin: '20:15', end: '20:44'},
    },
    function: {name: 'shared_library', arguments: ['"hello_shared"']},
    variable: 'defines',
  },
  {
    // 'hello_static.cc' in static_library('hello_static')
    location: '25:13',
    root: 'addon/gn/examples/simple_build',
    token: {
      type: 'literal',
      value: '"hello_static.cc"',
      range: {begin: '25:5', end: '25:22'},
    },
    function: {name: 'static_library', arguments: ['"hello_static"']},
    variable: 'sources',
  },
]

export const toolchainGNAnalyzeResult: TestAnalyzeResultType[] = [
  {
    location: '42:32',
    root: 'addon/gn/examples/simple_build',
    token: {
      type: 'literal',
      value: '"-Wl,-soname=$soname"',
      range: {begin: '42:28', end: '42:49'},
    },
    function: {name: 'tool', arguments: ['"solink"']},
    variable: 'os_specific_option',
  },
]
