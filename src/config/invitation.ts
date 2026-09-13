export const invitation = {
  // Event Details
  title: 'श्री गणरायाचे आगमन',
  subtitle: 'सालाबाद प्रमाणे, या वर्षीही आमच्या घरी',
  blessing: '॥ श्री गणेशाय नमः ॥',
  
  // Date & Time
  date: '2026-09-14',
  dateDisplay: '१४ सप्टेंबर २०२६',
  day: 'सोमवार',
  eventTime: '',
  
  // Venue
  venue: '303, Om Ravi CHS',
  address: 'Plot - 41, Sector - 21, Opposite Sachin Tendulkar Ground, Kharghar, Navi Mumbai - 410210',
  fullAddress: '303, Om Ravi CHS,\nPlot - 41, Sector - 21,\nOpposite Sachin Tendulkar Ground,\nKharghar, Navi Mumbai - 410210',
  mapsUrl: 'https://maps.google.com/?q=303+Om+Ravi+CHS+Plot+41+Sector+21+Kharghar+Navi+Mumbai+410210',
  
  // Host
  host: 'समस्त जगताप परिवार',
  
  // Assets
  invitationImage: '/invitation.jpg',
  music: '/music/ganpati.mp3',
  
  // WhatsApp
  whatsappNumber: '',
  
  // Description text on the card
  description: 'आमच्या घरी ११ दिवस गणरायाचे आगमन होत आहे. या मंगल प्रसंगी आपण सहकुटुंब, मित्रपरिवारासह उपस्थित राहून बाप्पांचे दर्शन घ्यावे व आम्हांस आशीर्वाद द्यावा, ही नम्र विनंती.',
  
  // Theme
  theme: {
    primary: '#7a1b3b',
    secondary: '#cc2d58',
    accent: '#ddab14',
    cream: '#fdf9ed',
    blush: '#fef1f7',
  },
  
  // SEO
  seo: {
    title: 'श्री गणरायाचे आगमन | गणपती बाप्पा मोरया 🙏',
    description: 'श्री गणरायाच्या आगमन सोहळ्यासाठी आपले मनःपूर्वक आमंत्रण. 🙏',
    url: '',
  },

  // Share message
  shareMessage: `🙏 श्री गणेशाय नमः 🙏\n\nश्री गणरायाच्या आगमन सोहळ्यासाठी आपल्याला मनःपूर्वक आमंत्रण.\n\nआपली उपस्थिती आम्हाला आनंद देईल. ❤️\n\nआमंत्रण पहा:`,

  // RSVP messages
  rsvp: {
    attending: 'नमस्कार 🙏\nमी गणरायाच्या आगमनासाठी उपस्थित राहणार आहे.\nगणपती बाप्पा मोरया! ❤️',
    maybe: 'नमस्कार 🙏\nमी गणरायाच्या आगमनासाठी कदाचित येऊ शकेन.\nगणपती बाप्पा मोरया! 🙏',
    notAttending: 'नमस्कार 🙏\nक्षमस्व, मला गणरायाच्या आगमनासाठी येता येणार नाही.\nगणपती बाप्पा मोरया! 🙏',
  },
};

export type InvitationConfig = typeof invitation;
