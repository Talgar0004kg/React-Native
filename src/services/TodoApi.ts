import { Todo } from "../types/todo";

const API_URL = "http://localhost:5000/todos";
// Android emulator -> 10.0.2.2
// iOS simulator -> localhost
// Real device -> your computer local IP

export const getTodos = async (): Promise<Todo[]> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }

    const data: Todo[] = await response.json();
    return data;
  } catch (error) {
    console.log("API Error:", error);
    return [];
  }
};
