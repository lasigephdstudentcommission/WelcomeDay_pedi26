window.APP_CONFIG = {
  supabaseUrl: 'https://hzejllwtsowkkawwxdqc.supabase.co/',
  supabaseAnonKey: 'sb_publishable_7VXAMk_joCrNFKSzJrnMJQ_8E7abVdi',
  quizmasterPassword: '#HAKUNAMATATA',
  unlockRadiusMeters: 80,
  totalQuestions: null, // If null or omitted, it is automatically calculated from checkpoints.
  checkpoints: [
    {
      id: 1,
      name: 'CP 1 - TODO',
      description: '',
      questionSubtitle: '',
      funFact: '',
      imageUrl: 'TODO',
      imageFit: 'contain',
      mapAddress: 'TODO',
      lat: 0,
      lng: 0,
      questions: [ // Beatriz F.
        { id: 'q1', text: 'TODO', type: 'multiple-choice', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
        { id: 'q2', text: 'TODO', type: 'multiple-choice', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
        { id: 'q3', text: 'TODO', type: 'multiple-choice', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }
      ]
    },


    {
      id: 2,
      name: 'CP 2 - TODO',
      description: '',
      questionSubtitle: '',
      funFact: '',
      imageUrl: 'TODO',
      imageFit: 'contain',
      mapAddress: 'TODO',
      lat: 0,
      lng: 0,
      questions: [ // Bea G.
        { id: 'q4', text: 'TODO', type: 'multiple-choice', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
        { id: 'q5', text: 'TODO', type: 'multiple-choice', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
        { id: 'q6', text: 'TODO', type: 'multiple-choice', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }
      ]
    },


    {
      id: 3,
      name: 'CP 3 - TODO',
      description: '',
      questionSubtitle: '',
      funFact: '',
      imageUrl: 'TODO',
      imageFit: 'contain',
      mapAddress: 'TODO',
      lat: 0,
      lng: 0,
      questions: [ // Pedro
        { id: 'q7', text: 'TODO', type: 'multiple-choice', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
        { id: 'q8', text: 'TODO', type: 'multiple-choice', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
        { id: 'q9', text: 'TODO', type: 'multiple-choice', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }
      ]
    },


    {
      id: 4,
      name: 'CP 4 - TODO',
      description: '',
      questionSubtitle: '',
      funFact: '',
      imageUrl: 'TODO',
      imageFit: 'contain',
      mapAddress: 'TODO',
      lat: 0,
      lng: 0,
      questions: [ // Mariana
        { id: 'q10', text: 'TODO', type: 'multiple-choice', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
        { id: 'q11', text: 'TODO', type: 'multiple-choice', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
        { id: 'q12', text: 'TODO', type: 'multiple-choice', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }
      ]
    },


    {
      id: 5,
      name: "Final CP - Cobaia",
      description: "Cobaia",
      questionSubtitle: "",
      funFact: 'Journey’s end! The feast is laid out—yet one final challenge stands between you and the table.',
      imageUrl: 'cobaia.jpg',
      imageFit: 'contain',
      mapAddress: 'R. Acácio de Paiva 19, 1700-006 Lisboa',
      lat: 38.7555287,
      lng: -9.1433283,
      questions: [
        {
          id: 'q13', text: 'What was the name of the first electronic, general-purpose computer?', type: 'multiple-choice',
          options: ['ENIAC', 'UNIVAC', 'Z1', 'IBM 701'],
          correctAnswer: 'ENIAC'
        },
        {
          id: 'q14', text: 'How many participants have registered for Welcome Day?', type: 'multiple-choice',
          options: ['80', '101', '123', '149'],
          correctAnswer: '149'
        },
        {
          id: 'q15', text: "How many posters were there at the Welcome Day's poster session?", type: 'multiple-choice',
          options: ['18', '23', '28', '33'],
          correctAnswer: '33'
        }
      ]
    }
  ]
};
