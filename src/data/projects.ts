import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: 'I used to fall every autumn',
    loc: 'Patyolat Gallery, Budapest, Hungary',
    date: '11.12.2019',
    desc: "\n<i>Tactile interactive sound installation.\nAudio samples, tablet, playtron device, crocodile cables, leaves, branches and knife.\nAs part of 2019 BARTR Residency Exhibition in Patyolat, Budapest (5.12—11.12)</i>\n\nThis installation delves into the anxieties and fears surrounding the ongoing climate crisis. The interactive apparatus created is a reflection of the bleak future that we may face if we do not take action to protect the environment. The installation showcases a collection of samples from the dying nature, lending voice to the fallen leaves and branches, and ultimately creating a haunting atmosphere.\n\nWith the use of a MIDI controller developed by Playtronica, the spectator can participate in the installation by triggering cynical and cold spoken words, such as \"Don't be sorry, be careful\" or \"Breathe in, breathe out, until you're out, and suffocate, slowly.\" This interactive element adds an extra layer of emotional intensity and personal responsibility to the installation.\n\nTo activate the samples, the spectator must hold a kitchen knife in one hand and a hanging branch in the other. This gesture symbolizes the duality of destruction and preservation that we all face in our daily lives. Through this interactive element, the installation aimsto inspire a sense of agency and personal responsibility in the viewer.\n\nPitcures by Sara Herrlander",
    tags: ['installations', 'interactive'],
    category: ['installations'],
    img: ['i_used_to_02.png'],
    links: [{ label: 'Video', url: 'https://vimeo.com/423984479' }],
  },
  {
    title: 'Birds chirping in the background',
    loc: 'BRFK, Budapest, Hungary',
    date: '01.12.2019',
    desc: "\n<i>Immersive sound installation.\nAudio loop 2'02, tablet, mixer, 12 reversed amplified piezo microphones,22 bike lights and beach chair.</i>\n\nThis installation consists of a dark booth where the spectator is placed, isolated from the outside world. Once inside, one hears distorted bird songs that are played through low-quality speakers, creating an eerie soundscape. These speakers are made from reversed piezo microphones, giving the sound a distorted and unnerving quality.\n\nTo add to the disorienting experience, stroboscopic bike lights are used to blind the viewer, making them lose their sense of time and space. This creates a unique and challenging sensory experience, where the sound and light play off each other to create a sense of unease and discomfort.\n\nThe title is a cynical nod to the way we often perceive nature as a passive and unimportant backdrop to our lives. By distorting and manipulating the sounds of birds, the installation questions our relationship to the natural world and forces us to confront the way we often take it for granted.",
    tags: ['installations', 'art'],
    category: ['installations'],
    img: ['birds_chirping_01.png'],
    links: [{ label: 'Video', url: 'https://vimeo.com/424010991' }],

  },
  {
    title: 'Lahmacun Radio',
    loc: 'Online',
    category: ['programming'],
    tags: ['programming', 'open-source', 'radio', 'data_engineering'],
    date: '01.01.2021',
    desc: "\nLahmacun Radio's streaming website and archive.\n\nOpen-source contributor as a data engineer to extract, sanitize, compute and output listeners data and other metrics from AzuraCast API in order to monitor traffic on both the website and the app.",
    img: ['lahmacun_01.png'],
    links: [{label: "Github", url: "https://github.com/lahmacunradio/analytics"}]
},
{
    title: 'Hybrida Fest website',
    loc: 'Online',
    category: ['programming'],
    tags: ['programming', 'festival'],
    date: '12.03.2024',
    desc: "\nHybrida Fest 2024 official website, made in collaboration with Jimmy Pez.",
    img: ['hybrida_web_03.png'],
    links: [{label: "Website", url: "https://www.hybridafest.info/"}]
},
{
    title: 'Transverszia [Podcast Residency]',
    loc: 'Lahmacun Radio, Online',
    category: ['releases'],
    tags: ['media', 'radio', 'podcast', 'music'],
    date: '01.01.2021',
    desc: "\nMonthly residency podacst on Lahmacun Radio.\n\nA transversal sonic journey between genres, arts and practices, that explores experimental, DIY and innovative approach to music-making \n\nOne of two episodes features guestmixes from artists encountered during residencies all over Europe. These guests bring their unique perspectives and sensitivity that transcend borders and boundaries, broadening horizons.\n\nOn air every Monday 11:11–12:11",
    img: ['tr_01.png'],
    links: [{label: "Podcast", url: "https://lahmacun.hu/shows/transverszia"}]
},
{
    title: 'Life took a turn and you vanished in the white_ [Publication]',
    loc: 'Soft Eis #3',
    category: ['releases'],
    tags: ['releases', 'publications', 'text', 'generative_AI'],
    date: '15.09.2023',
    desc: "\n<i>Curated by Soft Eis Editorial Team.</i>\n\nIn the form of short prose extracts, below are 20 snippets of text generated with the help of AI model GPT-3, behind the (in)famous ChatGPT and considered a state-of-the-art language model at the time of writing.\n\nIn order to generate text, GPT-3 requires human input such as initial text, length of text, probability and sampling parameters, among others. To predict the next sentences, the language model looks at the provided text and calculates the probabilities of different words coming next.\n\nThis experiment is a way to explore the surface area of GPT-3’s creativity by feeding it a deliberately vague eponymous hook. I repeated the process a number of times while manipulating its “temperature” parameters from 0.1 to 2.0 to output repetitive and predictable text to complex and unusual word combinations.\n\nThe results show that, at its most creative, the AI generates text that is almost entirely incomprehensible to humans. This loss of meaning is perhaps the most fascinating aspect of this experiment. On one hand, it reveals the potential of AI to create something truly unique and alien. On the other hand, this points to the fact that Large Language Models (LLMs) such as GPT-3 rely solely on statistical methods, that is, they have no common sense whatsoever, nor understanding of what they write.\n\nStill, in some cases they can sound very realistic, and even dangerously authoritative as demonstrated by Meta’s Galactica LLM debacle supposedly designed to assist scientists and students in their research. Note that, specialists describe a language model that makes up content with high confidence as “hallucinating”.\n\nAs AI technology continues to develop and tasks such as text generation, image generation and voice generation become increasingly realistic, it is important to consider the ethical implications of these advancements. Some experts have warned that AI technology could be used for malicious purposes, such as creating fake news or deep fakes (realistic images of people doing things they have never done). Others have raised concerns about the potential biases of AI, which could lead to the reinforcement of existing discrimination and prejudice.\n\nThe ethical implications of AI are complex and far-reaching, and it is important for policymakers, technologists and the general public to be aware of these implications as we move into an increasingly AI-driven world.\n\nAre we at risk of losing something essential to our humanity ? What's the tradeoff for all the advantages AI promises ? If we rely too much on AI to replicate human behaviour, are we not surrendering our agency and responsibility for our own actions ? Are we not losing empathy and the ability to appreciate human differences ? And as AI gets better and faster at making decisions, what happens to our ability to think for ourselves?\n\nConsider this a non-academic paper raising more questions than it answers.\nConsider this an experimental study of a carefully mistreated language model.\nConsider this a short glimpse in the foreseeable future of artificially intelligent systems.\n\nReconsider now, who even wrote this abstract ?",
    img: ['life_took_a_01.png', 'life_took_a_02.png'],
    links: [{label: "Generated text document", url: "https://docs.google.com/document/d/1mSOZ0h6TmwwudCuB1aHM-qMGBjeQqSsudnesfeyA9Bg/edit?usp=sharing"}, 
        {label: "Buy Magazine", url: "https://www.softeismagazine.com/"}
    ]
},
{
    title: 'A Distance So Near [EP]',
    loc: 'XVIIIPENINSULE, Lille, France',
    category: ['releases'],
    tags: ['releases', 'music', 'EP'],
    date: '18.10.2024',
    desc: "\nReleased on XVIIIPENINSULE, September 18, 2024.\n\nSaxophone on A Distance So Near by Nicolas Rode\nSpoken words on Feluleikur (Part 2) by the kids from Hríseyjarskóli\nMixed and mastered by Isabel Schröer at olo mastering, Berlin, Germany\nComposed, recorded and produced by Jun Suzuki at Gamli Skóli, Hrísey, Iceland\nWith the kind support of (strangers, friends, family &) Label : XVIIIEMEPENINSULE",
    img: ['adsn.png'],
    links: [
        {label: "Bandcamp", url: "https://junsuzuki.bandcamp.com/album/a-distance-so-near"},
        {label: "Other", url: "https://kuronekomedia.lnk.to/adsn"},
    ]
},
{
    title: 'A Distance So Near [Film]',
    loc: 'Online',
    category: ['releases'],
    tags: ['releases', 'music', 'video'],
    date: '01.10.2024',
    desc: "\nA film by Yuji & Jun Suzuki.\nImages from Yakushima Island, by Yuji Suzuki.\nWords and music from Hrìsey Island, by Jun Suzuki.\nPart of EP 'A Distance So Near' released on XVIIIEMEPENINSULE, 2024.",
    img: ['adsn_video_01.png'],
    links: [{label: "Youtube", url: "https://www.youtube.com/watch?v=wlwUxV-8aAY"}]
},
{
    title: 'Interference',
    loc: 'AqTusheti, Georgia',
    category: ['programming', 'installations'],
    tags: ['programming', 'installations', 'collaboration', 'residencies'],
    date: '15.09.2022',
    desc: "\n<i>Generative sound installation.\nOmnidirectional geophone, contact microphones, metal rods,modular synthesizer, laptop, speakers.</i>\n\nинтерference is a first time collaboration between Anastasia Zhylinskaya and Jun Suzuki that brings together their combined interests in generative and installation art.Resulting from a 2 weeks residency in Tusheti, Georgia (about 10 km from the Russian frontier), the artists explore their interpretation of borders and what evade them : natural elements and electromagnetic waves.\n\nUsing contact microphones loosely attached to metal rods subject to outdoors elements, and an omnidirectional geophone that captures the faintest vibrations on the floor, wind, rain and footsteps become triggers of enveloping soundscapes.The sounds generated by the natural elements outside are \
    amplified and processed by modular synthesis and submerge the room into an endless sombre drone punctuated by crashing roars of metal rods. Simultaneously, each footstep randomly triggers a new short-term frequency from an SDR (Software Defined Radio) playing broadcasts from all over the world, thus switching from music, news and talks to machine bleeps and static noise.\n\nIn times of political conflicts and compromised boundaries, \
    the artists question the inevitability of history, and how sound and unscripted noise cut across these borders to transmit an alternative sense of togetherness.",
    img: ['interference_01.png']
},
{
    title: 'Fluids',
    loc: 'Berlin',
    category: ['performances'],
    tags: ['performances', 'collaboration', 'dance'],
    date: '01.01.2022',
    desc: "\n<i>Movement and sound improvisation collaboration with Alvin Collantes.</i>\n\nFluids is an intimate duet in collaboration with Jun Suzuki and Alvin Collantes exploring emotional upheavals through a close interaction of body movements and sound improvisation.\n\nInspired by their parallel childhood upbringingsin Japan & The Philippines, Jun and Alvin share the stories that were left behind, emotional landscapes of grief and the struggles in identities, belongingness & acceptance. \n\nTogether, they experiment beyond their respective boundaries to explore and stimulate the correlation between one another's sensibilities and stage an intertwined dialogue between unspoken states of body, mind and soul. \n\nMirroring emotions as fluids, continuous, variable and constantly shape-shifting.",
    img: ['fluids_apal_4.png'],
    links: [
        {label: "Video (teaser)", url: "https://vimeo.com/776761734"},
        {label: "Video (full show)", url: "https://vimeo.com/774674061"},
        {label: "Portfolio", url: "https://drive.google.com/file/d/17aED59UoyR8hhMyuM7JDCHqkhK9Vwuc0/view?usp=share_link"}
    ]
},
{
    title: 'Wild Access',
    loc: 'Volkspark Lichtenberg, Berlin, Germany',
    category: ['performances'],
    tags: ['performances', 'collaboration', 'dance', 'soundtrack'],
    date: '15.09.2022',
    desc: "\nSite-specific performance series\n\nWild Access Lichtenberg is an innovative outdoor performance that combines elements of an audio walk and theater performance, incorporating lights, sound, and dance. Each participant wears wireless headphones and is guided through the experience by two facilitators who communicate through talkie-walkies. The installation provides an immersive journey that stimulates multiple senses and encourages the viewer to engage with the outdoor surroundings on a deeper level.",
    img: ['wild_access_01.png']
},
{
    title: 'is this not real ?',
    loc: 'Manifest:IO, Alte Münze, Berlin, Germany',
    category: ['performances'],
    tags: ['performances', 'collaboration', 'generative_AI', 'generative_art', 'audiovisual'],
    date: '24.02.2024',
    desc: "\n<i>Audiovisual real-time generated live performance.\nIn collaboration with generative artist Nicolas Michel.\nCommisionned by Manifest:IO, Alte Münze, Berlin.</i>\n\nImagine a performance where the digital and the organic converge, creating a landscape that’s both eerily familiar and strikingly alien. This is what our first time collaboration aimed to bring to MANIFEST:IO in Alte Münze. ‘Is this not real?’ is a tapestry of AI-infused artistry, New Media savoir-faire and a deep dive into the nuances of versatile vocals, cassettes tapes and the musicality of the Japanese language. We thought this collaboration as a dialogue with the self and our current society, a reflection on where we stand in the rapidly evolving digital age, and a look into the complexities of cultural identity.",
    img: ['is_this_not_real_01.png'],
    links: [{label: "Show Reel", url: "https://vimeo.com/942291398"}]
},
{
    title: 'Recursive Reverie',
    loc: 'MONOM, Berlin, Germany',
    category: ['performances'],
    tags: ['performances', 'residency', 'collaboration', 'generative_art', 'audiovisual', 'spatial_sound'],
    date: '24.02.2024',
    desc: "\nA collaboration with visual artist Harshini J. Karunaratne.\nA-week long residency in MONOM studio, Berlin.",
    img: ['recursive_reverie_01.png']
},
{
    title: 'Observee In Situ',
    loc: 'Exgirlfriend Galerie, Berlin, Germany',
    category: ['installations', 'programming'],
    tags: ['collaboration', 'generative_AI', 'interactive', 'programming'],
    date: '15.04.2024',
    desc: "\n<i>Real-time AI-generated interactive sound installation.\nIn collaboration with new media artist Emilia Gentis.\nCurated by Elena Feijoo and Cathy Bijur, as part of Exgirlfriend Galerie closing event.</i>\n\nIn this installation, visitors confront the intersection of technology and self-perception, approaching a white pedestal to engage with a seemingly simple mechanism: a lone button. Suspended above, a constellation of smartphones dangles, ready to capture a photo of the subject. With a press, the installation whirs to life, capturing an image that becomes the subject of scrutiny by a trinity of AIs. These AIs analyse the image and ultimately judge the participant. Within moments, a synthesized voice, laden with the biases inherent to its programming, delivers a 30-second critique echoing through the exhibition space. Each AI persona, from an ad-targeting algorithm with motives as opaque as they are intrusive, to a surveillance entity quick to assume the worst, offers a unique, if sardonic, perspective on the human condition.\n\nObservee In Situ serves as a mirror reflecting the transformative power and potential perils of our digital age. It’s a reminder of the thin line between transformation and loss of self, urging visitors to ponder the perpetual cycle of reinvention in an era defined by the watchful eyes of technology.",
    img: ['observee_in_situ_02.png'],
    links: [{label: "Instagram Reel", url: "https://www.instagram.com/p/C6nllI7sTSO/"}]
},
{
    title: 'Observee In Situ',
    loc: 'Merantix AI Campus, Berlin, Germany',
    category: ['installations', 'programming'],
    tags: ['collaboration', 'generative_AI', 'interactive', 'programming'],
    date: '15.09.2024',
    desc: "\n<i>Real-time AI-generated interactive sound installation.\nIn collaboration with new media artist Emilia Gentis.\nCurated by Furturehain and Berlin University Alliance, as part of AI Ethics Symposium at Merantix AI Campus, Berlin.</i>\n\nIn this installation, visitors confront the intersection of technology and self-perception, approaching a white pedestal to engage with a seemingly simple mechanism: a lone button. Suspended above, a constellation of smartphones dangles, ready to capture a photo of the subject. With a press, the installation whirs to life, capturing an image that becomes the subject of scrutiny by a trinity of AIs. These AIs analyse the image and ultimately judge the participant. Within moments, a synthesized voice, laden with the biases inherent to its programming, delivers a 30-second critique echoing through the exhibition space. Each AI persona, from an ad-targeting algorithm with motives as opaque as they are intrusive, to a surveillance entity quick to assume the worst, offers a unique, if sardonic, perspective on the human condition.\n\nObservee In Situ serves as a mirror reflecting the transformative power and potential perils of our digital age. It’s a reminder of the thin line between transformation and loss of self, urging visitors to ponder the perpetual cycle of reinvention in an era defined by the watchful eyes of technology.",
    img: ['observee_in_situ_bis_02.png']
},
{
    title: 'Knock The Wall Down',
    loc: 'Flughafen Tempelhof, Berlin, Germany',
    category: ['programming', 'installations'],
    tags: ['programming', 'installations', 'collaboration', 'residencies'],
    date: '15.10.2023',
    desc: "\n<i>Generative duplex sound installation.\nIn collaboration with sound artist Anastasia Zhylinskaya.\n<i>Omnidirectional geophone, contact microphones, metal rods, modular synthesizer, laptop, smartphone, speakers.</i>\n\nIn the vast halls of Flughafen Tempelhof, our project -интерference- quietly adapted to its surroundings, becoming an echo in the vastness of Berlin's history. Originally designed to capture visitors' footsteps, it transformed to invite the public into knocking on a century-old marble wall, triggering scattered real-time radio frequencies worldwide - a nod to the city's storied past.\n\nThe installation took an unexpected turn when Anastasia (my collaborator and Belarusian activist) faced visa issues, preventing her from joining us in Berlin, an ironic coincidence that reflected our theme of borders. Embracing this challenge, Anastasia set up her part of the installation on her balcony in Gdańsk, Poland. She used metal rods and contact microphones to capture the sounds of natural elements, feeding the audio signal into her modular synths and generating a 5-day stream of haunting drones and images that were sent back to the installation space in Berlin - fostering a quiet dialogue between two distant places.\n\n'интерference' thus evolved into a remote generative installation that we renamed accordingly. Each user interaction in Berlin - whether a gentle touch or a poignant knock on the wall - found its distant echo in Anastasia's stream from abroad, a reminder of how art can bridge divides and connect us across distances.",
    img: ['interference_bis_01.png'],
    links: [{label: "Instagram Reel", url: "https://www.instagram.com/reel/C1ZSBcRrnzE/"}]
},
{
    title: 'I used to fall every autumn',
    loc: '90mil, Berlin, Germany',
    date: '01.11.2023',
    desc: "\n<i>Tactile interactive sound installation.\nAudio samples, tablet, playtron device, crocodile cables, leaves, branches and knife.\nCurated by Soft Eis Editiorial Team, as part of Soft Eis Magazine #3 Publication Event.</i>\n\nThis installation delves into the anxieties and fears surrounding the ongoing climate crisis. The interactive apparatus created is a reflection of the bleak future that we may face if we do not take action to protect the environment. The installation showcases a collection of samples from the dying nature, lending voice to the fallen leaves and branches, and ultimately creating a haunting atmosphere.\n\nWith the use of a MIDI controller developed by Playtronica, the spectator can participate in the installation by triggering cynical and cold spoken words, such as \"Don't be sorry, be careful\" or \"Breathe in, breathe out, until you're out, and suffocate, slowly.\" This interactive element adds an extra layer of emotional intensity and personal responsibility to the installation.\n\nTo activate the samples, the spectator must hold a kitchen knife in one hand and a hanging branch in the other. This gesture symbolizes the duality of destruction and preservation that we all face in our daily lives. Through this interactive element, the installation aimsto inspire a sense of agency and personal responsibility in the viewer.",
    tags: ['installations', 'interactive'],
    category: ['installations'],
    img: ['i_used_to_bis_01.png'],
    links: [{ label: 'Video', url: 'https://vimeo.com/423984479' }],
  },
{
    title: 'Loop me out before i fade and turn to noise',
    loc: 'LiTE-HAUS Galerie, Berlin, Germany',
    category: ['installations'],
    tags: ['installations', 'tape recorders', 'sound art'],
    date: '15.11.2020',
    desc: "\n<i>Magnetic tape sound installation.\nCurated by LiTE-HAUS Galerie, Berlin.\nAs part of 'Neukölln Geschischten' research residency.</i>",
    img: ['loop_me_out_01.png']
},
{
    title: 'Forêts Paisibles',
    loc: 'Atelier L\'Amiante, Marseille, France',
    category: ['installations'],
    tags: ['installations', 'generative_AI'],
    date: '06.03.2024',
    desc: "\n<i>AI-generated collage video installation.\nCommissioned by Quinzaine Stupéfiante.</i>\n\nLa Quinzaine Stupéfiante is a community event based in Marseille that has been running for the past 7 years. It offers collective discussions and education on drugs, the pleasures and risks associated with them, and toxicophobia. For this year's event, I was asked by one of the members to generate images of drug users in club toilet booths.\n\nThe experiment turned out to be quite a visual trip. The model I used (OpenAI's DallE2 from 2022, which is like ages ago in GenAI History) had trouble generating faces and hands —the most detailed parts of the human body. In this particular context, the lack of detail resonated with themes of anonymity (inherent to the prompted scenery) and fantasized reality distortion of drug users.\n\nThe second takeaway from this experiment was the recognition of certain biases and clichés. The generated images often depicted ravers with typical occidental attributes such as white/black shirts, hoodies, caps, tattoos… This highlights how AI models, by design, reflect and reinforce stereotypes. They are nothing more than a reflection of their training datasets —namely, Western internet culture.\n\nLastly, the use of Jean Philippe Rameau's <i>Les Indes Galantes</i> eponymous score in the video underscores the ironic contrast between romanticized colonial past and the stark reality of drug use, challenging the stigmatisation of drug users in Western societies.\n\n<u>Base prompt:</u> 'Photorealistic picture of ravers doing drugs in a toilet booth, detailed faces, detailed scene'\n<u>Variable additional prompts:</u> '1980s setting', '1990s setting', '2000s setting', 'Marseille', 'Berlin', etc.",
    img: ['forets_01.png', 'forets_02.png'],
    links: [{label: "Video", url: "https://vimeo.com/951543866"}]
},
{
    title: 'i dream of a sphere without corners',
    loc: 'Signals2Noise, Silent Green, Berlin, Germany',
    category: ['performances', 'programming'],
    tags: ['performances', 'radio', 'programming', 'generative_art', 'audiovisual'],
    date: '04.10.2024',
    desc: "\n<i>Live performance using real-time short-term frequencies and AI-assisted audio sequencing.</i>\n\nI dream of a sphere without corners can manifest in various forms. It's a morphing interactive apparatus. A generative soundscape. A real-time collage of radio frequencies from around the globe. Fragmented testimonies of the uprooted. Sounds that evade borders. Border-THROUGH. CROSS-border. TRANS-. PAN-. INTER-. PERI-. An ode to motion. An ode to distance and its infinite range. To the in-betweens.\n\nUsing WebSDR (Software Defined Radio) as a primary source of sound, Jun Suzuki explores the structured disorder of broadcasts, white noise and machine bleeps from around the world. These ongoing streams are channeled into interactive agents (dicy2 by Ircam) that generate additional sequences from field recordings and testimonies. The result is a constantly evolving, real-time generated, fragmented soundscape that blurs cultural boundaries, and dreams of a sphere without corners.",
    img: ['i_dream_of_a_bis_01.png'],
    links: [{label: "Official website", url: "https://s2n.cashmereradio.com/programme/i-dream-of-a-sphere-without-corners"}]
},
{
    title: 'i dream of a sphere without corners',
    loc: 'Goethe Institut, Budapest, Hungary',
    category: ['performances', 'programming'],
    tags: ['performances', 'radio', 'programming', 'audiovisual'],
    date: '04.10.2024',
    desc: "\nLive performance using real-time short-term frequencies and AI-assisted audio sequencing.\n\nI dream of a sphere without corners can manifest in various forms. It's a morphing interactive apparatus. A generative soundscape. A real-time collage of radio frequencies from around the globe. Fragmented testimonies of the uprooted. Sounds that evade borders. Border-THROUGH. CROSS-border. TRANS-. PAN-. INTER-. PERI-. An ode to motion. An ode to distance and its infinite range. To the in-betweens.\n\nUsing WebSDR (Software Defined Radio) as a primary source of sound, Jun Suzuki explores the structured disorder of broadcasts, white noise and machine bleeps from around the world. These ongoing streams are channeled into interactive agents (dicy2 by Ircam) that generate additional sequences from field recordings and testimonies. The result is a constantly evolving, real-time generated, fragmented soundscape that blurs cultural boundaries, and dreams of a sphere without corners.",
    img: ['i_dream_of_a_01.png'],
    links: [{label: "Official website", url: "https://s2n.cashmereradio.com/programme/i-dream-of-a-sphere-without-corners"}]
},
{
    title: 'The Interplay of Narrative and Technical Framework',
    loc: 'The Node Institute, Alte Münze, Berlin Germany',
    category: ['talks'],
    tags: ['talks', 'generative_AI', 'collaboration'],
    date: '24.02.2024',
    desc: "\nInvited by The Node Institute, as part of their monthly roundtable.\nFacilitated by Harshini J. Karunaratne (The Node Institute / Manifest:IO).\n\n\"Jun Suzuki and Nicolas Michel traveled from Paris and Marseille to perform at Manifest:IO Berlin, and gave a talk at the TouchDesigner Roundtable XXIX on their use of AI in their individual and collective practices before their performance. If you saw them live in Berlin, you might have caught their performance with Alte Münze's newly installed 20m LED screen. Visuals in TouchDesigner.\" - The Node Institute",
    img: ['talk_node_01.png'],
    links: [{ label: 'Video', url: 'https://www.youtube.com/live/z4QmtPLhvMI?feature=shared&t=3860' }],

},
{
    title: 'Freedom of Expression and Radio Art',
    loc: 'Goethe Institut, Budapest, Hungary',
    category: ['talks'],
    tags: ['talks', 'radio', 'generative_AI'],
    date: '04.10.2024',
    desc: "\nInvited by Lahmacun Radio and Goethe Institut Budapest.\nFacilitated by Peter Bokor (Lahmacun Radio).",
    img: ['talk_goethe_01.png']
},
{
    title: 'Transversality: Travelling the In-Betweens',
    loc: 'SoireeXD, Journee, Berlin, Germany',
    category: ['talks'],
    tags: ['talks', 'generative_AI'],
    date: '06.06.2024',
    desc: "\nInvited by Futurehain, as part of their quarterly event SoireeXD.\nFacilitated by Felix Rundel (Futurehain / SoireeXD).",
    img: ['talk_soireexd_01.png']
},
{
    title: 'Queer Asian Bodies',
    loc: 'Fifth Wall Festival, Manila, The Philippines',
    category: ['talks'],
    tags: ['talks', 'asian'],
    date: '19.10.2024',
    desc: "\nInvited by Fifth Wall Festival.\nFacilitated by Madge Reyes (Fifth Wall Festival).",
    img: ['talk_daloy_01.png']
},
{
    title: 'TRYST',
    loc: 'Fifth Wall Festival, Manila, The Philippines',
    category: ['performances'],
    tags: ['performances', 'dance'],
    date: '19.10.2024',
    desc: "\n<i>Live performance in collaboration with Daloy Dance Company.\nWith the support of The Japan Foundation of Manila.</i>",
    img: ['tryst_01.png']
},
];
