import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { question } from "../data/question"; // make sure this path is correct

export default function QuizScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation();

  // Check if questions exist
  if (!question || question.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>No questions available.</Text>
      </View>
    );
  }

  const currentQuestion = question[currentIndex];

  // Function when user selects an answer
  const handleAnswer = (selected) => {
    if (selectedOption !== null) return; // Prevent multiple taps
    setSelectedOption(selected);

    const isCorrect = selected === currentQuestion.answer;
    const updatedScore = isCorrect ? score + 1 : score;

    // Wait 1 second before going to the next question or result
    setTimeout(() => {
      if (currentIndex + 1 < question.length) {
        setScore(updatedScore);
        setCurrentIndex(currentIndex + 1);
        setSelectedOption(null);
      } else {
        navigation.navigate("Result", { score: updatedScore, total: question.length });
      }
    }, 1000);
  };

  // Change button color depending on answer correctness
  const getOptionStyle = (option) => {
    if (selectedOption === null) return styles.optionButton;

    if (option === currentQuestion.answer) {
      return [styles.optionButton, styles.correctOption];
    }

    if (option === selectedOption && option !== currentQuestion.answer) {
      return [styles.optionButton, styles.wrongOption];
    }

    return styles.optionButton;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{currentQuestion.question}</Text>

      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={getOptionStyle(option)}
          onPress={() => handleAnswer(option)}
          disabled={selectedOption !== null}
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
    backgroundColor: "#000000", // dark background
  },
  question: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#FFD700", // golden text
  },
  optionButton: {
    backgroundColor: "#FFD700", // gold buttons
    padding: 12,
    borderRadius: 10,
    marginVertical: 8,
  },
  optionText: {
    fontSize: 18,
    color: "#000000", // black text
    textAlign: "center",
    fontWeight: "bold",
  },
  correctOption: {
    backgroundColor: "#32CD32", // green for correct
  },
  wrongOption: {
    backgroundColor: "#FF3B3B", // red for wrong
  },
  counter: {
    marginTop: 30,
    textAlign: "center",
    color: "#FFFFFF", // white counter text
  },
});
