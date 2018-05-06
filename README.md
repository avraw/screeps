# screeps
Repository for the game Screeps

## Introduction
As mentioned, this repository is for the game Screeps.
My scripts will be stored here so that they can be updated automatically.

## Main idea
The main idea is that, I will consider it as many robots.  
So the main route will be: perception -> decision -> action  
And some others might be : perception -> reaction -> action  ( Like soldiers? )
Still others might be    : perception -> action / learning -> memory / action  
With architecture reactif, there should be a switch / if-elif-else to judge which command to be executed.  
With that said, there should be different roles to identify the creeps.  
The goal is to survive in the game.

## Roles
Each role will have two kinds of creeps: one for construction and one for military action.
### Updater
Update constantly certain structure.
- construction: Update constantly the room controller.
- military: Update constantly defensive structures such as the walls and ramparts.
### Harvester
Harvest the energy, and send them to the Spawn or other places where needed.  
- construction: Send to Spawn and extensions
### Builder
Build something that does not exist yet, such as roads, defense tower, etc.
Also responsible for repairing damaged structures.
- construction: Build roads, storages, or labs in the future.
- military: Build towers, walls, ramparts.
### Soldier
