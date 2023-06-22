import { FirebaseCollection } from 'libs/types';
import { Task } from 'react-native';

export const addTaskItem = async (db: FirebaseCollection, data: Task) => {
  return await db.add(data);
};

export const deleteTaskItem = async (db: FirebaseCollection, id: string) => {
  return await db.doc(id).delete();
};

export const updateTaskItem = async (
  db: FirebaseCollection,
  data: Task,
  id: string
) => {
  return db.doc(id).update(data);
};
