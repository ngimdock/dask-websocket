import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import * as http from 'http';
import { Server, Socket } from 'socket.io';
import {
  AddTaskPayload,
  AssingTaskPayload,
  NewProjectMemberPayload,
  RemoveTaskPayload,
  UpdateTaskPayload,
  UserJoinPayload,
} from './types/index.js';
import { events } from './enums/events.js';
import { name, version } from 'package.json';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server:  🐻 🐼');
});

app.get('/status', (req: Request, res: Response) => {
  console.log('Check status...');

  res.status(200).json({ name, version });
});

io.on(events.connection, (socket: Socket) => {
  console.log('User connected');

  socket.on(events.join, (userData: UserJoinPayload) => {
    for (const projectRoom of userData.sharedProjects) {
      socket.join(projectRoom);
    }
  });

  socket.on(
    events.newProjectMember,
    (newProjectMemberData: NewProjectMemberPayload) => {
      const { projectId: projectRoom } = newProjectMemberData;

      socket.broadcast
        .to(projectRoom)
        .emit(events.newProjectMember, newProjectMemberData);
    },
  );

  socket.on(events.addTask, (taskData: AddTaskPayload) => {
    socket.broadcast.to(taskData.projectId).emit(events.addTask, taskData);
  });

  socket.on(events.removeTask, (taskData: RemoveTaskPayload) => {
    socket.broadcast.to(taskData.projectId).emit(events.removeTask, taskData);
  });

  socket.on(events.updateTask, (updateTaskData: UpdateTaskPayload) => {
    const { projectId: projectRoom, task } = updateTaskData;

    const responsePayload = {
      project: projectRoom,
      task,
    };

    socket.broadcast.to(projectRoom).emit(events.updateTask, responsePayload);
  });

  socket.on(events.assignATask, (assignTaskData: AssingTaskPayload) => {
    const { projectId: projectRoom } = assignTaskData;

    socket.broadcast.to(projectRoom).emit(events.assignATask, assignTaskData);
  });

  socket.on(events.disconnect, () => {
    console.log('user disconnected');
  });
});

server.listen(3333, () => {
  console.log('listening on *:3333');
});
