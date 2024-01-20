import { EmpireDto } from "../dtos/empire.dto";

export const empiresData: EmpireDto[] = [
  {
    id: "imperium-of-man",
    name: "Imperium of Man",
    planetsUnderControl: 1_000_000,
    branches: [
      {
        id: "space-marines",
        name: "Space Marines",
        images: [
          {
            title: "Lead the way",
            url: "/imperium-of-man/space-marines/1.jpg",
          },
          {
            title: "In the fight with tyranids",
            url: "/imperium-of-man/space-marines/2.jpg",
          },
          {
            title: "Crimson Fist",
            url: "/imperium-of-man/space-marines/3.jpg",
          },
        ],
        details: {
          thumbnailUrl: "/imperium-of-man/space-marines/thumbnail.jpg",
          type: "Heavy infantry",
          quote: "For the Emperor!",
          description: `The Space Marines or Adeptus Astartes are foremost amongst the defenders of Humanity, the greatest of the Emperor of Mankind's warriors. 
            They are barely Human at all, but superhuman; 
            having been made superior in all respects to a normal man by a harsh regime of genetic modification, psycho-conditioning and rigorous training.`,
        },
      },
      {
        id: "imperial-guard",
        name: "Imperial Guard",
        images: [
          {
            title: "Holding the line",
            url: "/imperium-of-man/imperial-guard/1.jpg",
          },
          {
            title: "Death korps of krieg",
            url: "/imperium-of-man/imperial-guard/2.jpg",
          },
          {
            title: "Ordinary man and women",
            url: "/imperium-of-man/imperial-guard/3.jpg",
          },
        ],
        details: {
          thumbnailUrl: "/imperium-of-man/imperial-guard/thumbnail.jpg",
          type: "Infantry, Armored Core and Air support",
          quote:
            "What I cannot crush with words I will crush with the tanks of the Imperial Guard!",
          description: `The Astra Militarum, also known as the Imperial Guard in colloquial Low Gothic, 
          is the largest coherent fighting force in the galaxy and serves as the Imperium of Man's primary military force and first line of defense 
          from the myriad threats which endanger the existence of the Human race in the 41st Millennium.`,
        },
      },
      {
        id: "imperial-navy",
        name: "Imperial Navy",
        images: [
          {
            title: "The armada",
            url: "/imperium-of-man/imperial-navy/1.jpg",
          },
          {
            title: "Imperator Somnium in action",
            url: "/imperium-of-man/imperial-navy/2.jpg",
          },
          {
            title: "Battlefleet Gothic",
            url: "/imperium-of-man/imperial-navy/3.jpg",
          },
        ],
        details: {
          thumbnailUrl: "/imperium-of-man/imperial-navy/thumbnail.jpg",
          type: "Navy",
          quote:
            "Tremble before the majesty of the Emprah, for we all walk in His immortal shadow. And Imperium's crushing fist! For our mission in the cold, unforgiving space. We are the Imperial Navy!",
          description: `While the Astra Militarum (Imperial Guard) represents the Imperium's ground forces, 
          the Navis Imperialis is responsible for the fleets of starships that maintain order between the stars and planets in the Imperium, 
          for all space and air support provided to the infantry of the Astra Militarum through its Aeronautica Imperialis branch, 
          and for transporting those guardsmen across the galaxy to the Imperium's myriad warzones.`,
        },
      },
      {
        id: "adeptus-custodes",
        name: "Adeptus Custodes",
        images: [
          {
            title: "Emprors chosen",
            url: "/imperium-of-man/adeptus-custodes/1.png",
          },
          {
            title: "Guardians",
            url: "/imperium-of-man/adeptus-custodes/2.jpg",
          },
          {
            title: "Demigods",
            url: "/imperium-of-man/adeptus-custodes/3.jpg",
          },
        ],
        details: {
          thumbnailUrl: "/imperium-of-man/adeptus-custodes/thumbnail.jpg",
          type: "Bodyguards",
          quote: "I am bound by no authority but the Throne.",
          description: `The Adeptus Custodes, known as the Legio Custodes during the era of the Great Crusade and Horus Heresy, and colloquially as the "Ten Thousand," 
          is the Imperial adepta responsible for protecting the Imperial Palace and the physical body of the Emperor of Mankind, 
          as well as serving as His most important emissaries, His companions, and the keepers of His many secrets. 
          The Custodes is an elite cadre of genetically-engineered transhuman warriors who are even more potent in combat than the Adeptus Astartes. 
          They are to the Space Marines as the Emperor is to His primarchs, and it is rumoured that each was created by the Master of Mankind personally. 
          His might permeates them, burns in their eyes and flows through their veins as surely as their blood. 
          As such, the Adeptus Custodes are widely regarded as the deadliest warriors in the galaxy, Human or otherwise.`,
        },
      },
      {
        id: "sisters-of-battle",
        name: "Sisters of Battle",
        images: [
          {
            title: "Casting the emperors light",
            url: "/imperium-of-man/sisters-of-battle/1.jpg",
          },
          {
            title: "Uncorrupted",
            url: "/imperium-of-man/sisters-of-battle/2.jpg",
          },
          {
            title: "Living saint",
            url: "/imperium-of-man/sisters-of-battle/3.jpg",
          },
        ],
        details: {
          thumbnailUrl: "/imperium-of-man/sisters-of-battle/thumbnail.jpg",
          type: "Infantry/Missionary",
          quote:
            "Heretics crave the cleansing fire of absolution. They need not fear, for we shall deliver it to them.",
          description: `The Adepta Sororitas, colloquially called the "Sisterhood," 
          whose military arm is also known as the Sisters of Battle and formerly as the Daughters of the Emperor, 
          are an all-female division of the Imperium of Man's state church known as the Ecclesiarchy or, more formally, as the Adeptus Ministorum.`,
        },
      },
    ],
  },
  {
    id: "galactic-empire",
    name: "Galactic Empire",
    planetsUnderControl: 1_500_000,
    branches: [
      {
        id: "stormtrooper-corps",
        name: "Stormtrooper Corps",
        images: [
          {
            title: "The empires elite",
            url: "/galactic-empire/stormtrooper-corps/1.jpg",
          },
          {
            title: "Fighting for the empire",
            url: "/galactic-empire/stormtrooper-corps/2.jpg",
          },
          {
            title: "Thru the jungles",
            url: "/galactic-empire/stormtrooper-corps/3.jpg",
          },
        ],
        details: {
          thumbnailUrl: "/galactic-empire/stormtrooper-corps/thumbnail.jpg",
          type: "Shock infantry",
          quote:
            "I am a stormtrooper. My skin is my armor. My face is my helmet. My name is my number. I am fulfilled, for I am an agent of the Emperor.",
          description: `The Stormtrooper Corps, also referred to as the Trooper Corps, was an autonomous military branch operating under the Imperial Army of the Galactic Empire. 
          The Corps was best known for its extensive supply of elite and disciplined stormtroopers trained at academies across the galaxy, 
          as well as its near fanatical devotion to Galactic Emperor Darth Sidious. 
          Regarded as the Empire's chief enforcers, the Corps served to remind the civilian populace of the Empire's military supremacy.`,
        },
      },
      {
        id: "imperial-navy",
        name: "Imperial Navy",
        images: [
          {
            title: "The might of the armada",
            url: "/galactic-empire/imperial-navy/1.jpg",
          },
          {
            title: "Deploying tie fighter",
            url: "/galactic-empire/imperial-navy/2.jpg",
          },
          {
            title: "Coruscant",
            url: "/galactic-empire/imperial-navy/2.jpg",
          },
        ],
        details: {
          thumbnailUrl: "/galactic-empire/imperial-navy/thumbnail.jpg",
          type: "Navy",
          quote:
            "The starfleet is a sea. It is endless, cannot be beaten, and given enough time turns even the strongest rocks to sand.",
          description: `The Imperial Navy, also known as the Imperial Starfleet, was the naval branch of the Galactic Empire's military. 
          The Imperial fleet was created in the wake of the Clone Wars, when Chancellor Sheev Palpatine transformed the Galactic Republic he led into an authoritarian Empire. 
          Consisting mainly of Star Destroyers and TIE fighters, the Imperial Navy was tasked with maintaining order in the galaxy.`,
        },
      },
      {
        id: "inquisition",
        name: "Inquisition",
        images: [
          {
            title: "Inquisitor Haazen",
            url: "/galactic-empire/inquisition/1.jpg",
          },
          {
            title: "The Grand inquisitor",
            url: "/galactic-empire/inquisition/2.jpg",
          },
          {
            title: "Jedi hunters",
            url: "/galactic-empire/inquisition/3.jpg",
          },
        ],
        details: {
          thumbnailUrl: "/galactic-empire/inquisition/thumbnail.jpg",
          type: "Inquisition",
          quote: "There are some things far more frightening than death.",
          description: `The Inquisitorius, also known as the Inquisitorius Program, the Order of Inquisitors, 
          the Inquisitor corps, and the Imperial Inquisition, was an organization of Force-sensitive operatives under the Galactic Empire. 
          Inquisitors were tasked with hunting the remaining Jedi throughout the galaxy following the destruction of the Jedi Order, 
          as well as other political dissidents, and retrieving Force-sensitive children as part of Project Harvester. Nicknamed "Red Blades," 
          these dark side adepts were governed by Darth Vader and led by an individual known only as the Grand Inquisitor.`,
        },
      },
    ],
  },
];
