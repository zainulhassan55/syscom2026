export interface CommitteeMember {
  name: string
  affiliation: string
}

export interface CommitteeSection {
  id: string
  title: string
  layout: 'cards' | 'list'
  members: CommitteeMember[]
}

export const committeeSections: CommitteeSection[] = [
  {
    id: 'honorary',
    title: 'Honorary Chair',
    layout: 'cards',
    members: [
      {
        name: 'Jeffrey J. P. Tsai, Ph.D',
        affiliation: 'President, Asia University, Taiwan',
      },
    ],
  },
  {
    id: 'executive',
    title: 'Executive Chair',
    layout: 'cards',
    members: [
      {
        name: 'Chen Chi-Hsiung, PhD',
        affiliation:
          'Dean and Chair Professor, Department of Information Science and Applications, Asia University, Taiwan',
      },
      {
        name: 'Anupam Shukla, PhD',
        affiliation: 'Director, National Institute of Technology Surat, India',
      },
      {
        name: 'Nadia Nedjah, PhD',
        affiliation: 'Professor, State University of Rio de Janeiro, Brazil',
      },
    ],
  },
  {
    id: 'co-chairs',
    title: 'Conference Co-chairs',
    layout: 'cards',
    members: [
      {
        name: 'Brij B. Gupta, PhD',
        affiliation:
          'Director, CCRI and Distinguished Professor, Department of Computer Science and Information Engineering, Asia University, Taiwan',
      },
      {
        name: 'Chi-Wen Lung, PhD',
        affiliation:
          'Professor & Department Chair, Department of Creative Product Design, Asia University, Taiwan',
      },
    ],
  },
  {
    id: 'program',
    title: 'Program Chairs',
    layout: 'cards',
    members: [
      { name: 'Francesco Colace', affiliation: 'University of Salerno, Italy' },
      { name: 'Brij Gupta', affiliation: 'Asia University, Taiwan' },
      { name: 'Kwok Tai Chui', affiliation: 'The Open University of Hong Kong, Hong Kong' },
    ],
  },
  {
    id: 'tpc',
    title: 'Technical Program Committee',
    layout: 'list',
    members: [
      { name: 'Chun-Yuan Lin, PhD', affiliation: 'Asia University, Taiwan' },
      { name: 'Imran Razzak, PhD', affiliation: 'Deakin University, Australia' },
      { name: 'Andrea Bruno, PhD', affiliation: 'University of Salerno, Italy' },
      { name: 'Arcangelo Castiglione, PhD', affiliation: 'University of Salerno, Fisciano, Salerno, Italy' },
      { name: 'Anupama Mishra, PhD', affiliation: 'Swami Rama Himalayan University, Dehradun, India' },
      { name: 'Manish Kumar Goyal, PhD', affiliation: 'Indian Institute of Technology Indore, India' },
      { name: 'Ammar Almomani, PhD', affiliation: 'Al-Balqa Applied University, Jordan' },
      { name: 'Balwinder Raj, PhD', affiliation: 'National Institute of Technology Jalandhar, India' },
      { name: 'Massoud Moslehpour, PhD', affiliation: 'Asia University, Taiwan' },
      { name: 'Francisco José García-Peñalvo, PhD', affiliation: 'University of Salamanca, Spain' },
      { name: 'Jinsong Wu, PhD', affiliation: 'University of Chile, Chile' },
      { name: 'Shingo Yamaguchi, PhD', affiliation: 'Yamaguchi University, Japan' },
      { name: 'Xiaochun Cheng, PhD', affiliation: 'Middlesex University, London, UK' },
      { name: 'Mu-Yen Chen, PhD', affiliation: 'National Cheng Kung University, Tainan' },
      { name: 'Vincent Shin-Hung Pan, PhD', affiliation: 'Chaoyang University of Technology, Taiwan' },
      { name: 'Andrew Ip, PhD', affiliation: 'University of Saskatchewan, Canada' },
      { name: 'Michael Sheng, PhD', affiliation: 'Macquarie University, Sydney, Australia' },
      { name: 'Dragan Peraković, PhD', affiliation: 'University of Zagreb, Croatia' },
      { name: 'Anagha Jamthe, PhD', affiliation: 'University of Texas, Austin, USA' },
      { name: 'Aniket Mahanti, PhD', affiliation: 'University of Auckland, New Zealand' },
      { name: 'Suryadip Chakraborty, PhD', affiliation: 'Johnson C. Smith University, USA' },
      { name: 'Virendra Bhavsar, PhD', affiliation: 'University of New Brunswick, Canada' },
      { name: 'Justin Zhang, PhD', affiliation: 'University of North Florida, USA' },
      { name: 'Chinthaka Premachandra, PhD', affiliation: 'Shibaura Institute of Technology, Japan' },
      { name: 'Mohammed Ali, PhD', affiliation: 'University of Manchester, UK' },
      { name: 'T. Perumal, PhD', affiliation: 'Universiti Putra Malaysia (UPM), Malaysia' },
      { name: 'Marjan Kuchaki Rafsanjani, PhD', affiliation: 'Shahid Bahonar University of Kerman, Iran' },
      { name: 'Rajhans Mishra, PhD', affiliation: 'Indian Institute of Management Indore, India' },
      { name: 'Srivathsan Srinivasagopalan, PhD', affiliation: 'AT&T, USA' },
      { name: 'Sugam Sharma, PhD', affiliation: 'Iowa State University, USA' },
      { name: 'Manoj Gupta, PhD', affiliation: 'SMVDU, Katra, Jammu and Kashmir, India' },
      { name: 'Francesco Palmieri, PhD', affiliation: 'University of Salerno, Italy' },
      { name: 'Pethuru Raj, PhD', affiliation: 'Vice President, Reliance Jio Infocomm Ltd. (RJIL), India' },
      { name: 'S. K. Gupta, PhD', affiliation: 'Indian Institute of Technology Delhi, India' },
      { name: 'Mouna Jouini, PhD', affiliation: 'SMART Laboratory, University of Tunis, Tunisia' },
      { name: 'Angela Amphawan, PhD', affiliation: 'University Malaysia, Malaysia' },
      { name: 'Phuc Do, PhD', affiliation: 'University of Information Technology, Vietnam' },
      { name: 'Ahmed M. Manasrah, PhD', affiliation: 'Higher Colleges of Technology, Sharjah, UAE' },
      { name: 'Ahmed A. Abd El-Latif, PhD', affiliation: 'Menoufia University, Egypt' },
    ],
  },
  {
    id: 'local',
    title: 'Local Arrangement Chairs',
    layout: 'cards',
    members: [
      {
        name: 'Chi-Wen Lung, PhD',
        affiliation:
          'Professor & Department Chair, Department of Creative Product Design, Asia University, Taiwan',
      },
      {
        name: 'Akshat Gaurav',
        affiliation:
          'International Center for AI and Cyber Security Research and Innovations (CCRI), Asia University, Taiwan',
      },
    ],
  },
  {
    id: 'advisory',
    title: 'International Advisory Committee',
    layout: 'list',
    members: [
      { name: 'Prabin Kumar Panigrahi, PhD', affiliation: 'Indian Institute of Management Indore, India' },
      { name: 'Michael Sheng, PhD', affiliation: 'Macquarie University, Sydney, Australia' },
      { name: 'Francesco Colace, PhD', affiliation: 'University of Salerno, Italy' },
      { name: 'Dragan Peraković, PhD', affiliation: 'University of Zagreb, Croatia' },
      { name: 'Sunil Kumar Singh, PhD', affiliation: 'CCET, Panjab University, Chandigarh, India' },
      { name: 'Konstantinos Psannis, PhD', affiliation: 'University of Macedonia, Greece' },
      { name: 'Arcangelo Castiglione, PhD', affiliation: 'University of Salerno, Fisciano, Salerno, Italy' },
      { name: 'Priyanka Chaurasia, PhD', affiliation: 'University of Ulster, UK' },
      { name: 'Kwok Tai Chui, PhD', affiliation: 'Hong Kong Metropolitan University (HKMU), Hong Kong' },
      {
        name: 'Harlinda Syofyan, PhD',
        affiliation: 'Department of English Language Education, Universitas Esa Unggul, Jakarta, Indonesia',
      },
      { name: 'Sreerakuvandana, PhD', affiliation: 'Department of AI & ML, Jain University, India' },
      {
        name: 'Aminul Haque, PhD',
        affiliation: 'Department of Business Administration, Aligarh Muslim University, India',
      },
      {
        name: 'Jee Ann Marie Guibone, PhD',
        affiliation: 'Department of English, Northern Bukidnon State College, Philippines',
      },
    ],
  },
  {
    id: 'web',
    title: 'Web Chairs',
    layout: 'cards',
    members: [
      { name: 'Vincent Shin-Hung Pan, PhD', affiliation: 'Chaoyang University of Technology, Taiwan' },
      { name: 'Moon Jusung', affiliation: 'Asia University, Taiwan' },
      { name: 'Abhay Ratnaparkhi', affiliation: 'eBuy Inc., USA' },
    ],
  },
  {
    id: 'publicity',
    title: 'Publicity Chairs',
    layout: 'cards',
    members: [
      { name: 'Arcangelo Castiglione, PhD', affiliation: 'University of Salerno, Fisciano, Salerno, Italy' },
      { name: 'Priyanka Chaurasia, PhD', affiliation: 'University of Ulster, UK' },
      { name: 'Sunil Kumar Singh, PhD', affiliation: 'CCET, Panjab University, Chandigarh, India' },
    ],
  },
]
