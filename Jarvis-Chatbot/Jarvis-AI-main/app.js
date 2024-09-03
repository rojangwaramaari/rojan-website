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
        speak("Good Morning Rojan Shrestha...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Rojan Shrestha...");
    } else {
        speak("Good Evening Rojan Shrestha...");
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

    } else if (message.includes("sing for me")) {
        speak("Anagalney chhu timilai ma Timi kehi… na bhana..Thami rakhne chhu ma timro satha Para nai basera mayaluHa ha ha… mayalu…");
        
    } else {
        // Default case if no other commands match
        speak("I didn't understand that. Please try asking something else.");
    }
}
