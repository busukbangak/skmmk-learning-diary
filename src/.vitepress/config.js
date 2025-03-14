module.exports = {
    title: 'SkMMK Lerntagebuch',
    description: 'Just playing around.',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/'},
        { text: 'Lerntagebuch', link: '/diary/'},
        { text: 'Quellen', link: '/references/'},
      ],
      sidebar: {
        '/diary/': [
          { text: 'Vorwort', link: '/diary/'},
          { text: 'Einführung (15.04.2021)', link: '/diary/1'},
          { text: 'Safety, Security, Usable Safety (22.04.2021)', link: '/diary/2'}
        ]
      }
    }
  }