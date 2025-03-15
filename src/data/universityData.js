export const universityData = [
    {
        id: "CSIE",
        name: "COLLEGE OF SCIENCE AND ENGINEERING",
        departments: [
          {
            id: "BDPDS",
            title: "BACHELOR DEGREE PROGRAM OF DATA SCIENCE",
            programs: [{ id: "BACHELOR", name: "BACHELOR" }]
          },
          {
            id: "DAM",
            title: "DEPARTMENT OF APPLIED MATHEMATICS",
            programs: [
              { id: "DOMS", name: "DIVISION OF MATHEMATICAL SCIENCE" },
              { id: "DOSS", name: "DIVISION OF STATISTICAL SCIENCE" },
              { id: "MASTER", name: "MASTER" },
              { id: "MPS", name: "MASTER PROGRAM OF STATISTICS" },
              { id: "PHD", name: "Ph.D." }
            ]
          },
          {
            id: "DC",
            title: "DEPARTMENT OF CHEMISTRY",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MPC", name: "MASTER PROGRAM OF CHEMISTRY" },
              { id: "MPCI", name: "MASTER PROGRAM OF CHEMISTRY (INTERNATIONAL)" },
              { id: "PHDPCG", name: "PH.D. PROGRAM IN CHEMISTRY (GENERAL)" },
              { id: "PHDPCI", name: "PH.D. PROGRAM IN CHEMISTRY (INTERNATIONAL)" }
            ]
          },
          {
            id: "DP",
            title: "DEPARTMENT OF PHYSICS",
            programs: [
              { id: "DOP", name: "DIVISION OF PHYSICS" },
              { id: "DONPES", name: "DIVISION OF NANO AND PHOTOELECTRIC SCIENCE" },
              { id: "MPAP", name: "MASTER PROGRAM OF APPLIED PHYSICS" },
              { id: "MPAPI", name: "MASTER PROGRAM OF APPLIED PHYSICS (INTERNATIONAL)" },
              { id: "PHDPAP", name: "PH.D. PROGRAM IN APPLIED PHYSICS" },
              { id: "PHDPPI", name: "PH.D. PROGRAM IN PHYSICS (INTERNATIONAL)" }
            ]
          },
          {
            id: "DCSIE",
            title: "DEPARTMENT OF COMPUTER SCIENCE AND INFORMATION ENGINEERING",
            programs: [
              { id: "BPCSIE", name: "BACHELOR PROGRAM OF COMPUTER SCIENCE AND INFORMATION ENGINEERING" },
              {
                id: "BPCSIEI",
                name: "BACHELOR PROGRAM OF COMPUTER SCIENCE AND INFORMATION ENGINEERING (INTERNATIONAL)",
                courses: [
                    {
                      id: "SL1",
                      cName: "Service Learning (Ⅰ)",
                      teacher: "YUNG, CHUNG/Shou-Chih Lo",
                      courseNo: "SL__1836AB",
                      time: "Fri 12",
                      credits: "1/1"
                    },
                    {
                      id: "PE2",
                      cName: "Physical Education (II)",
                      teacher: "SHlEH,DER-TSAN",
                      courseNo: "YY__1010AG",
                      time: "Mon 4/Mon 5",
                      credits: "1/2"
                    },
                    {
                      id: "CALC2",
                      cName: "Calculus (II)",
                      teacher: "TSE, SZE MAN",
                      courseNo: "AM__1080AG",
                      time: "Mon 8/Tue 8/Tue 9",
                      credits: "3/3"
                    },
                    {
                      id: "ICP2A",
                      cName: "Introduction to Computer Programming（Ⅱ）",
                      teacher: "Tao-Ku Chang",
                      courseNo: "CSIEB004AA",
                      time: "Wed 9/Wed 10/Wed 11",
                      credits: "3/3"
                    },
                    {
                      id: "ICP2B",
                      cName: "Introduction to Computer Programming（Ⅱ）",
                      teacher: "Shun-Bo Yang",
                      courseNo: "CSIEB004AB",
                      time: "Wed 9/Wed 10/Wed 11",
                      credits: "3/3"
                    },
                    {
                      id: "LOP2",
                      cName: "Lab of Programming （Ⅱ）",
                      teacher: "Ching-Fu, Lin",
                      courseNo: "CSIEB0050",
                      time: "Thu 9/Thu 10/Thu 11",
                      credits: "1/0:3"
                    },
                    {
                      id: "LA",
                      cName: "Linear Algebra",
                      teacher: "LIN, SHIN FENG",
                      courseNo: "CSIEB0060",
                      time: "Mon 9/Mon 10/Mon 11",
                      credits: "3/3"
                    },
                    {
                      id: "GP2",
                      cName: "General Physics(II)",
                      teacher: "Chia-Liang Cheng",
                      courseNo: "PHYS1020AC",
                      time: "Tue 6/Thu 5/Thu 6",
                      credits: "3/3"
                    },
                    {
                      id: "GPL2E",
                      cName: "General Physics Lab. (II)",
                      teacher: "Wang-Chi Vincent Yeh",
                      courseNo: "PHYS1030AE",
                      time: "Fri 8/Fri 9/Fri 10",
                      credits: "1/0:3"
                    },
                    {
                      id: "GPL2F",
                      cName: "General Physics Lab. (II)",
                      teacher: "YANG, CHING-NUNG",
                      courseNo: "PHYS1030AF",
                      time: "Fri 8/Fri 9/Fri 10",
                      credits: "1/0:3"
                    },
                    {
                      id: "DSL",
                      cName: "Digital Systems Laboratory",
                      teacher: "HUNG-JUI CHANG",
                      courseNo: "CSIEB0110",
                      time: "Wed 4/Wed 5/Wed 6",
                      credits: "1/0:3"
                    },
                    {
                      id: "ADA",
                      cName: "Algorithm Design and Analysis",
                      teacher: "Lee, Guanling",
                      courseNo: "CSIEB0120",
                      time: "Thu 9/Thu 10/Thu 11",
                      credits: "3/3"
                    },
                    {
                      id: "PROB",
                      cName: "Probability",
                      teacher: "Hsin-Chou Chi",
                      courseNo: "CSIEB0130",
                      time: "Thu 4/Thu 5/Thu 6",
                      credits: "3/3"
                    },
                    {
                      id: "CO",
                      cName: "Computer Organization",
                      teacher: "Hsuan-Han Chang",
                      courseNo: "CSIEB0140",
                      time: "Wed 9/Wed 10/Wed 11",
                      credits: "3/3"
                    },
                    {
                      id: "LAD",
                      cName: "Lab of Algorithm Design",
                      teacher: "I-Cheng Chang",
                      courseNo: "CSIEB0180",
                      time: "Fri 9/Fri 10/Fri 11",
                      credits: "1/0:3"
                    },
                    {
                      id: "PAC",
                      cName: "Programming Ability Certification",
                      teacher: "YUNG, CHUNG",
                      courseNo: "CSIEB0470",
                      time: "Mon 1",
                      credits: "0/0"
                    },
                    {
                      id: "PLC",
                      cName: "Programming Languages and Compilers",
                      teacher: "Shou-Chih Lo",
                      courseNo: "CSIEB0480",
                      time: "Tue 4/Tue 5/Tue 6",
                      credits: "3/3"
                    },
                    {
                      id: "FLA",
                      cName: "Formal Languages and Automata",
                      teacher: "SHIOW-YANG WU",
                      courseNo: "CSIEB0190",
                      time: "Tue 9/Tue 10/Tue 11",
                      credits: "3/3"
                    },
                    {
                      id: "DBS",
                      cName: "Database Systems",
                      teacher: "Wen-Chieh Fang",
                      courseNo: "CSIEB0290",
                      time: "Thu 4/Thu 5/Thu 6",
                      credits: "3/3"
                    },
                    {
                      id: "IML",
                      cName: "Introductory Machine Learning",
                      teacher: "Hsin-Chou Chi",
                      courseNo: "CSIEB0300",
                      time: "Thu 9/Thu 10/Thu 11",
                      credits: "3/3"
                    },
                    {
                      id: "UP2",
                      cName: "Undergraduate Project（II）",
                      teacher: "Wen-Chieh Fang",
                      courseNo: "CSIEB0360",
                      time: "Thu 1/Fri 1",
                      credits: "1/2"
                    },
                    {
                      id: "IESD",
                      cName: "Introduction to Embedded System Design",
                      teacher: "skip",
                      courseNo: "CSIEB0380",
                      time: "Mon 9/Mon 10/Mon 11",
                      credits: "3/3"
                    },
                    {
                      id: "SCFP",
                      cName: "Scalable Computing: Foundation and Practice",
                      teacher: "Hsin-Chou Chi",
                      courseNo: "CSIEB0540",
                      time: "Fri 4/Fri 5/Fri 6",
                      credits: "3/3"
                    }
                  ]
              },
              { id: "MASTER", name: "MASTER" },
              { id: "MPCSIE", name: "MASTER PROGRAM OF COMPUTER SCIENCE AND INFORMATION ENGINEERING" },
              { id: "MPCSIEI", name: "MASTER PROGRAM OF COMPUTER SCIENCE AND INFORMATION ENGINEERING (INTERNATIONAL)" },
              { id: "MPAIIA", name: "MASTER PROGRAM IN ARTIFICIAL INTELLIGENCE AND INNOVATIVE APPLICATIONS" },
              { id: "EMPCSIE", name: "(in-service master program) EXTENSIVE MASTER PROGRAM OF COMPUTER SCIENCE AND INFORMATION ENGINEERING (EXTENSIVE)" },
              { id: "PHD", name: "Ph.D." }
            ]
          },
          {
            id: "DMSE",
            title: "DEPARTMENT OF MATERIALS SCIENCE AND ENGINEERING",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MPMSE", name: "MASTER PROGRAM OF MATERIALS SCIENCE AND ENGINEERING" },
              { id: "MPMSEI", name: "MASTER PROGRAM OF MATERIALS SCIENCE AND ENGINEERING (INTERNATIONAL)" },
              { id: "PHDPMS", name: "PH.D. PROGRAM IN MATERIALS SCIENCE AND ENGINEERING" },
              { id: "PHDPMSI", name: "PH.D. PROGRAM IN MATERIALS SCIENCE AND ENGINEERING (INTERNATIONAL)" }
            ]
          },
          {
            id: "DEE",
            title: "DEPARTMENT OF ELECTRICAL ENGINEERING",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" },
              { id: "PHD", name: "Ph.D." }
            ]
          },
          {
            id: "DOEE",
            title: "DEPARTMENT OF OPTO-ELECTRONIC ENGINEERING",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" }
            ]
          },
          {
            id: "DBMM",
            title: "DEPARTMENT OF BIOCHEMISTRY AND MOLECULAR MEDICINE",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" },
              { id: "PHD", name: "PH.D." }
            ]
          },
          {
            id: "BACHELOR",
            title: "BACHELOR",
            programs: []
          }
        ]
      },
      {
        id: "Management",
        name: "COLLEGE OF MANAGEMENT",
        departments: [
          {
            id: "EMBA",
            title: "EXECUTIVE MASTER PROGRAM OF BUSINESS ADMINISTRATION (in-service master program)",
            programs: [
              { id: "SMS", name: "(in-service master program) SENIOR MANAGEMENT" },
              { id: "IEM", name: "(in-service master program) INNOVATION AND ENTREPRENEURSHIP MANAGEMENT" }
            ]
          },
          {
            id: "BPMSF",
            title: "BACHELOR PROGRAM OF MANAGEMENT SCIENCE AND FINANCE (international program)",
            programs: [{ id: "BACHELOR", name: "BACHELOR" }]
          },
          {
            id: "BPAIM",
            title: "BACHELOR PROGRAM OF ACCOUNTING AND INFORMATION MANAGEMENT (international program)",
            programs: [{ id: "BACHELOR", name: "BACHELOR" }]
          },
          {
            id: "BPDMSI",
            title: "BACHELOR PROGRAM OF DIGITAL MARKETING AND SERVICE INNOVATION",
            programs: [{ id: "BACHELOR", name: "BACHELOR" }]
          },
          {
            id: "DBA",
            title: "DEPARTMENT OF BUSINESS ADMINISTRATION",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MPBA", name: "MASTER PROGRAM OF BUSINESS ADMINISTRATION" },
              { id: "MPBAI", name: "MASTER PROGRAM OF BUSINESS ADMINISTRATION (INTERNATIONAL)" },
              { id: "EMPBA", name: "(in-service master program) EXTENSIVE MASTER PROGRAM OF BUSINESS ADMINISTRATION" },
              { id: "PHD", name: "Ph.D." }
            ]
          },
          {
            id: "DIB",
            title: "DEPARTMENT OF INTERNATIONAL BUSINESS",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" },
              { id: "EBAMIB", name: "(in-service master program) EXECUTIVE BUSINESS ADMINISTRATION MASTER PROGRAM OF INTERNATIONAL BUSINESS" }
            ]
          },
          {
            id: "DA",
            title: "DEPARTMENT OF ACCOUNTING",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" }
            ]
          },
          {
            id: "DIM",
            title: "DEPARTMENT OF INFORMATION MANAGEMENT",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MPIM", name: "MASTER PROGRAM OF INFORMATION MANAGEMENT" },
              { id: "MPIM2", name: "MASTER PROGRAM OF INFORMATION MANAGEMENT" }
            ]
          },
          {
            id: "DF",
            title: "DEPARTMENT OF FINANCE",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" }
            ]
          },
          {
            id: "GILM",
            title: "GRADUATE INSTITUTE OF LOGISTICS MANAGEMENT",
            programs: [{ id: "MASTER", name: "MASTER" }]
          },
          {
            id: "DTRLS",
            title: "DEPARTMENT OF TOURISM, RECREATION AND LEISURE STUDIES",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" }
            ]
          },
          {
            id: "BACHELOR",
            title: "BACHELOR",
            programs: []
          }
        ]
      },
      {
        id: "CHSS",
        name: "COLLEGE OF HUMANITIES AND SOCIAL SCIENCES",
        departments: [
          {
            id: "IPTCSL",
            title: "INTERNATIONAL PH.D. PROGRAM IN TEACHING CHINESE AS A SECOND LANGUAGE",
            programs: [{ id: "PHD", name: "PH.D." }]
          },
          {
            id: "IMPTC",
            title: "INTERNATIONAL MASTER PROGRAM IN TEACHING CHINESE AND CALLIGRAPHY",
            programs: [{ id: "MASTER", name: "MASTER" }]
          },
          {
            id: "PPARS",
            title: "PH.D. PROGRAM IN ASIA-PACIFIC REGIONAL STUDIES",
            programs: [{ id: "PHD", name: "PH.D." }]
          },
          {
            id: "DSL",
            title: "DEPARTMENT OF SINOPHONE LITERATURES",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" },
              { id: "DCW", name: "DIVISION OF CREATIVE WRITING" },
              { id: "DLCS", name: "DIVISION OF LITERATURE AND CULTURAL STUDIES" }
            ]
          },
          {
            id: "DE",
            title: "DEPARTMENT OF ENGLISH",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "DTESOL", name: "DIVISION OF TEACHING ENGLISH TO SPEAKERS OF OTHER LANGUAGES" }
            ]
          },
          {
            id: "DH",
            title: "DEPARTMENT OF HISTORY",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" }
            ]
          },
          {
            id: "DCCP",
            title: "DEPARTMENT OF COUNSELING AND CLINICAL PSYCHOLOGY",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" }
            ]
          },
          {
            id: "DECON",
            title: "DEPARTMENT OF ECONOMICS",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" },
              { id: "PHD", name: "Ph.D." }
            ]
          },
          {
            id: "DCLL",
            title: "DEPARTMENT OF CHINESE LANGUAGE AND LITERATURE",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" },
              { id: "PHD", name: "Ph.D." }
            ]
          },
          {
            id: "DTRS",
            title: "DEPARTMENT OF TAIWAN AND REGIONAL STUDIES",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" },
              { id: "EMPTRS", name: "(in-service master program) EXTENSIVE MASTER PROGRAM OF TAIWAN AND REGIONAL STUDIES" }
            ]
          },
          {
            id: "DSOC",
            title: "DEPARTMENT OF SOCIOLOGY",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" }
            ]
          },
          {
            id: "DPA",
            title: "DEPARTMENT OF PUBLIC ADMINISTRATION",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" },
              { id: "EMPPA", name: "(in-service master program) EXTENSIVE MASTER PROGRAM OF PUBLIC ADMINISTRATION" }
            ]
          },
          {
            id: "DLAW",
            title: "DEPARTMENT OF LAW",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" }
            ]
          },
          {
            id: "DLAWIL",
            title: "DEPARTMENT OF LAW (indigenous law program)",
            programs: [{ id: "BACHELOR", name: "BACHELOR" }]
          },
          {
            id: "BACHELOR",
            title: "BACHELOR",
            programs: []
          }
        ]
      },
      {
        id: "Indigenous",
        name: "COLLEGE OF INDIGENOUS STUDIES",
        departments: [
          {
            id: "IPIS",
            title: "INTERNATIONAL PH. D. PROGRAM IN INDIGENOUS STUDIES",
            programs: [{ id: "PHD", name: "PH.D." }]
          },
          {
            id: "DERC",
            title: "DEPARTMENT OF ETHNIC RELATIONS AND CULTURES",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" },
              { id: "EMPERC", name: "(in-service master program) EXTENSIVE MASTER PROGRAM OF ETHNIC RELATIONS AND CULTURES" },
              { id: "PHD", name: "Ph.D." }
            ]
          },
          {
            id: "DILC",
            title: "DEPARTMENT OF INDIGENOUS LANGUAGES AND COMMUNICATION",
            programs: [{ id: "BACHELOR", name: "BACHELOR" }]
          },
          {
            id: "UPIPA",
            title: "UNDERGRADUATE PROGRAM OF INDIGENOUS PERFORMANCE AND ARTS",
            programs: [{ id: "BACHELOR", name: "BACHELOR" }]
          },
          {
            id: "DIDSW",
            title: "DEPARTMENT OF INDIGENOUS DEVELOPMENT AND SOCIAL WORK",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "DID", name: "DIVISION OF INDIGENOUS DEVELOPMENT" },
              { id: "DSW", name: "DIVISION OF SOCIAL WORK" },
              { id: "MASTER", name: "MASTER" },
              { id: "EMPISW", name: "(in-service master program) EXTENSIVE MASTER PROGRAM OF INDIGENOUS SOCIAL WORK" }
            ]
          },
          {
            id: "BACHELOR",
            title: "BACHELOR",
            programs: []
          }
        ]
      },
      {
        id: "Arts",
        name: "COLLEGE OF THE ARTS",
        departments: [
          {
            id: "PPIA",
            title: "THE PH.D. PROGRAM IN INTERDISCIPLINARY ARTS",
            programs: [{ id: "PHD", name: "PH.D." }]
          },
          {
            id: "DACI",
            title: "DEPARTMENT OF ARTS AND CREATIVE INDUSTRIES",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" },
              { id: "EMACI", name: "(in-service master program) EXECUTIVE MASTER PROGRAM OF ARTS AND CREATIVE INDUSTRIES" }
            ]
          },
          {
            id: "DMUS",
            title: "DEPARTMENT OF MUSIC",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" }
            ]
          },
          {
            id: "DAD",
            title: "DEPARTMENT OF ARTS AND DESIGN",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" }
            ]
          },
          {
            id: "BACHELOR",
            title: "BACHELOR",
            programs: []
          }
        ]
      },
      {
        id: "Hua-Shih",
        name: "HUA-SHIH COLLEGE OF EDUCATION",
        departments: [
          {
            id: "MPME",
            title: "MASTER PROGRAM OF MULTICULTURAL EDUCATION",
            programs: [{ id: "MASTER", name: "MASTER" }]
          },
          {
            id: "PPME",
            title: "PH.D. PROGRAM OF MULTICULTURAL EDUCATION",
            programs: [{ id: "PHD", name: "PH.D." }]
          },
          {
            id: "DECE",
            title: "DEPARTMENT OF EARLY CHILDHOOD EDUCATION",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "PPEG", name: "POST-BACCALAUREATE PROGRAM IN EDUCARE GIVER" },
              { id: "MASTER", name: "MASTER" },
              { id: "EMPE", name: "(in-service master program) EXTENSIVE MASTER PROGRAM OF EARLY CHILDHOOD EDUCATION" }
            ]
          },
          {
            id: "DSE",
            title: "DEPARTMENT OF SPECIAL EDUCATION",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MPISNAT", name: "MASTER PROGRAM OF INDIVIDUALS WITH SPECIAL NEEDS AND ASSISTIVE TECHNOLOGY" }
            ]
          },
          {
            id: "DEAM",
            title: "DEPARTMENT OF EDUCATIONAL ADMINISTRATION AND MANAGEMENT",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" },
              { id: "EMSA", name: "EXTENSIVE MASTER PROGRAM OF SCHOOL ADMINISTRATION" },
              { id: "EMPEAM", name: "(in-service master program) EXTENSIVE MASTER PROGRAM OF EDUCATION ADMINISTRATION AND MANAGEMENT" }
            ]
          },
          {
            id: "DEHPD",
            title: "DEPARTMENT OF EDUCATION AND HUMAN POTENTIALS DEVELOPMENT",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MPE", name: "MASTER PROGRAM OF EDUCATION" },
              { id: "EMPE2", name: "(in-service master program) EXTENSIVE MASTER PROGRAM OF EDUCATION" },
              { id: "MPSE", name: "MASTER PROGRAM OF SCIENCE EDUCATION" },
              { id: "PPE", name: "PH.D. PROGRAM OF EDUCATION" },
              { id: "PPSE", name: "PH.D. PROGRAM OF SCIENCE EDUCATION" }
            ]
          },
          {
            id: "DPEK",
            title: "DEPARTMENT OF PHYSICAL EDUCATION AND KINESIOLOGY",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" },
              { id: "EMPEK", name: "EXTENSIVE MASTER PROGRAM OF PHYSICAL EDUCATION AND KINESIOLOGY" },
              { id: "EMPEK2", name: "(in-service master program) EXTENSIVE MASTER PROGRAM OF PHYSICAL EDUCATION AND KINESIOLOGY" }
            ]
          },
          {
            id: "BACHELOR",
            title: "BACHELOR",
            programs: []
          }
        ]
      },
      {
        id: "ETE",
        name: "CENTER FOR TEACHER EDUCATION",
        departments: [
          { id: "EPETE", title: "EDUCATION PROGRAM FOR ELEMENTARY TEACHER EDUCATION" },
          { id: "EPSTE", title: "EDUCATION PROGRAM FOR SECONDARY TEACHER EDUCATION" },
          { id: "PPSPT", title: "THE PROGRAM FOR PROMOTING SPECIALTIES OF PROMINENT TEACHER-TO-BE OF NDHU" },
          { id: "CBTE", title: "COURSE OF BILINGUAL TEACHER EDUCATION" }
        ]
      },
      {
        id: "Environmental",
        name: "COLLEGE OF ENVIRONMENTAL STUDIES AND OCEANOGRAPHY",
        departments: [
          {
            id: "DNRE",
            title: "DEPARTMENT OF NATURAL RESOURCES AND ENVIRONMENTAL STUDIES",
            programs: [
              { id: "BACHELOR", name: "BACHELOR" },
              { id: "MASTER", name: "MASTER" },
              { id: "PHD", name: "PH.D." }
            ]
          },
          {
            id: "GIMB",
            title: "GRADUATE INSTITUTE OF MARINE BIOLOGY",
            programs: [
              { id: "MASTER", name: "MASTER" },
              { id: "PHD", name: "PH.D." }
            ]
          },
          {
            id: "MHES",
            title: "MASTER OF HUMANITY AND ENVIRONMENTAL SCIENCE PROGRAM",
            programs: [{ id: "MASTER", name: "MASTER" }]
          },
          {
            id: "BACHELOR",
            title: "BACHELOR",
            programs: []
          }
        ]
      },

  ];
  
