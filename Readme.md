# Dask websocket

The web socket project of a task management application in a synchronized way by a team.

# Setup the project

## Step1: Clone the project

```bash
git clone https://github.com/ngimdock/dask-websocket.git
```

## Step2: Install dependencies

```bash
yarn install
```

## Step3: Setup .env file

```bash
cp .env.example .env
```

Complete the required enviroments variables in the .env file

## Step4: Start the project in development mode

```bash
yarn dev
```

# Note: Have issue port already in use

Kill the process in the runing port of your server, asuming you are using the port 8000.
Run the command:

```bash
sudo kill -9 `sudo lsof -t -i:8000`
```

That's all 🌞
