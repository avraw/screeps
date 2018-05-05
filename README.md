# screeps
Repository for the game Screeps

## Introduction
As mentioned, this repository is for the game Screeps.
My scripts will be stored here so that they can be updated automatically.

## Main idea
The main idea is that, I will consider it as many robots.  
So the main route will be: perception -> decision -> action  
And some others might be : perception -> reaction -> action  
Still others might be    : perception -> action / learning -> memory / action  
With architecture reactif, there should be a switch / if-elif-else to judge which command to be executed.  
With that said, there should be different roles to identify the creeps.  
The goal is to survive in the game.

## Roles
I will devide them into two parts:
- construction
- military

### Construction
For construction, there will be a few roles
#### Updater
Update constantly the room controller.
#### Harvester
Harvest the energy, and send them to the Spawn or other places where needed.  
There might be some more division
#### Builder
Build something that does not exist yet, such as roads, defense tower, etc.  
There should be a script to autocalculate their position and create the construction sites.
Then the builders will try to build them.

### Military
#### Healer
#### Defenser
