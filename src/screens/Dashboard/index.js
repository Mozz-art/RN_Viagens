import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import * as S from "./styles";
import Storage from "../../database/Storage";
import * as Animatable from "react-native-animatable";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  const storage = new Storage();

  useEffect(() => {
    const loadTasks = async () => {
      const savedTasks = await storage.getTasks();
      setTasks(savedTasks);
    };

    loadTasks();
  }, []);

  const addTask = async () => {
    if (newTask.trim() !== "") {
      const newTaskObj = { title: newTask, id: Math.random().toString() };
      await storage.add(newTaskObj);
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
    }
  };

  const removeTask = async (taskId) => {
    await storage.remove(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
    setCompletedTasks(completedTasks.filter((id) => id !== taskId));
  };

  const completeTask = async (taskId) => {
    if (!completedTasks.includes(taskId)) {
      setCompletedTasks([...completedTasks, taskId]);
      await storage.updateTaskCompletion(taskId, true);
    }
  };

  const isTaskCompleted = (taskId) => completedTasks.includes(taskId);

  return (
    <S.Container>
      <Animatable.View animation="slideInDown" duration={2500}>
        <Animatable.View animation="fadeIn" duration={5000}>
          <S.TitleDash>Destinos</S.TitleDash>
        </Animatable.View>
      </Animatable.View>
      {tasks.map((task) => (
        <S.TaskContainer
          key={task.id}
          style={{
            backgroundColor: isTaskCompleted(task.id) ? "#6ac259" : "#fff",
          }}
        >
          <S.TaskText
            style={{
              textDecorationLine: isTaskCompleted(task.id)
                ? "line-through"
                : "none",
              color: isTaskCompleted(task.id) ? "blue" : "#000",
            }}
          >
            {task.title}
          </S.TaskText>
          <S.ActionButton onPress={() => completeTask(task.id)}>
            <MaterialIcons
              name={
                isTaskCompleted(task.id)
                  ? "check-circle"
                  : "radio-button-unchecked"
              }
              size={24}
              color="#fff"
            />
          </S.ActionButton>

          <S.ActionButton onPress={() => removeTask(task.id)}>
            <MaterialIcons name="delete" size={24} color="#fff" />
          </S.ActionButton>
        </S.TaskContainer>
      ))}

      <S.TaskContainer>
        <S.TaskInput
          placeholder="Novo destino"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <S.ActionButton onPress={addTask}>
          <MaterialIcons name="add-circle" size={24} color="#fff" />
        </S.ActionButton>
      </S.TaskContainer>
    </S.Container>
  );
};

export default Dashboard;
