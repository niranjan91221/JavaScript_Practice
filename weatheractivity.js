const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Activity suggestions based on weather, mood, and time of day
const activities = {
  sunny: {
    happy: { morning: "Go for a jog in the park.", evening: "Watch the sunset." },
    tired: { morning: "Relax with a book in the sun.", evening: "Have a picnic." },
  },
  rainy: {
    happy: { morning: "Dance in the rain.", evening: "Watch a cozy movie indoors." },
    tired: { morning: "Listen to calming music.", evening: "Make a cup of hot tea." },
  },
  cold: {
    happy: { morning: "Go skiing or build a snowman.", evening: "Have a hot chocolate by the fire." },
    tired: { morning: "Stay in bed and read a book.", evening: "Enjoy a warm bath." },
  },
};

// Function to get user input and suggest activity
function getActivity() {
  rl.question("How's the weather? (sunny, rainy, cold): ", (weather) => {
    if (!activities[weather]) {
      console.log("Sorry, I don't have suggestions for that weather.");
      rl.close();
      return;
    }

    rl.question("How are you feeling? (happy, tired): ", (mood) => {
      if (!activities[weather][mood]) {
        console.log("Sorry, I don't have suggestions for that mood.");
        rl.close();
        return;
      }

      rl.question("What time of day? (morning, evening): ", (time) => {
        if (!activities[weather][mood][time]) {
          console.log("Sorry, I don't have suggestions for that time.");
        } else {
          console.log(`Suggested Activity: ${activities[weather][mood][time]}`);
        }
        rl.close();
      });
    });
  });
}

// Start the program
getActivity();
