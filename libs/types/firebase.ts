import { firebase } from '../services';

export type FirebaseCollection =
  firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;

export type Priority = 'high' | 'medium' | 'low';
export type SortOrder =  'asc' | 'desc';

export type PriorityWithAll = Priority | 'all';

export type Task = {
  id?:string
  title: string;
  description?: string;
  dueDate: string;
  priority: Priority;
  isCompleted?: boolean;
  createdAt?: string;
  isFavorite?:boolean
};