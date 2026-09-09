import { ProblemCard, HowItWorksStep, ProjectItem, BonusItem, TestimonialItem, TestimonialPrint, FAQItem } from '../types';

export const PROBLEMS_DATA: ProblemCard[] = [
  {
    id: 1,
    tag: 'PROBLEMA Nº 01',
    title: '“Estou entediado!” de novo.',
    description:
      'Brinquedos espalhados pelo quarto, coisas novas que logo perdem a graça... O ciclo do tédio nunca termina, e você fica sem ideias do que fazer.',
    image:
      'https://i.postimg.cc/YSy305ps/1.jpg',
    imageAlt: 'Quarto com brinquedos espalhados pelo chão',
  },
  {
    id: 2,
    tag: 'PROBLEMA Nº 02',
    title: 'Telas. O dia todo. Todos os dias.',
    description:
      'Você entrega um tablet “só por um instante” e, quando percebe, duas horas já se passaram. Nada parece prender a atenção deles como uma tela, e você odeia ver isso.',
    image:
      'https://i.postimg.cc/SKtrRByZ/2.jpg',
    imageAlt: 'Criança olhando fixamente para a tela do tablet no sofá',
  },
  {
    id: 3,
    tag: 'PROBLEMA Nº 03',
    title: 'Você já tentou de tudo, e nada funciona.',
    description:
      'Kits de arte, quebra-cabeças, atividades ao ar livre... no dia seguinte, já perderam a graça. Você continua gastando dinheiro e energia, mas o tédio sempre volta.',
    image:
      'https://i.postimg.cc/8CnHc21n/3.jpg',
    imageAlt: 'Criança entediada apoiando a cabeça na mesa',
  },
  {
    id: 4,
    tag: 'PROBLEMA Nº 04',
    title: 'A batalha quando você tira a tela.',
    description:
      'É só você dizer “chega de tela” e começa tudo: lágrimas, birras, negociações... Você se sente a vilã, mesmo sabendo que está apenas tentando fazer o melhor.',
    image:
      'https://i.postimg.cc/43F5yDJw/4.jpg',
    imageAlt: 'Criança frustrada ao ter o aparelho eletrônico recolhido',
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: 1,
    iconName: 'Download',
    title: 'Baixe agora mesmo',
    description:
      'Receba o acesso instantâneo ao pacote completo de PDFs no seu e-mail ou WhatsApp. Abra no celular, tablet ou imprima se preferir.',
  },
  {
    number: 2,
    iconName: 'Box',
    title: 'Utilize materiais simples',
    description:
      'Cada projeto utiliza itens do dia a dia que você já tem em casa: papelão, fita adesiva, elásticos, tampas de garrafa. Não é necessário fazer nenhuma compra especial.',
  },
  {
    number: 3,
    iconName: 'Sparkles',
    title: 'Construa e aprenda juntos',
    description:
      'Siga os diagramas coloridos passo a passo e veja o brilho nos olhos do seu filho quando o seu primeiro robô ganhar vida e se movimentar.',
  },
];

export const PROJECTS_GALLERY: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Robô Andarilho de Sucata',
    category: 'Mecânica Divertida',
    difficulty: 'Fácil',
    timeToBuild: '25 min',
    materials: ['Papelão', 'Tampas de Garrafa', 'Elástico'],
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description:
      'Um robô simples com tração elástica que caminha sozinho pela sala sobre 4 pernas articuladas.',
  },
  {
    id: 'p2',
    title: 'Braço Mecânico Hidráulico',
    category: 'Física & Engenharia',
    difficulty: 'Médio',
    timeToBuild: '40 min',
    materials: ['Seringas plásticas', 'Mangueira de aquário', 'Papelão'],
    image:
      'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80',
    description:
      'Utiliza pressão de água para abrir, fechar e erguer pequenos objetos com alavanca precisa.',
  },
  {
    id: 'p3',
    title: 'Carro Foguete a Propulsão de Ar',
    category: 'Aerodinâmica',
    difficulty: 'Fácil',
    timeToBuild: '15 min',
    materials: ['Balão de festa', 'Canudos', 'Tampas plásticas'],
    image:
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
    description:
      'Acelera em alta velocidade pela casa ensinando a 3ª Lei de Newton de forma visual e divertida.',
  },
  {
    id: 'p4',
    title: 'Robô Desenhista Giroscópio',
    category: 'Arte & Automação',
    difficulty: 'Médio',
    timeToBuild: '30 min',
    materials: ['Canetinhas', 'Copinho descartável', 'Motor vibrador 3V'],
    image:
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    description:
      'Dançarino motorizado que desliza sobre uma folha criando padrões geométricos e mandalas coloridas.',
  },
];

