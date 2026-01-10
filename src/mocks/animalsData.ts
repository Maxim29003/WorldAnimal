import { Animal } from "@appTypes/AnimalType";

export const animalsData: Animal[] = [
  // Млекопитающие
  {  
    id: '1', 
    name: 'Слон', 
    category: 'mammals', 
    image: 'https://images.unsplash.com/photo-1568198075611-ebec50d3ca1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVwaGFudCUyMHdpbGRsaWZlfGVufDF8fHx8MTc2Nzk4MDQ5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Самое крупное наземное животное на планете. Слоны известны своим интеллектом и социальным поведением.',
    habitat: 'Африка и Азия',
    lifespan: '60-70 лет',
    weight: '4000-7000 кг',
    facts: ['Слоны могут узнавать себя в зеркале', 'У слонов отличная память', 'Они общаются с помощью инфразвука']
  },
  { 
    id: '2', 
    name: 'Лев', 
    category: 'mammals', 
    image: 'https://images.unsplash.com/photo-1709402606682-400133d92ab2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW9uJTIwc2FmYXJpfGVufDF8fHx8MTc2ODA1MDI3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Царь зверей, один из крупнейших хищников семейства кошачьих. Живут прайдами.',
    habitat: 'Африка',
    lifespan: '10-14 лет',
    weight: '190-250 кг',
    facts: ['Рык льва слышен на расстоянии до 8 км', 'Самки охотятся чаще самцов', 'Львы спят до 20 часов в день']
  },
  { 
    id: '3', 
    name: 'Дельфин', 
    category: 'mammals', 
    image: 'https://images.unsplash.com/photo-1511220413245-032551094262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2xwaGluJTIwb2NlYW58ZW58MXx8fHwxNzY3OTcwMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Умные морские млекопитающие, известные своей игривостью и дружелюбием.',
    habitat: 'Океаны и моря',
    lifespan: '20-45 лет',
    weight: '150-200 кг',
    facts: ['Дельфины спят с одним открытым глазом', 'Они называют друг друга по именам', 'Могут плавать со скоростью до 60 км/ч']
  },
  { 
    id: '4', 
    name: 'Медведь', 
    category: 'mammals', 
    image: 'https://images.unsplash.com/photo-1661015799592-d9a4c1828b0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyJTIwd2lsZGxpZmV8ZW58MXx8fHwxNzY4MDUwMjc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Крупный хищник, который может питаться как мясом, так и растениями. Впадает в зимнюю спячку.',
    habitat: 'Леса Северного полушария',
    lifespan: '20-30 лет',
    weight: '200-600 кг',
    facts: ['Медведи могут бегать со скоростью до 60 км/ч', 'У них отличное обоняние', 'Медвежата рождаются очень маленькими']
  },
  
  // Птицы
  { 
    id: '5', 
    name: 'Попугай', 
    category: 'birds', 
    image: 'https://images.unsplash.com/photo-1584888890205-9b49eaf0c660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJyb3QlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3Njc5NTY1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Яркие и умные птицы, способные имитировать человеческую речь и звуки.',
    habitat: 'Тропические леса',
    lifespan: '30-80 лет',
    weight: '0.3-1.5 кг',
    facts: ['Попугаи могут выучить до 100 слов', 'Они моногамны', 'Некоторые виды живут до 100 лет']
  },
  { 
    id: '6', 
    name: 'Орёл', 
    category: 'birds', 
    image: 'https://images.unsplash.com/photo-1637783038690-e4349f6981d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYWdsZSUyMGJpcmR8ZW58MXx8fHwxNzY4MDUwMjc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Величественная хищная птица с острым зрением и мощными когтями.',
    habitat: 'Горы и открытые пространства',
    lifespan: '20-30 лет',
    weight: '3-7 кг',
    facts: ['Орлы видят в 4-8 раз лучше человека', 'Могут развивать скорость до 320 км/ч', 'Строят огромные гнезда весом до тонны']
  },
  { 
    id: '7', 
    name: 'Пингвин', 
    category: 'birds', 
    image: 'https://images.unsplash.com/photo-1672275763050-bced6744669d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5ndWluJTIwYW50YXJjdGljfGVufDF8fHx8MTc2ODA1MDI3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Нелетающие птицы, прекрасно приспособленные к жизни в воде и на льду.',
    habitat: 'Антарктида и Южное полушарие',
    lifespan: '15-20 лет',
    weight: '1-40 кг',
    facts: ['Пингвины могут нырять на глубину до 500 метров', 'Они моногамны', 'Императорские пингвины выживают при -40°C']
  },
  { 
    id: '8', 
    name: 'Сова', 
    category: 'birds', 
    image: 'https://images.unsplash.com/photo-1627000541127-260ecb511119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvd2wlMjBiaXJkfGVufDF8fHx8MTc2Nzk2Nzg3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Ночной хищник с бесшумным полётом и способностью поворачивать голову на 270 градусов.',
    habitat: 'Леса по всему миру',
    lifespan: '10-20 лет',
    weight: '0.5-4 кг',
    facts: ['Совы летают абсолютно бесшумно', 'Не могут двигать глазами', 'Отличный слух позволяет охотиться в темноте']
  },
  
  // Рыбы
  { 
    id: '9', 
    name: 'Рыба-клоун', 
    category: 'fish', 
    image: 'https://images.unsplash.com/photo-1707581456026-95d794e2e273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG93bmZpc2glMjB0cm9waWNhbHxlbnwxfHx8fDE3NjgwNTAyODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Яркая тропическая рыбка, живущая в симбиозе с морскими анемонами.',
    habitat: 'Коралловые рифы Тихого океана',
    lifespan: '6-10 лет',
    weight: '0.1-0.2 кг',
    facts: ['Все рыбы-клоуны рождаются самцами', 'Иммунны к яду анемон', 'Прославились благодаря мультфильму "В поисках Немо"']
  },
  { 
    id: '10', 
    name: 'Акула', 
    category: 'fish', 
    image: 'https://images.unsplash.com/photo-1540242236971-b061dc3dc2cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFyayUyMG9jZWFufGVufDF8fHx8MTc2ODAxNzYyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Древний морской хищник, существующий на Земле более 400 миллионов лет.',
    habitat: 'Океаны по всему миру',
    lifespan: '20-70 лет',
    weight: '500-2000 кг',
    facts: ['У акул нет костей, только хрящи', 'Чувствуют каплю крови в 100 литрах воды', 'Зубы растут всю жизнь']
  },
  { 
    id: '11', 
    name: 'Золотая рыбка', 
    category: 'fish', 
    image: 'https://images.unsplash.com/photo-1592072467526-0506c6530493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZmlzaCUyMGFxdWFyaXVtfGVufDF8fHx8MTc2Nzk0NDEzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Популярная аквариумная рыбка, одомашненная более 1000 лет назад.',
    habitat: 'Пресные водоёмы, аквариумы',
    lifespan: '10-30 лет',
    weight: '0.05-0.3 кг',
    facts: ['Память золотых рыбок не 3 секунды, а несколько месяцев', 'Могут различать цвета', 'Видят ультрафиолетовое излучение']
  },
  { 
    id: '12', 
    name: 'Медуза', 
    category: 'fish', 
    image: 'https://images.unsplash.com/photo-1677396115364-ceb5a7387509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWxseWZpc2glMjB1bmRlcndhdGVyfGVufDF8fHx8MTc2ODA1MDI4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Древнейшее морское существо, на 95% состоящее из воды. Не имеет мозга и сердца.',
    habitat: 'Все океаны',
    lifespan: '1-3 года',
    weight: '0.01-200 кг',
    facts: ['Медузы существуют более 500 миллионов лет', 'Некоторые виды бессмертны', 'У них нет мозга, сердца и костей']
  },
  
  // Пресмыкающиеся
  { 
    id: '13', 
    name: 'Черепаха', 
    category: 'reptiles', 
    image: 'https://images.unsplash.com/photo-1668993022279-64982313a6bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJ0bGUlMjByZXB0aWxlfGVufDF8fHx8MTc2ODA1MDI4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Древнее пресмыкающееся с защитным панцирем. Некоторые виды живут более 100 лет.',
    habitat: 'Суша и море по всему миру',
    lifespan: '50-150 лет',
    weight: '0.1-500 кг',
    facts: ['Галапагосские черепахи живут до 200 лет', 'Панцирь - часть скелета', 'Могут задерживать дыхание на несколько часов']
  },
  { 
    id: '14', 
    name: 'Змея', 
    category: 'reptiles', 
    image: 'https://images.unsplash.com/photo-1661868756372-63510a508872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmFrZSUyMHJlcHRpbGV8ZW58MXx8fHwxNzY4MDMwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Безногие пресмыкающиеся с чешуйчатым телом. Могут проглотить добычу целиком.',
    habitat: 'Все континенты кроме Антарктиды',
    lifespan: '10-30 лет',
    weight: '0.01-100 кг',
    facts: ['Змеи меняют кожу несколько раз в год', 'Чувствуют запахи языком', 'Некоторые виды могут не есть несколько месяцев']
  },
  { 
    id: '15', 
    name: 'Ящерица', 
    category: 'reptiles', 
    image: 'https://images.unsplash.com/photo-1619912778679-98177671b1c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXphcmQlMjByZXB0aWxlfGVufDF8fHx8MTc2ODA1MDI4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Небольшие пресмыкающиеся с отличной способностью к регенерации. Могут отбрасывать хвост.',
    habitat: 'Тёплые регионы по всему миру',
    lifespan: '5-20 лет',
    weight: '0.001-70 кг',
    facts: ['Могут отращивать отброшенный хвост', 'Некоторые виды бегают на двух лапах', 'Хамелеоны меняют цвет кожи']
  },
  { 
    id: '16', 
    name: 'Крокодил', 
    category: 'reptiles', 
    image: 'https://images.unsplash.com/photo-1721823607915-a6863aede887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jb2RpbGUlMjB3aWxkbGlmZXxlbnwxfHx8fDE3NjgwNTAyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Древний водный хищник с самым сильным укусом среди всех животных.',
    habitat: 'Тропические реки и болота',
    lifespan: '70-100 лет',
    weight: '200-1000 кг',
    facts: ['Существуют 200 миллионов лет', 'Сила укуса до 3 тонн', 'Могут задерживать дыхание на 2 часа']
  },
  
  // Насекомые
  { 
    id: '17', 
    name: 'Бабочка', 
    category: 'insects', 
    image: 'https://images.unsplash.com/photo-1660244103972-156fe5854131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXJmbHklMjBpbnNlY3R8ZW58MXx8fHwxNzY4MDUwMjgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Красивое насекомое с яркими крыльями, проходящее полный цикл превращения от гусеницы.',
    habitat: 'По всему миру',
    lifespan: '2 недели - 1 год',
    weight: '0.0005-0.003 кг',
    facts: ['Пробуют пищу лапками', 'Видят ультрафиолетовый свет', 'Некоторые виды мигрируют на тысячи километров']
  },
  { 
    id: '18', 
    name: 'Божья коровка', 
    category: 'insects', 
    image: 'https://images.unsplash.com/photo-1654177028932-c3b533fff1fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWR5YnVnJTIwaW5zZWN0fGVufDF8fHx8MTc2ODA1MDI4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Полезное насекомое, которое поедает вредителей растений. Яркая окраска отпугивает хищников.',
    habitat: 'Сады и поля по всему миру',
    lifespan: '1-3 года',
    weight: '0.00001-0.00005 кг',
    facts: ['Съедает до 5000 тлей за жизнь', 'Бывает разных цветов', 'Выделяет неприятную жидкость для защиты']
  },
  { 
    id: '19', 
    name: 'Пчела', 
    category: 'insects', 
    image: 'https://images.unsplash.com/photo-1504392022767-a8fc0771f239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWUlMjBmbG93ZXJ8ZW58MXx8fHwxNzY4MDUwMjgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Трудолюбивое насекомое-опылитель, производящее мёд. Живут организованными семьями.',
    habitat: 'По всему миру',
    lifespan: '6 недель - 5 лет',
    weight: '0.0001 кг',
    facts: ['Пчела делает 10 миллионов перелётов для 1 кг мёда', 'Общаются танцем', 'Видят ультрафиолетовый свет']
  },
  { 
    id: '20', 
    name: 'Стрекоза', 
    category: 'insects', 
    image: 'https://images.unsplash.com/photo-1724616384293-c3f7bdf3f3a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFnb25mbHklMjBpbnNlY3R8ZW58MXx8fHwxNzY4MDUwMjg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Древнее летающее насекомое с невероятными лётными способностями и огромными глазами.',
    habitat: 'Около водоёмов',
    lifespan: '6 месяцев - 7 лет',
    weight: '0.0001-0.001 кг',
    facts: ['Могут летать в любом направлении', 'Скорость до 50 км/ч', 'Существуют 300 миллионов лет']
  },
];