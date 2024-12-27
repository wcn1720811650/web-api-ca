const movies = [
    {
        "adult": false,
        "backdrop_path": "/jeAQdDX9nguP6YOX6QSWKDPkbBo.jpg",
        "genre_ids": [
            28,
            14,
            878
        ],
        "id": 590706,
        "original_language": "en",
        "original_title": "Jiu Jitsu",
        "overview": "Every six years, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat, the fate of the planet and mankind hangs in the balance.",
        "popularity": 2633.943,
        "poster_path": "/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg",
        "release_date": "2020-11-20",
        "title": "Jiu Jitsu",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 111
    },
    {
        "adult": false,
        "backdrop_path": "/vam9VHLZl8tqNwkp1zjEAxIOrkk.jpg",
        "genre_ids": [
            10751,
            14,
            10770
        ],
        "id": 671583,
        "original_language": "en",
        "original_title": "Upside-Down Magic",
        "overview": "Nory and her best friend Reina enter the Sage Academy for Magical Studies, where Nory’s unconventional powers land her in a class for those with wonky, or “upside-down,” magic. Undaunted, Nory sets out to prove that that upside-down magic can be just as powerful as right-side-up.",
        "popularity": 2362.99,
        "poster_path": "/xfYMQNApIIh8KhpNVtG1XRz0ZAp.jpg",
        "release_date": "2020-07-31",
        "title": "Upside-Down Magic",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 64
    },
    {
        "adult": false,
        "backdrop_path": "/wzJRB4MKi3yK138bJyuL9nx47y6.jpg",
        "genre_ids": [
            28,
            53,
            878
        ],
        "id": 577922,
        "original_language": "en",
        "original_title": "Tenet",
        "overview": "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        "popularity": 1973.492,
        "poster_path": "/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
        "release_date": "2020-08-22",
        "title": "Tenet",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 2638
    },
    {
        "adult": false,
        "backdrop_path": "/ckfwfLkl0CkafTasoRw5FILhZAS.jpg",
        "genre_ids": [
            28,
            35,
            14
        ],
        "id": 602211,
        "original_language": "en",
        "original_title": "Fatman",
        "overview": "A rowdy, unorthodox Santa Claus is fighting to save his declining business. Meanwhile, Billy, a neglected and precocious 12 year old, hires a hit man to kill Santa after receiving a lump of coal in his stocking.",
        "popularity": 1848.361,
        "poster_path": "/4n8QNNdk4BOX9Dslfbz5Dy6j1HK.jpg",
        "release_date": "2020-11-13",
        "title": "Fatman",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 118
    },
    {
        "adult": false,
        "backdrop_path": "/zKv7KF0pH9ASv2uGgTvTylMlxQn.jpg",
        "genre_ids": [
            37
        ],
        "id": 729648,
        "original_language": "en",
        "original_title": "The Dalton Gang",
        "overview": "When their brother Frank is killed by an outlaw, brothers Bob Dalton, Emmett Dalton and Gray Dalton join their local sheriff's department. When they are cheated by the law, they turn to crime, robbing trains and anything else they can steal from over the course of two years in the early 1890's. Trying to out do Jesse James, they attempt to rob two banks at once in October of 1892, and things get ugly",
        "popularity": 1441.44,
        "poster_path": "/6OeGqp18oZucUGziMIRNhLouZ75.jpg",
        "release_date": "2020-11-02",
        "title": "The Dalton Gang",
        "video": false,
        "vote_average": 4.3,
        "vote_count": 13
    },
    {
        "adult": false,
        "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        "genre_ids": [
            80,
            53,
            18
        ],
        "id": 475557,
        "original_language": "en",
        "original_title": "Joker",
        "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        "popularity": 1340.942,
        "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        "release_date": "2019-10-02",
        "title": "Joker",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 15818
    },
    {
        "adult": false,
        "backdrop_path": "/mZgbq4Zpxz7ozWXl4asj6vNdlIi.jpg",
        "genre_ids": [
            35,
            10751,
            14
        ],
        "id": 454433,
        "original_language": "en",
        "original_title": "Magic Camp",
        "overview": "Andy, at the urging of his former mentor and Magic Camp owner Roy Preston, returns to the camp of his youth hoping to reignite his career. Instead, he finds inspiration in his ragtag bunch of rookie magicians.",
        "popularity": 1307.25,
        "poster_path": "/awcPLFFYjufRXd2oAAP6ZIXF9vM.jpg",
        "release_date": "2020-08-14",
        "title": "Magic Camp",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 102
    },
    {
        "adult": false,
        "backdrop_path": "/2Fk3AB8E9dYIBc2ywJkxk8BTyhc.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 524047,
        "original_language": "en",
        "original_title": "Greenland",
        "overview": "John Garrity, his estranged wife and their young son embark on a perilous journey to find sanctuary as a planet-killing comet hurtles toward Earth. Amid terrifying accounts of cities getting levelled, the Garrity's experience the best and worst in humanity. As the countdown to the global apocalypse approaches zero, their incredible trek culminates in a desperate and last-minute flight to a possible safe haven.",
        "popularity": 1143.073,
        "poster_path": "/bNo2mcvSwIvnx8K6y1euAc1TLVq.jpg",
        "release_date": "2020-07-29",
        "title": "Greenland",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 853
    },
    {
        "adult": false,
        "backdrop_path": "/qAKvUu2FSaDlnqznY4VOp5PmjIF.jpg",
        "genre_ids": [
            28,
            12,
            18,
            14
        ],
        "id": 337401,
        "original_language": "en",
        "original_title": "Mulan",
        "overview": "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
        "popularity": 1104.142,
        "poster_path": "/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        "release_date": "2020-09-04",
        "title": "Mulan",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 3241
    },
    {
        "adult": false,
        "backdrop_path": "/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 724989,
        "original_language": "en",
        "original_title": "Hard Kill",
        "overview": "The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a terrorist group kidnaps his daughter just to get it.",
        "popularity": 1067.409,
        "poster_path": "/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg",
        "release_date": "2020-10-23",
        "title": "Hard Kill",
        "video": false,
        "vote_average": 5,
        "vote_count": 224
    },
    {
        "adult": false,
        "backdrop_path": "/5846jHODKbja38USbFcXgOnsfqb.jpg",
        "genre_ids": [
            10751,
            14,
            12
        ],
        "id": 654028,
        "original_language": "en",
        "original_title": "The Christmas Chronicles: Part Two",
        "overview": "Kate Pierce is reluctantly spending Christmas with her mom’s new boyfriend and his son Jack. But when the North Pole and Christmas are threatened to be destroyed, Kate and Jack are unexpectedly pulled into a new adventure with Santa Claus.",
        "popularity": 1004.099,
        "poster_path": "/6sG0kbEvAi3RRLcGGU5h8l3qAPa.jpg",
        "release_date": "2020-11-18",
        "title": "The Christmas Chronicles: Part Two",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 201
    },
    {
        "adult": false,
        "backdrop_path": "/fTDzKoQIh1HeyjfpG5AHMi2jxAJ.jpg",
        "genre_ids": [
            28,
            35
        ],
        "id": 682377,
        "original_language": "en",
        "original_title": "Chick Fight",
        "overview": "When Anna Wyncomb is introduced to an an underground, all-female fight club in order to turn the mess of her life around, she discovers she is much more personally connected to the history of the club than she could ever imagine.",
        "popularity": 984.768,
        "poster_path": "/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg",
        "release_date": "2020-11-13",
        "title": "Chick Fight",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 48
    },
    {
        "adult": false,
        "backdrop_path": "/gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg",
        "genre_ids": [
            28,
            27,
            53
        ],
        "id": 581392,
        "original_language": "ko",
        "original_title": "반도",
        "overview": "A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.",
        "popularity": 973.861,
        "poster_path": "/sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",
        "release_date": "2020-07-15",
        "title": "Peninsula",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 867
    },
    {
        "adult": false,
        "backdrop_path": "/8rIoyM6zYXJNjzGseT3MRusMPWl.jpg",
        "genre_ids": [
            14,
            10751,
            12,
            35,
            27
        ],
        "id": 531219,
        "original_language": "en",
        "original_title": "Roald Dahl's The Witches",
        "overview": "In late 1967, a young orphaned boy goes to live with his loving grandma in the rural Alabama town of Demopolis. As the boy and his grandmother encounter some deceptively glamorous but thoroughly diabolical witches, she wisely whisks him away to a seaside resort. Regrettably, they arrive at precisely the same time that the world's Grand High Witch has gathered.",
        "popularity": 870.023,
        "poster_path": "/betExZlgK0l7CZ9CsCBVcwO1OjL.jpg",
        "release_date": "2020-10-26",
        "title": "Roald Dahl's The Witches",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 869
    },
    {
        "adult": false,
        "backdrop_path": "/gnf4Cb2rms69QbCnGFJyqwBWsxv.jpg",
        "genre_ids": [
            53,
            28,
            18,
            80
        ],
        "id": 671039,
        "original_language": "fr",
        "original_title": "Bronx",
        "overview": "Caught in the crosshairs of police corruption and Marseille’s warring gangs, a loyal cop must protect his squad by taking matters into his own hands.",
        "popularity": 794.676,
        "poster_path": "/9HT9982bzgN5on1sLRmc1GMn6ZC.jpg",
        "release_date": "2020-10-30",
        "title": "Rogue City",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 272
    },
    {
        "adult": false,
        "backdrop_path": "/iQxJuPqCGOO4Iy3uFbMWCIGHkwE.jpg",
        "genre_ids": [
            10752,
            28
        ],
        "id": 635780,
        "original_language": "en",
        "original_title": "Rogue Warfare: Death of a Nation",
        "overview": "After rescuing Daniel from the terrorist Black Mask Organization, the team uncovers plans for a deadly bomb set to detonate in 36 hours that threatens world order. With no time to recover, Daniel must throw his life back on the line as he and his elite team of soldiers race against time to find the bomb and defeat their enemy once and for all. Outnumbered and overmatched, each soldier must find their inner strength and skill to overcome insurmountable odds.",
        "popularity": 790.044,
        "poster_path": "/8GVpIEBqlRBvx28G0LfEX0U8D2k.jpg",
        "release_date": "2020-09-25",
        "title": "Rogue Warfare: Death of a Nation",
        "video": false,
        "vote_average": 4.8,
        "vote_count": 10
    },
    {
        "adult": false,
        "backdrop_path": "/d1sVANghKKMZNvqjW0V6y1ejvV9.jpg",
        "genre_ids": [
            16,
            28,
            12,
            14,
            18
        ],
        "id": 635302,
        "original_language": "ja",
        "original_title": "劇場版「鬼滅の刃」無限列車編",
        "overview": "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
        "popularity": 738.31,
        "poster_path": "/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
        "release_date": "2020-10-16",
        "title": "Demon Slayer the Movie: Mugen Train",
        "video": false,
        "vote_average": 6,
        "vote_count": 87
    },
    {
        "adult": false,
        "backdrop_path": "/wu1uilmhM4TdluKi2ytfz8gidHf.jpg",
        "genre_ids": [
            16,
            14,
            12,
            35,
            10751
        ],
        "id": 400160,
        "original_language": "en",
        "original_title": "The SpongeBob Movie: Sponge on the Run",
        "overview": "When his best friend Gary is suddenly snatched away, SpongeBob takes Patrick on a madcap mission far beyond Bikini Bottom to save their pink-shelled pal.",
        "popularity": 716.962,
        "poster_path": "/jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg",
        "release_date": "2020-08-14",
        "title": "The SpongeBob Movie: Sponge on the Run",
        "video": false,
        "vote_average": 8,
        "vote_count": 1669
    },
    {
        "adult": false,
        "backdrop_path": "/54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
        "genre_ids": [
            28,
            80,
            18,
            53
        ],
        "id": 539885,
        "original_language": "en",
        "original_title": "Ava",
        "overview": "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.",
        "popularity": 663.458,
        "poster_path": "/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
        "release_date": "2020-07-02",
        "title": "Ava",
        "video": false,
        "vote_average": 5.6,
        "vote_count": 757
    },
    {
        "adult": false,
        "backdrop_path": "/aO5ILS7qnqtFIprbJ40zla0jhpu.jpg",
        "genre_ids": [
            28,
            53,
            12,
            18
        ],
        "id": 741067,
        "original_language": "en",
        "original_title": "Welcome to Sudden Death",
        "overview": "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
        "popularity": 624.502,
        "poster_path": "/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
        "release_date": "2020-09-29",
        "title": "Welcome to Sudden Death",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 184
    },
    {
        "adult": false,
        "backdrop_path": "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
        "genre_ids": [
            28,
            878,
            12,
            53
        ],
        "id": 912649,
        "original_language": "en",
        "original_title": "Venom: The Last Dance",
        "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
        "popularity": 4545.315,
        "poster_path": "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
        "release_date": "2024-10-22",
        "title": "Venom: The Last Dance",
        "video": false,
        "vote_average": 6.802,
        "vote_count": 1878
    },
    {
        "adult": false,
        "backdrop_path": "/cjEcqdRdPQJhYre3HUAc5538Gk8.jpg",
        "genre_ids": [
            28,
            14,
            35
        ],
        "id": 845781,
        "original_language": "en",
        "original_title": "Red One",
        "overview": "After Santa Claus (codename: Red One) is kidnapped, the North Pole's Head of Security must team up with the world's most infamous tracker in a globe-trotting, action-packed mission to save Christmas.",
        "popularity": 5982.016,
        "poster_path": "/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
        "release_date": "2024-10-31",
        "title": "Red One",
        "video": false,
        "vote_average": 7.012,
        "vote_count": 1422
    },
    {
        "adult": false,
        "backdrop_path": "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
        "genre_ids": [
            28,
            878,
            35,
            10751
        ],
        "id": 939243,
        "original_language": "en",
        "original_title": "Sonic the Hedgehog 3",
        "overview": "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
        "popularity": 3663.337,
        "poster_path": "/nyEr1VqvKx1YiesMC3oTB2fZvpY.jpg",
        "release_date": "2024-12-19",
        "title": "Sonic the Hedgehog 3",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 124
    },
    {
        "adult": false,
        "backdrop_path": "/oHPoF0Gzu8xwK4CtdXDaWdcuZxZ.jpg",
        "genre_ids": [
            12,
            10751,
            18,
            16
        ],
        "id": 762509,
        "original_language": "en",
        "original_title": "Mufasa: The Lion King",
        "overview": "Told in flashbacks, Mufasa is an orphaned cub, lost and alone until he meets a sympathetic lion named Taka—the heir to a royal bloodline. The chance meeting sets in motion a journey of misfits searching for their destiny and working together to evade a threatening and deadly foe.",
        "popularity": 3478.204,
        "poster_path": "/lurEK87kukWNaHd0zYnsi3yzJrs.jpg",
        "release_date": "2024-12-18",
        "title": "Mufasa: The Lion King",
        "video": false,
        "vote_average": 7.059,
        "vote_count": 227
    },
    {
        "adult": false,
        "backdrop_path": "/tElnmtQ6yz1PjN1kePNl8yMSb59.jpg",
        "genre_ids": [
            16,
            12,
            10751,
            35
        ],
        "id": 1241982,
        "original_language": "en",
        "original_title": "Moana 2",
        "overview": "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
        "popularity": 3176.216,
        "poster_path": "/4YZpsylmjHbqeWzjKpUEF8gcLNW.jpg",
        "release_date": "2024-11-21",
        "title": "Moana 2",
        "video": false,
        "vote_average": 6.931,
        "vote_count": 605
    },
    {
        "adult": false,
        "backdrop_path": "/rhc8Mtuo3Kh8CndnlmTNMF8o9pU.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 1005331,
        "original_language": "en",
        "original_title": "Carry-On",
        "overview": "An airport security officer races to outsmart a mysterious traveler forcing him to let a dangerous item slip onto a Christmas Eve flight.",
        "popularity": 2430.202,
        "poster_path": "/sjMN7DRi4sGiledsmllEw5HJjPy.jpg",
        "release_date": "2024-12-05",
        "title": "Carry-On",
        "video": false,
        "vote_average": 7,
        "vote_count": 1016
    },
    {
        "adult": false,
        "backdrop_path": "/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg",
        "genre_ids": [
            28,
            12,
            18
        ],
        "id": 558449,
        "original_language": "en",
        "original_title": "Gladiator II",
        "overview": "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
        "popularity": 2996.003,
        "poster_path": "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
        "release_date": "2024-11-05",
        "title": "Gladiator II",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 1416
    },
    {
        "adult": false,
        "backdrop_path": "/cI3nL7CgGmPr0CizCwFHBpDkKyB.jpg",
        "genre_ids": [
            10749,
            18
        ],
        "id": 1156593,
        "original_language": "es",
        "original_title": "Culpa tuya",
        "overview": "The love between Noah and Nick seems unwavering despite their parents' attempts to separate them. But his job and her entry into college open up their lives to new relationships that will shake the foundations of both their relationship and the Leister family itself.",
        "popularity": 2019.632,
        "poster_path": "/1sQA7lfcF9yUyoLYC0e6Zo3jmxE.jpg",
        "release_date": "2024-12-26",
        "title": "Culpa tuya",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 40
    },
    {
        "adult": false,
        "backdrop_path": "/dWkdmxIkH9y23s9v1PjQFhTGIwo.jpg",
        "genre_ids": [
            28,
            18,
            53
        ],
        "id": 1043905,
        "original_language": "en",
        "original_title": "Dirty Angels",
        "overview": "During the United States' 2021 withdrawal from Afghanistan, a group of female soldiers posing as medical relief are sent back in to rescue a group of kidnapped teenagers caught between ISIS and the Taliban.",
        "popularity": 2073.9,
        "poster_path": "/3O3qSGmjRGc10hMwFul8WDxKE5t.jpg",
        "release_date": "2024-12-11",
        "title": "Dirty Angels",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 38
    },
    {
        "adult": false,
        "backdrop_path": "/au3o84ub27qTZiMiEc9UYzN74V3.jpg",
        "genre_ids": [
            28,
            878,
            53
        ],
        "id": 1035048,
        "original_language": "en",
        "original_title": "Elevation",
        "overview": "A single father and two women venture from the safety of their homes to face monstrous creatures to save the life of a young boy.",
        "popularity": 1680.289,
        "poster_path": "/uQhYBxOVFU6s9agD49FnGHwJqG5.jpg",
        "release_date": "2024-11-07",
        "title": "Elevation",
        "video": false,
        "vote_average": 6.312,
        "vote_count": 194
    },
    {
        "adult": false,
        "backdrop_path": "/6lE2e6j8qbtQR8aHxQNJlwxdmKV.jpg",
        "genre_ids": [
            28,
            80,
            53
        ],
        "id": 974453,
        "original_language": "en",
        "original_title": "Absolution",
        "overview": "An aging ex-boxer gangster working as muscle for a Boston crime boss receives an upsetting diagnosis.  Despite a faltering memory, he attempts to rectify the sins of his past and reconnect with his estranged children. He is determined to leave a positive legacy for his grandson, but the criminal underworld isn’t done with him and won’t loosen their grip willingly.",
        "popularity": 1517.556,
        "poster_path": "/2MeQG5Vq8rUnRAa463BZe5GNhVk.jpg",
        "release_date": "2024-10-31",
        "title": "Absolution",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 176
    },
    {
        "adult": false,
        "backdrop_path": "/v9Du2HC3hlknAvGlWhquRbeifwW.jpg",
        "genre_ids": [
            28,
            12,
            53
        ],
        "id": 539972,
        "original_language": "en",
        "original_title": "Kraven the Hunter",
        "overview": "Kraven Kravinoff's complex relationship with his ruthless gangster father, Nikolai, starts him down a path of vengeance with brutal consequences, motivating him to become not only the greatest hunter in the world, but also one of its most feared.",
        "popularity": 974.578,
        "poster_path": "/i47IUSsN126K11JUzqQIOi1Mg1M.jpg",
        "release_date": "2024-12-11",
        "title": "Kraven the Hunter",
        "video": false,
        "vote_average": 5.844,
        "vote_count": 211
    },
    {
        "adult": false,
        "backdrop_path": "/mvDMt3JZ5zlsrXduGzj9jBEfVBT.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 1034541,
        "original_language": "en",
        "original_title": "Terrifier 3",
        "overview": "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
        "popularity": 888.738,
        "poster_path": "/ju10W5gl3PPK3b7TjEmVOZap51I.jpg",
        "release_date": "2024-10-09",
        "title": "Terrifier 3",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 1296
    },
    {
        "adult": false,
        "backdrop_path": "/4cp40IyTpFfsT2IKpl0YlUkMBIR.jpg",
        "genre_ids": [
            10749,
            35,
            18
        ],
        "id": 1064213,
        "original_language": "en",
        "original_title": "Anora",
        "overview": "A young sex worker from Brooklyn gets her chance at a Cinderella story when she meets and impulsively marries the son of an oligarch. Once the news reaches Russia, her fairytale is threatened as his parents set out to get the marriage annulled.",
        "popularity": 883.417,
        "poster_path": "/7MrgIUeq0DD2iF7GR6wqJfYZNeC.jpg",
        "release_date": "2024-10-14",
        "title": "Anora",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 511
    },
    {
        "adult": false,
        "backdrop_path": "/rWs3Q9bT7zCH6t004z67UGuWUwu.jpg",
        "genre_ids": [
            16,
            35,
            10751,
            14,
            12
        ],
        "id": 645757,
        "original_language": "en",
        "original_title": "That Christmas",
        "overview": "It's an unforgettable Christmas for the townsfolk of Wellington-on-Sea when the worst snowstorm in history alters everyone's plans — including Santa's.",
        "popularity": 731.989,
        "poster_path": "/bX6dx2U4hOk1esI7mYwtD3cEKdC.jpg",
        "release_date": "2024-11-27",
        "title": "That Christmas",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 244
    },
    {
        "adult": false,
        "backdrop_path": "/t98L9uphqBSNn2Mkvdm3xSFCQyi.jpg",
        "genre_ids": [
            27,
            878,
            18
        ],
        "id": 933260,
        "original_language": "en",
        "original_title": "The Substance",
        "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
        "popularity": 914.377,
        "poster_path": "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
        "release_date": "2024-09-07",
        "title": "The Substance",
        "video": false,
        "vote_average": 7.204,
        "vote_count": 2768
    },
    {
        "adult": false,
        "backdrop_path": "/evFChfYeD2LqobEJf8iQsrYcGTw.jpg",
        "genre_ids": [
            28,
            80,
            53
        ],
        "id": 1182387,
        "original_language": "en",
        "original_title": "Armor",
        "overview": "Armored truck security guard James Brody is working with his son Casey transporting millions of dollars between banks when a team of thieves led by Rook orchestrate a takeover of their truck to seize the riches. Following a violent car chase, Rook soon has the armored truck surrounded and James and Casey find themselves cornered onto a decrepit bridge.",
        "popularity": 768.49,
        "poster_path": "/685wCHwr2kyQZxvThNIM04HuuCt.jpg",
        "release_date": "2024-10-30",
        "title": "Armor",
        "video": false,
        "vote_average": 5.6,
        "vote_count": 92
    },
    {
        "adult": false,
        "backdrop_path": "/ag66gJCiZ06q1GSJuQlhGLi3Udx.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 1138194,
        "original_language": "en",
        "original_title": "Heretic",
        "overview": "Two young missionaries are forced to prove their faith when they knock on the wrong door and are greeted by a diabolical Mr. Reed, becoming ensnared in his deadly game of cat-and-mouse.",
        "popularity": 792.422,
        "poster_path": "/5HJqjCTcaE1TFwnNh3Dn21be2es.jpg",
        "release_date": "2024-10-31",
        "title": "Heretic",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 555
    },
    {
        "adult": false,
        "backdrop_path": "/h3fwlwHotd3JfV13HdW0mxDcxPD.jpg",
        "genre_ids": [
            35,
            10749
        ],
        "id": 957119,
        "original_language": "en",
        "original_title": "Sidelined: The QB and Me",
        "overview": "Dallas, a burdened but headstrong dancer, is determined to get into the best dance school in the country—her late mother’s alma mater. However, that dream is suddenly derailed when the cheeky yet secretly grieving football star, Drayton, crashes into her life with a unique story of his own. Will the two of them be able to grow into their dreams together, or will their dreams be sidelined?",
        "popularity": 715.696,
        "poster_path": "/hklQwv6QVoOp5bWyh1bjuF2ydyG.jpg",
        "release_date": "2024-11-29",
        "title": "Sidelined: The QB and Me",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 80
    },
    {
        "adult": false,
        "backdrop_path": "/uVlUu174iiKhsUGqnOSy46eIIMU.jpg",
        "genre_ids": [
            18,
            10749,
            14
        ],
        "id": 402431,
        "original_language": "en",
        "original_title": "Wicked",
        "overview": "In the land of Oz, ostracized and misunderstood green-skinned Elphaba is forced to share a room with the popular aristocrat Glinda at Shiz University, and the two's unlikely friendship is tested as they begin to fulfill their respective destinies as Glinda the Good and the Wicked Witch of the West.",
        "popularity": 659.361,
        "poster_path": "/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg",
        "release_date": "2024-11-20",
        "title": "Wicked",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 659
    },
    {
        "adult": false,
        "backdrop_path": "/cHF6uYmmPARTSRr3vP3vziriuOI.jpg",
        "genre_ids": [
            16,
            9648,
            878,
            28
        ],
        "id": 1299652,
        "original_language": "en",
        "original_title": "Watchmen: Chapter II",
        "overview": "Suspicious of the events ensnaring their former colleagues, Nite Owl and Silk Spectre are spurred out of retirement to investigate. As they grapple with personal ethics, inner demons and a society turned against them, they race the clock to uncover a deepening plot that might trigger global nuclear war.",
        "popularity": 724.182,
        "poster_path": "/wUSXPLD3tLWdesY7nYwUitYRI50.jpg",
        "release_date": "2024-11-25",
        "title": "Watchmen: Chapter II",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 58
    }
];

export default movies;