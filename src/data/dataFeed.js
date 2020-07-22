export default function () {
  return [
    {
      profileURL: require('../assets/images/mark.jpg'),
      profileName: 'Alexandre Diniz',
      time: 'Agora mesmo',
      _id: `${Math.round(Math.random() * 1000000)}`,
      visibility: '',
      react: {
        icons: [],
        totalReact: 0,
        totalComments: 0
      },
      content: {
        type: 'text',
        value: 'Esse é um exemplo de publicação apenas com conteúdo textual',
        image: {
          source: null,
          exist: false,
          dimensions: [1000, 667]
        }
      },
      comments: [
        {
          profileURL: require('../assets/images/mark.jpg'),
          profileName: 'Alexandre Diniz',
          text: 'Muito bom!',
        }
      ]
    },
    {
      profileURL: require('../assets/images/mark.jpg'),
      profileName: 'Alexandre Diniz',
      time: 'Agora mesmo',
      _id: `${Math.round(Math.random() * 1000000)}`,
      visibility: '',
      react: {
        icons: ['heart', 'haha'],
        totalReact: 100,
        totalComments: 9
      },
      content: {
        type: 'text',
        value: 'Esse é um exemplo de publicação com conteúdo textual e imagem ',
        image: {
          source: { uri: 'https://spguia.melhoresdestinos.com.br/system/fotos_local/fotos/40307/show/santo-amaro-do-maranhao.jpg' },
          exist: true,
          dimensions: [1000, 667]
        }
      },
      comments: [
        {
          profileURL: require('../assets/images/mark.jpg'),
          profileName: 'Alexandre Diniz',
          text: 'Muito bom!',
        }
      ]
    },
    {
      profileURL: require('../assets/images/mark.jpg'),
      profileName: 'Alexandre Diniz',
      time: 'Agora mesmo',
      _id: `${Math.round(Math.random() * 1000000)}`,
      visibility: '',
      react: {
        icons: ['like', 'heart', 'haha'],
        totalReact: 4,
        totalComments: 10
      },
      content: {
        type: 'text',
        value: 'Esse é um exemplo de publicação compartilhada',
        image: {
          source: null,
          exist: false,
          dimensions: [1000, 667]
        }
      },
      comments: [
      ]
    },
    {
      profileURL: require('../assets/images/mark.jpg'),
      profileName: 'Alexandre Diniz',
      time: 'Agora mesmo',
      _id: `${Math.round(Math.random() * 1000000)}`,
      visibility: '',
      react: {
        icons: ['like', 'heart'],
        totalReact: 99,
        totalComments: 10
      },
      content: {
        type: 'text',
        value: 'Esse é um exemplo de publicação compartilhada',
        image: {
          source: null,
          exist: false,
          dimensions: [1000, 667]
        }
      },
      comments: [
      ]
    }
  ]
}