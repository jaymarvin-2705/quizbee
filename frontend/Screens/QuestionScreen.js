import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { question } from "../data/question"; // make sure this file exports an array named 'question'

export default function QuizScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigation = useNavigation();

  // ✅ Make sure 'question' is defined and not empty
  if (!question || question.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>No questions available.</Text>
      </View>
    );
  }

  const currentQuestion = question[currentIndex];

  const handleAnswer = (selected) => {
  const isCorrect = selected === currentQuestion.answer;
  const updatedScore = isCorrect ? score + 1 : score;

  // If not the last question → go to next question
  if (currentIndex + 1 < question.length) {
    setScore(updatedScore);
    setCurrentIndex(currentIndex + 1);
  } 
  // If it's the last question → navigate using updatedScore
  else {
    // ✅ Use the computed updatedScore directly
    navigation.navigate("Result", { score: updatedScore, total: question.length });
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{currentQuestion.question}</Text>

      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionButton}
          onPress={() => handleAnswer(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.counter}>
        Question {currentIndex + 1} of {question.length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#000000ff",
  },
  question: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#FFD000"
  },
  optionButton: {
    backgroundColor: "#FFD000",
    padding: 12,
    borderRadius: 10,
    marginVertical: 8,
  },
  optionText: { fontSize: 18, color: "#000000ff", textAlign: "center" },
  counter: { marginTop: 30, textAlign: "center", color: "#b0a7a7ff" },
});

