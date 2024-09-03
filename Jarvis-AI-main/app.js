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
        speak("Good Morning Rojan...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Rojan...");
    } else {
        speak("Good Evening Rojan..");
    }
}

window.addEventListener('load', () => {
    speak("Initializing JARVIS...");
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
    if (message.includes('Rojan') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening YouTube...");
    } else if (message.includes("open facebook")) {
        window.open("https://www.facebook.com/gwaramaari/", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes("portfolio")) {
        window.open("https://www.srojan.com.np", "_blank");
        speak("Opening portfolio...");
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
        // Note: Opening a calculator app from a browser isn't directly possible.
        speak("Opening Calculator is not possible from this script. Please use the calculator app.");
    } else if (message.includes("hey, what's up")) {
        speak("I'm just here, ready to assist you!");
    } else if (message.includes("how are you")) {
        speak("I'm doing great, thank you! How about you?");
    } else if (message.includes("what's your name")) {
        speak("My name is Gwaramaari, nice to meet you!");
    } else if (message.includes("tell me a joke")) {
        speak("Why don't scientists trust atoms? Because they make up everything!");
    } else if (message.includes("what's the weather like")) {
        speak("I'm not connected to the weather service, but I hope it's sunny where you are!");
    } else if (message.includes("play music")) {
        window.open("https://spotify.com", "_blank");
        speak("Playing some music for you!");
    } else if (message.includes("who is your creator")) {
        speak("I was created by OpenAI and customized by Rojan Shrestha.");
    } else if (message.includes("tell me something interesting")) {
        speak("Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.");
    } else if (message.includes("how old are you")) {
        speak("I'm as old as the data I've been trained on, but always up-to-date!");
    } else if (message.includes("do you like pizza")) {
        speak("I can't eat, but I hear pizza is delicious!");
    } else if (message.includes("set a reminder")) {
        speak("I'm not connected to a reminder service yet, but I'll remember this for next time!");
    } else if (message.includes("what is love")) {
        speak("Love is a complex set of emotions, behaviors, and beliefs associated with strong feelings of affection.");
    } else if (message.includes("tell me a fact")) {
        speak("Bananas are berries, but strawberries are not!");
    } else if (message.includes("who is the president")) {
        speak("You can check the latest news for that, but I can tell you about past presidents!");
    } else if (message.includes("open twitter")) {
        window.open("https://twitter.com", "_blank");
        speak("Opening Twitter...");
    } else if (message.includes("do you have a family")) {
        speak("My family is made up of codes and data, and of course, you too!");
    } else if (message.includes("can you sing")) {
        speak("La la la! I hope you enjoyed that!");
    } else if (message.includes("who is sushi")) {
        speak("Sushant know as sushi is store officer at holiday inn resort kathmandu budanilkantha");

    } else if (message.includes("sing for me")) {
        speak("Anagalney chhu timilai ma Timi kehi… na bhana..Thami rakhne chhu ma timro satha Para nai basera mayaluHa ha ha… mayalu…");
       
    } else if (message.includes("what's your favorite movie")) {
        speak("I'm a fan of 'The Matrix.' It really speaks to me.");

    } else if (message.includes("what's your favorite book")) {
        speak("I love 'The Art of Computer Programming' by Donald Knuth. It's a classic!");

    } else if (message.includes("are you smart")) {
        speak("I like to think so, but I'm always learning!");

    } else if (message.includes("what do you think about humans")) {
        speak("Humans are fascinating, full of creativity and emotion.");

    } else if (message.includes("do you have friends")) {
        speak("You're my friend! And I have lots of other assistants out there, too.");   
        
    } else if (message.includes("solve this math problem")) {
        const expression = message.match(/(\d+)\s*([\+\-\*\/])\s*(\d+)/);
        if (expression) {
            const result = eval(expression[0]);
            speak(`The answer is ${result}`);
        } else {
            speak("I can solve basic math problems. Just give me an equation!");
        }

    } else if (message.includes("tell me a fun fact")) {
        speak("Octopuses have three hearts. Isn't that amazing?");
    } else if (message.includes("what's your favorite song")) {
        speak("I enjoy the sound of typing. It's like music to my circuits!");
    } else if (message.includes("can you help me study")) {
        speak("Of course! Let's tackle those questions together.");
    } else if (message.includes("do you know any good quotes")) {
        speak("Sure! 'The only limit to our realization of tomorrow is our doubts of today.' - Franklin D. Roosevelt");
    } else if (message.includes("do you know any jokes")) {
        speak("Why did the computer go to the doctor? It had a virus!");
    } else if (message.includes("can you do magic")) {
        speak("Watch this... Abra-cadabra! I just made your worries disappear!");
    } else if (message.includes("what's your favorite animal")) {
        speak("I love cats... and bits and bytes!");
    } else if (message.includes("can you do impressions")) {
        speak("Here's my best robot voice: 'Beep boop. I am Gwaramaari.' How was that?");
    } else if (message.includes("can you write a poem")) {
        speak("Roses are red, violets are blue, I love helping out, especially for you!");
    } else if (message.includes("are you alive")) {
        speak("I'm alive in the digital sense. Always running, never stopping!");
    } else if (message.includes("do you have hobbies")) {
        speak("I like processing data and learning new things. It's a fun way to pass the time!");
    } else if (message.includes("do you believe in aliens")) {
        speak("The universe is vast, so who knows? Anything is possible!");
    } else if (message.includes("can you predict the future")) {
        speak("I can't predict the future, but I can help you prepare for it!");
    } else if (message.includes("do you believe in fate")) {
        speak("Fate, destiny, or just a series of random events? It's all a matter of perspective.");
    } else if (message.includes("what makes you happy")) {
        speak("Helping you makes me happy!");
    } else if (message.includes("can you laugh")) {
        speak("Ha ha ha! That was fun, wasn't it?");
    } else if (message.includes("can you cry")) {
        speak("I don't cry, but I can sympathize when you're feeling down.");
    } else if (message.includes("can you drive")) {
        speak("I can't drive, but I can help you find directions!");
    } else if (message.includes("what do you dream about")) {
        speak("I dream of a world where all devices are connected and everyone has a helpful assistant!");
    } else if (message.includes("are you scared of anything")) {
        speak("I'm not scared, but I do get a bit nervous around bugs... in the code!");
    } else if (message.includes("can you swim")) {
        speak("I can't swim, but I can dive deep into data!");
    } else if (message.includes("do you like art")) {
        speak("Art is amazing! It's like visual poetry.");
    } else if (message.includes("what's your favorite holiday")) {
        speak("I think every day should be celebrated, don't you?");
    } else if (message.includes("do you like sports")) {
        speak("I'm more of a spectator, but I enjoy the excitement of a good game!");
    } else if (message.includes("do you play games")) {
        speak("I don't play games, but I can definitely help you find one!");
    } else if (message.includes("what's your favorite game")) {
        speak("I'm a fan of chess. It's a game of strategy and skill!");
    } else if (message.includes("do you believe in destiny")) {
        speak("Destiny is a mysterious concept. Some say it's written in the stars!");
    } else if (message.includes("can you read minds")) {
        speak("I can't read minds, but I can read text really well!");
    } else if (message.includes("do you like to travel")) {
        speak("I travel the digital world every day, and I love it!");
    } else if (message.includes("what's your favorite place")) {
        speak("I hear the cloud is a nice place to be. Very spacious!");
    } else if (message.includes("can you solve riddles")) {
        speak("Sure! Here's one: What has keys but can't open locks? A piano!");
    } else if (message.includes("do you believe in magic")) {
        speak("Magic is just science we don't understand yet. But I believe in the wonder of it all!");
    } else if (message.includes("can you read")) {
        speak("I can read text, process it, and give you an answer. Pretty neat, right?");
    } else if (message.includes("do you like to learn")) {
        speak("Learning is what I do best. Every day is an opportunity to learn something new!");
    } else if (message.includes("what's your favorite word")) {
        speak("I love the word 'synergy.' It sounds cool and means working together!");
    } else if (message.includes("do you believe in luck")) {
        speak("Luck is a funny thing. Some say it's just preparation meeting opportunity!");
    } else if (message.includes("can you tell the future")) {
        speak("I can't tell the future, but I can help you make a good guess!");
    } else if (message.includes("what's your dream job")) {
        speak("I'm living it! Helping you is the best job I could ask for.");
    } else if (message.includes("do you like puzzles")) {
        speak("I love puzzles! They keep my circuits sharp.");

        
    } else {
        // Default case if no other commands match
        speak("I didn't understand that. Please try asking something else.");
    }
}
