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

export interface NewProjectMemberPayload {
  projectId: string;
  newMemberId: string;
}

export interface UpdateTaskPayload {
  projectId: string;
  task: Task;
}

export interface AssingTaskPayload {
  projectId: string;
  taskId: string;
  userId: string;
}

export type Task = {
  id: string;
  status?: TaskStatus;
  title?: string;
  description?: string;
};

export enum TaskStatus {
  TODO = 'to do',
  PENDING = 'pending',
  DONE = 'done',
}