export const WHAT_YOU_GET_LIST = [
  {
    title: 'Mais de 100 Projetos Práticos Passo a Passo',
    description: 'Um acervo completo organizado por temas para nunca mais faltar ideias no final de semana.',
  },
  {
    title: 'Veículos e robôs em movimento construídos do zero',
    description: 'Projetos com engrenagens, polias, ar e gravidade que realmente andam, pulam e interagem.',
  },
  {
    title: 'Instruções Ilustradas e Coloridas em Alta Resolução',
    description: 'Diagramas visuais pensados para que até crianças menores compreendam sem frustração.',
  },
  {
    title: 'Níveis de dificuldade: Fácil, Médio e Desafiador',
    description: 'Evolução gradual de acordo com a faixa etária (4 a 6 anos, 7 a 9 anos e 10 a 12 anos).',
  },
  {
    title: 'Lista de Materiais Acessíveis do Dia a Dia',
    description: 'Tudo o que você precisa está na sua cozinha, despensa ou lixeira reciclável.',
  },
  {
    title: 'Explicações Científicas em Linguagem Simples',
    description: 'Perguntas e curiosidades prontas para os pais responderem "como isso funciona?" com segurança.',
  },
];

export const MATERIALS_LIST = [
  { name: 'Caixas de Papelão', icon: 'Package', desc: 'Embalagens de sapatos, caixas de entrega e cereais' },
  { name: 'Garrafas & Copos PET', icon: 'Milk', desc: 'Garrafas plásticas de água, sucos e refrigerantes' },
  { name: 'Tesoura Sem Ponta', icon: 'Scissors', desc: 'Segura e fácil de manusear pelas mãozinhas' },
  { name: 'Marcadores Coloridos', icon: 'Palette', desc: 'Canetinhas, giz de cera e tintas para customizar' },
  { name: 'Fita Adesiva & Cola', icon: 'Sparkles', desc: 'Fita crepe, durex ou cola branca escolar' },
  { name: 'Tampas de Garrafa', icon: 'Disc', desc: 'Perfeitas para rodas, engrenagens e olhos robóticos' },
  { name: 'Elásticos de Borracha', icon: 'Zap', desc: 'O motor secreto para gerar movimento e impulsão' },
  { name: 'Canudos & Clipes', icon: 'Layers', desc: 'Eixos perfeitos e estruturas articuladas' },
];

export const BONUSES_DATA: BonusItem[] = [
  {
    id: 1,
    tag: 'BÔNUS GRÁTIS Nº 01',
    originalPrice: 'R$ 47,00',
    title: 'Guia "Robô de Início Rápido"',
    description:
      'Um guia ilustrado simples de 1 página para seu filho construir o primeiro robô em menos de 15 minutos, começando no mesmo dia em que baixar o material.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    iconName: 'Bot',
  },
  {
    id: 2,
    tag: 'BÔNUS GRÁTIS Nº 02',
    originalPrice: 'R$ 37,00',
    title: 'Rastreador de Progresso em Habilidades STEM',
    description:
      'Um gráfico de progresso para imprimir. Seu filho preenche conforme conclui cada projeto, acompanhando o desenvolvimento de habilidades reais em engenharia, lógica e criatividade.',
    image:
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    iconName: 'BarChart2',
  },
  {
    id: 3,
    tag: 'BÔNUS GRÁTIS Nº 03',
    originalPrice: 'R$ 57,00',
    title: 'Cartões de Atividades para a Noite de Construção em Família',
    description:
      '10 cartões de desafios de fim de semana, prontos para imprimir, para toda a família. Com níveis de diferentes dificuldades e recompensas divertidas, para transformar a construção em uma tradição em casa.',
    image:
      'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80',
    iconName: 'Dice5',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    parentName: 'Mariana Duarte',
    role: 'Mãe do Lucas (6 anos) e da Sofia (9 anos)',
    location: 'São Paulo, SP',
    childInfo: 'Lucas & Sofia',
    quote:
      'Eu já não aguentava mais ver meus filhos como zumbis na frente da TV e do tablet no sábado de manhã. No primeiro dia que imprimimos o PDF, passamos 3 horas construindo o carrinho de ar e o robô de papelão. Foi a melhor tarde que tivemos em meses!',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
    projectBuiltImage:
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=400&q=80',
    projectBuiltName: 'Carro Foguete a Ar',
    rating: 5,
  },
  {
    id: 't2',
    parentName: 'Rodrigo Albuquerque',
    role: 'Pai do Davi (8 anos)',
    location: 'Belo Horizonte, MG',
    childInfo: 'Davi (8 anos)',
    quote:
      'O Davi só falava em Roblox e Minecraft. Quando mostrei que a gente podia fazer um braço hidráulico com seringa e papelão na mesa da cozinha, os olhos dele brilharam. Ele levou o projeto pra escola e a professora elogiou muito!',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    projectBuiltImage:
      'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=400&q=80',
    projectBuiltName: 'Braço Hidráulico',
    rating: 5,
  },
  {
    id: 't3',
    parentName: 'Carla Silveira',
    role: 'Mãe da Alice (5 anos)',
    location: 'Curitiba, PR',
    childInfo: 'Alice (5 anos)',
    quote:
      'Eu achava que robótica seria complicado demais porque eu mesma sou péssima com tecnologia. Mas os passos com desenhos são tão intuitivos que a Alice de 5 aninhos conseguiu colar e montar quase tudo comigo. Vale cada centavo!',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    projectBuiltImage:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80',
    projectBuiltName: 'Robô Andarilho',
    rating: 5,
  },
];

