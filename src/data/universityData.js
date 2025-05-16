
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
                    id: "PE1",
                    cName: "Physical Education (I)",
                    teacher: "SHlEH,DER-TSAN",
                    courseNo: "YY__1000AG",
                    time: "/Mon 4/Mon 5",
                    credits: "1/2",
                    photo: "",
                    syllabus: "",
                    introduction: "ginny8789@yahoo.com.tw",
                    email: "",
                    semester: 1,
                    level: "Core Course" 
                  },
                  {
                    id: "CAL1",
                    cName: "Calculus(I)",
                    teacher: "TSE, SZE MAN",
                    courseNo: "AM__1050AG",
                    time: "/Mon 8/Mon 9/Tue 8",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291703/Calculus_eebaek.jpg",
                    syllabus: {
                      week1: "Review of basic notions",
                      week2: "Limits",
                      week3: "Continuous functions. Tangent lines and rates of change",
                      week4: "Derivatives and basic rules",
                      week5: "Derivatives of trigonometric functions. Chain rule",
                      week6: "Implicit differentiation. Differentials and linear approximations",
                      week7: "Extrema. Mean value theorem",
                      week8: "Monotone functions. Concavity and inflection points",
                      week9: "期中考試週 Midterm Exam",
                      week10: "Asymptotes. Curve sketching",
                      week11: "Indefinite integrals",
                      week12: "Definite integrals. Fundamental theorem of calculus",
                      week13: "Applications of definite integrals",
                      week14: "Transcendental functions I",
                      week15: "Transcendental functions II",
                      week16: "Techniques of integration I",
                      week17: "Techniques of integration II",
                      week18: "期末考試週 Final Exam"
                    }
                    ,
                    introduction: "",
                    email: "tse@ndhu.edu.tw",
                    semester: 1,
                    level: "Freshman" 
                  },
                  {
                    id: "ITCS",
                    cName: "Introduction to Computer Science",
                    teacher: "/YUNG, CHUNG/Tao-Ku Chang/Han-Ying Kao",
                    courseNo: "CSIEB0010",
                    time: "/Tue 4/Tue 5/Thu 4",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291704/computer_programming_dkik2g.jpg",
                    syllabus: {
                      week1: "Course Overview",
                      week2: "Mid-Autumn (Moon Cake) Festival",
                      week3: "The Big Picture and Binary Values",
                      week4: "Data Representation",
                      week5: "Gates, Circuits, Computing Components",
                      week6: "Midterm Exam #1",
                      week7: "Object-Oriented Design",
                      week8: "Operating Systems",
                      week9: "Networks",
                      week10: "Computer Security",
                      week11: "Midterm Exam #2",
                      week12: "Problem Solving and Algorithms",
                      week13: "Abstract Data Types and Subprograms",
                      week14: "File Systems and Directories",
                      week15: "Information Systems",
                      week16: "Final Exam",
                      week17: "Course Review",
                      week18: "(Optional) Discussion by Appointment"
                    }
                    ,
                    introduction: "",
                    email: "tkchang@gms.ndhu.edu.tw",
                    semester: 1,
                    level: "Freshman"
                  },
                  {
                    id: "ICP1",
                    cName: "Introduction to Computer Programming（Ⅰ）",
                    teacher: "Shun-Bo Yang",
                    courseNo: "CSIEB002AB",
                    time: "/Wed 9/Wed 10/Wed 11",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291703/computer_programmin_second_c9fhpe.jpg",
                    syllabus: {
                      week1: "Introduction to programming: concepts, language, compiler, IDE",
                      week2: "Variables: types, declaration, operations, input/output",
                      week3: "Flow control: if, if...else",
                      week4: "Flow control: switch...case, ?: operator",
                      week5: "Loops: for, while",
                      week6: "Loops: do...while, break, continue",
                      week7: "Arrays: access and traversal",
                      week8: "Character arrays and strings",
                      week9: "期中考試週 Midterm Exam",
                      week10: "Multidimensional arrays",
                      week11: "Pointers and pointer-array relationship",
                      week12: "Functions: parameters, return values, function pointers",
                      week13: "Recursive functions",
                      week14: "Preprocessing: includes and self-defined libraries",
                      week15: "Structures and structure pointers",
                      week16: "File handling",
                      week17: "Implementing a small game",
                      week18: "期末考試週 Final Exam"
                    }
                    ,
                    introduction: "",
                    email: "include@gms.ndhu.edu.tw",
                    semester: 1,
                    level: "Freshman" 
                  },
                  {
                    id: "ICP11",
                    cName: "Introduction to Computer Programming（Ⅰ）",
                    teacher: "/Tao-Ku Chang",
                    courseNo: "CSIEB0002AA",
                    time: "/Wed 9/Wed 10/Wed 11",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291704/computer_programming_dkik2g.jpg",
                    syllabus:  {
                      week1: "Introduction to the course and setup instructions",
                      week2: "C Fundamentals",
                      week3: "Formatted Input/Output",
                      week4: "Expressions, Selection Statements",
                      week5: "Loops",
                      week6: "Function (1)",
                      week7: "Function (2)",
                      week8: "Arrays (1)",
                      week9: "期中考試週 Midterm Exam",
                      week10: "Arrays (2)",
                      week11: "Pointer (1)",
                      week12: "Pointer (2)",
                      week13: "Pointer (3)",
                      week14: "Strings",
                      week15: "Structures, Unions, and Enumeration",
                      week16: "File Processing",
                      week17: "期末考試週 Final Exam",
                      week18: ""
                    }
                    ,
                    introduction: "",
                    email: "tkchang@gms.ndhu.edu.tw",
                    semester: 1,
                    level: "Freshman" 
                  },
                  {
                    id: "LP1",
                    cName: "Lab of Programming （Ⅰ）",
                    teacher: "Ching-Fu, Lin",
                    courseNo: "CSIEB0030",
                    time: "/Thu 9/Thu 10/Thu 11",
                    credits: "1/0:3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291704/physics_lab_1_z2qtpa.jpg",
                    syllabus: "",
                    introduction: "",
                    email: "wcy2@gms.ndhu.edu.tw",
                    semester: 1,
                    level: "Freshman" 
                  },
                  {
                    id: "GP1",
                    cName: "General Physics(Ⅰ)",
                    teacher: "Chia-Liang Cheng",
                    courseNo: "PHYS1000AC",
                    time: "/Tue 6/Thu 5/Thu 6",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291706/physics_uplnxu.jpg",
                    syllabus: "",
                    introduction: "",
                    email: "clcheng@gms.ndhu.edu.tw",
                    semester: 1,
                    level: "Freshman"
                  },
                  {
                    id: "GPL1A",
                    cName: "General Physics Lab. (Ⅰ)",
                    teacher: "Wang-Chi Vincent Yeh",
                    courseNo: "PHYS1010AE",
                    time: "/Fri 8/Fri 9/Fri 10",
                    credits: "1/0:3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291704/physics_lab_1_z2qtpa.jpg",
                    syllabus: "",
                    introduction: "",
                    email: "wcy2@gms.ndhu.edu.tw",
                    semester: 1,
                    level: "Freshman" 
                  },
                  {
                    id: "GPL1B",
                    cName: "General Physics Lab. (Ⅰ)",
                    teacher: "Sheng Yun Wu",
                    courseNo: "PHYS1010AF",
                    time: "/Fri 8/Fri 9/Fri 10",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291704/physics_lab_2_g20nbt.jpg",
                    credits: "1/0:3",
                    syllabus: "",
                    introduction: "",
                    email: "sywu@gms.ndhu.edu.tw",
                    semester: 1,
                    level: "Freshman" 
                  },
                  {
                    id: "DLD",
                    cName: "Digital Logic Design",
                    teacher: "YANG, Ching-Nung",
                    courseNo: "CSIEB0070",
                    time: "/Wed 9/Wed 10/Wed 11",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291704/digital_system_eonqne.jpg",
                    syllabus: "",
                    introduction: "",
                    email: "cnyang@gms.ndhu.edu.tw",
                    semester: 1,
                    level: "Sophomore" 
                  },
                  {
                    id: "DM",
                    cName: "Discrete Mathematics",
                    teacher: "Pao-Lien Lai",
                    courseNo: "CSIEB0080",
                    time: "/Wed 4/Wed 5/Wed 6",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1747387394/Pao_lien_lai_jjtfkx.jpg",
                    syllabus: {
                      week1: "Introduction to Discrete Mathematics",
                      week2: "Propositional logic, Truth table, Equivalence, Necessary/sufficient conditions, Normal forms, Quantifiers, Inference rules",
                      week3: "Logical Thinking (continued)",
                      week4: "Direct proofs, Proof by contraposition and contradiction",
                      week5: "Sets, Set builder notation",
                      week6: "Introduction to Graph Theory, Functions",
                      week7: "Relations",
                      week8: "Recurrence Relations, Recursive Definitions",
                      week9: "Midterm Exam",
                      week10: "NDHU Sports Day / No Classes",
                      week11: "Closed-form solutions and Induction",
                      week12: "Proof by Induction",
                      week13: "Basic Counting Techniques",
                      week14: "Selections and Arrangements",
                      week15: "Counting with Functions, Generating Functions",
                      week16: "Final Exam",
                      week17: "New Year Holiday",
                      week18: "No classes (Analytical Thinking)"
                    }
                    ,
                    introduction: "",
                    email: "baolein@gms.ndhu.edu.tw",
                    semester: 1,
                    level: "Sophomore" 
                  },
                  {
                    id: "EAEC",
                    cName: "Electric and Electronic Circuits",
                    teacher: "I-Cheng Chang",
                    courseNo: "CSIEB0090",
                    time: "/Tue 9/Tue 10/Tue 11",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291703/Programming_Ability_Certification_ey4tde.jpg",
                    syllabus:  {
                      week1: "Introduction to Electric and Electronic Circuits",
                      week2: "Mid-Autumn Festival (No class)",
                      week3: "Basic Concept & Resistive Circuit",
                      week4: "Nodal Analysis Techniques",
                      week5: "Loop Analysis Techniques",
                      week6: "Additional Analysis Techniques, Quiz",
                      week7: "Thevenin's and Norton's Theorems I",
                      week8: "Review and Quiz",
                      week9: "期中考試週 Midterm Exam",
                      week10: "Thevenin's and Norton's Theorems II",
                      week11: "Hands-on Practice",
                      week12: "Operational Amplifiers (Op Amps)",
                      week13: "Capacitance and Inductance",
                      week14: "Transient Circuits I, Quiz",
                      week15: "Transient Circuits II",
                      week16: "Basic Semiconductor Electronic Circuits",
                      week17: "期末考試週 Final Exam",
                      week18: "Flexible curriculum"
                    },
                    introduction: "",
                    email: "icchang@gms.ndhu.edu.tw",
                    semester: 1,
                    level: "Sophomore"
                  },
                  {
                    id: "DS",
                    cName: "Data Structures",
                    teacher: "HUNG-JUI CHANG",
                    courseNo: "CSIEB0100",
                    time: "/Tue 4/Tue 5/Tue 6",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291703/algorithm_pocqmw.jpg",
                    syllabus: {
                      week1: "Course Introduction: description, topics, syllabus, assignments, exams",
                      week2: "Holiday",
                      week3: "Basic Concepts and Abstract Data Types (ADT), performance analysis, complexity",
                      week4: "OOP and C++ Review, templates, data structures in C++",
                      week5: "Arrays and strings: Array ADT, Polynomial ADT, Sparse matrices, String ADT",
                      week6: "Stacks and queues: Stack/Queue ADT, Maze, Expression Evaluation",
                      week7: "Linked lists: singly, circular, doubly, applications",
                      week8: "Trees I: Tree ADT, binary trees, heaps, BSTs, selection trees",
                      week9: "期中考試週 Midterm Exam",
                      week10: "Graphs I: Graph ADT, operations, representations, implementation",
                      week11: "Graphs II: MSTs, shortest paths, transitive closure, graph search",
                      week12: "Internal Sorting I: insertion, quick, merge sort",
                      week13: "Internal Sorting II: heap, radix sort, sorting strategy",
                      week14: "External Sorting: sort-merge algorithm, applications",
                      week15: "Hashing: associative arrays, hash functions, tables, dictionaries",
                      week16: "Advanced Topics: priority queues, AVL, red-black, B/B+-trees, advanced structures",
                      week17: "期末考試週 Final Exam",
                      week18: "Special Topic: data structures and AI/ML"
                    }
                    ,
                    introduction: "",
                    email: "hjchang@gms.ndhu.edu.tw",
                    semester: 1,
                    level: "Sophomore" 
                  },
                  {
                    id: "LDS",
                    cName: "Lab of Data Structures",
                    teacher: "Shun-Bo Yang",
                    courseNo: "CSIEB0230",
                    time: "/Fri 9/Fri 10/Fri 11",
                    credits: "1/0:3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291703/computer_programmin_second_c9fhpe.jpg",
                    syllabus:  {
                      week1: "Course Introduction",
                      week2: "Introduction to C++ Object-oriented Programming",
                      week3: "Basics of Data Structures",
                      week4: "Arrays: I",
                      week5: "Arrays: II",
                      week6: "Linear Lists: I",
                      week7: "Linear Lists: II",
                      week8: "Stacks and Queues: I",
                      week9: "期中考試週 Midterm Exam",
                      week10: "Stacks and Queues: II",
                      week11: "Trees: I",
                      week12: "Trees: II",
                      week13: "Graphs: I",
                      week14: "Graphs: II",
                      week15: "Sorting: I",
                      week16: "Sorting: II",
                      week17: "Searching: I",
                      week18: "期末考試週 Final Exam"
                    }
                    ,
                    introduction: "",
                    email: "include@gms.ndhu.edu.tw",
                    semester: 1,
                    level: "Sophomore" 
                  },
                  {
                    id: "PAC",
                    cName: "Programming Ability Certification",
                    teacher: "I-Cheng Chang",
                    courseNo: "CSIEB0470",
                    time: "/Mon 1",
                    credits: "0/0",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291703/Programming_Ability_Certification_ey4tde.jpg",
                    syllabus: "",
                    introduction: "",
                    email: "hcchi@gms.ndhu.edu.tw",
                    semester: 1,
                    level: "Sophomore" 
                  },
                  {
                    id: "CO",
                    cName: "Computer Architecture",
                    teacher: "Hsin-Chou Chi",
                    courseNo: "CSIEB0160",
                    time: "/Thu 9/Thu 10/Thu 11",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291704/computer_organization_and_Introduction_to_Embedded_System_Design_gnj0ec.jpg",
                    syllabus:  {
                      week1: "Introduction",
                      week2: "Review on Instruction Set Architecture",
                      week3: "Review on Single-Cycle and Multi-Cycle Processors",
                      week4: "Pipelining",
                      week5: "Pipelining (continued)",
                      week6: "Pipelining (continued)",
                      week7: "Memory Hierarchy",
                      week8: "Cache Design",
                      week9: "Midterm Exam",
                      week10: "Cache Design (continued)",
                      week11: "Cache Design (continued)",
                      week12: "Virtual Memory",
                      week13: "Bus",
                      week14: "I/O and Interfacing",
                      week15: "I/O and Interfacing (continued)",
                      week16: "Superscalar Processors",
                      week17: "Final Exam",
                      week18: ""
                    }
                    ,
                    introduction: "",
                    email: "hcchi@gms.ndhu.edu.tw",
                    semester: 1,
                    level: "Junior" 
                  },
                  {
                    id: "OS",
                    cName: "Operating Systems",
                    teacher: "Min-Xiou Chen",
                    courseNo: "CSIEB0170",
                    time: "/Thu 4/Thu 5/Thu 6",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1747387557/mczh-tw700x700_large40856_979158994214_rgynau.png",
                    syllabus:  {
                      week1: "Introduction",
                      week2: "System Structure",
                      week3: "Process Concept",
                      week4: "Process Concept (continued)",
                      week5: "Multithreaded Programming",
                      week6: "Multithreaded Programming (continued)",
                      week7: "Process Scheduling",
                      week8: "Process Scheduling (continued)",
                      week9: "期中考試週 Midterm Exam",
                      week10: "Synchronization",
                      week11: "Synchronization (continued)",
                      week12: "Deadlocks",
                      week13: "Deadlocks (continued)",
                      week14: "Memory-Management Strategies",
                      week15: "Memory-Management Strategies (continued)",
                      week16: "Virtual-Memory Management",
                      week17: "Virtual-Memory Management (continued)",
                      week18: "期末考試週 Final Exam"
                    }
                    ,
                    introduction: "",
                    email: "mxchen@gms.ndhu.edu.tw",
                    semester: 1,
                    level: "Junior" 
                  },
                  {
                    id: "NP",
                    cName: "Network Programming",
                    teacher: "SHIOW-YANG WU",
                    courseNo: "CSIEB0220",
                    time: "/Tue 4/Tue 5/Tue 6",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1747387756/mczh-tw400x400_small221992_247710983211_lhxgfh.jpg",
                    syllabus: {
                      week1: "Introduction and syllabus",
                      week2: "Network and Web basics",
                      week3: "Python crash course",
                      week4: "Overview of Python networking, addressing, DNS",
                      week5: "Socket programming",
                      week6: "TCP/UDP, basic client-server programming",
                      week7: "Multithreading and multiprocessing",
                      week8: "Multithreaded servers and clients",
                      week9: "期中考試週 Midterm Exam",
                      week10: "Secured services with SSL/TLS",
                      week11: "HTTP/HTTPS clients and servers, Web programming",
                      week12: "Email protocols and processing",
                      week13: "Telnet and SSH",
                      week14: "FTP and network file handling",
                      week15: "XML and JSON data exchange",
                      week16: "Audio/Video streaming over the net",
                      week17: "Advanced services: Cloud, IoTs, AI/ML, Big Data",
                      week18: "期末考試週 Final Exam"
                    }
                    ,
                    introduction: "",
                    email: "showyang@gms.ndhu.edu.tw",
                    semester: 1,
                    level: "Junior" 
                  },
                  {
                    id: "UP1",
                    cName: "Undergraduate Project I",
                    teacher: "",
                    courseNo: "CSIEB0320",
                    time: "/Thu 1/Fri 1",
                    credits: "1/2",
                    photo: "",
                    syllabus: "",
                    introduction: "",
                    email: "",
                    semester: 1,
                    level: "Junior" 
                  },
                  {
                    id: "ITDSP",
                    cName: "Introduction to Digital Signal Processing",
                    teacher: "LIN, SHIN FENG",
                    courseNo: "CSIEB0330",
                    time: "/Mon 9/Mon 10/Mon 11",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291705/Linear_algebra_tbvg4a.jpg",
                    syllabus:  {
                      week1: "Syllabus and Chapter 1 Introduction",
                      week2: "Chapter 2 Sinusoids",
                      week3: "Chapter 2 (cont.) and Chapter 3 Spectrum Representation",
                      week4: "Chapter 3 Spectrum Representation",
                      week5: "Chapter 4 Sampling and Aliasing",
                      week6: "Chapter 4 Sampling and Aliasing (cont.)",
                      week7: "Chapter 5 FIR Filters",
                      week8: "Chapter 5 FIR Filters (cont.)",
                      week9: "期中考試週 Midterm Exam (Ch.2–4)",
                      week10: "Midterm Review + Chapter 6 Frequency Response of FIR Filters",
                      week11: "Chapter 6 and Chapter 9 Z-Transforms",
                      week12: "Chapter 9 Z-Transforms",
                      week13: "Chapter 10 IIR Filters",
                      week14: "Chapter 10 IIR Filters (cont.)",
                      week15: "Review",
                      week16: "Review (continued)",
                      week17: "期末考試週 Final Exam (Ch.5–6, 9–10)",
                      week18: "補充教學 Supplement"
                    }
                    ,
                    introduction: "",
                    email: "david@gms.ndhu.edu.tw",
                    semester: 1,
                    level: "Junior" 
                  },
                  {
                    id: "PMAFMP",
                    cName: "Programming Multimedia APPs for Mobile Platforms",
                    teacher: "Shou-Chih Lo",
                    courseNo: "CSIEB0400",
                    time: "/Mon 9/Mon 10/Mon 11",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291703/Programming_Ability_Certification_ey4tde.jpg",
                    syllabus: {
                      week1: "Course Introduction",
                      week2: "Swift Programming Language",
                      week3: "SwiftUI: Views and Modifiers",
                      week4: "Compose Views",
                      week5: "State, Binding, and MVVM",
                      week6: "Input Interactions",
                      week7: "Form/List and Navigation",
                      week8: "Operations on List View",
                      week9: "期中考試週 Midterm Exam",
                      week10: "Lazy layout and TabView",
                      week11: "Gesture and Animation",
                      week12: "Core Data / SwiftData",
                      week13: "Work with Internet Data",
                      week14: "Concurrency and Combine",
                      week15: "App Practices",
                      week16: "Project Demo",
                      week17: "Project Demo",
                      week18: "No class (Feedback & Q&A)"
                    }
                    ,
                    introduction: "",
                    email: "yung@gms.ndhu.edu.tw",
                    semester: 1,
                    level: "Junior" 
                  },
                  {
                    id: "ITGA",
                    cName: "Introduction to generative AI",
                    teacher: "Wen-Chieh Fang",
                    courseNo: "CSIEB0530",
                    time: "/Thu 4/Thu 5/Thu 6",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291706/introduction_to_generative_AI_jknf1z.jpg",
                    syllabus:  {
                      week1: "Course introduction",
                      week2: "Generative Modeling",
                      week3: "Deep Learning",
                      week4: "Variational Autoencoders",
                      week5: "Holiday – National Day (No Lecture)",
                      week6: "Generative Adversarial Networks",
                      week7: "Advanced GANs",
                      week8: "Diffusion Models",
                      week9: "期中考試週 Midterm Exam",
                      week10: "Transformers",
                      week11: "Introduction to Large Language Models",
                      week12: "Prompt Engineering",
                      week13: "Fine-Tuning Large Language Models",
                      week14: "Embedding LLMs within Your Applications",
                      week15: "Multimodal Models",
                      week16: "Multimodal Models (continued)",
                      week17: "期末考試週 Final Exam",
                      week18: "Alternative curriculum"
                    },
                    introduction: "",
                    email: "wcfang@gms.ndhu.edu.tw",
                    semester: 1,
                    level: "Junior" 
                  },
                  //semester 2
                  {
                    id: "SL2",
                    cName: "Service Learning (ⅠI)",
                    teacher: "YUNG, CHUNG/Shou-Chih Lo",
                    courseNo: "SL__1836AB",
                    time: "Fri 12",
                    credits: "1/1",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291703/Programming_Ability_Certification_ey4tde.jpg",
                    syllabus: "",
                    email: "yung@gms.ndhu.edu.tw",
                    semester: 2,
                    level: "freshmen"
                  },
                  {
                    id: "PE2",
                    cName: "Physical Education (II)",
                    teacher: "SHlEH,DER-TSAN",
                    courseNo: "YY__1010AG",
                    time: "Mon 4/Mon 5",
                    credits: "1/2",
                    photo: "",
                    syllabus: "",
                    email: "ginny8789@yahoo.com.tw",
                    semester: 2,
                    level: "freshmen"
                  },
                  {
                    id: "CALC2",
                    cName: "Calculus (II)",
                    teacher: "TSE, SZE MAN",
                    courseNo: "AM__1080AG",
                    time: "Mon 8/Tue 8/Tue 9",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291703/Calculus_eebaek.jpg",
                    syllabus: {
                      week1: "Integration by parts. Trigonometric integrals and substitutions",
                      week2: "Method of partial fractions",
                      week3: "Improper integrals",
                      week4: "Infinite sequences and series",
                      week5: "Integral test. Comparison test",
                      week6: "Alternating series. Absolute convergence. Ratio and root tests",
                      week7: "Power series. Taylor and Maclaurin series",
                      week8: "Taylor and Maclaurin series",
                      week9: "期中考試週 Midterm Exam",
                      week10: "Curves defined by parametric equations. Calculus with parametric curves",
                      week11: "Polar coordinates. Areas and arclengths in polar coordinates",
                      week12: "Vectors. Dot and cross products. Equations of lines and planes",
                      week13: "Functions of several variables. Limits and continuity",
                      week14: "Partial derivatives. Chain rule. Directional derivatives",
                      week15: "Gradient vector. Tangent planes and linear approximations",
                      week16: "Double integrals. Iterated integrals. Polar coordinates",
                      week17: "Applications. Change of variable in multiple integrals",
                      week18: "期末考試週 Final Exam"
                    },
                    introduction: "",
                    email: "tse@ndhu.edu.tw",
                    semester: 2,
                    level: "freshmen"
                  },
                  {
                    id: "ICP2A",
                    cName: "Introduction to Computer Programming（Ⅱ）",
                    teacher: "Tao-Ku Chang",
                    courseNo: "CSIEB004AA",
                    time: "Wed 9/Wed 10/Wed 11",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291704/computer_programming_dkik2g.jpg",
                    syllabus: {
                      week1: "C++ Basics",
                      week2: "Console Input/Output",
                      week3: "Parameters and Overloading",
                      week4: "Strings",
                      week5: "Introduction to Classes and Objects",
                      week6: "Arrays and Vectors",
                      week7: "Inheritance",
                      week8: "Polymorphism",
                      week9: "Midterm Exam",
                      week10: "Interfaces",
                      week11: "Files and Streams",
                      week12: "Structure",
                      week13: "Operator Overloading, Friends, and Reference",
                      week14: "Linked Data Structures",
                      week15: "Templates",
                      week16: "Exception Handling, Standard Template Library",
                      week17: "Final Exam",
                      week18: "Make-Up Test"
                    },
                    introduction: "",
                    email: "tkchang@gms.ndhu.edu.tw",
                    semester: 2,
                    level: "freshmen"
                  },
                  {
                    id: "ICP2B",
                    cName: "Introduction to Computer Programming（Ⅱ）",
                    teacher: "Shun-Bo Yang",
                    courseNo: "CSIEB004AB",
                    time: "Wed 9/Wed 10/Wed 11",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291703/computer_programmin_second_c9fhpe.jpg",
                    syllabus: {
                      week1: "Introduce of the rule of this course, Review of C language",
                      week2: "What is OO programming, difference between functional programming and OO programming, Namespace, Class and Object, Declare a class, Member in class, Access modifier",
                      week3: "Pointer and object, Constructor and destructor, New and delete, New and malloc",
                      week4: "References, Polymorphism",
                      week5: "Cin and cout, Static member in class",
                      week6: "String, Stringstream, Ifstream and ofstream",
                      week7: "Inheritance, Different access modifiers in base class affecting derived class, Constructor and destructor in derived class",
                      week8: "Multiple inheritance",
                      week9: "Midterm Exam",
                      week10: "Operator overloading",
                      week11: "Foreach loop, Iterator",
                      week12: "Virtual function, Pure virtual function and abstract class",
                      week13: "Friend class, Const",
                      week14: "Lambda expression",
                      week15: "Template and concept",
                      week16: "STL container",
                      week17: "Overall review",
                      week18: "Final Exam"
                    },
                    introduction: "",
                    email: "include@gms.ndhu.edu.tw",
                    semester: 2,
                    level: "freshmen"
                  },
                  {
                    id: "LOP2",
                    cName: "Lab of Programming （Ⅱ）",
                    teacher: "Ching-Fu, Lin",
                    courseNo: "CSIEB0050",
                    time: "Thu 9/Thu 10/Thu 11",
                    credits: "1/0:3",
                    photo: "",
                    syllabus: "",
                    introduction: "",
                    email: "",
                    semester: 2,
                    level: "freshmen"
                  },
                  {
                    id: "LA",
                    cName: "Linear Algebra",
                    teacher: "LIN, SHIN FENG",
                    courseNo: "CSIEB0060",
                    time: "Mon 9/Mon 10/Mon 11",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291705/Linear_algebra_tbvg4a.jpg",
                    syllabus: {
                      week1: "Syllabus & Chap. 1 Systems of Linear Equations",
                      week2: "Chapter 1.1~ Chap. 1.2",
                      week3: "Chapter 1.2~ Chap. 1.3",
                      week4: "Chapter 2 Vector Spaces~ Chap. 2.2",
                      week5: "Chapter 2.2~ Chap. 2.3",
                      week6: "Chap. 2.4~ Chap. 3.1 Matrices",
                      week7: "Chapter 3.2 Matrix Inverse",
                      week8: "Vacation",
                      week9: "Midterm Exam (Chap 1 ~ Chap 3)",
                      week10: "Midterm Exam Discussion & Chap. 4.1~ Chapter 4.2",
                      week11: "Chapter 4.2 ~ Chapter 5.1 Column, Row, and Null Spaces",
                      week12: "Chapter 5.2~ Chap. 5.3",
                      week13: "Chapter 6 Eigensystems",
                      week14: "Chapter 7.1 Inner-Product Spaces",
                      week15: "Chapter 7.2 Orthogonality",
                      week16: "Review",
                      week17: "Final Exam (Chap 4 ~ Chap 7)",
                      week18: "Additional topics"
                    },
                    introduction: "",
                    email: "david@gms.ndhu.edu.tw",
                    semester: 2,
                    level: "freshmen"
                  },
                  {
                    id: "GP2",
                    cName: "General Physics(II)",
                    teacher: "Chia-Liang Cheng",
                    courseNo: "PHYS1020AC",
                    time: "Tue 6/Thu 5/Thu 6",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291706/physics_uplnxu.jpg",
                    syllabus: {
                      week1: "Heat engines, entropy, and the second law of thermodynamics",
                      week2: "Electric fields",
                      week3: "Gauss's Law, Electric potential",
                      week4: "Capacitance and Dielectrics",
                      week5: "Current and Resistance, Direct Current Circuit",
                      week6: "Direct Current Circuit",
                      week7: "Magnetic fields",
                      week8: "Source of the Magnetic fields",
                      week9: "Midterm Exam, Faraday's Law",
                      week10: "Inductance",
                      week11: "Alternating Current Circuits",
                      week12: "Alternating Current Circuits",
                      week13: "Electromagnetic Waves",
                      week14: "Electromagnetic Waves",
                      week15: "Interference of Light",
                      week16: "Interference of Light Waves",
                      week17: "Diffraction Patterns and Polarizations",
                      week18: "Final Exam"
                    },
                    introduction: "",
                    email: "clcheng@gms.ndhu.edu.tw",
                    semester: 2,
                    level: "freshmen"
                  },
                  {
                    id: "GPL2E",
                    cName: "General Physics Lab. (II)",
                    teacher: "Wang-Chi Vincent Yeh",
                    courseNo: "PHYS1030AE",
                    time: "Fri 8/Fri 9/Fri 10",
                    credits: "1/0:3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291704/physics_lab_1_z2qtpa.jpg",
                    syllabus: {
                      week1: "Course introduction",
                      week2: "Course introduction",
                      week3: "Oscilloscope (1) / Electric Field",
                      week4: "Oscilloscope (1) / Electric Field",
                      week5: "Electric Potential / Helmholtz coil",
                      week6: "Electric Potential / Helmholtz coil",
                      week7: "No labs",
                      week8: "Basic circuits / Oscilloscope (2)",
                      week9: "Midterm Exam",
                      week10: "Basic circuits / Oscilloscope (2)",
                      week11: "Magnetism / Faraday Experiment",
                      week12: "Magnetism / Faraday Experiment",
                      week13: "No labs",
                      week14: "Optics / Hydrogen spectrum and Planck's constant",
                      week15: "Optics / Hydrogen spectrum and Planck's constant",
                      week16: "Review",
                      week17: "Final Exam",
                      week18: "No labs"
                    },
                    introduction: "",
                    email: "wcy2@gms.ndhu.edu.tw",
                    semester: 2,
                    level: "freshmen"
                  },
                  {
                    id: "GPL2F",
                    cName: "General Physics Lab. (II)",
                    teacher: "Sheng Yun Wu",
                    courseNo: "PHYS1030AF",
                    time: "Fri 8/Fri 9/Fri 10",
                    credits: "1/0:3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291704/physics_lab_2_g20nbt.jpg",
                    syllabus: {
                      week1: "GPE class Introduction",
                      week2: "Advanced 3D Print",
                      week3: "Advanced AIoTs",
                      week4: "Facility maintenance",
                      week5: "2D Collision Phys. Exp. Virtualizing Course!",
                      week6: "AIoTs Double slits scattering",
                      week7: "AIoTs Mie Scattering",
                      week8: "Facility maintenance",
                      week9: "Midterm Exam",
                      week10: "Phase & Phase Transition Phy. Exp. Virtualizing Course!",
                      week11: "AIoTs Torsion Pendulum",
                      week12: "AIoTs Acoustic Levitation",
                      week13: "Facility maintenance",
                      week14: "AIoTs RLC Circuit",
                      week15: "AIoTs Bio-Savart Law",
                      week16: "Experiment Review",
                      week17: "Final Practical Exam",
                      week18: "Final Exam and Make-up Exam"
                    },
                    introduction: "",
                    email: "sywu@gms.ndhu.edu.tw",
                    semester: 2,
                    level: "freshmen"
                  },
                  {
                    id: "DSL",
                    cName: "Digital Systems Laboratory",
                    teacher: "YANG, CHING-NUNG",
                    courseNo: "CSIEB0110",
                    time: "Wed 4/Wed 5/Wed 6",
                    credits: "1/0:3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291704/digital_system_eonqne.jpg",
                    syllabus: "",
                    email: "cnyang@gms.ndhu.edu.tw",
                    semester: 2,
                    level: "sophomore"
                  },
                  {
                    id: "ADA",
                    cName: "Algorithm Design and Analysis",
                    teacher: "HUNG-JUI CHANG",
                    courseNo: "CSIEB0120",
                    time: "Thu 9/Thu 10/Thu 11",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291703/algorithm_pocqmw.jpg",
                    syllabus: {
                      week1: "Introduction to this course (Syllabus)",
                      week2: "Algorithm design and analysis",
                      week3: "Divide-and-Conquer",
                      week4: "Divide-and-Conquer",
                      week5: "Dynamic programming",
                      week6: "Dynamic programming",
                      week7: "Greedy approach",
                      week8: "Holiday",
                      week9: "Midterm Exam",
                      week10: "Backtracking",
                      week11: "Backtracking",
                      week12: "Graph algorithms",
                      week13: "Graph algorithms",
                      week14: "Computational complexity and Intractability",
                      week15: "Computational complexity and Intractability",
                      week16: "Computational complexity and Intractability",
                      week17: "Final Exam",
                      week18: "Final Exam Review"
                    },
                    introduction: "",
                    email: "hjchang@gms.ndhu.edu.tw",
                    semester: 2,
                    level: "sophomore"
                  },
                  {
                    id: "PROB",
                    cName: "Probability",
                    teacher: "Lee, Guanling",
                    courseNo: "CSIEB0130",
                    time: "Thu 4/Thu 5/Thu 6",
                    credits: "3/3",
                    photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291705/probability_tf4njp.jpg",
                    syllabus: {
                      week1: `Introduction`,
                      week2: `Descriptive statistics`,
                      week3: `Probability-basic concept(I)`,
                      week4: `Probability-basic concept(II)`,
                      week5: `Discrete random variables and probability distributions(I)`,
                      week6: `Exam 1`,
                        week7: `holiday`,
                        week8: `Discrete random variables and probability distributions(II)`,
                        week9: `Continuous random variables(I)`,
                        week10: `10 Continuous random variables(II)`,
                        week11: `11 Joint probability distributions(I)`,
                        week12: `Exam2`,
                        week13: `Joint probability distributions(II)`,
                        week14: `The distribution of the sample mean`,
                        week15: `General concept of point estimation`,
                        week16: `Methods of point estimation`,
                        week17: `Exam3`,
                        week18: `consultation`
                      },
                      introduction: "",
                      email:"guanling@gms.ndhu.edu.tw",
                      semester: 2,
                      level: "sophomore"
                    },
                    {
                      id: "CO",
                      cName: "Computer Organization",
                      teacher: "Hsin-Chou Chi",
                      courseNo: "CSIEB0140",
                      time: "Wed 9/Wed 10/Wed 11",
                      credits: "3/3",
                      photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291704/computer_organization_and_Introduction_to_Embedded_System_Design_gnj0ec.jpg",
                      syllabus: {
                        week1: "Introduction",
                        week2: "Holiday (no class)",
                        week3: "Computer Abstractions and Technology",
                        week4: "MIPS Instruction Set and Assembly Language",
                        week5: "MIPS Instruction Set and Assembly Language",
                        week6: "MIPS Instruction Set and Assembly Language",
                        week7: "Arithmetic for Computers",
                        week8: "Arithmetic for Computers",
                        week9: "Midterm Exam",
                        week10: "Single-cycle Machines",
                        week11: "Multi-cycle Machines",
                        week12: "Pipelined Processors",
                        week13: "Pipelined Processors",
                        week14: "Pipelined Processors",
                        week15: "Memory Hierarchy",
                        week16: "Memory Hierarchy",
                        week17: "Final Exam",
                        week18: ""
                      },
                      introduction: "",
                      email:" hcchi@gms.ndhu.edu.tw",
                      semester: 2,
                      level: "sophomore"

                    },
                    {
                      id: "LAD",
                      cName: "Lab of Algorithm Design",
                      teacher: "Hsuan-Han Chang",
                      courseNo: "CSIEB0180",
                      time: "Fri 9/Fri 10/Fri 11",
                      credits: "1/0:3",
                      photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291704/lab_of_algorithm_pqsryg.jpg",
                      syllabus:"",
                      introduction: "",
                      email:"wpyang@gms.ndhu.edu.tw",
                      semester: 2,
                      level: "sophomore"

                    },
                    {
                      id: "PAC",
                      cName: "Programming Ability Certification",
                      teacher: "I-Cheng Chang",
                      courseNo: "CSIEB0470",
                      time: "Mon 1",
                      credits: "0/0",
                      photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291703/Programming_Ability_Certification_ey4tde.jpg",
                      syllabus:"",
                      introduction: "",
                      email:"icchang@gms.ndhu.edu.tw ",
                      semester: 2,
                      level: "core courses"

                    },
                    {
                      id: "PLC",
                      cName: "Programming Languages and Compilers",
                      teacher: "YUNG, CHUNG",
                      courseNo: "CSIEB0480",
                      time: "Tue 4/Tue 5/Tue 6",
                      credits: "3/3",
                      photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291703/Programming_Languages_and_Compilers_uefvri.jpg",
                      syllabus: {
                        week1: "Course Overview",
                        week2: "Chapters 1 & 2 - Introduction, A Simple Compiler",
                        week3: "Chapter 3 (3, 4.2) - Scanning",
                        week4: "Chapters 4 & 5 (4.4) - Grammars and Top-Down Parsing",
                        week5: "Chapter 6 (4.5) - Bottom-Up Parsing",
                        week6: "Chapter 6 - LR Parsing",
                        week7: "No Meeting (Ching Ming Festival)",
                        week8: "Lab Session 1 - Programming Assignment #1",
                        week9: "Midterm Exam",
                        week10: "Lab Session 2 - Programming Assignment #1 (bonus due)",
                        week11: "Chapter 1 - Introduction to Programming Languages",
                        week12: "Chapter 2 - Evolution of Programming Languages",
                        week13: "Chapter 5 - Names, Bindings, and Scopes",
                        week14: "Chapter 6 - Data Types",
                        week15: "Lab Session 3 - Programming Assignment #2 (#1 due)",
                        week16: "Final Exam",
                        week17: "Lab Session 4 - Programming Assignment #2 (bonus due)",
                        week18: "Remote (Optional) Late Hand-ins (#2 due)"
                      },
                      introduction: "",
                      email:"yung@gms.ndhu.edu.tw",
                      semester: 2,
                      level: "junior"

                    },
                    {
                      id: "FLA",
                      cName: "Formal Languages and Automata",
                      teacher: "Shou-Chih Lo",
                      courseNo: "CSIEB0190",
                      time: "Tue 9/Tue 10/Tue 11",
                      credits: "3/3",
                      photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291705/Formal_Languages_and_Automata_xa2vqf.jpg",
                      syllabus:{
                        week1: `Chapter 1 The theory of computation`,
                        week2: `Chapter 2 Finite automata`,
                        week3: `Chapter 2 Finite automata`,
                        week4: `Chapter 3 Regular languages and regular grammars`,
                        week5: `Chapter 3 Regular languages and regular grammars`,
                        week6: `Chapter 4 Properties of regular languages`,
                        week7: `Chapter 5 Context-free languages`,
                        week8: `Review test`,
                        week9: `Midterm Exam`,
                        week10: `Chapter 5 Context-free languages`,
                        week11: `Chapter 6 Normal forms`,
                        week12: `Chapter 7 Pushdown automata`,
                        week13: `Chapter 7 Pushdown automata`,
                        week14: `Chapter 8 Properties of context-free languages`,
                        week15: `Chapter 9-10 Turing machines`,
                        week16: `Chapter 11-14 Computation and Complexity`,
                        week17: `Final Exam`,
                        week18: `No class`,
                        semester: 2,
                      },
                      introduction: "https://docs.google.com/presentation/d/1jYypSUUdx0UqBAsOPXM_WDqGqqvMrV4K/edit?usp=drive_link&ouid=105634988998997785849&rtpof=true&sd=true",
                      email:"sclo@gms.ndhu.edu.tw",
                      semester: 2,
                      level: "junior"

                    },
                    {
                      id: "DBS",
                      cName: "Database Systems",
                      teacher: "SHIOW-YANG WU",
                      courseNo: "CSIEB0290",
                      time: "Thu 4/Thu 5/Thu 6",
                      credits: "3/3",
                      photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291704/Database_Systems_sovgla.jpg",
                      syllabus: {
                        week1: `Course introduction (課程介紹)
                . Course description and learning objectives (課程描述與學習目標)
                . Textbooks and resources (教科書與參考資源)
                . Course syllabus (課程大綱)
                . Course requirements (課程要求)
                . Grading policy (評量策略)`,
                        week2: `Introduction (資料庫系統簡介)
                . Basic concepts (資料庫系統基本概念)
                . History of database systems (資料庫系統發展歷史回顧)
                . Applications of database systems (資料庫系統應用)`,
                        week3: `Relational models and languages I (關聯式模型和語言1)
                . Relational data model and constraints (關聯式資料模型與約束條件)
                . Relational database architecture (關聯式資料庫架構)
                . Relational algebra (關聯式代數)
                . Relational calculus (關聯式計算)`,
                        week4: `Relational models and languages II (關聯式模型和語言2)
                . Basic SQL (關聯式查詢語言SQL基礎)
                . Intermediate SQL (中級SQL)
                . Advanced SQL (進階SQL)`,
                        week5: `Conceptual modeling and database design I (概念模式化與資料庫設計1)
                . Conceptual modeling (概念模式化)
                . Database design process (資料庫設計程序)
                . Entity Relationship data modeling (ER資料模型)`,
                        week6: `Conceptual modeling and database design II (概念模式化與資料庫設計 2)
                . Enhanced Entity Relationship data modeling (EER資料模型)
                . ER/EER to relational database mapping (從ER/EER模型到關聯式資料庫 設計)`,
                        week7: `Relational database design I (關聯式資料庫設計1)
                . RDB design concepts (關聯式資料庫設計概念)
                . Functional dependencies (函數相依)
                . Normalization (正規畫)`,
                        week8: `Relational database design II (關聯式資料庫設計2)
                . Further normalization (進階正規畫)
                . Design algorithms (設計演算法)
                . Application design (關聯式資料庫應用設計)`,
                        week9: `Midterm Exam 期中考試週`,
                        week10: `Database application design (資料庫應用設計)
                . Database application architecture (資料庫應用架構)
                . Introduction to open source DBMS: MySQL and PostgreSQL (開放式資
                料庫管理系統簡介: MySQL 與 PostgreSQL)
                . Database application design: Python/PHP + SQLite/MySQL/PostgreSQL
                (資料庫應用設計: Python/PHP + SQLiteMySQL/PostgreSQL)`,
                        week11: `Big data and analytics I (大數據與資料分析1)
                . Introduction to big data (大數據簡介)
                . Big data storage (大數據儲存系統)
                . NoSQL, NewSQL and Distributed SQL databases (NoSQL, NewSQL與
                Distributed SQL資料庫)`,
                        week12: `Big data and analytics II (大數據與資料分析2)
                . Big data processing and cloud database (大數據處理與雲端資料庫)
                . Big data analytics (大數據分析)`,
                        week13: `DBMS technologies I (資料庫管理系統技術1)
                . DBMS architecture (資料庫管理系統架構)
                . Storage structure and system (儲存架構與系統)
                . Indexing methods (索引方法)`,
                        week14: `DBMS technologies II (資料庫管理系統技術2)
                . Query processing (查詢處理)
                . Query optimization (查詢最佳化)`,
                        week15: `Transaction management (交易管理)
                . Transaction concepts and system architecture (交易概念與系統架構)
                . Transaction processing (交易處理)
                . Concurrency control (並行控制)
                . Recovery (交易回復)`,
                        week16: `Advanced topics(進階議題)
                . Database technologies for AI/ML (資料庫技術在人工智慧與機器學習上
                的應用)
                . Internet of Things(IoT) and streaming data processing (物聯網與串
                流資料處理)
                . Parallel and distributed databases (平行與分散式資料庫)
                . Object-oriented databases (物件導向資料庫)
                . Semi-structured data and XML (半結構化資料與XML)
                . Mobile data management (行動資料管理)
                . Multimedia databases (多媒體資料庫)
                . Blockchain databases (區塊鏈資料庫)`,
                        week17: `Final Exam 期末考試週`,
                        week18: `Term Project Review & Demo`
                    },
                    introduction: "https://drive.google.com/file/d/1E7sObH2dgXsVkk-_b6AxX2fqasoh3lVt/view?usp=drive_link",
                    email:"showyang@gms.ndhu.edu.tw",
                    semester: 2,
                    level: "junior"

                    },
                    {
                      id: "IML",
                      cName: "Introductory Machine Learning",
                      teacher: "Wen-Chieh Fang",
                      courseNo: "CSIEB0300",
                      time: "Thu 9/Thu 10/Thu 11",
                      credits: "3/3",
                      photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291704/Introductory_Machine_Learning_and_Scalable_Computing_Foundation_and_Practice_vguazx.jpg",
                      syllabus:{
                        week1: `Course introduction`,
                        week2: `2 AI brief history and introduction to machine learning`,
                        week3: `Basic techniques for machine learning`,
                        week4: `Feature engineering`,
                        week5: `Feature engineering`,
                        week6: `Classification`,
                        week7: `Spring break (Holiday)`,
                        week8: `Regression`,
                        week9: `期中考試週 Midterm Exam`,
                        week10: `Clustering`,
                        week11: `Machine learning algorithms`,
                        week12: `Combining multiple learners`,
                        week13: `Design and analysis of ML experiments`,
                        week14: `Neural networks`,
                        week15: `Deep learning introduction`,
                        week16: `Deep learning models and applications`,
                        week17: `期末考試週 Final Exam`,
                        week18: `Alternative curriculum`
                      },
                      introduction: "",
                      email:"wcfang@gms.ndhu.edu.tw",
                      semester: 2,
                      level: "senior"

                    },
                    {
                      id: "UP2",
                      cName: "Undergraduate Project（II）",
                      teacher: "Wen-Chieh Fang",
                      courseNo: "CSIEB0360",
                      time: "Thu 1/Fri 1",
                      credits: "1/2",
                      photo: "",
                      introduction: "",
                      email:"",
                      semester: 2,
                      level: "senior"

                    },
                    {
                      id: "IESD",
                      cName: "Introduction to Embedded System Design",
                      teacher: "Hsin-Chou Chi",
                      courseNo: "CSIEB0380",
                      time: "Mon 9/Mon 10/Mon 11",
                      credits: "3/3",
                      photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291704/computer_organization_and_Introduction_to_Embedded_System_Design_gnj0ec.jpg",
                      syllabus: {
                        week1: "Introduction",
                        week2: "Design and Implementation of Embedded Systems",
                        week3: "ARM Instruction Set & Programming",
                        week4: "ARM Instruction Set & Programming",
                        week5: "Platform and I/O Interfacing",
                        week6: "LED Control",
                        week7: "Holiday (no class)",
                        week8: "Dot Matrix Control",
                        week9: "Midterm Exam",
                        week10: "Keyboard Scanning",
                        week11: "LCD Display",
                        week12: "Timer",
                        week13: "Term Project Proposal",
                        week14: "Embedded Operating Systems",
                        week15: "Real-time Operating Systems",
                        week16: "Final Exam",
                        week17: "Term Project Presentation & Demo",
                        week18: "No Class"
                      },
                      introduction: "",
                      email:"hcchi@gms.ndhu.edu.tw",
                      semester: 2,
                      
                    },
                    {
                      id: "SCFP",
                      cName: "Scalable Computing: Foundation and Practice",
                      teacher: "Wen-Chieh Fang",
                      courseNo: "CSIEB0540",
                      time: "Fri 4/Fri 5/Fri 6",
                      credits: "3/3",
                      photo: "https://res.cloudinary.com/dxbbrmz6z/image/upload/v1742291704/Introductory_Machine_Learning_and_Scalable_Computing_Foundation_and_Practice_vguazx.jpg",
                      syllabus: {
                        week1: "Course introduction",
                        week2: "Peace Memorial Day (Holiday)",
                        week3: "Scalable computing and big data overview",
                        week4: "Scalable computing and big data overview",
                        week5: "Large-scale data visualization",
                        week6: "Map and parallel computing",
                        week7: "Spring Break",
                        week8: "Function pipelines",
                        week9: "Midterm Exam",
                        week10: "Lazy workflows",
                        week11: "Introduction to Hadoop part 1",
                        week12: "Introduction to Hadoop part 2",
                        week13: "Introduction to Spark part 1",
                        week14: "Introduction to Spark part 2",
                        week15: "Dragon Boat Festival (Holiday)",
                        week16: "Scalable computing libraries introduction",
                        week17: "Final Exam",
                        week18: "Alternative curriculum"
                      },
                      introduction: "https://drive.google.com/file/d/10rJwNAHMk1KhGFgG5oySiH19CA-Xhou1/view?usp=drive_link", 
                      email:"wcfang@gms.ndhu.edu.tw",
                      semester: 2,   
                       level: "junior"

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
  
