import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import * as S from "./styles";
import Storage from "../../database/Storage";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../../database/store";

const Dashboard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.pedometer.tasks);

  const [newTask, setNewTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  const storage = new Storage();

  useEffect(() => {
    const loadTasks = async () => {
      const savedTasks = await storage.getTasks();
      dispatch(addTask(savedTasks)); // Atualiza o estado global com as tarefas do AsyncStorage
    };

    loadTasks();
  }, [dispatch]);

  const addTaskToRedux = async () => {
    if (newTask.trim() !== "") {
      const newTaskObj = { title: newTask, id: Math.random().toString() };
      await storage.add(newTaskObj);
      dispatch(addTask(newTaskObj)); // Adiciona a nova tarefa ao estado global
      setNewTask("");
    }
  };

  const removeTaskFromRedux = async (taskId) => {
    await storage.remove(taskId);
    dispatch(removeTask(taskId)); // Remove a tarefa do estado global
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
      <S.LogoMapa source={require("../../assets/mapa.png")} />
      <S.TitleDash>Destinos</S.TitleDash>

      {tasks.map((task) => (
        <S.TaskContainer
          key={task.id}
          style={{
            backgroundColor: isTaskCompleted(task.id) ? "#1a605a" : "#fff",
          }}
        >
          <S.TaskText
            style={{
              textDecorationLine: isTaskCompleted(task.id)
                ? "line-through"
                : "none",
              color: isTaskCompleted(task.id) ? "white" : "#000",
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

          <S.ActionButton onPress={() => removeTaskFromRedux(task.id)}>
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
        <S.ActionButton onPress={addTaskToRedux}>
          <MaterialIcons name="add-circle" size={25} color="#fff" />
        </S.ActionButton>
      </S.TaskContainer>
    </S.Container>
  );
};

export default Dashboard;
