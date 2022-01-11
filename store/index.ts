import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  heroSection: {
    title: "I'm Malik. Help me find a wife!",
    backgroundImage: 'https://global-uploads.webflow.com/61bb44d33acabf87e3aa2031/61c061adac420d6b7b42a982_me-pointing-purple.jpg'
  },
  videoSection: {
    isDisabled: false,
    title: 'The man behind the billboard',
    videoUrl: 'https://www.youtube.com/embed/buhz4OnuPZ0'
  },
  aboutSection: {
    title: 'Who am I ?',
    image: 'https://global-uploads.webflow.com/61bb44d33acabf87e3aa2031/61c06e03716d30985094fa0b_IMG_2328.jpg',
    content: "I'm a 29-year-old Muslim guy living in London.<br><br>I'm blessed because I can combine my passions for Islam and entrepreneurship in what I do for a living.<br><br>I love food, good bants, and I know it sounds cheesy - but learning more about my own faith.",
    socialMedia: [
      {
        title: 'Twitter',
        url: ''
      },
      {
        title: 'Instagram',
        url: ''
      },
      {
        title: 'TikTok',
        url: ''
      }
    ]
  },
  moreSection: {
    isDisabled: false,
    title: "What I'm looking for",
    image: 'https://global-uploads.webflow.com/61bb44d33acabf87e3aa2031/61c08aa446a3994191871865_IMG_2326.jpg',
    content: 'I just haven\'t found the right girl yet. It\'s tough out there. I had to get a billboard to get seen!<br><br>My ideal partner would be a Muslim woman in her 20s, who\'s striving to better her deen. I\'m open to any ethnicity but I\'ve got a loud Punjabi family - so you\'d need to keep with the bants.<br><br>Always personality and faith over anything else!<br><br>P.S I\'m an only child and look after my mom and dad. If this is a deal-breaker I don\'t think it\'ll work out.'
  },
  faqSection: {
    title: 'FAQs',
    faqs: [
      {
        question: 'Is this a joke?',
        answer: "Nope, I'm serious. I've been searching for a partner who'll work with me to grow our love for each other and Allah. If this sounds like you please get in touch."
      },
      {
        question: 'Are you against arranged marriage?',
        answer: 'Not at all! I think arranged marriages have a place and tradition in many Islamic cultures. In fact, there are many studies that show that arranged marriages have many advantages.<br>I just want to try and find someone on my own first.'
      },
      {
        question: "I know someone who'd be perfect for you, what should I do?",
        answer: "Amazing! Feel free to use the form below to let me know more about them. Just make sure they're looking for a husband and are aware."
      }
    ]
  },
  formSection: {
    title: "Hey soul sister, let's chat",
    description: "I'm overwhelmed and blessed by the positive response so far. I want to thank everyone, even those of you just wanting to wish me good luck!<br><br>Inshallah I can reply to all the genuine applications (I fully intend to!). Please bear with me, Allah SWT has blessed me with a lot more help on my search than I expected.",
    form: {
      description: "Think you're the one for me? Apply here and tell me a bit about yourself.",
      moreAbout: 'Tell me a bit about yourself (like your age, job, are you practising etc.)'
    }
  }
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getAboutSection: state => state.aboutSection
}

export const mutations: MutationTree<RootState> = {
  setHeroSection: (state, heroSection) => (state.heroSection = heroSection),
  setVideoSection: (state, videoSection) => (state.videoSection = videoSection),
  setAboutSection: (state, aboutSection) => (state.aboutSection = aboutSection),
  setMoreSection: (state, moreSection) => (state.moreSection = moreSection),
  setFaqSection: (state, faqSection) => (state.faqSection = faqSection),
  setFormSection: (state, formSection) => (state.formSection = formSection)
}

export const actions: ActionTree<RootState, RootState> = {

}
