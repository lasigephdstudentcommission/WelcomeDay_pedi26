window.APP_CONFIG = {
  supabaseUrl: 'https://zhoellnhxbnhgxkgzcbt.supabase.co',
  supabaseAnonKey: 'sb_publishable_hg5TgIbu5qB4hTgSv3IRVQ__Xc2AR5l',
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
        { id: 'q1', text: "Before he was called Mario, what was the Nintendo's character named?", type: 'multiple-choice', 
         options: ['Plumberman', 'Super Guy', 'Jumpman', 'Luigi'], correctAnswer: 'Jumpman' },
        { id: 'q2', text: 'What does EHR stand for in hospital IT systems?', type: 'multiple-choice', 
         options: ['Emergency Hospital Record', 'Eletronic Health Record', 'Encrypted Hospital Registry', 'External Health Registry'], correctAnswer: 'Eletronic Health Record' },
        { id: 'q3', text: "In which year did IBM's Deep Blue beat the world chess champion?", type: 'multiple-choice', 
         options: ['1997', '2002', '1987', '1995'], correctAnswer: '1997' }
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
        { id: 'q4', text: 'A programmer follows the instructions “Wash, rinse, repeat” literally. What goes wrong?', type: 'multiple-choice', options: ['They forget to use water', 'They get stuck in an infinite loop', 'They delete the shampoo', 'They run out of memory'], correctAnswer: 'They get stuck in an infinite loop' },
        { id: 'q5', text: 'You encrypt CAT by shifting each letter one place forward in the alphabet. How would you encrypt DOG?', type: 'multiple-choice', options: ['CAT', 'EPF', 'EPH', 'EFP'], correctAnswer: 'EPH'},
        { id: 'q6', text: 'A website asks to save a “cookie.” What does it usually mean?', type: 'multiple-choice', options: ['A snack for the processor', 'A small piece of data stored in your browser', 'A backup of the entire internet', 'A secret computer virus'], correctAnswer: 'A small piece of data stored in your browser' }
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
        {
          id: 'q7', text: 'Which of the following software programs is credited with having the first known easter egg?', type: 'multiple-choice',
          options: ['The DEC GT40 game Moonlander, where players could fly off-screen to find a hidden McDonald\'s',
            'The make command on PDP-6/PDP-10 computers, which responded with a 1960s american anti-war slogan if a specific file name was entered',
            'The Atari 2600 game Adventure, which contained a secret room crediting creator Warren Robinett',
            'The Deep Thought compiler, which had a hidden variable that always resolved to the number 42'],
          correctAnswer: 'The make command on PDP-6/PDP-10 computers, which responded with a 1960s american anti-war slogan if a specific file name was entered'
        },
        {
          id: 'q8', text: 'Who is widely recognized as the world\'s first computer programmer for their work on Charles Babbage\'s Analytical Engine?', type: 'multiple-choice',
          options: ['Alan Turing (1912 – 1954)', 'Grace Hopper (1906 – 1992)', 'John von Neumann (1903 – 1957)', 'Ada Lovelace (1815 – 1852)'],
          correctAnswer: 'Ada Lovelace (1815 – 1852)'
        },
        {
          id: 'q9', text: 'Two polite ghosts sit down to eat, but each is holding one fork and waiting forever for the other to drop theirs. What curse has struck them?', type: 'multiple-choice',
          options: ['Memory Leak',
            'Deadlock',
            'Race Condition',
            'Bit Rot'],
          correctAnswer: 'Deadlock'
        }
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
