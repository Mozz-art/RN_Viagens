import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageGaleria {
  async add(task) {
    try {
      const tasksJson = await AsyncStorage.getItem('Tasks');
      let tasksArray = [];

      if (tasksJson !== null) {
        tasksArray = JSON.parse(tasksJson);
      }

      tasksArray.push(task);

      await AsyncStorage.setItem('Tasks', JSON.stringify(tasksArray));
    } catch (error) {
      console.error('Erro ao adicionar tarefa no armazenamento:', error);
    }
  }

  async getTasks() {
    try {
      const tasksJson = await AsyncStorage.getItem('Tasks');
      return tasksJson ? JSON.parse(tasksJson) : [];
    } catch (error) {
      console.error('Erro ao obter tarefas do armazenamento:', error);
      return [];
    }
  }

  async remove(taskId) {
    try {
      const tasksJson = await AsyncStorage.getItem('Tasks');
      let tasksArray = [];

      if (tasksJson !== null) {
        tasksArray = JSON.parse(tasksJson);
        tasksArray = tasksArray.filter((task) => task.id !== taskId);
        await AsyncStorage.setItem('Tasks', JSON.stringify(tasksArray));
      }
    } catch (error) {
      console.error('Erro ao remover tarefa do armazenamento:', error);
    }
  }
}

export default StorageGaleria;