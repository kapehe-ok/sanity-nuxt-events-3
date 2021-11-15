export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-3-studio-kwreodh3',
                  apiId: '6feff293-5a51-4c1d-97f4-1fad545f532a'
                },
                {
                  buildHookId: '6192e4b1b18a9f0085a295fa',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-3-web-uioce8oc',
                  apiId: '14cf33fa-86d4-4af4-81d8-2d6f369c9dae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kapehe-ok/sanity-nuxt-events-3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-3-web-uioce8oc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
