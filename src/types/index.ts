import { Socket } from 'socket.io';

export interface UserJoinPayload {
  userId: string;
  sharedProjects: string[];
}

export interface AddTaskPayload {
  projectId: string;
  taskId: string;
}

export type RemoveTaskPayload = AddTaskPayload;

export type User = {
  id: string;
  email: string;
  name: string;
};

export interface NewProjectMemberPayload {
  projectId: string;
  newMemberId: User;
}

export interface UpdateTaskPayload {
  projectId: string;
  taskData: Task;
}

export interface AssingTaskPayload {
  //
}

export type Task = {
  id: string;
  status: TaskStatus;
  title?: string;
  description?: string;
};

export enum TaskStatus {
  TODO = 'to do',
  PENDING = 'pending',
  DONE = 'done',
}
