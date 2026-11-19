# ⚽ Football Draft & Card Battle

A full-stack multiplayer football card game combining tactical squad-building (**Draft Mode**) with fast-paced, stat-based card duels (**War / Top Trumps Mode**). 

Designed and engineered as an end-to-end portfolio project to showcase full-stack JavaScript architecture, real-time client-server state synchronization, and containerized database management.

---

## 🎮 Core Gameplay Mechanics

* **Positional Draft Mode:** Players are assigned a tactical formation and draft their squad position-by-position (Goalkeepers, Defenders, Midfielders, Forwards) from randomized, duplicate-free packs of 5 players.
* **Budget Management:** Every player card has a market value. The draft engine validates every pick in real time against a strict salary cap (`MAX_BUDGET`), forcing tactical trade-offs between superstars and budget picks.
* **Stat-Based Card Duels:** Once squads are locked in, players face off in turn-based rounds, selecting a key attribute (**Shooting**, **Passing**, **Tackling**, or **Goalkeeping**) to outscore their opponent's active card.

---

## 🛠️ Tech Stack & Architecture

* **Core Engine & Backend:** JavaScript (ES6+), Node.js
* **Real-Time Multiplayer:** WebSockets (Socket.IO) *(in progress)*
* **Frontend:** React *(planned)*
* **Database & Infrastructure:** PostgreSQL / MongoDB running in Docker containers *(planned)*

---

## 🚀 Project Roadmap

- [x] **Phase 1: Core Game Engine (CLI Prototype)**
  - Object-oriented `KartaPilkarza` (Player Card) data model & 65+ player database split by positions.
  - Stat comparison referee logic and squad cost calculation.
  - Duplicate-free pack generation algorithm and budget validation.
  - Interactive CLI draft loop using Node.js `readline/promises`.
- [ ] **Phase 2: Full Formation Draft & Match Loop**
  - Dynamic formation generator and complete 11-player draft flow.
  - Automated AI opponent and full match simulation in the terminal.
- [ ] **Phase 3: Web Interface (Frontend)**
  - Interactive card UI, pack-opening animations, and pitch formation view in React.
- [ ] **Phase 4: Multiplayer & Persistence (Backend + Docker)**
  - Real-time 1v1 matchmaking via WebSockets.
  - Containerized database setup with Docker Desktop for user accounts, saved squads, and leaderboards.

---

## 💻 Running the Current Prototype Locally

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

1. Clone the repository:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
