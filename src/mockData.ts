
import type { ITreeNode } from './interfaces'

export const dataTree: ITreeNode = {
  id: 0,
  name: 'root',
  children: [
    {
      id: 1,
      name: 'node_modules',
      children: [
        {
          id: 10,
          name: '.bin',
          children: [
            {
              id: 22,
              name: 'eslint'
            },
            {
              id: 23,
              name: 'eslint-config-prettier'
            },
            {
              id: 24,
              name: 'eslint-config-prettier.CMD'
            },
            {
              id: 25,
              name: 'eslint.CMD'
            },
            {
              id: 26,
              name: 'prettier.ps1'
            },
            {
              id: 27,
              name: 'run-s'
            },
            {
              id: 28,
              name: 'tsc'
            },
            {
              id: 29,
              name: 'vue-tsc.CMD'
            },
          ]
        },
        {
          id: 11,
          name: '.pnpm',
          children: [
            {
              id: 30,
              name: '@antfu+utils@0.7.10'
            },
            {
              id: 31,
              name: '@babel+helper-validator-identifier@7.24.7'
            },
            {
              id: 32,
              name: '@eslint+eslintrc@2.1.4'
            },
            {
              id: 33,
              name: '@humanwhocodes+config-array@0.11.14'
            },
            {
              id: 34,
              name: '@nodelib+fs.scandir@2.1.5'
            },
            {
              id: 35,
              name: '@vue+compiler-dom@3.4.33'
            },
            {
              id: 36,
              name: 'ansi-regex@2.1.1'
            },
            {
              id: 37,
              name: 'chokidar@3.6.0'
            },
          ]
        },
        {
          id: 12,
          name: '.vite',
          children: [
            {
              id: 38,
              name: 'deps',
              children: [
                {
                  id: 39,
                  name: '_metadata.json'
                },
                {
                  id: 40,
                  name: 'package.json'
                },
                {
                  id: 41,
                  name: 'vue.js'
                },
                {
                  id: 42,
                  name: 'vue.js.map'
                },
              ]
            }
          ]
        },
        {
          id: 13,
          name: '@eslint',
          children: [
            {
              id: 43,
              name: 'eslintrc',
              children: [
                {
                  id: 45,
                  name: 'conf',
                  children: [
                    {
                      id: 50,
                      name: 'config-schema.js'
                    },
                    {
                      id: 51,
                      name: 'environments.js'
                    },
                  ]
                },
                {
                  id: 46,
                  name: 'dist',
                  children: [
                    {
                      id: 52,
                      name: 'eslintrc-universal.cjs'
                    },
                    {
                      id: 53,
                      name: 'eslintrc-universal.cjs.map'
                    },
                  ]
                },
                {
                  id: 47,
                  name: 'lib',
                  children: [
                    {
                      id: 54,
                      name: 'config-array',
                      children: [
                        {
                          id: 58,
                          name: 'config-dependency.js'
                        },
                        {
                          id: 59,
                          name: 'extracted-config.js'
                        },
                        {
                          id: 60,
                          name: 'override-tester.js'
                        }
                      ]

                    },
                    {
                      id: 55,
                      name: 'shared',
                      children: [
                        {
                          id: 61,
                          name: 'ajv.js'
                        },
                        {
                          id: 62,
                          name: 'config-ops.js'
                        },
                        {
                          id: 63,
                          name: 'deprecation-warnings.js'
                        }
                      ]
                    },
                    {
                      id: 56,
                      name: 'config-array-factory.js'
                    },
                    {
                      id: 57,
                      name: 'flat-compat.js'
                    },
                  ]
                },
                {
                  id: 48,
                  name: 'LICENSE'
                },
                {
                  id: 49,
                  name: 'universal.js'
                },
              ],
            },
            {
              id: 44,
              name: 'js',
              children: [
                {
                  id: 64,
                  name: 'src',
                  children: [
                    {
                      id: 67,
                      name: 'configs',
                      children: [
                        {
                          id: 69,
                          name: 'slint-all.js'
                        },
                        {
                          id: 70,
                          name: 'eslint-recommended.js'
                        }
                      ]
                    },
                    {
                      id: 68,
                      name: 'index.js'
                    }
                  ]
                },
                {
                  id: 65,
                  name: 'LICENSE'
                },
                {
                  id: 66,
                  name: 'package.json'
                }
              ]
            },
          ]
        },
        {
          id: 14,
          name: 'sass',
          children: [
            {
              id: 71,
              name: 'node_modules',
              children: [
                {
                  id: 74,
                  name: 'node_modules',
                  children: [
                    {
                      id: 77,
                      name: 'bin',
                      children: [
                        {
                          id: 78,
                          name: 'sass',
                        },
                      ]
                    },
                  ]
                },
                {
                  id: 75,
                  name: 'types',
                  children: [
                    {
                      id: 79,
                      name: 'legacy',
                      children: [
                        {
                          id: 84,
                          name: 'exception.d.ts',
                        },
                        {
                          id: 85,
                          name: 'function.d.ts',
                        },
                        {
                          id: 86,
                          name: 'importer.d.ts',
                        },
                      ]
                    },
                    {
                      id: 80,
                      name: 'loger',
                      children: [
                        {
                          id: 87,
                          name: 'index.d.ts',
                        },
                        {
                          id: 88,
                          name: 'source_location.d.ts',
                        },
                        {
                          id: 89,
                          name: 'source_span.d.ts',
                        },
                      ]
                    },
                    {
                      id: 81,
                      name: 'util',
                      children: [
                        {
                          id: 90,
                          name: 'promise_or.d.ts'
                        }
                      ]
                    },
                    {
                      id: 82,
                      name: 'compile.d.ts',
                    },
                    {
                      id: 83,
                      name: 'deprecations.d.ts',
                    },
                  ]
                },
                {
                  id: 76,
                  name: 'package.json',
                }
              ]
            },
            {
              id: 72,
              name: 'types',
            },
            {
              id: 73,
              name: 'package.json',
            }
          ]

        },
        {
          id: 15,
          name: 'typescript'
        },
        {
          id: 16,
          name: 'unplugin-auto-import'
        },
        {
          id: 17,
          name: 'unplugin-vue-components'
        },
        {
          id: 18,
          name: 'vite'
        },
        {
          id: 19,
          name: 'vite-plugin-svg-icons'
        },
        {
          id: 20,
          name: 'vue'
        },
        {
          id: 21,
          name: 'vue-tsc'
        },
      ]
    },
    {
      id: 2,
      name: 'public',
      children: [
        { 
          id: 108,
          name: 'favicon.ico' 
        }
      ]
    },
    {
      id: 3,
      name: 'src',
      children: [
        {
          id: 91,
          name: 'assets',
          children: [
            {
              id: 95,
              name: 'styles',
              children: [
                {
                  id: 101,
                  name: 'base.scss'
                },
                {
                  id: 102,
                  name: 'main.scss'
                },
                {
                  id: 103,
                  name: 'variables.scss'
                }
              ]
            },
            {
              id: 96,
              name: 'svg',
              children: [
                {
                  id: 104,
                  name: 'close.svg'
                },
                {
                  id: 105,
                  name: 'file.svg'
                },
                {
                  id: 106,
                  name: 'folder-minus.svg'
                },
                {
                  id: 107,
                  name: 'folder-plus.svg'
                }
              ]
            },
            {
              id: 97,
              name: 'logo.svg'
            }
          ]
        },
        {
          id: 92,
          name: 'components',
          children: [
            {
              id: 98,
              name: 'UI',
              children: [
                {
                  id: 108,
                  name: 'Button',
                  children: [
                    {
                      id: 111,
                      name: 'button.scss'
                    },
                    {
                      id: 112,
                      name: 'Button.vue'
                    }
                  ]
                },
                {
                  id: 109,
                  name: 'IconSprite',
                  children: [
                    {
                      id: 113,
                      name: 'IconSprite.vue'
                    }
                  ]
                },
                {
                  id: 110,
                  name: 'Modal',
                  children: [
                    {
                      id: 114,
                      name: 'modal.scss'
                    },
                    {
                      id: 115,
                      name: 'Modal.vue'
                    }
                  ]
                }
              ]
            },
            {
              id: 99,
              name: 'StartScreen.vue'
            },
            {
              id: 100,
              name: 'TreeView.vue'
            }
          ]
        },
        {
          id: 93,
          name: 'App.vue'
        },
        {
          id: 94,
          name: 'main.ts'
        }
      ]

    },
    {
      id: 4,
      name: '.gitignore'
    },
    {
      id: 5,
      name: 'index.html'
    },
    {
      id: 6,
      name: 'package.json'
    },
    {
      id: 7,
      name: 'README.md'
    },
    {
      id: 8,
      name: 'tsconfig.json'
    },
    {
      id: 9,
      name: 'ite.config.ts'
    },
  ]

}