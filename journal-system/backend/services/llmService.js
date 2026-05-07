const Sentiment = require("sentiment");
const sentiment = new Sentiment();

async function analyzeEmotion(text) {

  const result = sentiment.analyze(text);
  const lowerText = text.toLowerCase();

  let emotion = "calm";

  // keyword based detection
  if (
    lowerText.includes("sad") ||
    lowerText.includes("lonely") ||
    lowerText.includes("depressed")
  ) {
    emotion = "sad";
  } 
  else if (
    lowerText.includes("happy") ||
    lowerText.includes("great") ||
    lowerText.includes("excited")
  ) {
    emotion = "happy";
  } 
  else {
    // fallback to sentiment score
    if (result.score >= 2) emotion = "happy";
    else if (result.score <= -2) emotion = "sad";
    else emotion = "calm";
  }

  let keywords = [];
  let summary = "";

  if (lowerText.includes("rain") || lowerText.includes("forest") || lowerText.includes("nature")) {
    keywords = ["rain", "nature", "peace"];
    summary = "User experienced relaxation during the forest session";
  } 
  else if (emotion === "happy") {
    keywords = ["joy", "positivity", "energy"];
    summary = "User expressed happiness and positive emotions";
  } 
  else if (emotion === "sad") {
    keywords = ["lonely", "stress", "emotion"];
    summary = "User expressed sadness or emotional distress";
  } 
  else {
    keywords = ["calm", "peace", "reflection"];
    summary = "User experienced a calm and reflective moment";
  }

  return {
    emotion,
    keywords,
    summary
  };
}

module.exports = analyzeEmotion;