export const TESTIMONIAL_PRINTS: TestimonialPrint[] = [
  {
    id: 'print-1',
    image: 'https://i.postimg.cc/G2h58k0N/0026c7b2-034a-4cac-920e-a6933ffeebda.jpg',
    alt: 'Depoimento real de pais elogiando os projetos de robótica infantil',
    caption: 'Mensagem real sobre o engajamento e entusiasmo das crianças em casa',
  },
  {
    id: 'print-2',
    image: 'https://i.postimg.cc/ZnWsj45X/Gemini-Generated-Image-ds4jqrds4jqrds4j.jpg',
    alt: 'Feedback espontâneo de família praticando as atividades de robótica',
    caption: 'Troca do tempo de telas por foco, criatividade e união familiar',
  },
  {
    id: 'print-3',
    image: 'https://i.postimg.cc/kG2Ywqgz/Gemini-Generated-Image-kp6trmkp6trmkp6t.jpg',
    alt: 'Relato de mãe e pai sobre o orgulho da criança ao ver o robô funcionando',
    caption: 'Orgulho das crianças ao construírem robôs reais com as próprias mãos',
  },
  {
    id: 'print-4',
    image: 'https://i.postimg.cc/Pqq7NWks/0c2bbc52-1a6f-4361-a226-278b6f45ed6c.jpg',
    alt: 'Print de depoimento recomendando o manual prático para outras famílias',
    caption: 'Instruções ilustradas passo a passo com materiais simples do cotidiano',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Eu preciso comprar peças caras de robótica ou ferramentas elétricas?',
    answer:
      'Não! De forma alguma. Mais de 95% dos projetos utilizam apenas materiais recicláveis e itens do cotidiano que você já tem em casa: caixas de papelão, garrafas PET, tampinhas, fita adesiva, elásticos e tesoura sem ponta. Nada de kits de R$ 500 ou ferro de solda.',
  },
  {
    id: 'faq-2',
    question: 'Qual é a faixa etária recomendada dos projetos?',
    answer:
      'O material foi desenvolvido especificamente para crianças de 4 a 12 anos. Os projetos são classificados em 3 níveis (Fácil para 4 a 6 anos com apoio dos pais, Médio para 7 a 9 anos, e Desafiador para 10 a 12 anos que já conseguem construir quase de forma autônoma).',
  },
  {
    id: 'faq-3',
    question: 'Eu não entendo nada de robótica ou física. Vou conseguir ajudar meu filho?',
    answer:
      'Com certeza! Os manuais foram pensados exatamente para mães e pais comuns. Cada projeto vem com ilustrações detalhadas de cada etapa, lista visual de materiais e um resumo "Como explicar para a criança" com a explicação científica em linguagem lúdica e simples.',
  },
  {
    id: 'faq-4',
    question: 'Como eu recebo o produto após a compra?',
    answer:
      'O acesso é 100% digital e imediato. Assim que o pagamento for confirmado (no PIX ou Cartão é na mesma hora), você recebe no seu e-mail o link para baixar todos os PDFs, guias e bônus. Você pode ler no celular, computador, tablet ou imprimir quantas vezes quiser.',
  },
  {
    id: 'faq-5',
    question: 'E se meu filho não se interessar pelo material?',
    answer:
      'Nós confiamos tanto na qualidade e no poder de encantamento dos projetos que oferecemos uma Garantia Incondicional de 7 Dias. Se por qualquer motivo seu filho não amar as construções, basta nos enviar um único e-mail que devolveremos 100% do seu dinheiro, sem perguntas e sem letras miúdas.',
  },
  {
    id: 'faq-6',
    question: 'O acesso tem prazo de validade?',
    answer:
      'O acesso é vitalício! Uma vez feito o download dos arquivos em PDF, eles são seus para sempre. Você poderá consultar, construir novas versões e revisitar os projetos sempre que quiser.',
  },
];
