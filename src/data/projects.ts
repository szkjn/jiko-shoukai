import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: 'I used to fall every autumn',
    loc: 'Patyolat Gallery, Budapest, Hungary',
    date: '11.12.2019',
    desc: "\nTactile interactive sound installation.\nAudio samples, tablet, playtron device, crocodile cables, leaves, branches and knife.\nAs part of 2019 BARTR Residency Exhibition in Patyolat, Budapest (5.12—11.12)\n\nThis installation delves into the anxieties and fears surrounding the ongoing climate crisis. The interactive apparatus created is a reflection of the bleak future that we may face if we do not take action to protect the environment. The installation showcases a collection of samples from the dying nature, lending voice to the fallen leaves and branches, and ultimately creating a haunting atmosphere.\n\nWith the use of a MIDI controller developed by Playtronica, the spectator can participate in the installation by triggering cynical and cold spoken words, such as \"Don't be sorry, be careful\" or \"Breathe in, breathe out, until you're out, and suffocate, slowly.\" This interactive element adds an extra layer of emotional intensity and personal responsibility to the installation.\n\nTo activate the samples, the spectator must hold a kitchen knife in one hand and a hanging branch in the other. This gesture symbolizes the duality of destruction and preservation that we all face in our daily lives. Through this interactive element, the installation aimsto inspire a sense of agency and personal responsibility in the viewer.\n\nPitcures by Sara Herrlander",
    tags: ['installation', 'interactive'],
    category: ['installation'],
    img: ['i_used_to_02.png'],
    links: [{ label: 'Video', url: 'https://vimeo.com/423984479' }],
  },
  {
    title: 'Birds chirping in the background',
    loc: 'BRFK, Budapest, Hungary',
    date: '01.12.2019',
    desc: "\nImmersive sound installation.\nAudio loop 2'02, tablet, mixer, 12 reversed amplified piezo microphones,22 bike lights and beach chair.\n\nThis installation consists of a dark booth where the spectator is placed, isolated from the outside world. Once inside, one hears distorted bird songs that are played through low-quality speakers, creating an eerie soundscape. These speakers are made from reversed piezo microphones, giving the sound a distorted and unnerving quality.\n\nTo add to the disorienting experience, stroboscopic bike lights are used to blind the viewer, making them lose their sense of time and space. This creates a unique and challenging sensory experience, where the sound and light play off each other to create a sense of unease and discomfort.\n\nThe title is a cynical nod to the way we often perceive nature as a passive and unimportant backdrop to our lives. By distorting and manipulating the sounds of birds, the installation questions our relationship to the natural world and forces us to confront the way we often take it for granted.",
    tags: ['installation', 'art'],
    category: ['installation'],
    img: ['birds_chirping_01.png'],
    links: [{ label: 'Video', url: 'https://vimeo.com/424010991' }],

  },
  {
    title: 'Lahmacun Radio',
    category: ['programming'],
    tags: ['programming', 'open-source', 'radio', 'data_engineering'],
    date: '01.01.2021',
    desc: "\nLahmacun Radio's streaming website and archive.\n\nOpen-source contributor as a data engineer to extract, sanitize, compute and output listeners data and other metrics from AzuraCast API in order to monitor traffic on both the website and the app.",
    img: ['lahmacun_01.png'],
    links: [{label: "Github", url: "https://github.com/lahmacunradio/analytics"}]
},
{
    title: 'Hybrida Fest website',
    category: ['programming'],
    tags: ['programming', 'festival'],
    date: '01.04.2024',
    desc: "\nHybrida Fest 2024 official website, made in collaboration with Jimmy Pez.",
    img: ['hybrida_web_03.png'],
    links: [{label: "Website", url: "https://www.hybridafest.info/"}]
},
{
    title: 'Transverszia Podcast',
    category: ['releases'],
    tags: ['media', 'radio', 'podcast', 'music'],
    date: '01.01.2021',
    desc: "\nMonthly residency podacst on Lahmacun Radio.\n\nA transversal sonic journey between genres, arts and practices, that explores experimental, DIY and innovative approach to music-making \n\nOne of two episodes features guestmixes from artists encountered during residencies all over Europe. These guests bring their unique perspectives and sensitivity that transcend borders and boundaries, broadening horizons.\n\nOn air every Monday 11:11–12:11",
    img: ['tr_01.png'],
    links: [{label: "Podcast", url: "https://lahmacun.hu/shows/transverszia"}]
},
{
    title: 'A Distance So Near [EP]',
    category: ['releases'],
    tags: ['releases', 'music', 'EP'],
    date: '18.09.2024',
    desc: "\nReleased on XVIIIPENINSULE, September 18, 2024.\n\nSaxophone on A Distance So Near by Nicolas Rode\nSpoken words on Feluleikur (Part 2) by the kids from Hríseyjarskóli\nMixed and mastered by Isabel Schröer at olo mastering, Berlin, Germany\nComposed, recorded and produced by Jun Suzuki at Gamli Skóli, Hrísey, Iceland\nWith the kind support of (strangers, friends, family &) Label : XVIIIEMEPENINSULE",
    img: ['adsn.png'],
    links: [{label: "EP1 A Distance So Near", url: "https://junsuzuki.bandcamp.com/album/a-distance-so-near"}]
},
{
    title: 'интерference',
    loc: 'AqTusheti, Georgia',
    category: ['programming', 'installation'],
    tags: ['programming', 'installation', 'collaboration', 'residencies'],
    date: '15.09.2022',
    desc: "\nGenerative sound installation.\nOmnidirectional geophone, contact microphones, metal rods,modular synthesizer, laptop, mixer, two sets of speakers.\n\nинтерference is a first time collaboration between Anastasia Zhylinskaya and Jun Suzuki that brings together their combined interests in generative and installation art.Resulting from a 2 weeks residency in Tusheti, Georgia (about 10 km from the Russian frontier), the artists explore their interpretation of borders and what evade them : natural elements and electromagnetic waves.\n\nUsing contact microphones loosely attached to metal rods subject to outdoors elements, and an omnidirectional geophone that captures the faintest vibrations on the floor, wind, rain and footsteps become triggers of enveloping soundscapes.The sounds generated by the natural elements outside are \
    amplified and processed by modular synthesis and submerge the room into an endless sombre drone punctuated by crashing roars of metal rods. Simultaneously, each footstep randomly triggers a new short-term frequency from an SDR (Software Defined Radio) playing broadcasts from all over the world, thus switching from music, news and talks to machine bleeps and static noise.\n\nIn times of political conflicts and compromised boundaries, \
    the artists question the inevitability of history, and how sound and unscripted noise cut across these borders to transmit an alternative sense of togetherness.",
    img: ['interference_01.png']
},
{
    title: 'Fluids',
    loc: 'berlin',
    category: ['performance'],
    tags: ['performance', 'collaboration', 'dance'],
    date: '01.01.2022',
    desc: "\nMovement and sound improvisation collaboration with Alvin Collantes\n\nFluids is an intimate duet in collaboration with Jun Suzuki and Alvin Collantes exploring emotional upheavals through a close interaction of body movements and sound improvisation.\n\nInspired by their parallel childhood upbringingsin Japan & The Philippines, Jun and Alvin share the stories that were left behind, emotional landscapes of grief and the struggles in identities, belongingness & acceptance. \n\nTogether, they experiment beyond their respective boundaries to explore and stimulate the correlation between one another's sensibilities and stage an intertwined dialogue between unspoken states of body, mind and soul. \n\nMirroring emotions as fluids, continuous, variable and constantly shape-shifting.",
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
    category: ['performance'],
    tags: ['performance', 'collaboration', 'dance', 'soundtrack'],
    date: '15.09.2022',
    desc: "\nSite-specific performance series\n\nWild Access Lichtenberg is an innovative outdoor performance that combines elements of an audio walk and theater performance, incorporating lights, sound, and dance. Each participant wears wireless headphones and is guided through the experience by two facilitators who communicate through talkie-walkies. The installation provides an immersive journey that stimulates multiple senses and encourages the viewer to engage with the outdoor surroundings on a deeper level.",
    img: ['wild_access_01.png']
},
{
    title: 'is this not real ?',
    loc: 'Manifest:IO, Alte Münze, Berlin, Germany',
    category: ['performance'],
    tags: ['performance', 'collaboration', 'generative_AI', 'generative_art', 'audiovisual'],
    date: '24.02.2024',
    desc: "\nA/V performance in collaboration with visual artist Nicolas Michel.\nCommisionned by Manifest:IO, New Media Symposium, Alte Münze, Berlin.",
    img: ['is_this_not_real_01.png']
},
{
    title: 'Recursive Reverie',
    loc: 'MONOM, Berlin, Germany',
    category: ['performance'],
    tags: ['performance', 'residency', 'collaboration', 'generative_art', 'audiovisual', 'spatial_sound'],
    date: '24.02.2024',
    desc: "\nA collaboration with visual artist Harshini J. Karunaratne.\nA-week long residency in MONOM studio, Berlin.",
    img: ['recursive_reverie_01.png']
},
{
    title: 'Observee In Situ',
    loc: 'Exgirlfriend Galerie, Berlin, Germany',
    category: ['installation', 'programming'],
    tags: ['collaboration', 'generative_AI', 'interactive', 'programming'],
    date: '15.04.2024',
    desc: "\nA collaboration with new media artist Emilia Gentis.\nReal-time AI-generated interactive sound installation.\n\nIn this installation, visitors confront the intersection of technology and self-perception, approaching a white pedestal to engage with a seemingly simple mechanism: a lone button. Suspended above, a constellation of smartphones dangles, ready to capture a photo of the subject. With a press, the installation whirs to life, capturing an image that becomes the subject of scrutiny by a trinity of AIs. These AIs analyse the image and ultimately judge the participant. Within moments, a synthesized voice, laden with the biases inherent to its programming, delivers a 30-second critique echoing through the exhibition space. Each AI persona, from an ad-targeting algorithm with motives as opaque as they are intrusive, to a surveillance entity quick to assume the worst, offers a unique, if sardonic, perspective on the human condition.\n\nObservee In Situ serves as a mirror reflecting the transformative power and potential perils of our digital age. It’s a reminder of the thin line between transformation and loss of self, urging visitors to ponder the perpetual cycle of reinvention in an era defined by the watchful eyes of technology.",
    img: ['observee_in_situ_02.png']
},
{
    title: 'Observee In Situ',
    loc: 'Merantix AI Campus, Berlin, Germany',
    category: ['installation', 'programming'],
    tags: ['collaboration', 'generative_AI', 'interactive', 'programming'],
    date: '15.09.2024',
    desc: "\nA collaboration with new media artist Emilia Gentis\nReal-time AI-generated interactive sound installation.\n\nAs part of AI Ethics Symposium at Merantix AI Campus, Berlin.\n\nIn this installation, visitors confront the intersection of technology and self-perception, approaching a white pedestal to engage with a seemingly simple mechanism: a lone button. Suspended above, a constellation of smartphones dangles, ready to capture a photo of the subject. With a press, the installation whirs to life, capturing an image that becomes the subject of scrutiny by a trinity of AIs. These AIs analyse the image and ultimately judge the participant. Within moments, a synthesized voice, laden with the biases inherent to its programming, delivers a 30-second critique echoing through the exhibition space. Each AI persona, from an ad-targeting algorithm with motives as opaque as they are intrusive, to a surveillance entity quick to assume the worst, offers a unique, if sardonic, perspective on the human condition.\n\nObservee In Situ serves as a mirror reflecting the transformative power and potential perils of our digital age. It’s a reminder of the thin line between transformation and loss of self, urging visitors to ponder the perpetual cycle of reinvention in an era defined by the watchful eyes of technology.",
    img: ['observee_in_situ_bis_02.png']
},
{
    title: 'интерference : Knock the wall down',
    loc: 'Flughafen Tempelhof, Berlin, Germany',
    category: ['programming', 'installation'],
    tags: ['programming', 'installation', 'collaboration', 'residencies'],
    date: '15.10.2023',
    desc: "\nAs part of Tempelhof Airport 100th Anniversary, Berlin.\n\nGenerative sound installation in collaboration with Anastasia Zhylinskaya\n\nOmnidirectional geophone, contact microphones, metal rods, modular synthesizer, laptop, mixer, two sets of speakers.\n\nинтерference is a first time collaboration between Anastasia Zhylinskaya and Jun Suzuki that brings together their combined interests in generative and installation art.Resulting from a 2 weeks residency in Tusheti, Georgia (about 10 km from the Russian frontier), the artists explore their interpretation of borders and what evade them : natural elements and electromagnetic waves.\n\nUsing contact microphones loosely attached to metal rods subject to outdoors elements, and an omnidirectional geophone that captures the faintest vibrations on the floor, wind, rain and footsteps become triggers of enveloping soundscapes.The sounds generated by the natural elements outside are \
    amplified and processed by modular synthesis and submerge the room into an endless sombre drone punctuated by crashing roars of metal rods. Simultaneously, each footstep randomly triggers a new short-term frequency from an SDR (Software Defined Radio) playing broadcasts from all over the world, thus switching from music, news and talks to machine bleeps and static noise.\n\nIn times of political conflicts and compromised boundaries, \
    the artists question the inevitability of history, and how sound and unscripted noise cut across these borders to transmit an alternative sense of togetherness.",
    img: ['interference_bis_01.png']
},
{
    title: 'Loop me out before i fade and turn to noise',
    loc: 'LiTE-HAUS Galerie, Berlin, Germany',
    category: ['installation'],
    tags: ['installation', 'tape recorders', 'sound art'],
    date: '15.11.2020',
    desc: "\nMagnetic tape sound installation showcased in LiTE-HAUS Galerie, Berlin\n",
    img: ['loop_me_out_01.png']
},
{
    title: 'i dream of a sphere without corners',
    loc: 'Signals2Noise, Silent Green, Berlin, Germany',
    category: ['performance', 'programming'],
    tags: ['performance', 'radio', 'programming', 'generative_art', 'audiovisual'],
    date: '04.10.2024',
    desc: "\nLive performance using real-time short-term frequencies and AI-assisted audio sequencing.\n\nI dream of a sphere without corners can manifest in various forms. It's a morphing interactive apparatus. A generative soundscape. A real-time collage of radio frequencies from around the globe. Fragmented testimonies of the uprooted. Sounds that evade borders. Border-THROUGH. CROSS-border. TRANS-. PAN-. INTER-. PERI-. An ode to motion. An ode to distance and its infinite range. To the in-betweens.\n\nUsing WebSDR (Software Defined Radio) as a primary source of sound, Jun Suzuki explores the structured disorder of broadcasts, white noise and machine bleeps from around the world. These ongoing streams are channeled into interactive agents (dicy2 by Ircam) that generate additional sequences from field recordings and testimonies. The result is a constantly evolving, real-time generated, fragmented soundscape that blurs cultural boundaries, and dreams of a sphere without corners.",
    img: ['i_dream_of_a_bis_01.png']
},
{
    title: 'i dream of a sphere without corners',
    loc: 'Goethe Institut, Budapest, Hungary',
    category: ['performance', 'programming'],
    tags: ['performance', 'radio', 'programming', 'audiovisual'],
    date: '04.10.2024',
    desc: "\nLive performance using real-time short-term frequencies and AI-assisted audio sequencing.\n\nI dream of a sphere without corners can manifest in various forms. It's a morphing interactive apparatus. A generative soundscape. A real-time collage of radio frequencies from around the globe. Fragmented testimonies of the uprooted. Sounds that evade borders. Border-THROUGH. CROSS-border. TRANS-. PAN-. INTER-. PERI-. An ode to motion. An ode to distance and its infinite range. To the in-betweens.\n\nUsing WebSDR (Software Defined Radio) as a primary source of sound, Jun Suzuki explores the structured disorder of broadcasts, white noise and machine bleeps from around the world. These ongoing streams are channeled into interactive agents (dicy2 by Ircam) that generate additional sequences from field recordings and testimonies. The result is a constantly evolving, real-time generated, fragmented soundscape that blurs cultural boundaries, and dreams of a sphere without corners.",
    img: ['i_dream_of_a_01.png']
},
{
    title: 'Freedom of Expression and Radio Art',
    loc: 'Goethe Institut, Budapest, Hungary',
    category: ['talk'],
    tags: ['talk', 'radio', 'generative_AI'],
    date: '04.10.2024',
    desc: "",
    img: ['talk_goethe_01.png']
},
{
    title: 'Transversality: Travelling the In-Betweens',
    loc: 'SOIREEXX, JOURNEE, Berlin, Germany',
    category: ['talk'],
    tags: ['talk', 'generative_AI'],
    date: '06.06.2024',
    desc: "",
    img: ['talk_soireexd_01.png']
},
{
    title: 'TRYST',
    loc: 'Fifth Wall Festival, Manila, The Philippines',
    category: ['performance'],
    tags: ['performance', 'dance'],
    date: '19.10.2024',
    desc: "\nLive performance in collaboration with Daloy Dance Company.\n\nWith the support of The Japan Foundation of Manila",
    img: ['tryst_01.png']
},
];
