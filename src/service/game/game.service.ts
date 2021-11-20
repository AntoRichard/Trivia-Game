import { useState } from "react";
import { deserialize } from "serializr";
import axiosInstance from "../../interceptor/axiosInstance";
import { Question } from "../../models/Question/question.model";
import { apiRoutes } from "../../routes/routeConstants/apiRoutes";

const GameService = () => {
  const [question, setQuestion] = useState<Question>();
  const [loading, setLoading] = useState(false);
  const getQuestion = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(apiRoutes.RANDOM_QUESTIONS);
      setQuestion(deserialize(Question, data[0]));
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    question,
    getQuestion,
  };
};

export default GameService;
