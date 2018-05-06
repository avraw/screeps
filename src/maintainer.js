var maintainer = {
    // Create roads
    roads: function(spawn) {
        // Find out the roads and store it in memory
        if (Memory.roads == null || roads.length == 0) {
            Memory.roads = [];
            // Roads from spawn to sources
            var sources = spawn.room.find(FIND_SOURCES);
            for (var i in sources) {
                roads.push(spawn.room.serializePath(
                    PathFinder.search(spawn.pos, 
                        {pos: sources[i].pos, range: 1})
                ));
            }
            // Road from controller to source
            sources = spawn.room.controller.pos.findClosestByPath(FIND_SOURCES);
            roads.push(spawn.room.serializePath(
                PathFinder.search(spawn.controller.pos,
                    {pos: sources.pos, range: 1});
            ));
        }
        // Construct construction sites for creeps
        else {
            for (var i in Memory.roads) {
                var path = spawn.room.deserializePath(Memory.roads[i]);
                for (var j in path) {
                    spawn.room.createConstructionSite(
                        path[j].x, 
                        path[j].y,
                        STRUCTURE_ROAD
                    );
                }
            }
        }
    }
}
module.exports = maintainer;
