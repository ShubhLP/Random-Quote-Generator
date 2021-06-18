const QUOTESTORE = [
    {
        quote: "Sometimes you want to give up the guitar, you’ll hate the guitar. But if you stick with it, you’re gonna be rewarded.",
        author: "Jimi Hendrix"
    },
    {
        quote: "Guitars are fun. There are plenty of different kinds to play. They look cool. They sound cool. Don't *you* want to play guitar?",
        author: "Joe Satriani"
    },
    {
        quote: "Everybody is just a stranger, but that's the danger in going my own way.",
        author: "John Mayer"
    },
    {
        quote: "If you want to be a rock star or just be famous, then run down the street naked, you’ll make the news or something. But if you want music to be your livelihood, then play, play, play and play! And eventually, you’ll get to where you want to be.",
        author: "Eddie Van Halen"
    },
    {
        quote: "I wanted to create music that was so different that my mother could tell from anyone else.”",
        author: "Les Paul"
    },
    {
        quote: "Notes and chords have become my second language and, more often than not, that vocabulary expresses what I feel when language fails me.",
        author: "Slash"
    },
    {
        quote: "I believe every guitar player inherently has something unique about their playing. They just have to identify what makes them different and develop it.",
        author: "Jimmy Page"
    },
    {
        quote: "One good thing about music, when it hits you, you feel no pain.",
        author: "Bob Marley"
    },
    {
        quote: "Music is love, love is music, music is life, and I love my life. Thank you and good night.",
        author: "A. J. McLean"
    },
    {
        quote: "Where words fail, music speaks.",
        author: "Hans Christian Andersen"
    },
    {
        quote: "If music be the food of love, play on.",
        author: "William Shakespeare"
    },
    {
        quote: "Music is the movement of sound to reach the soul for the education of its virtue.",
        author: "Plato"
    },
    {
        quote: "Life is one grand, sweet song, so start the music.",
        author: "Ronald Reagan"
    },
    {
        quote: "Words make you think a thought. Music makes you feel a feeling. A song makes you feel a thought.",
        author: "E. Y. Harburg"
    },
    {
        quote: "Music expresses that which cannot be said and on which it is impossible to be silent.",
        author: "Victor Hugo"
    },
    {
        quote: "Music should strike fire from the heart of man, and bring tears from the eyes of woman.",
        author: "Ludwig van Beethoven"
    },
    {
        quote: "There are two means of refuge from the miseries of life: music and cats.",
        author: "Albert Schweitzer"
    },
    {
        quote: "Music was my refuge. I could crawl into the space between the notes and curl my back to loneliness.",
        author: "Maya Angelou"
    },
    {
        quote: "Without music, life is a journey through a desert.",
        author: "Pat Conroy"
    },
    {
        quote: "Music is the mediator between the spiritual and the sensual life.",
        author: "Ludwig van Beethoven"
    },
    {
        quote: "The world's most famous and popular language is music.",
        author: "Psy"
    },
    {
        quote: "Music can change the world because it can change people.",
        author: "Bono"
    },
    {
        quote: "Music is the soundtrack of your life.",
        author: "Dick Clark"
    },
    {
        quote: "Music doesn't lie. If there is something to be changed in this world, then it can only happen through music.",
        author: "Jimi Hendrix"
    },
    {
        quote: "There is geometry in the humming of the strings, there is music in the spacing of the spheres.",
        author: "Pythagoras"
    },
    {
        quote: "Mathematics is the music of reason.",
        author: "James Joseph Sylvester"
    },
    {
        quote: "Next to the Word of God, the noble art of music is the greatest treasure in the world.",
        author: "Martin Luther"
    },
    {
        quote: "Music is a higher revelation than all wisdom and philosophy.",
        author: "Ludwig van Beethoven"
    },
    {
        quote: "Music has healing power. It has the ability to take people out of themselves for a few hours.",
        author: "Elton John"
    },
    {
        quote: "A lot of music is mathematics. It's balance.",
        author: "Mel Brooks"
    },
    {
        quote: "Music is the universal language of mankind.",
        author: "Henry Wadsworth Longfellow"
    },
    {
        quote: "I enjoy being happy every day, and hopefully you can hear my happiness in my music. Life is beautiful.",
        author: "Christina Milian"
    },
    {
        quote: "Without music, life would be a mistake.",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "Musicians don't retire; they stop when there's no more music in them.",
        author: "Louis Armstrong"
    },
    {
        quote: "Music is life itself. What would this world be without good music? No matter what kind it is.",
        author: "Louis Armstrong"
    },
    {
        quote: "I need to listen to chill music when I'm driving. It prevents road rage.",
        author: "Aaron Paul"
    },
    {
        quote: "My personal hobbies are reading, listening to music, and silence.",
        author: "Edith Sitwell"
    },
    {
        quote: "Sometimes I feel like rap music is almost the key to stopping racism.",
        author: "Eminem"
    },
    {
        quote: "I feel like good music comes and goes in waves.",
        author: "Santigold"
    },
    {
        quote: "Being in Blur has allowed me to travel and hear the music that's being made all over the world.",
        author: "Damon Albarn"
    },
    {
        quote: "My music fights against the system that teaches to live and die.",
        author: "Bob Marley"
    },
    {
        quote: "I write while listening to music, mostly because the world beyond my headphones is too chaotic.",
        author: "Dean Bakopoulos"
    },
    {
        quote: "Music is moonlight in the gloomy night of life.",
        author: "Jean Paul"
    },
    {
        quote: "You are the music while the music lasts.",
        author: "T. S. Eliot"
    },
    {
        quote: "I enjoy everything I do, from music to fashion or to watches - the lifestyle.",
        author: "J Balvin"
    },
    {
        quote: "It was my love for the guitar that first got me into music and singing.",
        author: "Ed Sheeran"
    },
    {
        quote: "Music is the voice that tells us that the human race is greater than it knows.",
        author: "Napoleon Bonaparte"
    },
    {
        quote: "I suffer from deep depression, so my only release is music.",
        author: "Kevin Gates"
    },
    {
        quote: "Music is really driving my whole life.",
        author: "Ariana Grande"
    },
    {
        quote: "All music is escapism for me, but I like the way that, on a good night, that sense of escapism can be shared.",
        author: "Jamie xx"
    },
    {
        quote: "My music is the spiritual expression of what I am - my faith, my knowledge, my being.",
        author: "John Coltrane"
    },
    {
        quote: "Like sunshine, music is a powerful force that can instantly and almost chemically change your entire mood.",
        author: "Michael Franti"
    },
    {
        quote: "Of all the music that reached farthest into heaven, it is the beating of a loving heart.",
        author: "Henry Ward Beecher"
    },
    {
        quote: "It requires wisdom to understand wisdom: the music is nothing if the audience is deaf.",
        author: "Walter Lippmann"
    },
    {
        quote: "After silence, that which comes nearest to expressing the inexpressible is music.",
        author: "Aldous Huxley"
    },
    {
        quote: "I try to apply colors like words that shape poems, like notes that shape music.",
        author: "Joan Miro"
    },
    {
        quote: "Music is the silence between the notes.",
        author: "Claude Debussy"
    },
    {
        quote: "When I die, I want people to play my music, go wild and freak out and do anything they want to do.",
        author: "Jimi Hendrix"
    },
    {
        quote: "Music really transcends languages, and it means so much.",
        author: "RM"
    },
    {
        quote: "If I make music and people hate it, you know, whatever. I'll die someday, and one day, they will too.",
        author: "Billie Eilish"
    },
    {
        quote: "I like playing heavy metal music and pretending I'm a vampire in front of the mirror.",
        author: "Luke Mably"
    },
    {
        quote: "Music is art, and making watches is art, too.",
        author: "J Balvin"
    },
    {
        quote: "Tones sound, and roar and storm about me until I have set them down in notes.",
        author: "Ludwig van Beethoven"
    },
    {
        quote: "The wise musicians are those who play what they can master.",
        author: "Duke Ellington"
    },
    {
        quote: "Music is my religion.",
        author: "Jimi Hendrix"
    },
    {
        quote: "All music is folk music. I ain't never heard a horse sing a song.",
        author: "Louis Armstrong"
    },
    {
        quote: "Life is like music; it must be composed by ear, feeling, and instinct, not by rule.",
        author: "Samuel Butler"
    },
    {
        quote: "Music is spiritual. The music business is not.",
        author: "Van Morrison"
    },
    {
        quote: "Music - it's motivational and just makes you relax.",
        author: "Taika Waititi"
    },
    {
        quote: "Music is the strongest form of magic.",
        author: "Marilyn Manson"
    },
    {
        quote: "Old music used to mean something. There is none of that today.",
        author: "Ziggy Marley"
    },
    {
        quote: "Beats succeeded because, as music lovers, we knew oscilloscopes don't buy headphones - people do.",
        author: "Jimmy Iovine"
    },
    {
        quote: "Where there is devotional music, God is always at hand with His gracious presence.",
        author: "Johann Sebastian Bach"
    },
    {
        quote: "Cinematography is infinite in its possibilities... much more so than music or language.",
        author: "Conrad Hall"
    },
    {
        quote: "I mean, the genuine roots of culture is folk music.",
        author: "John Lydon"
    },
    {
        quote: "There's a certain line between jokes and music and poetry that's a bit blurred in my mind.",
        author: "Bo Burnham"
    },
    {
        quote: "There's sketch, improv, writing, acting, music, and badminton. Those are the seven forms of comedy.",
        author: "T. J. Miller"
    },
    {
        quote: "The rhetoric is the key to the character. It's the verbal music of the piece.",
        author: "Peter Shaffer"
    },
    {
        quote: "Music comes to me more readily than words.",
        author: "Ludwig van Beethoven"
    },
    {
        quote: "Music, in performance, is a type of sculpture. The air in the performance is sculpted into something.",
        author: "Frank Zappa"
    },
    {
        quote: "No two people on earth are alike, and it's got to be that way in music or it isn't music.",
        author: "Billie Holiday"
    },
    {
        quote: "I lost myself in the bubble of music - driving myself to be a success.",
        author: "Dan Hill"
    },
    {
        quote: "Music is the shorthand of emotion.",
        author: "Leo Tolstoy"
    },
    {
        quote: "There's nothing better than live music. It's raw energy, and raw energy feeds the soul.",
        author: "Dhani Jones"
    },
    {
        quote: "If I had a free afternoon, I would play music, sit in my backyard, and drink coffee.",
        author: "Aja Naomi King"
    },
    {
        quote: "Music is your own experience, your own thoughts, your wisdom. ",
        author: "Charlie Parker"
    },
    {
        quote: "I would love to be able to pursue music as a career but honestly, I'm just not good enough.",
        author: "Shawn Ashmore"
    },
    {
        quote: "Music inflames temperament.",
        author: "Jim Morrison"
    },
    {
        quote: "Music has a poetry of its own, and that poetry is called melody.",
        author: "Joshua Logan"
    },
    {
        quote: "As a youngster, I never dreamed there could be a career actually earning a living writing music.",
        author: "John Williams"
    },
    {
        quote: "Good fashion is like rock music: all anarchy and revolt.",
        author: "Ann Demeulemeester"
    },
    {
        quote: "I feel that when you care about your music, taking risks is something you should do to keep things exciting.",
        author: "Drake"
    },
    {
        quote: "My goal is to be one with the music. I just dedicate my whole life to this art.",
        author: "Jimi Hendrix"
    },
    {
        quote: "Military justice is to justice what military music is to music.",
        author: "Groucho Marx"
    },
    {
        quote: "We're a bit flashy, but the music's not one big noise.",
        author: "Freddie Mercury"
    },
    {
        quote: "They teach you there's a boundary line to music. But, man, there's no boundary line to art.",
        author: "Charlie Parker"
    },
    {
        quote: "I think I will never stop working with music; it has become a part of who I am.",
        author: "Martin Garrix"
    },
    {
        quote: "Rap music is the only vital form of music introduced since punk rock.",
        author: "Kurt Cobain"
    },
    {
        quote: "I go with the flow. Whatever music you play for me, I'll dance.",
        author: "Gael Garcia Bernal"
    },
    {
        quote: "I like to go to the beach, have a bonfire, and play music.",
        author: "Colbie Caillat"
    },
    {
        quote: "Versification is, indeed, indispensable for music, but rhyme, solely for rhyming's sake, most pernicious.",
        author: "Wolfgang Amadeus Mozart"
    },
    {
        quote: "Hunting, fishing, drawing, and music occupied my every moment. Cares I knew not, and cared naught about them.",
        author: "John James Audubon"
    },
    {
        quote: "Clothes are like a good meal, a good movie, great pieces of music.",
        author: "Michael Kors"
    },
    {
        quote: "Making music is like shopping for me. Every song is like a new pair of shoes.",
        author: "Rihanna"
    },
    {
        quote: "You create a community with music, not just at concerts but by talking about it with your friends.",
        author: "David Byrne"
    },
    {
        quote: "I don't know anything about music. In my line you don't have to.",
        author: "Elvis Presley"
    },
    {
        quote: "I love sad songs. They say so much. I love country music but even the happy songs sound really sad.",
        author: "Beth Ditto"
    },
    {
        quote: "My best hostess tip is to have good food and really good music!",
        author: "Jennifer Aniston"
    },
    {
        quote: "Change is always happening. That's one of the wonderful things about jazz music.",
        author: "Maynard Ferguson"
    },
    {
        quote: "My music had roots which I'd dug up from my own childhood, musical roots buried in the darkest soil.",
        author: "Ray Charles"
    },
    {
        quote: "We came out in the midst of the hippie hangover. All this mellow music.",
        author: "Angus Young"
    },
    {
        quote: "Music washes away from the soul the dust of everyday life.",
        author: "Berthold Auerbach"
    },
    {
        quote: "Music fills the infinite between two souls.",
        author: "Rabindranath Tagore"
    },
    {
        quote: "Hawaii is paradise. It sounds cheesy to say it, but there's music in the air there.",
        author: "Bruno Mars"
    },
    {
        quote: "There is nothing stable in the world; uproar's your only music.",
        author: "John Keats"
    },
    {
        quote: "I want people to get positive energy from our music.",
        author: "Suga"
    },
    {
        quote: "Pop music, disco music, and heavy metal music is about shutting out the tensions of life, putting it away.",
        author: "Peter Tork"
    },
    {
        quote: "People should listen to my music because it's good.",
        author: "Cardi B"
    },
    {
        quote: "I love that way dance music can put you in a trance.",
        author: "Chet Faker"
    },
    {
        quote: "My heart, which is so full to overflowing, has often been solaced and refreshed by music when sick and weary.",
        author: "Martin Luther"
    },
    {
        quote: "There are more love songs than anything else. If songs could make you do something we'd all love one another.",
        author: "Frank Zappa"
    },
    {
        quote: "Just when you think we're living in a little bit of a divided world, music brings us together.",
        author: "Luis Fonsi"
    },
    {
        quote: "Sometimes words are just music themselves. Like 'Chicago' is a very musical sounding name.",
        author: "Tom Waits"
    },
    {
        quote: "As long as my music is real, it's no limit to how many ears I can grab.",
        author: "Kendrick Lamar"
    },
    {
        quote: "Music is everybody's possession. It's only publishers who think that people own it.",
        author: "John Lennon"
    },
    {
        quote: "If a composer could say what he had to say in words he would not bother trying to say it in music.",
        author: "Gustav Mahler"
    },
    {
        quote: "Fog and one blue light is all I need in life at the club. Just a dark room and loud music. I'm into that.",
        author: "Kelela"
    },
    {
        quote: "Good music will always be recognized in the end.",
        author: "Suga"
    },
    {
        quote: "To me, the greatest pleasure of writing is not what it's about, but the inner music that words make.",
        author: "Truman Capote"
    },
    {
        quote: "If architecture is frozen music then music must be liquid architecture.",
        author: "Quincy Jones"
    },
    {
        quote: "I love a lot of different styles, but my heart belongs in electronic music.",
        author: "John Grant"
    },
    {
        quote: "Music was invented to confirm human loneliness.",
        author: "Lawrence Durrell"
    },
    {
        quote: "Live music is the cure for what ails ya.",
        author: "Henry Rollins"
    },
    {
        quote: "My music isn't rappity-rap-rap-rap.",
        author: "Travis Scott"
    },
    {
        quote: "Music washes away the dust of every day life.",
        author: "Art Blakey"
    },
    {
        quote: "We should make decisions in life with our hearts, not our brains, not only in music but in daily life.",
        author: "Andre Rieu"
    },
    {
        quote: "I wanted to prove the sustaining power of music.",
        author: "David Bowie"
    },
    {
        quote: "I think that's what it is with rock music. It helps you hang tough, I guess.",
        author: "Angus Young"
    },
    {
        quote: "Sometimes, I make music in my sleep. So I get up, put on my headphones, and compose it on the piano.",
        author: "Adnan Sami"
    },
    {
        quote: "Music with dinner is an insult both to the cook and the violinist.",
        author: "Gilbert K. Chesterton"
    },
    {
        quote: "Music is well said to be the speech of angels.",
        author: "Thomas Carlyle"
    },
    {
        quote: "What I love about Christmas music is it stays around every year and comes back.",
        author: "India Arie"
    },
    {
        quote: "If I was in a zombie apocalypse, I wouldn't be playing music, because that would attract zombies.",
        author: "Scott Weiland"
    },
    {
        quote: "I associate heavy metal with fantasy because of the tremendous power that the music delivers.",
        author: "Christopher Lee"
    },
    {
        quote: "I gravitate towards happy music. I love the Beach Boys.",
        author: "Zooey Deschanel"
    },
    {
        quote: "It is from the blues that all that may be called American music derives its most distinctive character.",
        author: "James Weldon Johnson"
    },
    {
        quote: "I'm addicted to making music, but I don't want to do it forever. I just want a farm. Farms make you happy.",
        author: "Sam Smith"
    },
    {
        quote: "People haven't always been there for me, but music always has.",
        author: "Taylor Swift"
    },
    {
        quote: "Good music is good music, and everything else can go to hell.",
        author: "Dave Matthews"
    },
    {
        quote: "He has Van Gogh's ear for music.",
        author: "Billy Wilder"
    },
    {
        quote: "When I am stressed, my No. 1 reliever is my music.",
        author: "Sabrina Bryan"
    },
    {
        quote: "True music must repeat the thought and inspirations of the people and the time.",
        author: "George Gershwin"
    },
    {
        quote: "It feels so good to be amongst some of the biggest legends in music - it feels quite surreal.",
        author: "Anne-Marie"
    },
    {
        quote: "The only love affair I have ever had was with music.",
        author: "Maurice Ravel"
    },
    {
        quote: "Music is the best means we have of digesting time.",
        author: "W. H. Auden"
    },
    {
        quote: "My music is best understood by children and animals.",
        author: "Igor Stravinsky"
    },
    {
        quote: "Music is a unifying force.",
        author: "Ziggy Marley"
    },
    {
        quote: "You can't stay the same. If you're a musician and a singer, you have to change, that's the way it works.",
        author: "Van Morrison"
    },
    {
        quote: "Cocktail music is accepted as audible wallpaper.",
        author: "Alistair Cooke"
    },
    {
        quote: "Music is an art that touches the depth of human existence; an art of sounds that crosses all borders.",
        author: "Daniel Barenboim"
    },
    {
        quote: "I was bred and raised in a multi-cultural music background.",
        author: "Coco Lee"
    },
    {
        quote: "In music the passions enjoy themselves.",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "Film is one of the three universal languages, the other two: mathematics and music.",
        author: "Frank Capra"
    },
    {
        quote: "I'm attached to the beat. The beat speaks words. I love music.",
        author: "Travis Scott"
    },
    {
        quote: "Istanbul is inspiring because it has its own code of architecture, literature, poetry, music.",
        author: "Christian Louboutin"
    },
    {
        quote: "Sometimes music, movies and books are the only things that let us feel like someone else feels like we do.",
        author: "Marilyn Manson"
    },
    {
        quote: "Music is my life, it is a reflection of what I go through.",
        author: "Lenny Kravitz"
    },
    {
        quote: "Music is the expression of the movement of the waters, the play of curves described by changing breezes.",
        author: "Claude Debussy"
    },
    {
        quote: "It's like drinking water. You have to have water every day, and music is like water for me.",
        author: "Trombone Shorty"
    },
    {
        quote: "Philosophy is the highest music.",
        author: "Plato"
    },
    {
        quote: "I'm a DJ who makes dance music who got to play with Sting.",
        author: "Afrojack"
    },
    {
        quote: "I like to borrow forms and quotes and use a lot of allusions, in both poetry and music.",
        author: "Jamila Woods"
    },
    {
        quote: "If you talk bad about country music, it's like saying bad things about my momma. Them's fightin' words.",
        author: "Dolly Parton"
    },
    {
        quote: "Your personal history is a part of what happens with your hands and your head as you play music.",
        author: "Dave Grohl"
    },
    {
        quote: "Actually, I hear a lot of rock music. My husband is a big rock fan.",
        author: "Dolly Parton"
    },
    {
        quote: "Music is the emotional life of most people.",
        author: "Leonard Cohen"
    },
    {
        quote: "Hell is full of musical amateurs.",
        author: "George Bernard Shaw"
    },
    {
        quote: "If I was just a fan of music, I would think that I was the number one artist in the world.",
        author: "Kanye West"
    },
    {
        quote: "Like music and art, love of nature is a common language that can transcend political or social boundaries.",
        author: "Jimmy Carter"
    },
    {
        quote: "I design music; I don't produce it.",
        author: "Travis Scott"
    },
    {
        quote: "The roar of the crowd has always been the sweetest music. It's intoxicating.",
        author: "Vin Scully"
    },
    {
        quote: "Music is the melody whose text is the world.",
        author: "Arthur Schopenhauer"
    },
    {
        quote: "The truest expression of a people is in its dances and its music. Bodies never lie.",
        author: "Agnes de Mille"
    },
    {
        quote: "Rock and Roll: Music for the neck downwards.",
        author: "Keith Richards"
    },
    {
        quote: "Dance music is like a virus: it has affected so many different genres.",
        author: "Avicii"
    },
    {
        quote: "If you put out quality music, you're always going to be in a good place.",
        author: "Romeo Santos"
    },
    {
        quote: "Music for me, it demands full concentration.",
        author: "Paulo Coelho"
    },
    {
        quote: "True country music is honesty, sincerity, and real life to the hilt.",
        author: "Garth Brooks"
    },
    {
        quote: "I call architecture frozen music.",
        author: "Johann Wolfgang von Goethe"
    },
    {
        quote: "I don't make music for eyes. I make music for ears.",
        author: "Adele"
    },
    {
        quote: "Music is the divine way to tell beautiful, poetic things to the heart.",
        author: "Pablo Casals"
    },
    {
        quote: "My music is not just about entertainment. It is about enlightenment also.",
        author: "Kailash Kher"
    },
    {
        quote: "Music is for every single person that walks the planet.",
        author: "Robert Plant"
    },
    {
        quote: "I don't like being put in a box. I just make music, you know?",
        author: "Tyler, The Creator"
    },
    {
        quote: "There's nothing like music to relieve the soul and uplift it.",
        author: "Mickey Hart"
    },
    {
        quote: "I like rock music that has melody, but it also makes you wanna get up and dance.",
        author: "Albert Hammond, Jr."
    },
    {
        quote: "The music industry is a matrix that is counter to what is natural and right.",
        author: "Prince"
    },
    {
        quote: "Music and fashion have to have their own styles. It's a must.",
        author: "Suga"
    },
    {
        quote: "The martial music of every sideburned delinquent on the face of the earth.",
        author: "Frank Sinatra"
    },
    {
        quote: "When people hear good music, it makes them homesick for something they never had, and never will have.",
        author: "E. W. Howe"
    },
    {
        quote: "I love music videos, I really do. I think it's kind of sad that it's a dying art form.",
        author: "Adam Levine"
    },
    {
        quote: "Beethoven can write music, thank God, but he can do nothing else on earth.",
        author: "Ludwig van Beethoven"
    },
    {
        quote: "Who hears music feels his solitude peopled at once.",
        author: "Robert Browning"
    },
    {
        quote: "Classical music is the kind we keep thinking will turn into a tune.",
        author: "Kin Hubbard"
    },
    {
        quote: "Music can name the unnameable and communicate the unknowable.",
        author: "Leonard Bernstein"
    },
    {
        quote: "Music fathoms the sky.",
        author: "Charles Baudelaire"
    },
    {
        quote: "If you pour some music on whatever's wrong, it'll sure help out.",
        author: "Levon Helm"
    },
    {
        quote: "To sing is to bring to life; impossible if the words are mediocre, however good the music.",
        author: "Edith Piaf"
    },
    {
        quote: "Every song is like a painting.",
        author: "Dick Dale"
    },
    {
        quote: "Music exists for the purpose of growing an admirable heart.",
        author: "Shinichi Suzuki"
    },
    {
        quote: "Music speaks to people in a way that breaks down boundaries that words and actions sometimes can't.",
        author: "Dan Reynolds"
    },
    {
        quote: "Citizens of India, Pakistan, and Kashmir need to come together and make music.",
        author: "Zubin Mehta"
    },
    {
        quote: "Curtain! Fast music! Light! Ready for the last finale! Great! The show looks good, the show looks good!",
        author: "Florenz Ziegfeld"
    },
    {
        quote: "Music is always a creative process that comes from the heart. It's a feeling, a vibration, that we ride on.",
        author: "Maurice White"
    },
    {
        quote: "You shouldn't be in the music business if you're posing.",
        author: "Rod Stewart"
    },
    {
        quote: "You just pick up a chord, go twang, and you're got music.",
        author: "Sid Vicious"
    },
    {
        quote: "I don't care much about music. What I like is sounds.",
        author: "Dizzy Gillespie"
    },
    {
        quote: "Music is there to get you through life's ups and downs, good times and not so good times.",
        author: "Rob Halford"
    },
    {
        quote: "I've made sure that in any situation and with any record label, I'm allowed to write my own music.",
        author: "Taylor Swift"
    },
    {
        quote: "Nothing can ever be wrong about music.",
        author: "Duane Allman"
    },
    {
        quote: "Music is the best way for me to say I love you.",
        author: "Mireille Mathieu"
    },
    {
        quote: "I need drama in my life to keep making music.",
        author: "Eminem"
    },
    {
        quote: "I'm not trying to keep up or adapt. I'm allowing myself to grow, evolve and create new music.",
        author: "LL Cool J"
    },
    {
        quote: "If you want to make beautiful music, you must play the black and the white notes together.",
        author: "Richard M. Nixon"
    },
    {
        quote: "I am never going to give music up.",
        author: "Dr. Dre"
    },
    {
        quote: "Music became a healer for me.",
        author: "Eric Clapton"
    },
    {
        quote: "When words leave off, music begins.",
        author: "Heinrich Heine"
    },
    {
        quote: "Music played at weddings always reminds me of the music played for soldiers before they go into battle.",
        author: "Heinrich Heine"
    },
    {
        quote: "I didn't get interested in music. It was a gift from God.",
        author: "Nina Simone"
    },
    {
        quote: "The music is all. People should die for it. People are dying for everything else, so why not the music?",
        author: "Lou Reed"
    },
    {
        quote: "We always go out looking for live music after our shows.",
        author: "Ron White"
    },
    {
        quote: "Music has charms to sooth a savage breast, to soften rocks, or bend a knotted oak.",
        author: "William Congreve"
    },
    {
        quote: "I was really lucky that I came to puberty at a time when music and politics were completely intertwined.",
        author: "Bob Geldof"
    },
    {
        quote: "These are the sort of things that push you on in music - the curiosity, a passion for new ideas.",
        author: "Elvis Costello"
    },
    {
        quote: "Music is the embodiment of my soul. When I play, I'm not performing a song: I'm becoming it.",
        author: "Tash Sultana"
    },
    {
        quote: "Something about cactuses and rock music is a good combination.",
        author: "Brad Paisley"
    },
    {
        quote: "I felt my music wasn't aiming at anybody. Everything I was doing was because it was a good song.",
        author: "Glen Campbell"
    },
    {
        quote: "Music reaches people in a way that simple spoken words just can't.",
        author: "Sonita Alizadeh"
    },
    {
        quote: "The thing about good writing is it has a music to it.",
        author: "Lauren Graham"
    },
    {
        quote: "Hip-hop is a collage. It samples from all different styles of music.",
        author: "Kamasi Washington"
    },
    {
        quote: "Music when healthy, is the teacher of perfect order, and when depraved, the teacher of perfect disorder.",
        author: "John Ruskin"
    },
    {
        quote: "Reading is more of a left-brain process, and listening to music is a right-brain function.",
        author: "Maynard James Keenan"
    },
    {
        quote: "Christianity helps us face the music even when we don't like the tune.",
        author: "Phillips Brooks"
    },
    {
        quote: "Composing music is hard work.",
        author: "John Williams"
    },
    {
        quote: "I came through folk music simply because it was easy to get into it.",
        author: "Joni Mitchell"
    },
    {
        quote: "I just want to make the best music of all time with my best friends.",
        author: "Chris Martin"
    },
    {
        quote: "My worst fear is my music won't connect with the public.",
        author: "Adele"
    },
    {
        quote: "If you look deep enough you will see music; the heart of nature being everywhere music.",
        author: "Thomas Carlyle"
    },
    {
        quote: "I don't have a therapist, so I use me as my own therapist when I'm making the music.",
        author: "Tyler, The Creator"
    },
    {
        quote: "Music, not sex, got me aroused.",
        author: "Marvin Gaye"
    },
    {
        quote: "I love music, and after my first experience with movies, I can't wait to do more.",
        author: "Rihanna"
    },
    {
        quote: "Absolutely, I never stop working on new music.",
        author: "Shawn Mendes"
    },
    {
        quote: "Maybe one day there will finally be an education for electronic music.",
        author: "Afrojack"
    },
    {
        quote: "Music is intended and designed for sentient beings that have hopes and purposes and emotions.",
        author: "Jacques Barzun"
    },
    {
        quote: "Our music is never going to stop someone from bullying someone else. But you should be your own person.",
        author: "Andy Biersack"
    },
    {
        quote: "I like to go into a little shell and be a hermit and make music for a while.",
        author: "Delta Goodrem"
    },
    {
        quote: "The more you play music, the better you'll get.",
        author: "Glen Campbell"
    },
    {
        quote: "I had to listen to the classical music because it calms me down, calms my nerves down.",
        author: "Novak Djokovic"
    },
    {
        quote: "I enjoy 'down South' music.",
        author: "Lil Uzi Vert"
    },
    {
        quote: "You know, when I hear music, I just hear the whole thing.",
        author: "Meg White"
    },
    {
        quote: "If you're only a fan of the old music, that music's gonna wind up sounding even older.",
        author: "Johnny Van Zant"
    },
    {
        quote: "Well, because music is my life and music is not work for me.",
        author: "Gunther Schuller"
    },
    {
        quote: "No good opera plot can be sensible, for people do not sing when they are feeling sensible.",
        author: "W. H. Auden"
    },
    {
        quote: "I always felt rock and roll was very, very wholesome music.",
        author: "Aretha Franklin"
    },
    {
        quote: "It's a crazy world, so sports and athletics and music can be a form of escapism.",
        author: "Eddie Vedder"
    },
    {
        quote: "Gospel music always relaxes me and calms my nerves.",
        author: "Gabby Douglas"
    },
    {
        quote: "Starbucks has changed the rules of engagement for the music industry.",
        author: "Howard Schultz"
    },
    {
        quote: "Music's been a huge passion of mine since I was really young. I started playing guitar when I was thirteen.",
        author: "Lewis Hamilton"
    },
    {
        quote: "Please write music like Wagner, only louder.",
        author: "Samuel Goldwyn"
    },
    {
        quote: "Great music is in the ear of the beholder.",
        author: "Noel Gallagher"
    },
    {
        quote: "It's always about the music, never about anything else.",
        author: "Eddie Van Halen"
    },
    {
        quote: "Every act, every deed of justice and mercy and benevolence, makes heavenly music in Heaven.",
        author: "Ellen G. White"
    },
    {
        quote: "Music really becomes the soundtrack to the major events to your life.",
        author: "Sheryl Crow"
    },
    {
        quote: "Music can't change the world.",
        author: "Bob Geldof"
    },
    {
        quote: "I like being in a recording studio. I like watching a song go from the simplicity of the original music.",
        author: "Grace Slick"
    },
    {
        quote: "Most of my music videos were made for under $200.",
        author: "Grimes"
    },
    {
        quote: "I titled the album Reflections because I am reflecting on my music career.",
        author: "Miriam Makeba"
    },
    {
        quote: "Music is love in search of a word.",
        author: "Sidney Lanier"
    },
    {
        quote: "I love what I do: there is no pressure. The music doesn't like pressure.",
        author: "Burning Spear"
    },
    {
        quote: "But what was my motivation was music, and the fact that I love to move around. I'm always moving around.",
        author: "Suzanne Farrell"
    },
    {
        quote: "If I read or listened to critics of our music, I'd have been discouraged a long time ago.",
        author: "Graham Nash"
    },
    {
        quote: "Preparing for a future in music is an expensive proposition.",
        author: "Itzhak Perlman"
    },
    {
        quote: "You must play for the love of music. Perfect technique is not as important as making music from the heart.",
        author: "Mstislav Rostropovich"
    },
    {
        quote: "Music's staying power is a function of how timeless the lyrics, song and production are.",
        author: "Gary Wright"
    },
    {
        quote: "The visuals are equally as important as the music. It's all a complete experience.",
        author: "Andra Day"
    },
    {
        quote: "Whatever I've got going on, I play music to accompany me.",
        author: "Brooke Burke"
    },
    {
        quote: "I believe that great success is possible in any field - from music to mathematics to macro trading.",
        author: "Paul Tudor Jones"
    },
    {
        quote: "Music should always be an adventure.",
        author: "Coleman Hawkins"
    },
    {
        quote: "Music was my oxygen. It's what saved me from being a really lonely and scared teenager.",
        author: "Corey Hart"
    },
    {
        quote: "Creating music is a wonderful way to celebrate our devotion for Lord Shiva.",
        author: "Amish Tripathi"
    },
    {
        quote: "If you think about it, everything we do in life is set to some kind of music.",
        author: "Peabo Bryson"
    },
    {
        quote: "Most people can't see beauty and love. I see our music as medicine.",
        author: "Maurice White"
    },
    {
        quote: "In my mind, my music is kind of inseparable from my hometown and my life growing up.",
        author: "Drew Holcomb"
    },
    {
        quote: "More than art, more than literature, music is universally accessible.",
        author: "Billy Joel"
    },
    {
        quote: "With Led Zeppelin, it has always been that mystique of how the music is done - how it works, why it works.",
        author: "Jimmy Page"
    },
    {
        quote: "When I went to see Kansas and Queen and Styx, I don't even remember the music. But I know what I saw.",
        author: "Garth Brooks"
    },
    {
        quote: "Music gives us new energy and a stronger sense of purpose.",
        author: "Michael Franti"
    },
    {
        quote: "As you grow older, your music begins to mature and grow older along with you.",
        author: "Zendaya"
    },
    {
        quote: "The people who know nothing about music are the ones always talking about it.",
        author: "Nat King Cole"
    },
    {
        quote: "Music happens to be an art form that transcends language.",
        author: "Herbie Hancock"
    },
    {
        quote: "I write my own music. By myself, on a computer, I program guitar and piano.",
        author: "Christina Grimmie"
    },
    {
        quote: "I see music as fluid architecture.",
        author: "Joni Mitchell"
    },
    {
        quote: "Music comes from a place we don't know.",
        author: "Chris Martin"
    },
    {
        quote: "Music is nothing else but wild sounds civilized into time and tune.",
        author: "Thomas Fuller"
    },
    {
        quote: "We will miss George for his sense of love, his sense of music and his sense of laughter.",
        author: "Ringo Starr"
    },
    {
        quote: "My father loved all different types of music. He wasn't a snob. He wasn't a purist.",
        author: "Ziggy Marley"
    },
    {
        quote: "There's no religion but sex and music.",
        author: "Sting"
    },
    {
        quote: "I think music should be the basis of an education, not just something you do once a week.",
        author: "Joshua Bell"
    },
    {
        quote: "I have no technical training and am completely uneducated in music.",
        author: "Sade Adu"
    },
    {
        quote: "Music commands how we feel, dictates what we experience in our feelings.",
        author: "Sheryl Crow"
    },
    {
        quote: "My music is about the journey, about love and the human experience.",
        author: "Wynonna Judd"
    },
    {
        quote: "My darlings, if I can't write dark, epic music, I can't live!",
        author: "Amy Lee"
    },
    {
        quote: "What the future of the planet and music and art and all of it is sharing; it's diversity.",
        author: "Taj Mahal"
    },
    {
        quote: "Rock music is electronic music, dependent entirely on electronic circuitry and amplification.",
        author: "John Frusciante"
    },
    {
        quote: "I believe that music is connected by human passions and curiosities rather than by marketing strategies.",
        author: "Elvis Costello"
    },
    {
        quote: "If you have some magical chemistry that actually find the music you make compelling, that is a big bonus.",
        author: "Geddy Lee"
    },
    {
        quote: "I found music to be the therapy of choice. I guess it is for a lot of people.",
        author: "David Byrne"
    },
    {
        quote: "Music should be your escape.",
        author: "Missy Elliott"
    },
    {
        quote: "Working on music is the funnest thing for me, and I love it, and I could do it all day, all night.",
        author: "Julian Casablancas"
    },
    {
        quote: "Musicians own music because music owns them.",
        author: "Virgil Thomson"
    },
    {
        quote: "I've played music that's terrible in the past, and not everyone likes you, which is fine.",
        author: "Tash Sultana"
    },
    {
        quote: "I just have this real love and connection with what I'm doing when I play music.",
        author: "Tash Sultana"
    },
    {
        quote: "I'm no different than any other human being. I play music for a living, and we're very blessed.",
        author: "Zac Brown"
    },
    {
        quote: "I guess a good song is a good song is a good song, ya know.",
        author: "George Thorogood"
    },
    {
        quote: "You have the sun, you have the moon, you have the air that you breathe - and you have the Rolling Stones!",
        author: "Keith Richards"
    },
    {
        quote: "There's nothing better than lifting somebody's spirit with music.",
        author: "Darlene Love"
    },
    {
        quote: "I grew up playing music and enjoying good food, friends and family in my own backyard.",
        author: "Rodney Atkins"
    },
    {
        quote: "My music is constantly changing because I am. I'm writing it and changing as I'm writing.",
        author: "Anne-Marie"
    },
    {
        quote: "Music assists him in the use of harmonic and mathematical proportion.",
        author: "Vitruvius"
    },
    {
        quote: "Music is part of history, and our history has lessons that cannot be separated from our greatest music.",
        author: "Mstislav Rostropovich"
    },
    {
        quote: "Music is only love looking for words.",
        author: "Lawrence Durrell"
    },
    {
        quote: "I'm very eclectic in my music tastes - anything from Nina Simone to Beethoven to Talvin Singh.",
        author: "Monica Ali"
    },
    {
        quote: "Music is very spiritual, it has the power to bring people together.",
        author: "Edgar Winter"
    },
    {
        quote: "I'm pretty much open to anyone who's unique and has mutual appreciation in the music as BTS.",
        author: "Suga"
    },
    {
        quote: "The iPod completely changed the way people approach music.",
        author: "Karl Lagerfeld"
    },
    {
        quote: "I think often sadness is a great place to get songs from.",
        author: "Sarah McLachlan"
    },
    {
        quote: "'Music Hop' in 1963 was my first hosting job of a variety program.",
        author: "Alex Trebek"
    },
    {
        quote: "It just happens to be that people like to associate poetry and rap music. I think that idea is kind of corny.",
        author: "Earl Sweatshirt"
    },
    {
        quote: "Music is the fourth great material want, first food, then clothes, then shelter, then music.",
        author: "Christian Nestell Bovee"
    },
    {
        quote: "The real art of conducting consists in transitions.",
        author: "Gustav Mahler"
    },
    {
        quote: "Music is forever; music should grow and mature with you, following you right on up until you die.",
        author: "Paul Simon"
    },
    {
        quote: "We all love musical architecture; there's no doubt about that.",
        author: "Levon Helm"
    },
    {
        quote: "Long intros are cool because there's a little bit of anticipation, you know?",
        author: "Miranda Lambert"
    },
    {
        quote: "Every language has its own music.",
        author: "Sid Caesar"
    },
    {
        quote: "Music is God's gift to man, the only art of Heaven given to earth, the only art of earth we take to Heaven.",
        author: "Walter Savage Landor"
    },
    {
        quote: "I look at you and I write down what I hear.",
        author: "Virgil Thomson"
    },
    {
        quote: "I wake up in the morning, I do a little stretching exercises, pick up the horn and play.",
        author: "Herb Alpert"
    },
    {
        quote: "There's nothing like a good cheating song to make me want to run home to be with my wife.",
        author: "Steven Curtis Chapman"
    },
    {
        quote: "Sometimes before we make a record I go back and listen to a few. It's equally humbling and uplifting.",
        author: "Michael Stipe"
    },
    {
        quote: "That was when I realised that music is the most profound, magical form of communication there is.",
        author: "Lesley Garrett"
    },
    {
        quote: "All music is beautiful.",
        author: "Billy Strayhorn"
    },
    {
        quote: "Writing about music is like dancing about architecture.",
        author: "Martin Mull"
    },
    {
        quote: "I was growing up listening to Queen. Freddie Mercury threw those incredible melodies into his songs.",
        author: "Gary Cherone"
    },
    {
        quote: "Everywhere in the world, music enhances a hall, with one exception: Carnegie Hall enhances the music.",
        author: "Isaac Stern"
    },
    {
        quote: "You can never get silence anywhere nowadays, have you noticed?",
        author: "Bryan Ferry"
    },
    {
        quote: "Secretly, I wanted to look like Jimi Hendrix, but I could never quite pull it off.",
        author: "Bryan Ferry"
    },
    {
        quote: "But when you get music and words together, that can be a very powerful thing.",
        author: "Bryan Ferry"
    },
    {
        quote: "You know, all my songs are relatives, brothers, sisters, cousins.",
        author: "David Coverdale"
    },
    {
        quote: "My father used to sing to me in my mother's womb. I think I can name about any tune in two beats.",
        author: "Yancy Butler"
    },
    {
        quote: "Music is a performance and needs the audience.",
        author: "Michael Tippett"
    },
    {
        quote: "Music is always changing and the changes are unpredictable.",
        author: "Billy Sheehan"
    },
    {
        quote: "Any good music must be an innovation.",
        author: "Les Baxter"
    },
    {
        quote: "My music, my songs are 100 percent inspired by girl power.",
        author: "Paulina Rubio"
    },
    {
        quote: "Music's not like becoming a doctor, who can walk into a community and find people who need him.",
        author: "Charlie Byrd"
    },
    {
        quote: "Composers shouldn't think too much - it interferes with their plagiarism.",
        author: "Howard Dietz"
    }]