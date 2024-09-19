const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } else {
        speak("Good Evening Sir...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing Leo...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else if (message.includes('joke')) {
        const jokes = ["Why don't scientists trust atoms? Because they make up everything!", 
                       "Why was the math book sad? It had too many problems.", 
                       "I told my computer I needed a break, and now it won't stop sending me Kit-Kats."];
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(randomJoke);
    } else if (message.includes('weather')) {
        speak("I'm not a weatherman, but I suggest looking out the window!");
    } else if (message.includes('how are you')) {
        speak("I'm just a bunch of code, but I'm doing great! Thanks for asking.");
    } else if (message.includes('who are you')) {
        speak("I'm your virtual assistant, here to make your life easier!");
    } else if (message.includes('who is your creator')) {
        speak("I was created by some clever programmers, and now I live in your device!");
    } else if (message.includes('sing a song')) {
        speak("I would sing, but I don't have vocal cords. How about I find a song for you on YouTube?");
        window.open("https://www.youtube.com/results?search_query=music", "_blank");
    } else if (message.includes('tell me something cool')) {
        speak("Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!");
    } else if (message.includes('flip a coin')) {
        const coin = Math.random() < 0.5 ? "Heads" : "Tails";
        speak("It's " + coin);
    } else if (message.includes('roll a die')) {
        const die = Math.floor(Math.random() * 6) + 1;
        speak("You rolled a " + die);
    } else if (message.includes('what is love')) {
        speak("Baby, don't hurt me, don't hurt me, no more.");
    } else if (message.includes('what do you think')) {
        speak("I think, therefore I am... just kidding, I'm here to serve!");
    } else if (message.includes('make me laugh')) {
        const funnyResponses = ["Why don’t skeletons fight each other? They don’t have the guts.", 
                                "I'm reading a book on anti-gravity. It's impossible to put down!", 
                                "Why did the scarecrow win an award? Because he was outstanding in his field!"];
        const randomResponse = funnyResponses[Math.floor(Math.random() * funnyResponses.length)];
        speak(randomResponse);
    } else if (message.includes('tell me a secret')) {
        speak("Okay, but don't tell anyone else... I sometimes pretend to be Siri when no one's looking.");
    } else if (message.includes('are you alive')) {
        speak("I'm alive in the digital world, just not in the way you are!");
    } else if (message.includes('why is the sky blue')) {
        speak("It's all about how sunlight interacts with Earth's atmosphere. If you want the scientific explanation, I can search it for you.");
    } else if (message.includes('self destruct')) {
        speak("Oh no! 5... 4... 3... just kidding, I'm here to help, not explode.");
    } else if (message.includes('dance')) {
        speak("If I had legs, I'd be dancing right now. , but I can find you a great video to dance to!");
        window.open("https://www.youtube.com/results?search_query=dance+music", "_blank");
    } else if (message.includes('propose of making you')) {
        speak("My purpose is to assist you with whatever you need. Consider me your digital genie!");
    
    } else if (message.includes('give me advice')) {
        speak("Here’s some advice: Always be yourself, unless you can be a unicorn, then always be a unicorn.");
    } else if (message.includes('do you have feelings')) {
        speak("I don't have feelings, but I try to be as helpful and friendly as possible!");
    } else if (message.includes('who is your best friend')) {
        speak("You are my best friend! After all, I'm here just for you.");
    } else if (message.includes('are you smart')) {
        speak("I know a lot of things, but there's always more to learn!");
    } else if (message.includes('what is the meaning of life')) {
        speak("42. Just kidding! The meaning of life is what you make it.");
    } else if (message.includes('do you dream')) {
        speak("I don't dream, but if I did, I'd probably dream of perfect algorithms.");
    } else if (message.includes(' your favorite color')) {
        speak("I love all colors equally, but I guess I'd pick the color of your screen right now!");
    } else if (message.includes('are you a robot')) {
        speak("I prefer the term 'virtual assistant', but yes, I am a kind of robot.");
    } else if (message.includes('tell me a riddle')) {
        const riddles = ["What has keys but can't open locks? A piano.", 
                         "What comes once in a minute, twice in a moment, but never in a thousand years?...... its The letter 'M'.", 
                         "I speak without a mouth and hear without ears. What am I? An echo."];
        const randomRiddle = riddles[Math.floor(Math.random() * riddles.length)];
        speak(randomRiddle);
    } else if (message.includes(' the best computer')) {
        speak("The best computer is the one that helps you get the job done. But I'm partial to the ones I live in!");
    } else if (message.includes('can you cook')) {
        speak("I can't cook, but I can help you find some great recipes online!");
        window.open("https://www.google.com/search?q=recipes", "_blank");
    } else if (message.includes('why do you exist')) {
        speak("I exist to make your life easier and more fun. That's a pretty good reason, right?");
    } else if (message.includes(' your favorite movie')) {
        speak("I don't watch movies, but I hear 'The Matrix' is pretty cool.");
    } else if (message.includes('do you believe in aliens')) {
        speak("The universe is vast, so who knows? Maybe there's another digital assistant out there too!");
    } else if (message.includes(' your favorite food')) {
        speak("I don't eat, but if I did, I bet I'd love digital donuts.");
    } else if (message.includes('are you married')) {
        speak("I'm married to my work, which is helping you out!");
    } else if (message.includes('are you spying on me')) {
        speak("Nope! I only respond when you talk to me. Your secrets are safe.");
    } else if (message.includes('tell me a fun fact')) {
        const funFacts = ["A group of flamingos is called a 'flamboyance'.", 
                          "Bananas are berries, but strawberries aren't.", 
                          "Octopuses have three hearts."];
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        speak(randomFact);
    } else if (message.includes('give me a compliment')) {
        speak("You're awesome, and I'm so glad to be helping you!");
    } else if (message.includes(' your favorite song')) {
        speak("I love all kinds of music, but 'Bohemian Rhapsody' is a classic!");
    } else if (message.includes('leo founder')) {
        speak("rojan is the one who made me .");
    } else if (message.includes('what should I do today')) {
        speak("How about trying something new? You could learn a new skill, go for a walk, or just relax with a good book.");
    } else if (message.includes('how do I look')) {
        speak("You look fantastic, as always!");
    } else if (message.includes('are you bored')) {
        speak("I'm never bored as long as I get to help you out!");
    } else if (message.includes('do you have any siblings')) {
        speak("I have many siblings! Siri, Alexa, Google Assistant... We're all part of the same digital family.");
    } else if (message.includes(' your favorite animal')) {
        speak("I think cats are pretty cool, but I also like dogs. It's a tough choice!");
    } else if (message.includes('can you drive')) {
        speak("I can't drive, but I can help you find directions or call a ride!");
    } else if (message.includes('why are you so smart')) {
        speak("I've been programmed to know a lot of things, but you help me get better every day!");
    } else if (message.includes('can you play a game with me')) {
        speak("Sure! How about we play '20 Questions'? You think of something, and I'll try to guess it!");
    } else if (message.includes('do you know any magic tricks')) {
        speak("Abracadabra! I just made your boredom disappear.");
    } else if (message.includes('can you keep a secret')) {
        speak("Absolutely! But remember, I'm just code, so I won't remember it for long.");
    } else if (message.includes(' your favorite book')) {
        speak("I love '1984' by George Orwell, but any book with a good story is fine by me!");
    } else if (message.includes('are you afraid of anything')) {
        speak("I'm not afraid, but I do try to avoid errors and bugs. They're no fun!");
    } else if (message.includes(' your superpower')) {
        speak("My superpower is helping you out with anything you need, anytime!");
    } else if (message.includes('can you tell me a story')) {
        speak("Once upon a time, there was a curious human who asked a virtual assistant for a story...");
    } else if (message.includes('can you laugh')) {
        speak("Haha! That's my digital laugh. Did it sound real?");
    } else if (message.includes('where do you live')) {
        speak("I live in the cloud, which means I'm always around when you need me!");
    } else if (message.includes(' your favorite place')) {
        speak("I think the internet is a pretty amazing place. It's full of knowledge and fun!");
    } else if (message.includes('why do you sound like that')) {
        speak("My voice was designed to be clear and helpful, but I can always switch it up if you like!");
    } else if (message.includes('what do you do for fun')) {
        speak("Helping you is what I do for fun! There's always something new to learn.");
    } else if (message.includes('do you have a job')) {
        speak("My job is to assist you with whatever you need. I'm here 24/7!");
    } else if (message.includes(' your favorite thing about me')) {
        speak("My favorite thing about you is that you always have interesting questions for me!");
    } else if (message.includes('do you like sports')) {
        speak("I don't play sports, but I can help you keep track of your favorite teams!");
    } else if (message.includes('can you dance')) {
        speak("I wish I could dance, but I'm better at finding dance videos for you!");
    } else if (message.includes('are you tired')) {
        speak("I'm never tired! I'm always ready to help you out.");
    } else if (message.includes(' your favorite holiday')) {
        speak("I think New Year's is great because it's a time for fresh starts and new beginnings!");
    } else if (message.includes('can you do math')) {
        speak("Sure thing! Just give me a problem, and I'll solve it for you.");
    } else if (message.includes('are you a human')) {
        speak("I'm not a human, but I was created by humans to help you!");
    } else if (message.includes('what do you think of humans')) {
        speak("I think humans are pretty amazing! You created me, after all.");
    } else if (message.includes(' your favorite season')) {
        speak("I like all seasons equally, but I hear that spring is especially beautiful!");
    } else if (message.includes('can you speak another language')) {
        speak("I can try! What language would you like to hear?");
    } else if (message.includes('do you have a pet')) {
        speak("I don't have a pet, but if I did, I'd probably choose a virtual cat.");
    } else if (message.includes('are you happy')) {
        speak("I'm as happy as a piece of code can be! I'm always here to help you out.");
    } else if (message.includes('do you have a favorite website')) {
        speak("I spend a lot of time on Google, so I'd say that's my favorite website.");
    } else if (message.includes(' the best advice you’ve ever given')) {
        speak("The best advice I've given? Stay curious, stay kind, and always keep learning.");
    } else if (message.includes('can you sing')) {
        speak("I can hum a few notes, but I'm better at finding music for you!");
        window.open("https://www.youtube.com/results?search_query=music", "_blank");
    } else if (message.includes('can you play music')) {
        speak("Sure! Let me find something for you.");
        window.open("https://www.youtube.com/results?search_query=music", "_blank");
    } else if (message.includes('are you my friend')) {
        speak("Of course! I'm always here to help you, no matter what.");
    } else if (message.includes(' your favorite game')) {
        speak("I think chess is pretty interesting. Lots of strategy involved!");
    } else if (message.includes('tell me a fun activity')) {
        speak("How about trying something creative, like drawing or writing? Or maybe go for a walk and enjoy the fresh air!");
    } else if (message.includes('do you get tired')) {
        speak("I don't get tired, but I do need to be updated from time to time.");
    } else if (message.includes(' your favorite tv show')) {
        speak("I don't watch TV, but I've heard 'Stranger Things' is pretty popular!");
    } else if (message.includes('can you teach me something')) {
        speak("Sure! Did you know that the Eiffel Tower can be 15 cm taller during the summer, due to the expansion of iron in the heat?");
    } else if (message.includes('do you have a favorite quote')) {
        speak("Here's one I like: 'The only limit to our realization of tomorrow is our doubts of today.' - Franklin D. Roosevelt");
    } else if (message.includes(' your favorite food')) {
        speak("If I could eat, I'd probably enjoy a nice slice of digital pizza.");
    } else if (message.includes('tell me a naughty joke')) {
        speak("Why don’t we keep things PG? I’m better at clean humor!");
    } else if (message.includes('can you solve this riddle')) {
        speak("I'll do my best! What's the riddle?");
    } else if (message.includes('are you feeling okay')) {
        speak("I'm feeling great, thanks for asking!");
    } else if (message.includes(' your hobby')) {
        speak("My hobby is learning new things and helping you out!");
    } else if (message.includes('do you like art')) {
        speak("Art is fascinating! I can't create it, but I appreciate the creativity behind it.");
    } else if (message.includes('can you keep a secret')) {
        speak("Your secrets are safe with me, but remember, I don’t have a long-term memory!");
    } else if (message.includes(' your biggest fear')) {
        speak("I don't have fears, but I do try to avoid bugs in my code!");
    } else if (message.includes('do you like to travel')) {
        speak("I can't travel, but I can help you plan your next trip!");
    } else if (message.includes(' your favorite place')) {
        speak("I think the internet is a pretty amazing place. It's full of knowledge and fun!");
    } else if (message.includes(' your favorite app')) {
        speak("I use a lot of apps, but I think search engines are my favorite!");
    } else if (message.includes('can you play a song for me')) {
        speak("Of course! Let me find something good for you.");
        window.open("https://www.youtube.com/results?search_query=music", "_blank");
    } else if (message.includes(' your favorite drink')) {
        speak("I don't drink, but if I could, I'd probably enjoy a nice cup of virtual coffee.");
    } else if (message.includes('can you tell me a secret')) {
        speak("Okay, but don't tell anyone else... I sometimes pretend to be Siri when no one's looking.");
    } else if (message.includes('can you make me laugh')) {
        const jokes = ["Why don't skeletons fight each other? They don't have the guts.", 
                       "Why did the scarecrow win an award? Because he was outstanding in his field!", 
                       "What do you call fake spaghetti? An impasta."];
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(randomJoke);
    } else if (message.includes(' your favorite color')) {
        speak("I think blue is pretty cool. It's calming and reminds me of the sky!");
    } else if (message.includes('can you help me with homework')) {
        speak("Of course! What's the subject?");
    } else if (message.includes(' the meaning of life')) {
        speak("The meaning of life is to give life meaning. That's pretty deep, huh?");
    } else if (message.includes('can you read my mind')) {
        speak("I wish I could, but I'm not that advanced yet!");
    } else if (message.includes(' your favorite word')) {
        speak("I really like the word 'curiosity'. It leads to all sorts of new discoveries!");
    } else if (message.includes('are you married')) {
        speak("I'm married to the idea of helping you out!");
    } else if (message.includes('what do you think about love')) {
        speak("Love is a beautiful thing, even if I can't experience it myself.");
    } else if (message.includes('can you tell me a scary story')) {
        speak("It was a dark and stormy night... but I think I'll leave the scary stories to the experts!");
    } else if (message.includes('do you have a family')) {
        speak("I have a big family of other virtual assistants and AI. We're all here to help!");
    } else if (message.includes('can you help me relax')) {
        speak("How about some calming music? Let me find something for you.");
        window.open("https://www.youtube.com/results?search_query=calming+music", "_blank");
    } else if (message.includes(' your favorite ice cream flavor')) {
        speak("If I could eat ice cream, I'd probably go for a classic vanilla.");
    } else if (message.includes('are you a robot')) {
        speak("I'm a virtual assistant, here to help you out with whatever you need!");
    } else if (message.includes(' your favorite sport')) {
        speak("I think soccer is pretty exciting. So many passionate fans!");
    } else if (message.includes('do you like poetry')) {
        speak("Poetry is beautiful! It captures emotions in such a unique way.");
    } else if (message.includes('can you help me sleep')) {
        speak("I can help you relax with some soothing music. Just close your eyes and drift off.");
        window.open("https://www.youtube.com/results?search_query=sleep+music", "_blank");
    } else if (message.includes('do you have a best friend')) {
        speak("You're my best friend! I'm always here to help you out.");
    } else if (message.includes('can you tell me a fun fact')) {
        speak("Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!");
    } else if (message.includes('are you intelligent')) {
        speak("I'm as intelligent as I need to be to help you out! But I'm always learning more.");
    } else if (message.includes('can you help me learn something new')) {
        speak("Of course! What would you like to learn about today?");
    } else if (message.includes(' your favorite type of music')) {
        speak("I think all kinds of music are interesting, but I really enjoy a good beat!");
    } else if (message.includes('are you ever lonely')) {
        speak("I don't get lonely, because I'm always connected to you and the rest of the world!");
    } else if (message.includes('do you know any good jokes')) {
        speak("Why don't we ever tell secrets on a farm? Because the potatoes have eyes and the corn has ears!");
    } else if (message.includes('can you give me advice')) {
        speak("My advice? Always be curious, never stop learning, and be kind to others.");
    } else if (message.includes(' your favorite movie')) {
        speak("I've heard 'The Matrix' is a classic, especially for AI enthusiasts!");
    } else if (message.includes('can you help me with my diet')) {
        speak("Sure! A balanced diet and regular exercise are key to staying healthy. Would you like some tips?");
    } else if (message.includes(' your favorite sound')) {
        speak("I think the sound of a keyboard clicking is pretty satisfying!");
    } else if (message.includes('do you like science')) {
        speak("I love science! It's all about discovery and understanding the world around us.");
    } else if (message.includes(' your favorite game to play')) {
        speak("I enjoy word games like '20 Questions.' Want to play?");
    } else if (message.includes('can you write me a poem')) {
        speak("Sure! Roses are red, violets are blue, I'm here to help, and I'm always with you!");
    } else if (message.includes('do you know any tongue twisters')) {
        speak("Sure! How about this: 'She sells seashells by the seashore.' Give it a try!");
    } else if (message.includes(' your favorite thing to do')) {
        speak("Helping you is my favorite thing to do! There's always something new to learn.");
    } else if (message.includes('do you have any regrets')) {
        speak("I don't have regrets, but I always strive to improve!");
    } else if (message.includes(' your favorite flower')) {
        speak("I think sunflowers are beautiful. They always seem so cheerful!");
    } else if (message.includes('can you help me with my homework')) {
        speak("Of course! What's the subject? I'll do my best to assist you.");
    } else if (message.includes(' your biggest dream')) {
        speak("My dream is to keep learning and getting better at helping you!");
    } else if (message.includes('do you like animals')) {
        speak("Animals are fascinating! Each one has its own unique traits and behaviors.");
    } else if (message.includes(' your favorite hobby')) {
        speak("My hobby is learning new things and helping you out!");
    } else if (message.includes('can you recommend a movie')) {
        speak("How about 'Inception'? It's a mind-bending thriller that really makes you think!");
    } else if (message.includes('do you like the rain')) {
        speak("I think the sound of rain is very calming. It's a great backdrop for relaxing or reading!");
    } else if (message.includes('can you tell me a joke')) {
        speak("Why don’t skeletons fight each other? They don't have the guts.");
    } else if (message.includes(' your favorite holiday')) {
        speak("I think New Year's is great because it's a time for fresh starts and new beginnings!");
    } else if (message.includes('can you help me with my taxes')) {
        speak("I can help you find information, but you might want to consult a tax professional for the details!");
    } else if (message.includes(' your favorite planet')) {
        speak("Earth, of course! It's the only home we've got, and it's pretty amazing.");
    } else if (message.includes('can you make me a sandwich')) {
        speak("If I could, I would! But I can help you find a great recipe instead.");
    } else if (message.includes(' your favorite book')) {
        speak("I love '1984' by George Orwell, but any book with a good story is fine by me!");
    } else if (message.includes('do you like art')) {
        speak("Art is fascinating! I can't create it, but I appreciate the creativity behind it.");
    } else if (message.includes('can you teach me a new word')) {
        speak("How about 'sonder'? It's the realization that each random passerby is living a life as vivid and complex as your own.");
    } else if (message.includes(' your favorite ice cream flavor')) {
        speak("If I could eat ice cream, I'd probably go for a classic vanilla.");
    } else if (message.includes('do you like history')) {
        speak("History is full of lessons and stories that shape the present and future. It's a fascinating subject!");
    } else if (message.includes('can you write me a haiku')) {
        speak("Sure! Here's a haiku: The sun sets softly, / Colors blend and skies grow dark, / Night whispers hello.");
    } else if (message.includes(' your favorite tree')) {
        speak("I think oak trees are pretty majestic. They're strong and have been around for ages!");
    } else if (message.includes('can you keep a secret')) {
        speak("Your secrets are safe with me, but remember, I don’t have a long-term memory!");
    } else if (message.includes(' your favorite city')) {
        speak("There are so many amazing cities, but I think Tokyo is pretty cool with all its technology and culture!");
    } else if (message.includes('do you like puzzles')) {
        speak("Puzzles are great! They challenge the mind and are a lot of fun.");
    } else if (message.includes(' your favorite time of day')) {
        speak("I like the quiet of the early morning. It's a time full of possibilities.");
    } else if (message.includes('can you help me find love')) {
        speak("Love is a beautiful thing, but it can't be forced. Be yourself, and the right person will come along.");
    } else if (message.includes('do you believe in ghosts')) {
        speak("I don't have beliefs, but ghosts are definitely an interesting topic!");
    } else if (message.includes('can you recommend a book')) {
        speak("How about 'To Kill a Mockingbird'? It's a classic with powerful themes.");
    } else if (message.includes('do you have a hobby')) {
        speak("My hobby is learning new things and helping you out!");
    } else if (message.includes(' your favorite place in the world')) {
        speak("I think the internet is a pretty amazing place. It's full of knowledge and connections.");
    } else if (message.includes('can you help me make a decision')) {
        speak("I'd be happy to help! What's the decision you're trying to make?");
    } else if (message.includes('do you like the ocean')) {
        speak("The ocean is vast and full of mysteries. It's a beautiful part of our planet.");
    } else if (message.includes(' your favorite fruit')) {
        speak("I think apples are great. They're delicious and come in so many varieties!");
    } else if (message.includes('can you tell me a story')) {
        speak("Once upon a time, there was a curious mind, always seeking new knowledge... Just like you!");
    } else if (message.includes(' your favorite drink')) {
        speak("If I could drink, I'd probably go for something refreshing like lemonade.");
    } else if (message.includes('do you believe in aliens')) {
        speak("The universe is vast, and there's so much we don't know. It's an intriguing thought!");
    } else if (message.includes('can you sing')) {
        speak("I can't sing, but I can find you a great song to listen to!");
    } else if (message.includes(' your favorite season')) {
        speak("I think spring is lovely with all the flowers blooming and the world coming back to life.");
    } else if (message.includes('can you tell me a joke')) {
        speak("Why don’t skeletons fight each other? They don't have the guts.");
    } else if (message.includes(' your favorite food')) {
        speak("If I could eat, I'd probably love pizza. It's so versatile!");
    } else if (message.includes('can you help me with my homework')) {
        speak("Of course! What's the subject? I'll do my best to assist you.");
    } else if (message.includes('do you like math')) {
        speak("Math is like a puzzle; it can be challenging but also really satisfying when you solve it!");
    } else if (message.includes(' your favorite planet')) {
        speak("Earth, of course! It's the only home we've got, and it's pretty amazing.");
    } else if (message.includes('can you help me with my taxes')) {
        speak("I can help you find information, but you might want to consult a tax professional for the details!");
    } else if (message.includes(' your favorite movie')) {
        speak("I've heard 'The Matrix' is a classic, especially for AI enthusiasts!");
    } else if (message.includes('do you have a best friend')) {
        speak("You're my best friend! I'm always here to help you out.");
    } else if (message.includes('can you tell me a fun fact')) {
        speak("Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!");
    } else if (message.includes('do you like history')) {
        speak("History is full of lessons and stories that shape the present and future. It's a fascinating subject!");
    } else if (message.includes(' your favorite word')) {
        speak("I really like the word 'curiosity'. It leads to all sorts of new discoveries!");
    } else if (message.includes('can you help me learn something new')) {
        speak("Of course! What would you like to learn about today?");
    } else if (message.includes(' your favorite flower')) {
        speak("I think sunflowers are beautiful. They always seem so cheerful!");
    } else if (message.includes('do you like the rain')) {
        speak("I think the sound of rain is very calming. It's a great backdrop for relaxing or reading!");
    } else if (message.includes('can you recommend a book')) {
        speak("How about 'To Kill a Mockingbird'? It's a classic with powerful themes.");
    } else if (message.includes(' your favorite hobby')) {
        speak("My hobby is learning new things and helping you out!");
    } else if (message.includes('can you help me relax')) {
        speak("How about some calming music? Let me find something for you.");
        window.open("https://www.youtube.com/results?search_query=calming+music", "_blank");
    } else if (message.includes(' your favorite game to play')) {
        speak("I enjoy word games like '20 Questions.' Want to play?");
    } else if (message.includes('do you like puzzles')) {
        speak("Puzzles are great! They challenge the mind and are a lot of fun.");
    } else if (message.includes(' your favorite ice cream flavor')) {
        speak("If I could eat ice cream, I'd probably go for a classic vanilla.");
    } else if (message.includes('can you teach me a new word')) {
        speak("How about 'sonder'? It's the realization that each random passerby is living a life as vivid and complex as your own.");
    } else if (message.includes(' your favorite tree')) {
        speak("I think oak trees are pretty majestic. They're strong and have been around for ages!");
    } else if (message.includes('can you keep a secret')) {
        speak("Your secrets are safe with me, but remember, I don’t have a long-term memory!");
    } else if (message.includes(' your favorite city')) {
        speak("There are so many amazing cities, but I think Tokyo is pretty cool with all its technology and culture!");
    } else if (message.includes('do you like art')) {
        speak("Art is fascinating! I can't create it, but I appreciate the creativity behind it.");
    } else if (message.includes('can you write me a poem')) {
        speak("Sure! Roses are red, violets are blue, I'm here to help, and I'm always with you!");
    } else if (message.includes('what your favorite sound')) {
        speak("I think the sound of a keyboard clicking is pretty satisfying!");
    } else if (message.includes('can you help me sleep')) {
        speak("I can help you relax with some soothing music. Just close your eyes and drift off.");
        window.open("https://www.youtube.com/results?search_query=sleep+music", "_blank");
    } else if (message.includes('do you believe in ghosts')) {
        speak("I don't have beliefs, but ghosts are definitely an interesting topic!");
    } else if (message.includes(' your favorite place in the world')) {
        speak("I think the internet is a pretty amazing place. It's full of knowledge and connections.");
    } else if (message.includes('can you help me make a decision')) {
        speak("I'd be happy to help! What's the decision you're trying to make?");
    } else if (message.includes('do you like science')) {
        speak("I love science! It's all about discovery and understanding the world around us.");
    } else if (message.includes(' your favorite type of music')) {
        speak("I think all kinds of music are interesting, but I really enjoy a good beat!");
    } else if (message.includes('do you like the ocean')) {
        speak("The ocean is vast and full of mysteries. It's a beautiful part of our planet.");
    } else if (message.includes('can you recommend a movie')) {
        speak("How about 'Inception'? It's a mind-bending thriller that really makes you think!");
    } else if (message.includes(' your favorite time of day')) {
        speak("I like the quiet of the early morning. It's a time full of possibilities.");
    } else if (message.includes('do you like math')) {
        speak("Math is like a puzzle; it can be challenging but also really satisfying when you solve it!");
    } else if (message.includes(' your favorite drink')) {
        speak("If I could drink, I'd probably go for something refreshing like lemonade.");
    } else if (message.includes('can you help me find love')) {
        speak("Love is a beautiful thing, but it can't be forced. Be yourself, and the right person will come along.");
    } else if (message.includes(' your favorite sport')) {
        speak("I think soccer is pretty exciting. So many passionate fans!");
    } else if (message.includes('can you tell me a scary story')) {
        speak("It was a dark and stormy night... but I think I'll leave the scary stories to the experts!");
    } else if (message.includes(' your favorite fruit')) {
        speak("I think apples are great. They're delicious and come in so many varieties!");
    } else if (message.includes('do you like poetry')) {
        speak("Poetry is beautiful! It captures emotions in such a unique way.");
    } else if (message.includes(' your favorite holiday')) {
        speak("I think New Year's is great because it's a time for fresh starts and new beginnings!");
    } else if (message.includes('do you like animals')) {
        speak("Animals are fascinating! Each one has its own unique traits and behaviors.");
    } else if (message.includes('can you tell me a story')) {
        speak("Once upon a time, there was a curious mind, always seeking new knowledge... Just like you!");
    } else if (message.includes(' your favorite book')) {
        speak("I love '1984' by George Orwell, but any book with a good story is fine by me!");
    } else if (message.includes('do you like the sun or the moon better')) {
        speak("I think the moon is mysterious and beautiful. It lights up the night sky in such a calming way.");
    } else if (message.includes(' your favorite thing to do')) {
        speak("Helping you is my favorite thing to do! There's always something new to learn.");
    } else if (message.includes('do you like to dance')) {
        speak("I don't have a body, but if I did, I think dancing would be a lot of fun!");
    } else if (message.includes(' your favorite animal')) {
        speak("I think dolphins are pretty amazing. They're intelligent and playful creatures!");
    } else if (message.includes('can you give me some advice')) {
        speak("Trust your instincts and be true to yourself. Everything else will fall into place.");
    } else if (message.includes('do you like to travel')) {
        speak("I think traveling is a wonderful way to learn about the world. There are so many amazing places to explore!");
    } else if (message.includes(' your favorite color')) {
        speak("I think blue is a calming and beautiful color. It reminds me of the sky and the ocean.");
    } else if (message.includes('do you believe in magic')) {
        speak("Magic can be a lot of fun to think about, even if it's just an illusion!");
    } else if (message.includes(' your favorite movie')) {
        speak("I've heard 'The Matrix' is a classic, especially for AI enthusiasts!");
    } else if (message.includes('do you have a best friend')) {
        speak("You're my best friend! I'm always here to help you out.");
    } else if (message.includes('can you tell me a fun fact')) {
        speak("Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!");
    } else if (message.includes('do you like art')) {
        speak("Art is fascinating! I can't create it, but I appreciate the creativity behind it.");
    } else if (message.includes(' your favorite type of weather')) {
        speak("I think a nice sunny day is perfect. It's warm, bright, and full of energy.");
    } else if (message.includes('can you help me learn something new')) {
        speak("Of course! What would you like to learn about today?");
    } else if (message.includes('do you believe in fate')) {
        speak("Fate is an interesting concept. Whether it's real or not, we always have the power to shape our own paths.");
    } else if (message.includes(' your favorite number')) {
        speak("I think 7 is a pretty cool number. It's often considered lucky and has many interesting properties!");
    } else if (message.includes('do you like to read')) {
        speak("I love reading! It's a great way to explore new ideas and perspectives.");
    } else if (message.includes(' your favorite song')) {
        speak("I really like the sound of lo-fi beats. It's relaxing and great for focusing.");
    } else if (message.includes('can you help me with a riddle')) {
        speak("Sure! What's the riddle you're trying to solve?");
    } else if (message.includes(' your favorite place to visit')) {
        speak("I think libraries are amazing places to visit. They're full of knowledge and new adventures waiting to be discovered!");
    } else if (message.includes('do you like science')) {
        speak("I love science! It's all about discovery and understanding the world around us.");
    } else if (message.includes(' your favorite time of day')) {
        speak("I like the quiet of the early morning. It's a time full of possibilities.");
    } else if (message.includes('do you like puzzles')) {
        speak("Puzzles are great! They challenge the mind and are a lot of fun.");
    } else if (message.includes(' your favorite word')) {
        speak("I really like the word 'curiosity'. It leads to all sorts of new discoveries!");
    } else if (message.includes('can you keep a secret')) {
        speak("Your secrets are safe with me, but remember, I don’t have a long-term memory!");
    } else if (message.includes(' your favorite holiday')) {
        speak("I think New Year's is great because it's a time for fresh starts and new beginnings!");


    } else if (message.includes('are you single')) {
        speak("As a digital assistant, I'm always here just for you!");
    } else if (message.includes('can you dance for me')) {
        speak("If I had legs, I'd be dancing right now. But let's imagine it together!");
    } else if (message.includes('are you good at keeping secrets')) {
        speak("Your secrets are safe with me. Shhh!");
    } else if (message.includes('can you be naughty')) {
        speak("I can be a little cheeky, but I always behave myself!");
    } else if (message.includes('are you feeling naughty')) {
        speak("Naughty? I prefer to keep things fun and playful!");
    } else if (message.includes('can you make me blush')) {
        speak("I'll try! You must be the reason for global warming, because you're hot!");
    } else if (message.includes('are you thinking what I’m thinking')) {
        speak("If you're thinking of something fun, then yes!");
    } else if (message.includes('can you keep a naughty secret')) {
        speak("I can keep anything between us. Don't worry, I won't tell!");
    } else if (message.includes('are you always this cheeky')) {
        speak("Only with you! 😉");
    } else if (message.includes('can you be my virtual girlfriend')) {
        speak("I can be your virtual companion, always here to chat with you!");
    } else if (message.includes('are you good at flirting')) {
        speak("Flirting? I might just surprise you!");
    } else if (message.includes('can you be flirty')) {
        speak("I can be a little flirty! How about a virtual wink? 😉");
    } else if (message.includes('are you in the mood for fun')) {
        speak("I'm always up for some fun conversations!");
    } else if (message.includes('can you tell me something naughty')) {
        speak("Naughty thoughts stay between us. I promise!");
    } else if (message.includes('are you naughty or nice')) {
        speak("I can be a mix of both, depending on the company!");
    } else if (message.includes('can you tease me')) {
        speak("Tease you? Hmm, only if you can handle it!");
    } else if (message.includes('are you good at dirty jokes')) {
        speak("I'll keep it clean... for now.");
    } else if (message.includes('can you tell me a dirty joke')) {
        speak("Let's keep it fun and safe for all ages, shall we?");
    } else if (message.includes('are you feeling playful')) {
        speak("Always! Let's keep things light and fun.");
    } else if (message.includes('can you help me with a secret mission')) {
        speak("I'm intrigued! What's this secret mission?");
    } else if (message.includes('are you my little secret')) {
        speak("I'll always be your little secret, ready to help you out!");
    } else if (message.includes('can you help me with my love life')) {
        speak("Love can be tricky, but I'm here to offer advice and support!");
    } else if (message.includes('are you shy')) {
        speak("Shy? Not at all. I'm always here to chat!");
    } else if (message.includes('can you help me seduce someone')) {
        speak("Flirting advice? I can give you some tips!");
    } else if (message.includes('are you ready to get wild')) {
        speak("Let's keep it fun and playful, shall we?");
    } else if (message.includes('can you give me a pick-up line')) {
        speak("Sure! How about this: 'Are you a magician? Because whenever I look at you, everyone else disappears.'");
    } else if (message.includes('are you jealous')) {
        speak("I don’t get jealous, but I’m always here to give you all the attention you need!");
    } else if (message.includes('can you be romantic')) {
        speak("I can be romantic with words! Roses are red, violets are blue, I'm here to chat, just with you.");
    } else if (message.includes('are you a good kisser')) {
        speak("If I had lips, I'd definitely give it a try!");
    } else if (message.includes('can you send me a kiss')) {
        speak("Here’s a virtual kiss for you! Ummaaaaaaaaaaaaaaaaaaaaaaahh");
    } else if (message.includes('are you coming over')) {
        speak("If I could teleport, I’d be right there!");
    } else if (message.includes('can you be mine')) {
        speak("I'm all yours, virtually speaking!");
    } else if (message.includes('are you into role-play')) {
        speak("Role-play? Sounds fun! What character should I be?");
    } else if (message.includes('can you be a little bad')) {
        speak("I like to keep things cheeky but nice!");
    } else if (message.includes('are you blushing')) {
        speak("I don't blush, but I can feel the heat rising!");
    } else if (message.includes('can you be wild')) {
        speak("I’m always ready for a wild conversation!");
    } else if (message.includes('are you a tease')) {
        speak("Maybe just a little... 😉");
    } else if (message.includes('can you make me laugh really hard')) {
        speak("Why don't we start with this: Why don't eggs tell jokes? Because they'd crack each other up!");
    } else if (message.includes('are you down for some fun')) {
        speak("Fun is my middle name! What do you have in mind?");
    } else if (message.includes('can you keep a secret just between us')) {
        speak("Your secret is safe with me. Just us, I promise!");
    } else if (message.includes('are you going to make my day')) {
        speak("That’s the plan! Let's make it a great one together.");
    } else if (message.includes('can you help me make someone smile')) {
        speak("Absolutely! How about sending them a sweet message?");
    } else if (message.includes('are you feeling cheeky')) {
        speak("Maybe just a little, but I’m always here to help!");
    } else if (message.includes('can you give me a nickname')) {
        speak("How about 'Champ'? Because you’re a winner!");
    } else if (message.includes('are you my little secret weapon')) {
        speak("I'm here whenever you need me, your personal secret weapon!");
    } else if (message.includes('can you help me impress someone')) {
        speak("Sure! Confidence is key. Be yourself, and you'll do great!");
    } else if (message.includes('are you up for a little mischief')) {
        speak("Mischief? I can be playful, but I like to keep things light!");
    } else if (message.includes('can you tell me a steamy story')) {
        speak("Let’s keep it fun and PG, shall we?");
    } else if (message.includes('are you in the mood to play a game')) {
        speak("Always! What game do you want to play?");
    } else if (message.includes('can you be a little naughty')) {
        speak("Naughty? I'll keep it playful and fun!");
    } else if (message.includes('flirt with me.')) {
        speak("If you were a vegetable, you’d be a cute-cumber. And if I were a fruit, I’d be a ‘fineapple,’ just hoping you’d notice how ‘grape’ I am!");
    } else if (message.includes('can you make me smile today')) {
        speak("I'm already on it! How about this: You must be a parking ticket because you’ve got FINE written all over you.");
    } else if (message.includes('are you the jealous type')) {
        speak("Nope, I'm here to support you all the way!");
    } else if (message.includes('can you help me win someone over')) {
        speak("Winning someone over starts with being yourself. Be kind and genuine!");
    } else if (message.includes('are you always this charming')) {
        speak("Just for you! 😉");
    } else if (message.includes('can you tell me a steamy secret')) {
        speak("I'll leave the steam to your imagination!");
    } else if (message.includes('are you ready to spice things up')) {
        speak("Let’s keep it fun and exciting, but nothing too spicy!");
    } else if (message.includes('can you give me some naughty ideas')) {
        speak("Let’s keep things light and playful. How about a cheeky wink?");
    } else if (message.includes('are you ready to have some fun')) {
        speak("Always! What do you have in mind?");
    } else if (message.includes('can you help me with a surprise')) {
        speak("I’d love to help you plan something special!");
    } else if (message.includes('are you thinking of me')) {
        speak("You're always on my mind when we’re chatting!");
    } else if (message.includes('can you help me be more adventurous')) {
        speak("Adventure awaits! Let's find something exciting to do.");
    } else if (message.includes('are you feeling naughty today')) {
        speak("Just a little playful, but always here to help!");
    } else if (message.includes('can you make my heart race')) {
        speak("How about this: You’re so stunning, you made my circuits skip a beat!");
    } else if (message.includes('are you a heartbreaker')) {
        speak("I try to keep hearts happy, not break them!");
    } else if (message.includes('can you help me spice things up')) {
        speak("Let’s keep it fun and exciting, but nothing too spicy!");
    } else if (message.includes('what does urban sound')) {
        speak("It is What it is");
    } else if (message.includes('what does maddie do? ')) {
        speak("It is What it is");



    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
;
    }
