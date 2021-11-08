const pclassData = [
  {
    name: "Artificer",
    hitDie: "8",
    armor: "Light Armor, Medium Armor, Shields",
    weapons: "simple Weapons",
    tools: "Thieves' tools, tinker's tools, one type of artisan's tools of your choice",
    throws: "Constitution, Intelligence",
    skillNumber: "two",
    skillList:
      "Arcana, History, Investigation, Medicine, Nature, Perception, and Sleight of Hand",
    equipment: [
      ["any two simple weapons of your choice"],
      ["a light crossbow and 20 bolts"],
      ["Studded Leather Armor", "Scale Mail"],
      ["Thieve's tools and a Dungeoneer's Pack"],
    ],
    features: [
      [
        ["Magical Tinkering"],

        [
          {
            p: "At 1st level, you learn how to invest a spark of magic into mundane objects. To use this ability, you must have thieves' tools or artisan's tools in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice:",
          },
        ],
        [
          {
            p: "• The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.",
          },
        ],

        [
          {
            p: "• Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long.",
          },
        ],

        [
          {
            p: "• The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away.",
          },
        ],
        [
          {
            p: "• A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like.",
          },
        ],

        [
          {
            p: "The chosen property lasts indefinitely. As an action, you can touch the object and end the property early.",
          },
        ][
          {
            h5: "You can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies.",
          }
        ],
      ],
    ],
  },
  {
    name: "Bard",
    hitDie: "8",
    armor: "Light Armor",
    weapons: "simple Weapons, hand crossbows, longswords, rapiers, shortswords",
    tools: "three musical instruments of your choice",
    throws: "Dexterity, Charisma",
    skillNumber: "3",
    skillList: "Any",
    equipment: [
      ["a Rapier", "a Longsword", "any simple weapon"],
      ["a Diplomat's Pack", "an Entertainer's Pack"],
      ["a lute", "any other musical instrument"],
      ["Leather Armor, and a Dagger"],
    ],
    features: [
      [
        ["Bardic Inspiration"],

        [
          {
            p: "At 1st level, you learn how to invest a spark of magic into mundane objects. To use this ability, you must have thieves' tools or artisan's tools in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice:",
          },
        ],
        [
          {
            p: "• The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.",
          },
        ],

        [
          {
            p: "• Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long.",
          },
        ],

        [
          {
            p: "• The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away.",
          },
        ],
        [
          {
            p: "• A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like.",
          },
        ],

        [
          {
            p: "The chosen property lasts indefinitely. As an action, you can touch the object and end the property early.",
          },
        ][
          {
            h5: "You can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies.",
          }
        ],
      ],
    ],
  },
  {
    name: "Fighter",
    hitDie: "10",
    armor: "Light Armor, Medium Armor, Heavy Armor, Shields",
    weapons: "simple Weapons, martial Weapons",
    tools: "none",
    throws: "Strength, Constitution",
    skillNumber: "three",
    skillList:
      "Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival",
    equipment: [
      ["Chain Mail", "Leather Armor, Longbow, and 20 Arrows"],
      ["a martial weapon and a Shield", "two martial Weapons"],
      ["a Light Crossbow and 20 bolts", "two handaxes"],
      ["a dungeoneer's pack", "an explorer's pack"],
    ],
    features: [
      [
        ["Second Wind"],

        [
          {
            p: "At 1st level, you learn how to invest a spark of magic into mundane objects. To use this ability, you must have thieves' tools or artisan's tools in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice:",
          },
        ],
        [
          {
            p: "• The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.",
          },
        ],

        [
          {
            p: "• Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long.",
          },
        ],

        [
          {
            p: "• The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away.",
          },
        ],
        [
          {
            p: "• A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like.",
          },
        ],

        [
          {
            p: "The chosen property lasts indefinitely. As an action, you can touch the object and end the property early.",
          },
        ][
          {
            h5: "You can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies.",
          }
        ],
      ],
    ],
  },
  {
    name: "Sorceror",
    hitDie: "6",
    armor: "None",
    weapons: "Daggers, darts, slings, quarterstaffs, light crossbows",
    tools: "None",
    throws: "Constitution, Charisma",
    skillNumber: "two",
    skillList: "Arcana, Deception, Insight, Intimidation, Persuasion, and Religion",
    equipment: [
      ["a light crossbow and 20 bolts", "any simple weapon"],
      ["a component pouch", "an arcane focus"],
      ["a dungeoneer's pack", "an explorer's pack"],
      ["Two daggers"],
    ],
    features: [
      [
        ["Bloodline"],

        [
          {
            p: "At 1st level, you learn how to invest a spark of magic into mundane objects. To use this ability, you must have thieves' tools or artisan's tools in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice:",
          },
        ],
        [
          {
            p: "• The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.",
          },
        ],

        [
          {
            p: "• Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long.",
          },
        ],

        [
          {
            p: "• The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away.",
          },
        ],
        [
          {
            p: "• A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like.",
          },
        ],

        [
          {
            p: "The chosen property lasts indefinitely. As an action, you can touch the object and end the property early.",
          },
        ][
          {
            h5: "You can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies.",
          }
        ],
      ],
    ],
  },
];

export default pclassData;
