import{S as on,i as an,s as ln,k as i,a as c,q as k,l as o,c as u,m as a,r as T,h as e,n as l,p as sn,T as nn,b as H,D as n,H as j}from"../chunks/index.d01e145f.js";function cn(rn){let m,F,f,d,w,A,C,h,I,S,N,D,r,g,M,z,E,R,_,P,O,W,L,U,x,Y,G,v,K,B,y,q;return{c(){m=i("!DOCTYPE"),F=c(),f=i("html"),d=i("head"),w=i("title"),A=k("Maintenance - Moota.co"),C=c(),h=i("link"),I=c(),S=i("style"),N=k(`body {\r
			background-color: black;\r
		}\r
\r
		#pacman {\r
			height: 470px;\r
			width: 382px;\r
			border-radius: 5px;\r
			margin: 20px auto;\r
		}\r
\r
		#shim {\r
			font-family: 'Permanent Marker', cursive;\r
			position: absolute;\r
			visibility: hidden\r
		}\r
\r
		h1 {\r
			font-family: 'Permanent Marker', cursive;\r
			text-align: center;\r
			color: yellow;\r
		}\r
\r
		body {\r
			width: 342px;\r
			margin: 0px auto;\r
			font-family: sans-serif;\r
		}\r
\r
		p {\r
			text-decoration: none;\r
			color: #0000FF;\r
		}`),D=c(),r=i("body"),g=i("div"),M=k("shim for font face"),z=c(),E=i("h1"),R=k("Maintenance"),_=c(),P=i("p"),O=k("Sedang migrasi server dan upgrade engine 23:00 s/d 05:00. Mohon doanya :)"),W=c(),L=i("div"),U=c(),x=i("script"),G=c(),v=i("script"),B=c(),y=i("script"),q=k(`/*jslint browser: true, undef: true, eqeqeq: true, nomen: true, white: true */\r
/*global window: false, document: false */\r
\r
/*\r
 * fix looped audio\r
 * add fruits + levels\r
 * fix what happens when a ghost is eaten (should go back to base)\r
 * do proper ghost mechanics (blinky/wimpy etc)\r
 */\r
\r
var NONE        = 4,\r
    UP          = 3,\r
    LEFT        = 2,\r
    DOWN        = 1,\r
    RIGHT       = 11,\r
    WAITING     = 5,\r
    PAUSE       = 6,\r
    PLAYING     = 7,\r
    COUNTDOWN   = 8,\r
    EATEN_PAUSE = 9,\r
    DYING       = 10,\r
    Pacman      = {};\r
\r
Pacman.FPS = 30;\r
\r
Pacman.Ghost = function (game, map, colour) {\r
\r
    var position  = null,\r
        direction = null,\r
        eatable   = null,\r
        eaten     = null,\r
        due       = null;\r
    \r
    function getNewCoord(dir, current) { \r
        \r
        var speed  = isVunerable() ? 1 : isHidden() ? 4 : 2,\r
            xSpeed = (dir === LEFT && -speed || dir === RIGHT && speed || 0),\r
            ySpeed = (dir === DOWN && speed || dir === UP && -speed || 0);\r
    \r
        return {\r
            "x": addBounded(current.x, xSpeed),\r
            "y": addBounded(current.y, ySpeed)\r
        };\r
    };\r
\r
    /* Collision detection(walls) is done when a ghost lands on an\r
     * exact block, make sure they dont skip over it \r
     */\r
    function addBounded(x1, x2) { \r
        var rem    = x1 % 10, \r
            result = rem + x2;\r
        if (rem !== 0 && result > 10) {\r
            return x1 + (10 - rem);\r
        } else if(rem > 0 && result < 0) { \r
            return x1 - rem;\r
        }\r
        return x1 + x2;\r
    };\r
    \r
    function isVunerable() { \r
        return eatable !== null;\r
    };\r
    \r
    function isDangerous() {\r
        return eaten === null;\r
    };\r
\r
    function isHidden() { \r
        return eatable === null && eaten !== null;\r
    };\r
    \r
    function getRandomDirection() {\r
        var moves = (direction === LEFT || direction === RIGHT) \r
            ? [UP, DOWN] : [LEFT, RIGHT];\r
        return moves[Math.floor(Math.random() * 2)];\r
    };\r
    \r
    function reset() {\r
        eaten = null;\r
        eatable = null;\r
        position = {"x": 90, "y": 80};\r
        direction = getRandomDirection();\r
        due = getRandomDirection();\r
    };\r
    \r
    function onWholeSquare(x) {\r
        return x % 10 === 0;\r
    };\r
    \r
    function oppositeDirection(dir) { \r
        return dir === LEFT && RIGHT ||\r
            dir === RIGHT && LEFT ||\r
            dir === UP && DOWN || UP;\r
    };\r
\r
    function makeEatable() {\r
        direction = oppositeDirection(direction);\r
        eatable = game.getTick();\r
    };\r
\r
    function eat() { \r
        eatable = null;\r
        eaten = game.getTick();\r
    };\r
\r
    function pointToCoord(x) {\r
        return Math.round(x / 10);\r
    };\r
\r
    function nextSquare(x, dir) {\r
        var rem = x % 10;\r
        if (rem === 0) { \r
            return x; \r
        } else if (dir === RIGHT || dir === DOWN) { \r
            return x + (10 - rem);\r
        } else {\r
            return x - rem;\r
        }\r
    };\r
\r
    function onGridSquare(pos) {\r
        return onWholeSquare(pos.y) && onWholeSquare(pos.x);\r
    };\r
\r
    function secondsAgo(tick) { \r
        return (game.getTick() - tick) / Pacman.FPS;\r
    };\r
\r
    function getColour() { \r
        if (eatable) { \r
            if (secondsAgo(eatable) > 5) { \r
                return game.getTick() % 20 > 10 ? "#FFFFFF" : "#0000BB";\r
            } else { \r
                return "#0000BB";\r
            }\r
        } else if(eaten) { \r
            return "#222";\r
        } \r
        return colour;\r
    };\r
\r
    function draw(ctx) {\r
  \r
        var s    = map.blockSize, \r
            top  = (position.y/10) * s,\r
            left = (position.x/10) * s;\r
    \r
        if (eatable && secondsAgo(eatable) > 8) {\r
            eatable = null;\r
        }\r
        \r
        if (eaten && secondsAgo(eaten) > 3) { \r
            eaten = null;\r
        }\r
        \r
        var tl = left + s;\r
        var base = top + s - 3;\r
        var inc = s / 10;\r
\r
        var high = game.getTick() % 10 > 5 ? 3  : -3;\r
        var low  = game.getTick() % 10 > 5 ? -3 : 3;\r
\r
        ctx.fillStyle = getColour();\r
        ctx.beginPath();\r
\r
        ctx.moveTo(left, base);\r
\r
        ctx.quadraticCurveTo(left, top, left + (s/2),  top);\r
        ctx.quadraticCurveTo(left + s, top, left+s,  base);\r
        \r
        // Wavy things at the bottom\r
        ctx.quadraticCurveTo(tl-(inc*1), base+high, tl - (inc * 2),  base);\r
        ctx.quadraticCurveTo(tl-(inc*3), base+low, tl - (inc * 4),  base);\r
        ctx.quadraticCurveTo(tl-(inc*5), base+high, tl - (inc * 6),  base);\r
        ctx.quadraticCurveTo(tl-(inc*7), base+low, tl - (inc * 8),  base); \r
        ctx.quadraticCurveTo(tl-(inc*9), base+high, tl - (inc * 10), base); \r
\r
        ctx.closePath();\r
        ctx.fill();\r
\r
        ctx.beginPath();\r
        ctx.fillStyle = "#FFF";\r
        ctx.arc(left + 6,top + 6, s / 6, 0, 300, false);\r
        ctx.arc((left + s) - 6,top + 6, s / 6, 0, 300, false);\r
        ctx.closePath();\r
        ctx.fill();\r
\r
        var f = s / 12;\r
        var off = {};\r
        off[RIGHT] = [f, 0];\r
        off[LEFT]  = [-f, 0];\r
        off[UP]    = [0, -f];\r
        off[DOWN]  = [0, f];\r
\r
        ctx.beginPath();\r
        ctx.fillStyle = "#000";\r
        ctx.arc(left+6+off[direction][0], top+6+off[direction][1], \r
                s / 15, 0, 300, false);\r
        ctx.arc((left+s)-6+off[direction][0], top+6+off[direction][1], \r
                s / 15, 0, 300, false);\r
        ctx.closePath();\r
        ctx.fill();\r
\r
    };\r
\r
    function pane(pos) {\r
\r
        if (pos.y === 100 && pos.x >= 190 && direction === RIGHT) {\r
            return {"y": 100, "x": -10};\r
        }\r
        \r
        if (pos.y === 100 && pos.x <= -10 && direction === LEFT) {\r
            return position = {"y": 100, "x": 190};\r
        }\r
\r
        return false;\r
    };\r
    \r
    function move(ctx) {\r
        \r
        var oldPos = position,\r
            onGrid = onGridSquare(position),\r
            npos   = null;\r
        \r
        if (due !== direction) {\r
            \r
            npos = getNewCoord(due, position);\r
            \r
            if (onGrid &&\r
                map.isFloorSpace({\r
                    "y":pointToCoord(nextSquare(npos.y, due)),\r
                    "x":pointToCoord(nextSquare(npos.x, due))})) {\r
                direction = due;\r
            } else {\r
                npos = null;\r
            }\r
        }\r
        \r
        if (npos === null) {\r
            npos = getNewCoord(direction, position);\r
        }\r
        \r
        if (onGrid &&\r
            map.isWallSpace({\r
                "y" : pointToCoord(nextSquare(npos.y, direction)),\r
                "x" : pointToCoord(nextSquare(npos.x, direction))\r
            })) {\r
            \r
            due = getRandomDirection();            \r
            return move(ctx);\r
        }\r
\r
        position = npos;        \r
        \r
        var tmp = pane(position);\r
        if (tmp) { \r
            position = tmp;\r
        }\r
        \r
        due = getRandomDirection();\r
        \r
        return {\r
            "new" : position,\r
            "old" : oldPos\r
        };\r
    };\r
    \r
    return {\r
        "eat"         : eat,\r
        "isVunerable" : isVunerable,\r
        "isDangerous" : isDangerous,\r
        "makeEatable" : makeEatable,\r
        "reset"       : reset,\r
        "move"        : move,\r
        "draw"        : draw\r
    };\r
};\r
\r
Pacman.User = function (game, map) {\r
    \r
    var position  = null,\r
        direction = null,\r
        eaten     = null,\r
        due       = null, \r
        lives     = null,\r
        score     = 5,\r
        keyMap    = {};\r
    \r
    keyMap[KEY.ARROW_LEFT]  = LEFT;\r
    keyMap[KEY.ARROW_UP]    = UP;\r
    keyMap[KEY.ARROW_RIGHT] = RIGHT;\r
    keyMap[KEY.ARROW_DOWN]  = DOWN;\r
\r
    function addScore(nScore) { \r
        score += nScore;\r
        if (score >= 10000 && score - nScore < 10000) { \r
            lives += 1;\r
        }\r
    };\r
\r
    function theScore() { \r
        return score;\r
    };\r
\r
    function loseLife() { \r
        lives -= 1;\r
    };\r
\r
    function getLives() {\r
        return lives;\r
    };\r
\r
    function initUser() {\r
        score = 0;\r
        lives = 3;\r
        newLevel();\r
    }\r
    \r
    function newLevel() {\r
        resetPosition();\r
        eaten = 0;\r
    };\r
    \r
    function resetPosition() {\r
        position = {"x": 90, "y": 120};\r
        direction = LEFT;\r
        due = LEFT;\r
    };\r
    \r
    function reset() {\r
        initUser();\r
        resetPosition();\r
    };        \r
    \r
    function keyDown(e) {\r
        if (typeof keyMap[e.keyCode] !== "undefined") { \r
            due = keyMap[e.keyCode];\r
            e.preventDefault();\r
            e.stopPropagation();\r
            return false;\r
        }\r
        return true;\r
	};\r
\r
    function getNewCoord(dir, current) {   \r
        return {\r
            "x": current.x + (dir === LEFT && -2 || dir === RIGHT && 2 || 0),\r
            "y": current.y + (dir === DOWN && 2 || dir === UP    && -2 || 0)\r
        };\r
    };\r
\r
    function onWholeSquare(x) {\r
        return x % 10 === 0;\r
    };\r
\r
    function pointToCoord(x) {\r
        return Math.round(x/10);\r
    };\r
    \r
    function nextSquare(x, dir) {\r
        var rem = x % 10;\r
        if (rem === 0) { \r
            return x; \r
        } else if (dir === RIGHT || dir === DOWN) { \r
            return x + (10 - rem);\r
        } else {\r
            return x - rem;\r
        }\r
    };\r
\r
    function next(pos, dir) {\r
        return {\r
            "y" : pointToCoord(nextSquare(pos.y, dir)),\r
            "x" : pointToCoord(nextSquare(pos.x, dir)),\r
        };                               \r
    };\r
\r
    function onGridSquare(pos) {\r
        return onWholeSquare(pos.y) && onWholeSquare(pos.x);\r
    };\r
\r
    function isOnSamePlane(due, dir) { \r
        return ((due === LEFT || due === RIGHT) && \r
                (dir === LEFT || dir === RIGHT)) || \r
            ((due === UP || due === DOWN) && \r
             (dir === UP || dir === DOWN));\r
    };\r
\r
    function move(ctx) {\r
        \r
        var npos        = null, \r
            nextWhole   = null, \r
            oldPosition = position,\r
            block       = null;\r
        \r
        if (due !== direction) {\r
            npos = getNewCoord(due, position);\r
            \r
            if (isOnSamePlane(due, direction) || \r
                (onGridSquare(position) && \r
                 map.isFloorSpace(next(npos, due)))) {\r
                direction = due;\r
            } else {\r
                npos = null;\r
            }\r
        }\r
\r
        if (npos === null) {\r
            npos = getNewCoord(direction, position);\r
        }\r
        \r
        if (onGridSquare(position) && map.isWallSpace(next(npos, direction))) {\r
            direction = NONE;\r
        }\r
\r
        if (direction === NONE) {\r
            return {"new" : position, "old" : position};\r
        }\r
        \r
        if (npos.y === 100 && npos.x >= 190 && direction === RIGHT) {\r
            npos = {"y": 100, "x": -10};\r
        }\r
        \r
        if (npos.y === 100 && npos.x <= -12 && direction === LEFT) {\r
            npos = {"y": 100, "x": 190};\r
        }\r
        \r
        position = npos;        \r
        nextWhole = next(position, direction);\r
        \r
        block = map.block(nextWhole);        \r
        \r
        if ((isMidSquare(position.y) || isMidSquare(position.x)) &&\r
            block === Pacman.BISCUIT || block === Pacman.PILL) {\r
            \r
            map.setBlock(nextWhole, Pacman.EMPTY);           \r
            addScore((block === Pacman.BISCUIT) ? 10 : 50);\r
            eaten += 1;\r
            \r
            if (eaten === 182) {\r
                game.completedLevel();\r
            }\r
            \r
            if (block === Pacman.PILL) { \r
                game.eatenPill();\r
            }\r
        }   \r
                \r
        return {\r
            "new" : position,\r
            "old" : oldPosition\r
        };\r
    };\r
\r
    function isMidSquare(x) { \r
        var rem = x % 10;\r
        return rem > 3 || rem < 7;\r
    };\r
\r
    function calcAngle(dir, pos) { \r
        if (dir == RIGHT && (pos.x % 10 < 5)) {\r
            return {"start":0.25, "end":1.75, "direction": false};\r
        } else if (dir === DOWN && (pos.y % 10 < 5)) { \r
            return {"start":0.75, "end":2.25, "direction": false};\r
        } else if (dir === UP && (pos.y % 10 < 5)) { \r
            return {"start":1.25, "end":1.75, "direction": true};\r
        } else if (dir === LEFT && (pos.x % 10 < 5)) {             \r
            return {"start":0.75, "end":1.25, "direction": true};\r
        }\r
        return {"start":0, "end":2, "direction": false};\r
    };\r
\r
    function drawDead(ctx, amount) { \r
\r
        var size = map.blockSize, \r
            half = size / 2;\r
\r
        if (amount >= 1) { \r
            return;\r
        }\r
\r
        ctx.fillStyle = "#FFFF00";\r
        ctx.beginPath();        \r
        ctx.moveTo(((position.x/10) * size) + half, \r
                   ((position.y/10) * size) + half);\r
        \r
        ctx.arc(((position.x/10) * size) + half, \r
                ((position.y/10) * size) + half,\r
                half, 0, Math.PI * 2 * amount, true); \r
        \r
        ctx.fill();    \r
    };\r
\r
    function draw(ctx) { \r
\r
        var s     = map.blockSize, \r
            angle = calcAngle(direction, position);\r
\r
        ctx.fillStyle = "#FFFF00";\r
\r
        ctx.beginPath();        \r
\r
        ctx.moveTo(((position.x/10) * s) + s / 2,\r
                   ((position.y/10) * s) + s / 2);\r
        \r
        ctx.arc(((position.x/10) * s) + s / 2,\r
                ((position.y/10) * s) + s / 2,\r
                s / 2, Math.PI * angle.start, \r
                Math.PI * angle.end, angle.direction); \r
        \r
        ctx.fill();    \r
    };\r
    \r
    initUser();\r
\r
    return {\r
        "draw"          : draw,\r
        "drawDead"      : drawDead,\r
        "loseLife"      : loseLife,\r
        "getLives"      : getLives,\r
        "score"         : score,\r
        "addScore"      : addScore,\r
        "theScore"      : theScore,\r
        "keyDown"       : keyDown,\r
        "move"          : move,\r
        "newLevel"      : newLevel,\r
        "reset"         : reset,\r
        "resetPosition" : resetPosition\r
    };\r
};\r
\r
Pacman.Map = function (size) {\r
    \r
    var height    = null, \r
        width     = null, \r
        blockSize = size,\r
        pillSize  = 0,\r
        map       = null;\r
    \r
    function withinBounds(y, x) {\r
        return y >= 0 && y < height && x >= 0 && x < width;\r
    }\r
    \r
    function isWall(pos) {\r
        return withinBounds(pos.y, pos.x) && map[pos.y][pos.x] === Pacman.WALL;\r
    }\r
    \r
    function isFloorSpace(pos) {\r
        if (!withinBounds(pos.y, pos.x)) {\r
            return false;\r
        }\r
        var peice = map[pos.y][pos.x];\r
        return peice === Pacman.EMPTY || \r
            peice === Pacman.BISCUIT ||\r
            peice === Pacman.PILL;\r
    }\r
    \r
    function drawWall(ctx) {\r
\r
        var i, j, p, line;\r
        \r
        ctx.strokeStyle = "#0000FF";\r
        ctx.lineWidth   = 5;\r
        ctx.lineCap     = "round";\r
        \r
        for (i = 0; i < Pacman.WALLS.length; i += 1) {\r
            line = Pacman.WALLS[i];\r
            ctx.beginPath();\r
\r
            for (j = 0; j < line.length; j += 1) {\r
\r
                p = line[j];\r
                \r
                if (p.move) {\r
                    ctx.moveTo(p.move[0] * blockSize, p.move[1] * blockSize);\r
                } else if (p.line) {\r
                    ctx.lineTo(p.line[0] * blockSize, p.line[1] * blockSize);\r
                } else if (p.curve) {\r
                    ctx.quadraticCurveTo(p.curve[0] * blockSize, \r
                                         p.curve[1] * blockSize,\r
                                         p.curve[2] * blockSize, \r
                                         p.curve[3] * blockSize);   \r
                }\r
            }\r
            ctx.stroke();\r
        }\r
    }\r
    \r
    function reset() {       \r
        map    = Pacman.MAP.clone();\r
        height = map.length;\r
        width  = map[0].length;        \r
    };\r
\r
    function block(pos) {\r
        return map[pos.y][pos.x];\r
    };\r
    \r
    function setBlock(pos, type) {\r
        map[pos.y][pos.x] = type;\r
    };\r
\r
    function drawPills(ctx) { \r
\r
        if (++pillSize > 30) {\r
            pillSize = 0;\r
        }\r
        \r
        for (i = 0; i < height; i += 1) {\r
		    for (j = 0; j < width; j += 1) {\r
                if (map[i][j] === Pacman.PILL) {\r
                    ctx.beginPath();\r
\r
                    ctx.fillStyle = "#000";\r
		            ctx.fillRect((j * blockSize), (i * blockSize), \r
                                 blockSize, blockSize);\r
\r
                    ctx.fillStyle = "#FFF";\r
                    ctx.arc((j * blockSize) + blockSize / 2,\r
                            (i * blockSize) + blockSize / 2,\r
                            Math.abs(5 - (pillSize/3)), \r
                            0, \r
                            Math.PI * 2, false); \r
                    ctx.fill();\r
                    ctx.closePath();\r
                }\r
		    }\r
	    }\r
    };\r
    \r
    function draw(ctx) {\r
        \r
        var i, j, size = blockSize;\r
\r
        ctx.fillStyle = "#000";\r
	    ctx.fillRect(0, 0, width * size, height * size);\r
\r
        drawWall(ctx);\r
        \r
        for (i = 0; i < height; i += 1) {\r
		    for (j = 0; j < width; j += 1) {\r
			    drawBlock(i, j, ctx);\r
		    }\r
	    }\r
    };\r
    \r
    function drawBlock(y, x, ctx) {\r
\r
        var layout = map[y][x];\r
\r
        if (layout === Pacman.PILL) {\r
            return;\r
        }\r
\r
        ctx.beginPath();\r
        \r
        if (layout === Pacman.EMPTY || layout === Pacman.BLOCK || \r
            layout === Pacman.BISCUIT) {\r
            \r
            ctx.fillStyle = "#000";\r
		    ctx.fillRect((x * blockSize), (y * blockSize), \r
                         blockSize, blockSize);\r
\r
            if (layout === Pacman.BISCUIT) {\r
                ctx.fillStyle = "#FFF";\r
		        ctx.fillRect((x * blockSize) + (blockSize / 2.5), \r
                             (y * blockSize) + (blockSize / 2.5), \r
                             blockSize / 6, blockSize / 6);\r
	        }\r
        }\r
        ctx.closePath();	 \r
    };\r
\r
    reset();\r
    \r
    return {\r
        "draw"         : draw,\r
        "drawBlock"    : drawBlock,\r
        "drawPills"    : drawPills,\r
        "block"        : block,\r
        "setBlock"     : setBlock,\r
        "reset"        : reset,\r
        "isWallSpace"  : isWall,\r
        "isFloorSpace" : isFloorSpace,\r
        "height"       : height,\r
        "width"        : width,\r
        "blockSize"    : blockSize\r
    };\r
};\r
\r
Pacman.Audio = function(game) {\r
    \r
    var files          = [], \r
        endEvents      = [],\r
        progressEvents = [],\r
        playing        = [];\r
    \r
    function load(name, path, cb) { \r
\r
        var f = files[name] = document.createElement("audio");\r
\r
        progressEvents[name] = function(event) { progress(event, name, cb); };\r
        \r
        f.addEventListener("canplaythrough", progressEvents[name], true);\r
        f.setAttribute("preload", "true");\r
        f.setAttribute("autobuffer", "true");\r
        f.setAttribute("src", path);\r
        f.pause();        \r
    };\r
\r
    function progress(event, name, callback) { \r
        if (event.loaded === event.total && typeof callback === "function") {\r
            callback();\r
            files[name].removeEventListener("canplaythrough", \r
                                            progressEvents[name], true);\r
        }\r
    };\r
\r
    function disableSound() {\r
        for (var i = 0; i < playing.length; i++) {\r
            files[playing[i]].pause();\r
            files[playing[i]].currentTime = 0;\r
        }\r
        playing = [];\r
    };\r
\r
    function ended(name) { \r
\r
        var i, tmp = [], found = false;\r
\r
        files[name].removeEventListener("ended", endEvents[name], true);\r
\r
        for (i = 0; i < playing.length; i++) {\r
            if (!found && playing[i]) { \r
                found = true;\r
            } else { \r
                tmp.push(playing[i]);\r
            }\r
        }\r
        playing = tmp;\r
    };\r
\r
    function play(name) { \r
        if (!game.soundDisabled()) {\r
            endEvents[name] = function() { ended(name); };\r
            playing.push(name);\r
            files[name].addEventListener("ended", endEvents[name], true);\r
            files[name].play();\r
        }\r
    };\r
\r
    function pause() { \r
        for (var i = 0; i < playing.length; i++) {\r
            files[playing[i]].pause();\r
        }\r
    };\r
    \r
    function resume() { \r
        for (var i = 0; i < playing.length; i++) {\r
            files[playing[i]].play();\r
        }        \r
    };\r
    \r
    return {\r
        "disableSound" : disableSound,\r
        "load"         : load,\r
        "play"         : play,\r
        "pause"        : pause,\r
        "resume"       : resume\r
    };\r
};\r
\r
var PACMAN = (function () {\r
\r
    var state        = WAITING,\r
        audio        = null,\r
        ghosts       = [],\r
        ghostSpecs   = ["#00FFDE", "#FF0000", "#FFB8DE", "#FFB847"],\r
        eatenCount   = 0,\r
        level        = 0,\r
        tick         = 0,\r
        ghostPos, userPos, \r
        stateChanged = true,\r
        timerStart   = null,\r
        lastTime     = 0,\r
        ctx          = null,\r
        timer        = null,\r
        map          = null,\r
        user         = null,\r
        stored       = null;\r
\r
    function getTick() { \r
        return tick;\r
    };\r
\r
    function drawScore(text, position) {\r
        ctx.fillStyle = "#FFFFFF";\r
        ctx.font      = "12px BDCartoonShoutRegular";\r
        ctx.fillText(text, \r
                     (position["new"]["x"] / 10) * map.blockSize, \r
                     ((position["new"]["y"] + 5) / 10) * map.blockSize);\r
    }\r
    \r
    function dialog(text) {\r
        ctx.fillStyle = "#FFFF00";\r
        ctx.font      = "18px Calibri";\r
        var width = ctx.measureText(text).width,\r
            x     = ((map.width * map.blockSize) - width) / 2;        \r
        ctx.fillText(text, x, (map.height * 10) + 8);\r
    }\r
\r
    function soundDisabled() {\r
        return localStorage["soundDisabled"] === "true";\r
    };\r
    \r
    function startLevel() {        \r
        user.resetPosition();\r
        for (var i = 0; i < ghosts.length; i += 1) { \r
            ghosts[i].reset();\r
        }\r
        audio.play("start");\r
        timerStart = tick;\r
        setState(COUNTDOWN);\r
    }    \r
\r
    function startNewGame() {\r
        setState(WAITING);\r
        level = 1;\r
        user.reset();\r
        map.reset();\r
        map.draw(ctx);\r
        startLevel();\r
    }\r
\r
    function keyDown(e) {\r
        if (e.keyCode === KEY.N) {\r
            startNewGame();\r
        } else if (e.keyCode === KEY.S) {\r
            audio.disableSound();\r
            localStorage["soundDisabled"] = !soundDisabled();\r
        } else if (e.keyCode === KEY.P && state === PAUSE) {\r
            audio.resume();\r
            map.draw(ctx);\r
            setState(stored);\r
        } else if (e.keyCode === KEY.P) {\r
            stored = state;\r
            setState(PAUSE);\r
            audio.pause();\r
            map.draw(ctx);\r
            dialog("Paused");\r
        } else if (state !== PAUSE) {   \r
            return user.keyDown(e);\r
        }\r
        return true;\r
    }    \r
\r
    function loseLife() {        \r
        setState(WAITING);\r
        user.loseLife();\r
        if (user.getLives() > 0) {\r
            startLevel();\r
        }\r
    }\r
\r
    function setState(nState) { \r
        state = nState;\r
        stateChanged = true;\r
    };\r
    \r
    function collided(user, ghost) {\r
        return (Math.sqrt(Math.pow(ghost.x - user.x, 2) + \r
                          Math.pow(ghost.y - user.y, 2))) < 10;\r
    };\r
\r
    function drawFooter() {\r
        \r
        var topLeft  = (map.height * map.blockSize),\r
            textBase = topLeft + 17;\r
        \r
        ctx.fillStyle = "#000000";\r
        ctx.fillRect(0, topLeft, (map.width * map.blockSize), 30);\r
        \r
        ctx.fillStyle = "#FFFF00";\r
\r
        for (var i = 0, len = user.getLives(); i < len; i++) {\r
            ctx.fillStyle = "#FFFF00";\r
            ctx.beginPath();\r
            ctx.moveTo(150 + (25 * i) + map.blockSize / 2,\r
                       (topLeft+1) + map.blockSize / 2);\r
            \r
            ctx.arc(150 + (25 * i) + map.blockSize / 2,\r
                    (topLeft+1) + map.blockSize / 2,\r
                    map.blockSize / 2, Math.PI * 0.25, Math.PI * 1.75, false);\r
            ctx.fill();\r
        }\r
\r
        ctx.fillStyle = !soundDisabled() ? "#00FF00" : "#FF0000";\r
        ctx.font = "bold 16px sans-serif";\r
        //ctx.fillText("♪", 10, textBase);\r
        ctx.fillText("s", 10, textBase);\r
\r
        ctx.fillStyle = "#FFFF00";\r
        ctx.font      = "14px Calibri";\r
        ctx.fillText("Score: " + user.theScore(), 30, textBase);\r
        ctx.fillText("Level: " + level, 260, textBase);\r
    }\r
\r
    function redrawBlock(pos) {\r
        map.drawBlock(Math.floor(pos.y/10), Math.floor(pos.x/10), ctx);\r
        map.drawBlock(Math.ceil(pos.y/10), Math.ceil(pos.x/10), ctx);\r
    }\r
\r
    function mainDraw() { \r
\r
        var diff, u, i, len, nScore;\r
        \r
        ghostPos = [];\r
\r
        for (i = 0, len = ghosts.length; i < len; i += 1) {\r
            ghostPos.push(ghosts[i].move(ctx));\r
        }\r
        u = user.move(ctx);\r
        \r
        for (i = 0, len = ghosts.length; i < len; i += 1) {\r
            redrawBlock(ghostPos[i].old);\r
        }\r
        redrawBlock(u.old);\r
        \r
        for (i = 0, len = ghosts.length; i < len; i += 1) {\r
            ghosts[i].draw(ctx);\r
        }                     \r
        user.draw(ctx);\r
        \r
        userPos = u["new"];\r
        \r
        for (i = 0, len = ghosts.length; i < len; i += 1) {\r
            if (collided(userPos, ghostPos[i]["new"])) {\r
                if (ghosts[i].isVunerable()) { \r
                    audio.play("eatghost");\r
                    ghosts[i].eat();\r
                    eatenCount += 1;\r
                    nScore = eatenCount * 50;\r
                    drawScore(nScore, ghostPos[i]);\r
                    user.addScore(nScore);                    \r
                    setState(EATEN_PAUSE);\r
                    timerStart = tick;\r
                } else if (ghosts[i].isDangerous()) {\r
                    audio.play("die");\r
                    setState(DYING);\r
                    timerStart = tick;\r
                }\r
            }\r
        }                             \r
    };\r
\r
    function mainLoop() {\r
\r
        var diff;\r
\r
        if (state !== PAUSE) { \r
            ++tick;\r
        }\r
\r
        map.drawPills(ctx);\r
\r
        if (state === PLAYING) {\r
            mainDraw();\r
        } else if (state === WAITING && stateChanged) {            \r
            stateChanged = false;\r
            map.draw(ctx);\r
            dialog("Press N to start a New game");            \r
        } else if (state === EATEN_PAUSE && \r
                   (tick - timerStart) > (Pacman.FPS / 3)) {\r
            map.draw(ctx);\r
            setState(PLAYING);\r
        } else if (state === DYING) {\r
            if (tick - timerStart > (Pacman.FPS * 2)) { \r
                loseLife();\r
            } else { \r
                redrawBlock(userPos);\r
                for (i = 0, len = ghosts.length; i < len; i += 1) {\r
                    redrawBlock(ghostPos[i].old);\r
                    ghostPos.push(ghosts[i].draw(ctx));\r
                }                                   \r
                user.drawDead(ctx, (tick - timerStart) / (Pacman.FPS * 2));\r
            }\r
        } else if (state === COUNTDOWN) {\r
            \r
            diff = 5 + Math.floor((timerStart - tick) / Pacman.FPS);\r
            \r
            if (diff === 0) {\r
                map.draw(ctx);\r
                setState(PLAYING);\r
            } else {\r
                if (diff !== lastTime) { \r
                    lastTime = diff;\r
                    map.draw(ctx);\r
                    dialog("Starting in: " + diff);\r
                }\r
            }\r
        } \r
\r
        drawFooter();\r
    }\r
\r
    function eatenPill() {\r
        audio.play("eatpill");\r
        timerStart = tick;\r
        eatenCount = 0;\r
        for (i = 0; i < ghosts.length; i += 1) {\r
            ghosts[i].makeEatable(ctx);\r
        }        \r
    };\r
    \r
    function completedLevel() {\r
        setState(WAITING);\r
        level += 1;\r
        map.reset();\r
        user.newLevel();\r
        startLevel();\r
    };\r
\r
    function keyPress(e) { \r
        if (state !== WAITING && state !== PAUSE) { \r
            e.preventDefault();\r
            e.stopPropagation();\r
        }\r
    };\r
    \r
    function init(wrapper, root) {\r
        \r
        var i, len, ghost,\r
            blockSize = wrapper.offsetWidth / 19,\r
            canvas    = document.createElement("canvas");\r
        \r
        canvas.setAttribute("width", (blockSize * 19) + "px");\r
        canvas.setAttribute("height", (blockSize * 22) + 30 + "px");\r
\r
        wrapper.appendChild(canvas);\r
\r
        ctx  = canvas.getContext('2d');\r
\r
        audio = new Pacman.Audio({"soundDisabled":soundDisabled});\r
        map   = new Pacman.Map(blockSize);\r
        user  = new Pacman.User({ \r
            "completedLevel" : completedLevel, \r
            "eatenPill"      : eatenPill \r
        }, map);\r
\r
        for (i = 0, len = ghostSpecs.length; i < len; i += 1) {\r
            ghost = new Pacman.Ghost({"getTick":getTick}, map, ghostSpecs[i]);\r
            ghosts.push(ghost);\r
        }\r
        \r
        map.draw(ctx);\r
        dialog("Loading ...");\r
\r
        var extension = Modernizr.audio.ogg ? 'ogg' : 'mp3';\r
\r
        var audio_files = [\r
            ["start", root + "audio/opening_song." + extension],\r
            ["die", root + "audio/die." + extension],\r
            ["eatghost", root + "audio/eatghost." + extension],\r
            ["eatpill", root + "audio/eatpill." + extension],\r
            ["eating", root + "audio/eating.short." + extension],\r
            ["eating2", root + "audio/eating.short." + extension]\r
        ];\r
\r
        load(audio_files, function() { loaded(); });\r
    };\r
\r
    function load(arr, callback) { \r
        \r
        if (arr.length === 0) { \r
            callback();\r
        } else { \r
            var x = arr.pop();\r
            audio.load(x[0], x[1], function() { load(arr, callback); });\r
        }\r
    };\r
        \r
    function loaded() {\r
\r
        dialog("Press N to Start");\r
        \r
        document.addEventListener("keydown", keyDown, true);\r
        document.addEventListener("keypress", keyPress, true); \r
        \r
        timer = window.setInterval(mainLoop, 1000 / Pacman.FPS);\r
    };\r
    \r
    return {\r
        "init" : init\r
    };\r
    \r
}());\r
\r
/* Human readable keyCode index */\r
var KEY = {'BACKSPACE': 8, 'TAB': 9, 'NUM_PAD_CLEAR': 12, 'ENTER': 13, 'SHIFT': 16, 'CTRL': 17, 'ALT': 18, 'PAUSE': 19, 'CAPS_LOCK': 20, 'ESCAPE': 27, 'SPACEBAR': 32, 'PAGE_UP': 33, 'PAGE_DOWN': 34, 'END': 35, 'HOME': 36, 'ARROW_LEFT': 37, 'ARROW_UP': 38, 'ARROW_RIGHT': 39, 'ARROW_DOWN': 40, 'PRINT_SCREEN': 44, 'INSERT': 45, 'DELETE': 46, 'SEMICOLON': 59, 'WINDOWS_LEFT': 91, 'WINDOWS_RIGHT': 92, 'SELECT': 93, 'NUM_PAD_ASTERISK': 106, 'NUM_PAD_PLUS_SIGN': 107, 'NUM_PAD_HYPHEN-MINUS': 109, 'NUM_PAD_FULL_STOP': 110, 'NUM_PAD_SOLIDUS': 111, 'NUM_LOCK': 144, 'SCROLL_LOCK': 145, 'SEMICOLON': 186, 'EQUALS_SIGN': 187, 'COMMA': 188, 'HYPHEN-MINUS': 189, 'FULL_STOP': 190, 'SOLIDUS': 191, 'GRAVE_ACCENT': 192, 'LEFT_SQUARE_BRACKET': 219, 'REVERSE_SOLIDUS': 220, 'RIGHT_SQUARE_BRACKET': 221, 'APOSTROPHE': 222};\r
\r
(function () {\r
	/* 0 - 9 */\r
	for (var i = 48; i <= 57; i++) {\r
        KEY['' + (i - 48)] = i;\r
	}\r
	/* A - Z */\r
	for (i = 65; i <= 90; i++) {\r
        KEY['' + String.fromCharCode(i)] = i;\r
	}\r
	/* NUM_PAD_0 - NUM_PAD_9 */\r
	for (i = 96; i <= 105; i++) {\r
        KEY['NUM_PAD_' + (i - 96)] = i;\r
	}\r
	/* F1 - F12 */\r
	for (i = 112; i <= 123; i++) {\r
        KEY['F' + (i - 112 + 1)] = i;\r
	}\r
})();\r
\r
Pacman.WALL    = 0;\r
Pacman.BISCUIT = 1;\r
Pacman.EMPTY   = 2;\r
Pacman.BLOCK   = 3;\r
Pacman.PILL    = 4;\r
\r
Pacman.MAP = [\r
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],\r
	[0, 4, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 4, 0],\r
	[0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],\r
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\r
	[0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],\r
	[0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],\r
	[0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],\r
	[2, 2, 2, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 2, 2, 2],\r
	[0, 0, 0, 0, 1, 0, 1, 0, 0, 3, 0, 0, 1, 0, 1, 0, 0, 0, 0],\r
	[2, 2, 2, 2, 1, 1, 1, 0, 3, 3, 3, 0, 1, 1, 1, 2, 2, 2, 2],\r
	[0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],\r
	[2, 2, 2, 0, 1, 0, 1, 1, 1, 2, 1, 1, 1, 0, 1, 0, 2, 2, 2],\r
	[0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],\r
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],\r
	[0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],\r
	[0, 4, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 4, 0],\r
	[0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],\r
	[0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],\r
	[0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],\r
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\r
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]\r
];\r
\r
Pacman.WALLS = [\r
    \r
    [{"move": [0, 9.5]}, {"line": [3, 9.5]},\r
     {"curve": [3.5, 9.5, 3.5, 9]}, {"line": [3.5, 8]},\r
     {"curve": [3.5, 7.5, 3, 7.5]}, {"line": [1, 7.5]},\r
     {"curve": [0.5, 7.5, 0.5, 7]}, {"line": [0.5, 1]},\r
     {"curve": [0.5, 0.5, 1, 0.5]}, {"line": [9, 0.5]},\r
     {"curve": [9.5, 0.5, 9.5, 1]}, {"line": [9.5, 3.5]}],\r
\r
    [{"move": [9.5, 1]},\r
     {"curve": [9.5, 0.5, 10, 0.5]}, {"line": [18, 0.5]},\r
     {"curve": [18.5, 0.5, 18.5, 1]}, {"line": [18.5, 7]},\r
     {"curve": [18.5, 7.5, 18, 7.5]}, {"line": [16, 7.5]},\r
     {"curve": [15.5, 7.5, 15.5, 8]}, {"line": [15.5, 9]},\r
     {"curve": [15.5, 9.5, 16, 9.5]}, {"line": [19, 9.5]}],\r
\r
    [{"move": [2.5, 5.5]}, {"line": [3.5, 5.5]}],\r
\r
    [{"move": [3, 2.5]},\r
     {"curve": [3.5, 2.5, 3.5, 3]},\r
     {"curve": [3.5, 3.5, 3, 3.5]},\r
     {"curve": [2.5, 3.5, 2.5, 3]},\r
     {"curve": [2.5, 2.5, 3, 2.5]}],\r
\r
    [{"move": [15.5, 5.5]}, {"line": [16.5, 5.5]}],\r
\r
    [{"move": [16, 2.5]}, {"curve": [16.5, 2.5, 16.5, 3]},\r
     {"curve": [16.5, 3.5, 16, 3.5]}, {"curve": [15.5, 3.5, 15.5, 3]},\r
     {"curve": [15.5, 2.5, 16, 2.5]}],\r
\r
    [{"move": [6, 2.5]}, {"line": [7, 2.5]}, {"curve": [7.5, 2.5, 7.5, 3]},\r
     {"curve": [7.5, 3.5, 7, 3.5]}, {"line": [6, 3.5]},\r
     {"curve": [5.5, 3.5, 5.5, 3]}, {"curve": [5.5, 2.5, 6, 2.5]}],\r
\r
    [{"move": [12, 2.5]}, {"line": [13, 2.5]}, {"curve": [13.5, 2.5, 13.5, 3]},\r
     {"curve": [13.5, 3.5, 13, 3.5]}, {"line": [12, 3.5]},\r
     {"curve": [11.5, 3.5, 11.5, 3]}, {"curve": [11.5, 2.5, 12, 2.5]}],\r
\r
    [{"move": [7.5, 5.5]}, {"line": [9, 5.5]}, {"curve": [9.5, 5.5, 9.5, 6]},\r
     {"line": [9.5, 7.5]}],\r
    [{"move": [9.5, 6]}, {"curve": [9.5, 5.5, 10.5, 5.5]},\r
     {"line": [11.5, 5.5]}],\r
\r
\r
    [{"move": [5.5, 5.5]}, {"line": [5.5, 7]}, {"curve": [5.5, 7.5, 6, 7.5]},\r
     {"line": [7.5, 7.5]}],\r
    [{"move": [6, 7.5]}, {"curve": [5.5, 7.5, 5.5, 8]}, {"line": [5.5, 9.5]}],\r
\r
    [{"move": [13.5, 5.5]}, {"line": [13.5, 7]},\r
     {"curve": [13.5, 7.5, 13, 7.5]}, {"line": [11.5, 7.5]}],\r
    [{"move": [13, 7.5]}, {"curve": [13.5, 7.5, 13.5, 8]},\r
     {"line": [13.5, 9.5]}],\r
\r
    [{"move": [0, 11.5]}, {"line": [3, 11.5]}, {"curve": [3.5, 11.5, 3.5, 12]},\r
     {"line": [3.5, 13]}, {"curve": [3.5, 13.5, 3, 13.5]}, {"line": [1, 13.5]},\r
     {"curve": [0.5, 13.5, 0.5, 14]}, {"line": [0.5, 17]},\r
     {"curve": [0.5, 17.5, 1, 17.5]}, {"line": [1.5, 17.5]}],\r
    [{"move": [1, 17.5]}, {"curve": [0.5, 17.5, 0.5, 18]}, {"line": [0.5, 21]},\r
     {"curve": [0.5, 21.5, 1, 21.5]}, {"line": [18, 21.5]},\r
     {"curve": [18.5, 21.5, 18.5, 21]}, {"line": [18.5, 18]},\r
     {"curve": [18.5, 17.5, 18, 17.5]}, {"line": [17.5, 17.5]}],\r
    [{"move": [18, 17.5]}, {"curve": [18.5, 17.5, 18.5, 17]},\r
     {"line": [18.5, 14]}, {"curve": [18.5, 13.5, 18, 13.5]},\r
     {"line": [16, 13.5]}, {"curve": [15.5, 13.5, 15.5, 13]},\r
     {"line": [15.5, 12]}, {"curve": [15.5, 11.5, 16, 11.5]},\r
     {"line": [19, 11.5]}],\r
\r
    [{"move": [5.5, 11.5]}, {"line": [5.5, 13.5]}],\r
    [{"move": [13.5, 11.5]}, {"line": [13.5, 13.5]}],\r
\r
    [{"move": [2.5, 15.5]}, {"line": [3, 15.5]},\r
     {"curve": [3.5, 15.5, 3.5, 16]}, {"line": [3.5, 17.5]}],\r
    [{"move": [16.5, 15.5]}, {"line": [16, 15.5]},\r
     {"curve": [15.5, 15.5, 15.5, 16]}, {"line": [15.5, 17.5]}],\r
\r
    [{"move": [5.5, 15.5]}, {"line": [7.5, 15.5]}],\r
    [{"move": [11.5, 15.5]}, {"line": [13.5, 15.5]}],\r
    \r
    [{"move": [2.5, 19.5]}, {"line": [5, 19.5]},\r
     {"curve": [5.5, 19.5, 5.5, 19]}, {"line": [5.5, 17.5]}],\r
    [{"move": [5.5, 19]}, {"curve": [5.5, 19.5, 6, 19.5]},\r
     {"line": [7.5, 19.5]}],\r
\r
    [{"move": [11.5, 19.5]}, {"line": [13, 19.5]},\r
     {"curve": [13.5, 19.5, 13.5, 19]}, {"line": [13.5, 17.5]}],\r
    [{"move": [13.5, 19]}, {"curve": [13.5, 19.5, 14, 19.5]},\r
     {"line": [16.5, 19.5]}],\r
\r
    [{"move": [7.5, 13.5]}, {"line": [9, 13.5]},\r
     {"curve": [9.5, 13.5, 9.5, 14]}, {"line": [9.5, 15.5]}],\r
    [{"move": [9.5, 14]}, {"curve": [9.5, 13.5, 10, 13.5]},\r
     {"line": [11.5, 13.5]}],\r
\r
    [{"move": [7.5, 17.5]}, {"line": [9, 17.5]},\r
     {"curve": [9.5, 17.5, 9.5, 18]}, {"line": [9.5, 19.5]}],\r
    [{"move": [9.5, 18]}, {"curve": [9.5, 17.5, 10, 17.5]},\r
     {"line": [11.5, 17.5]}],\r
\r
    [{"move": [8.5, 9.5]}, {"line": [8, 9.5]}, {"curve": [7.5, 9.5, 7.5, 10]},\r
     {"line": [7.5, 11]}, {"curve": [7.5, 11.5, 8, 11.5]},\r
     {"line": [11, 11.5]}, {"curve": [11.5, 11.5, 11.5, 11]},\r
     {"line": [11.5, 10]}, {"curve": [11.5, 9.5, 11, 9.5]},\r
     {"line": [10.5, 9.5]}]\r
];\r
\r
Object.prototype.clone = function () {\r
    var i, newObj = (this instanceof Array) ? [] : {};\r
    for (i in this) {\r
        if (i === 'clone') {\r
            continue;\r
        }\r
        if (this[i] && typeof this[i] === "object") {\r
            newObj[i] = this[i].clone();\r
        } else {\r
            newObj[i] = this[i];\r
        }\r
    }\r
    return newObj;\r
};\r
\r
$(function(){\r
  var el = document.getElementById("pacman");\r
\r
  if (Modernizr.canvas && Modernizr.localstorage && \r
      Modernizr.audio && (Modernizr.audio.ogg || Modernizr.audio.mp3)) {\r
    window.setTimeout(function () { PACMAN.init(el, "https://raw.githubusercontent.com/daleharvey/pacman/master/"); }, 0);\r
  } else { \r
    el.innerHTML = "Sorry, needs a decent browser<br /><small>" + \r
      "(firefox 3.6+, Chrome 4+, Opera 10+ and Safari 4+)</small>";\r
  }\r
});`),this.h()},l(s){m=o(s,"!DOCTYPE",{html:!0}),F=u(s),f=o(s,"HTML",{});var p=a(f);d=o(p,"HEAD",{});var b=a(d);w=o(b,"TITLE",{});var V=a(w);A=T(V,"Maintenance - Moota.co"),V.forEach(e),C=u(b),h=o(b,"LINK",{rel:!0,type:!0,href:!0}),I=u(b),S=o(b,"STYLE",{type:!0});var Q=a(S);N=T(Q,`body {\r
			background-color: black;\r
		}\r
\r
		#pacman {\r
			height: 470px;\r
			width: 382px;\r
			border-radius: 5px;\r
			margin: 20px auto;\r
		}\r
\r
		#shim {\r
			font-family: 'Permanent Marker', cursive;\r
			position: absolute;\r
			visibility: hidden\r
		}\r
\r
		h1 {\r
			font-family: 'Permanent Marker', cursive;\r
			text-align: center;\r
			color: yellow;\r
		}\r
\r
		body {\r
			width: 342px;\r
			margin: 0px auto;\r
			font-family: sans-serif;\r
		}\r
\r
		p {\r
			text-decoration: none;\r
			color: #0000FF;\r
		}`),Q.forEach(e),b.forEach(e),D=u(p),r=o(p,"BODY",{});var t=a(r);g=o(t,"DIV",{id:!0});var Z=a(g);M=T(Z,"shim for font face"),Z.forEach(e),z=u(t),E=o(t,"H1",{});var $=a(E);R=T($,"Maintenance"),$.forEach(e),_=u(t),P=o(t,"P",{style:!0});var J=a(P);O=T(J,"Sedang migrasi server dan upgrade engine 23:00 s/d 05:00. Mohon doanya :)"),J.forEach(e),W=u(t),L=o(t,"DIV",{id:!0}),a(L).forEach(e),U=u(t),x=o(t,"SCRIPT",{type:!0,src:!0});var en=a(x);en.forEach(e),G=u(t),v=o(t,"SCRIPT",{type:!0,src:!0});var tn=a(v);tn.forEach(e),B=u(t),y=o(t,"SCRIPT",{type:!0});var X=a(y);q=T(X,`/*jslint browser: true, undef: true, eqeqeq: true, nomen: true, white: true */\r
/*global window: false, document: false */\r
\r
/*\r
 * fix looped audio\r
 * add fruits + levels\r
 * fix what happens when a ghost is eaten (should go back to base)\r
 * do proper ghost mechanics (blinky/wimpy etc)\r
 */\r
\r
var NONE        = 4,\r
    UP          = 3,\r
    LEFT        = 2,\r
    DOWN        = 1,\r
    RIGHT       = 11,\r
    WAITING     = 5,\r
    PAUSE       = 6,\r
    PLAYING     = 7,\r
    COUNTDOWN   = 8,\r
    EATEN_PAUSE = 9,\r
    DYING       = 10,\r
    Pacman      = {};\r
\r
Pacman.FPS = 30;\r
\r
Pacman.Ghost = function (game, map, colour) {\r
\r
    var position  = null,\r
        direction = null,\r
        eatable   = null,\r
        eaten     = null,\r
        due       = null;\r
    \r
    function getNewCoord(dir, current) { \r
        \r
        var speed  = isVunerable() ? 1 : isHidden() ? 4 : 2,\r
            xSpeed = (dir === LEFT && -speed || dir === RIGHT && speed || 0),\r
            ySpeed = (dir === DOWN && speed || dir === UP && -speed || 0);\r
    \r
        return {\r
            "x": addBounded(current.x, xSpeed),\r
            "y": addBounded(current.y, ySpeed)\r
        };\r
    };\r
\r
    /* Collision detection(walls) is done when a ghost lands on an\r
     * exact block, make sure they dont skip over it \r
     */\r
    function addBounded(x1, x2) { \r
        var rem    = x1 % 10, \r
            result = rem + x2;\r
        if (rem !== 0 && result > 10) {\r
            return x1 + (10 - rem);\r
        } else if(rem > 0 && result < 0) { \r
            return x1 - rem;\r
        }\r
        return x1 + x2;\r
    };\r
    \r
    function isVunerable() { \r
        return eatable !== null;\r
    };\r
    \r
    function isDangerous() {\r
        return eaten === null;\r
    };\r
\r
    function isHidden() { \r
        return eatable === null && eaten !== null;\r
    };\r
    \r
    function getRandomDirection() {\r
        var moves = (direction === LEFT || direction === RIGHT) \r
            ? [UP, DOWN] : [LEFT, RIGHT];\r
        return moves[Math.floor(Math.random() * 2)];\r
    };\r
    \r
    function reset() {\r
        eaten = null;\r
        eatable = null;\r
        position = {"x": 90, "y": 80};\r
        direction = getRandomDirection();\r
        due = getRandomDirection();\r
    };\r
    \r
    function onWholeSquare(x) {\r
        return x % 10 === 0;\r
    };\r
    \r
    function oppositeDirection(dir) { \r
        return dir === LEFT && RIGHT ||\r
            dir === RIGHT && LEFT ||\r
            dir === UP && DOWN || UP;\r
    };\r
\r
    function makeEatable() {\r
        direction = oppositeDirection(direction);\r
        eatable = game.getTick();\r
    };\r
\r
    function eat() { \r
        eatable = null;\r
        eaten = game.getTick();\r
    };\r
\r
    function pointToCoord(x) {\r
        return Math.round(x / 10);\r
    };\r
\r
    function nextSquare(x, dir) {\r
        var rem = x % 10;\r
        if (rem === 0) { \r
            return x; \r
        } else if (dir === RIGHT || dir === DOWN) { \r
            return x + (10 - rem);\r
        } else {\r
            return x - rem;\r
        }\r
    };\r
\r
    function onGridSquare(pos) {\r
        return onWholeSquare(pos.y) && onWholeSquare(pos.x);\r
    };\r
\r
    function secondsAgo(tick) { \r
        return (game.getTick() - tick) / Pacman.FPS;\r
    };\r
\r
    function getColour() { \r
        if (eatable) { \r
            if (secondsAgo(eatable) > 5) { \r
                return game.getTick() % 20 > 10 ? "#FFFFFF" : "#0000BB";\r
            } else { \r
                return "#0000BB";\r
            }\r
        } else if(eaten) { \r
            return "#222";\r
        } \r
        return colour;\r
    };\r
\r
    function draw(ctx) {\r
  \r
        var s    = map.blockSize, \r
            top  = (position.y/10) * s,\r
            left = (position.x/10) * s;\r
    \r
        if (eatable && secondsAgo(eatable) > 8) {\r
            eatable = null;\r
        }\r
        \r
        if (eaten && secondsAgo(eaten) > 3) { \r
            eaten = null;\r
        }\r
        \r
        var tl = left + s;\r
        var base = top + s - 3;\r
        var inc = s / 10;\r
\r
        var high = game.getTick() % 10 > 5 ? 3  : -3;\r
        var low  = game.getTick() % 10 > 5 ? -3 : 3;\r
\r
        ctx.fillStyle = getColour();\r
        ctx.beginPath();\r
\r
        ctx.moveTo(left, base);\r
\r
        ctx.quadraticCurveTo(left, top, left + (s/2),  top);\r
        ctx.quadraticCurveTo(left + s, top, left+s,  base);\r
        \r
        // Wavy things at the bottom\r
        ctx.quadraticCurveTo(tl-(inc*1), base+high, tl - (inc * 2),  base);\r
        ctx.quadraticCurveTo(tl-(inc*3), base+low, tl - (inc * 4),  base);\r
        ctx.quadraticCurveTo(tl-(inc*5), base+high, tl - (inc * 6),  base);\r
        ctx.quadraticCurveTo(tl-(inc*7), base+low, tl - (inc * 8),  base); \r
        ctx.quadraticCurveTo(tl-(inc*9), base+high, tl - (inc * 10), base); \r
\r
        ctx.closePath();\r
        ctx.fill();\r
\r
        ctx.beginPath();\r
        ctx.fillStyle = "#FFF";\r
        ctx.arc(left + 6,top + 6, s / 6, 0, 300, false);\r
        ctx.arc((left + s) - 6,top + 6, s / 6, 0, 300, false);\r
        ctx.closePath();\r
        ctx.fill();\r
\r
        var f = s / 12;\r
        var off = {};\r
        off[RIGHT] = [f, 0];\r
        off[LEFT]  = [-f, 0];\r
        off[UP]    = [0, -f];\r
        off[DOWN]  = [0, f];\r
\r
        ctx.beginPath();\r
        ctx.fillStyle = "#000";\r
        ctx.arc(left+6+off[direction][0], top+6+off[direction][1], \r
                s / 15, 0, 300, false);\r
        ctx.arc((left+s)-6+off[direction][0], top+6+off[direction][1], \r
                s / 15, 0, 300, false);\r
        ctx.closePath();\r
        ctx.fill();\r
\r
    };\r
\r
    function pane(pos) {\r
\r
        if (pos.y === 100 && pos.x >= 190 && direction === RIGHT) {\r
            return {"y": 100, "x": -10};\r
        }\r
        \r
        if (pos.y === 100 && pos.x <= -10 && direction === LEFT) {\r
            return position = {"y": 100, "x": 190};\r
        }\r
\r
        return false;\r
    };\r
    \r
    function move(ctx) {\r
        \r
        var oldPos = position,\r
            onGrid = onGridSquare(position),\r
            npos   = null;\r
        \r
        if (due !== direction) {\r
            \r
            npos = getNewCoord(due, position);\r
            \r
            if (onGrid &&\r
                map.isFloorSpace({\r
                    "y":pointToCoord(nextSquare(npos.y, due)),\r
                    "x":pointToCoord(nextSquare(npos.x, due))})) {\r
                direction = due;\r
            } else {\r
                npos = null;\r
            }\r
        }\r
        \r
        if (npos === null) {\r
            npos = getNewCoord(direction, position);\r
        }\r
        \r
        if (onGrid &&\r
            map.isWallSpace({\r
                "y" : pointToCoord(nextSquare(npos.y, direction)),\r
                "x" : pointToCoord(nextSquare(npos.x, direction))\r
            })) {\r
            \r
            due = getRandomDirection();            \r
            return move(ctx);\r
        }\r
\r
        position = npos;        \r
        \r
        var tmp = pane(position);\r
        if (tmp) { \r
            position = tmp;\r
        }\r
        \r
        due = getRandomDirection();\r
        \r
        return {\r
            "new" : position,\r
            "old" : oldPos\r
        };\r
    };\r
    \r
    return {\r
        "eat"         : eat,\r
        "isVunerable" : isVunerable,\r
        "isDangerous" : isDangerous,\r
        "makeEatable" : makeEatable,\r
        "reset"       : reset,\r
        "move"        : move,\r
        "draw"        : draw\r
    };\r
};\r
\r
Pacman.User = function (game, map) {\r
    \r
    var position  = null,\r
        direction = null,\r
        eaten     = null,\r
        due       = null, \r
        lives     = null,\r
        score     = 5,\r
        keyMap    = {};\r
    \r
    keyMap[KEY.ARROW_LEFT]  = LEFT;\r
    keyMap[KEY.ARROW_UP]    = UP;\r
    keyMap[KEY.ARROW_RIGHT] = RIGHT;\r
    keyMap[KEY.ARROW_DOWN]  = DOWN;\r
\r
    function addScore(nScore) { \r
        score += nScore;\r
        if (score >= 10000 && score - nScore < 10000) { \r
            lives += 1;\r
        }\r
    };\r
\r
    function theScore() { \r
        return score;\r
    };\r
\r
    function loseLife() { \r
        lives -= 1;\r
    };\r
\r
    function getLives() {\r
        return lives;\r
    };\r
\r
    function initUser() {\r
        score = 0;\r
        lives = 3;\r
        newLevel();\r
    }\r
    \r
    function newLevel() {\r
        resetPosition();\r
        eaten = 0;\r
    };\r
    \r
    function resetPosition() {\r
        position = {"x": 90, "y": 120};\r
        direction = LEFT;\r
        due = LEFT;\r
    };\r
    \r
    function reset() {\r
        initUser();\r
        resetPosition();\r
    };        \r
    \r
    function keyDown(e) {\r
        if (typeof keyMap[e.keyCode] !== "undefined") { \r
            due = keyMap[e.keyCode];\r
            e.preventDefault();\r
            e.stopPropagation();\r
            return false;\r
        }\r
        return true;\r
	};\r
\r
    function getNewCoord(dir, current) {   \r
        return {\r
            "x": current.x + (dir === LEFT && -2 || dir === RIGHT && 2 || 0),\r
            "y": current.y + (dir === DOWN && 2 || dir === UP    && -2 || 0)\r
        };\r
    };\r
\r
    function onWholeSquare(x) {\r
        return x % 10 === 0;\r
    };\r
\r
    function pointToCoord(x) {\r
        return Math.round(x/10);\r
    };\r
    \r
    function nextSquare(x, dir) {\r
        var rem = x % 10;\r
        if (rem === 0) { \r
            return x; \r
        } else if (dir === RIGHT || dir === DOWN) { \r
            return x + (10 - rem);\r
        } else {\r
            return x - rem;\r
        }\r
    };\r
\r
    function next(pos, dir) {\r
        return {\r
            "y" : pointToCoord(nextSquare(pos.y, dir)),\r
            "x" : pointToCoord(nextSquare(pos.x, dir)),\r
        };                               \r
    };\r
\r
    function onGridSquare(pos) {\r
        return onWholeSquare(pos.y) && onWholeSquare(pos.x);\r
    };\r
\r
    function isOnSamePlane(due, dir) { \r
        return ((due === LEFT || due === RIGHT) && \r
                (dir === LEFT || dir === RIGHT)) || \r
            ((due === UP || due === DOWN) && \r
             (dir === UP || dir === DOWN));\r
    };\r
\r
    function move(ctx) {\r
        \r
        var npos        = null, \r
            nextWhole   = null, \r
            oldPosition = position,\r
            block       = null;\r
        \r
        if (due !== direction) {\r
            npos = getNewCoord(due, position);\r
            \r
            if (isOnSamePlane(due, direction) || \r
                (onGridSquare(position) && \r
                 map.isFloorSpace(next(npos, due)))) {\r
                direction = due;\r
            } else {\r
                npos = null;\r
            }\r
        }\r
\r
        if (npos === null) {\r
            npos = getNewCoord(direction, position);\r
        }\r
        \r
        if (onGridSquare(position) && map.isWallSpace(next(npos, direction))) {\r
            direction = NONE;\r
        }\r
\r
        if (direction === NONE) {\r
            return {"new" : position, "old" : position};\r
        }\r
        \r
        if (npos.y === 100 && npos.x >= 190 && direction === RIGHT) {\r
            npos = {"y": 100, "x": -10};\r
        }\r
        \r
        if (npos.y === 100 && npos.x <= -12 && direction === LEFT) {\r
            npos = {"y": 100, "x": 190};\r
        }\r
        \r
        position = npos;        \r
        nextWhole = next(position, direction);\r
        \r
        block = map.block(nextWhole);        \r
        \r
        if ((isMidSquare(position.y) || isMidSquare(position.x)) &&\r
            block === Pacman.BISCUIT || block === Pacman.PILL) {\r
            \r
            map.setBlock(nextWhole, Pacman.EMPTY);           \r
            addScore((block === Pacman.BISCUIT) ? 10 : 50);\r
            eaten += 1;\r
            \r
            if (eaten === 182) {\r
                game.completedLevel();\r
            }\r
            \r
            if (block === Pacman.PILL) { \r
                game.eatenPill();\r
            }\r
        }   \r
                \r
        return {\r
            "new" : position,\r
            "old" : oldPosition\r
        };\r
    };\r
\r
    function isMidSquare(x) { \r
        var rem = x % 10;\r
        return rem > 3 || rem < 7;\r
    };\r
\r
    function calcAngle(dir, pos) { \r
        if (dir == RIGHT && (pos.x % 10 < 5)) {\r
            return {"start":0.25, "end":1.75, "direction": false};\r
        } else if (dir === DOWN && (pos.y % 10 < 5)) { \r
            return {"start":0.75, "end":2.25, "direction": false};\r
        } else if (dir === UP && (pos.y % 10 < 5)) { \r
            return {"start":1.25, "end":1.75, "direction": true};\r
        } else if (dir === LEFT && (pos.x % 10 < 5)) {             \r
            return {"start":0.75, "end":1.25, "direction": true};\r
        }\r
        return {"start":0, "end":2, "direction": false};\r
    };\r
\r
    function drawDead(ctx, amount) { \r
\r
        var size = map.blockSize, \r
            half = size / 2;\r
\r
        if (amount >= 1) { \r
            return;\r
        }\r
\r
        ctx.fillStyle = "#FFFF00";\r
        ctx.beginPath();        \r
        ctx.moveTo(((position.x/10) * size) + half, \r
                   ((position.y/10) * size) + half);\r
        \r
        ctx.arc(((position.x/10) * size) + half, \r
                ((position.y/10) * size) + half,\r
                half, 0, Math.PI * 2 * amount, true); \r
        \r
        ctx.fill();    \r
    };\r
\r
    function draw(ctx) { \r
\r
        var s     = map.blockSize, \r
            angle = calcAngle(direction, position);\r
\r
        ctx.fillStyle = "#FFFF00";\r
\r
        ctx.beginPath();        \r
\r
        ctx.moveTo(((position.x/10) * s) + s / 2,\r
                   ((position.y/10) * s) + s / 2);\r
        \r
        ctx.arc(((position.x/10) * s) + s / 2,\r
                ((position.y/10) * s) + s / 2,\r
                s / 2, Math.PI * angle.start, \r
                Math.PI * angle.end, angle.direction); \r
        \r
        ctx.fill();    \r
    };\r
    \r
    initUser();\r
\r
    return {\r
        "draw"          : draw,\r
        "drawDead"      : drawDead,\r
        "loseLife"      : loseLife,\r
        "getLives"      : getLives,\r
        "score"         : score,\r
        "addScore"      : addScore,\r
        "theScore"      : theScore,\r
        "keyDown"       : keyDown,\r
        "move"          : move,\r
        "newLevel"      : newLevel,\r
        "reset"         : reset,\r
        "resetPosition" : resetPosition\r
    };\r
};\r
\r
Pacman.Map = function (size) {\r
    \r
    var height    = null, \r
        width     = null, \r
        blockSize = size,\r
        pillSize  = 0,\r
        map       = null;\r
    \r
    function withinBounds(y, x) {\r
        return y >= 0 && y < height && x >= 0 && x < width;\r
    }\r
    \r
    function isWall(pos) {\r
        return withinBounds(pos.y, pos.x) && map[pos.y][pos.x] === Pacman.WALL;\r
    }\r
    \r
    function isFloorSpace(pos) {\r
        if (!withinBounds(pos.y, pos.x)) {\r
            return false;\r
        }\r
        var peice = map[pos.y][pos.x];\r
        return peice === Pacman.EMPTY || \r
            peice === Pacman.BISCUIT ||\r
            peice === Pacman.PILL;\r
    }\r
    \r
    function drawWall(ctx) {\r
\r
        var i, j, p, line;\r
        \r
        ctx.strokeStyle = "#0000FF";\r
        ctx.lineWidth   = 5;\r
        ctx.lineCap     = "round";\r
        \r
        for (i = 0; i < Pacman.WALLS.length; i += 1) {\r
            line = Pacman.WALLS[i];\r
            ctx.beginPath();\r
\r
            for (j = 0; j < line.length; j += 1) {\r
\r
                p = line[j];\r
                \r
                if (p.move) {\r
                    ctx.moveTo(p.move[0] * blockSize, p.move[1] * blockSize);\r
                } else if (p.line) {\r
                    ctx.lineTo(p.line[0] * blockSize, p.line[1] * blockSize);\r
                } else if (p.curve) {\r
                    ctx.quadraticCurveTo(p.curve[0] * blockSize, \r
                                         p.curve[1] * blockSize,\r
                                         p.curve[2] * blockSize, \r
                                         p.curve[3] * blockSize);   \r
                }\r
            }\r
            ctx.stroke();\r
        }\r
    }\r
    \r
    function reset() {       \r
        map    = Pacman.MAP.clone();\r
        height = map.length;\r
        width  = map[0].length;        \r
    };\r
\r
    function block(pos) {\r
        return map[pos.y][pos.x];\r
    };\r
    \r
    function setBlock(pos, type) {\r
        map[pos.y][pos.x] = type;\r
    };\r
\r
    function drawPills(ctx) { \r
\r
        if (++pillSize > 30) {\r
            pillSize = 0;\r
        }\r
        \r
        for (i = 0; i < height; i += 1) {\r
		    for (j = 0; j < width; j += 1) {\r
                if (map[i][j] === Pacman.PILL) {\r
                    ctx.beginPath();\r
\r
                    ctx.fillStyle = "#000";\r
		            ctx.fillRect((j * blockSize), (i * blockSize), \r
                                 blockSize, blockSize);\r
\r
                    ctx.fillStyle = "#FFF";\r
                    ctx.arc((j * blockSize) + blockSize / 2,\r
                            (i * blockSize) + blockSize / 2,\r
                            Math.abs(5 - (pillSize/3)), \r
                            0, \r
                            Math.PI * 2, false); \r
                    ctx.fill();\r
                    ctx.closePath();\r
                }\r
		    }\r
	    }\r
    };\r
    \r
    function draw(ctx) {\r
        \r
        var i, j, size = blockSize;\r
\r
        ctx.fillStyle = "#000";\r
	    ctx.fillRect(0, 0, width * size, height * size);\r
\r
        drawWall(ctx);\r
        \r
        for (i = 0; i < height; i += 1) {\r
		    for (j = 0; j < width; j += 1) {\r
			    drawBlock(i, j, ctx);\r
		    }\r
	    }\r
    };\r
    \r
    function drawBlock(y, x, ctx) {\r
\r
        var layout = map[y][x];\r
\r
        if (layout === Pacman.PILL) {\r
            return;\r
        }\r
\r
        ctx.beginPath();\r
        \r
        if (layout === Pacman.EMPTY || layout === Pacman.BLOCK || \r
            layout === Pacman.BISCUIT) {\r
            \r
            ctx.fillStyle = "#000";\r
		    ctx.fillRect((x * blockSize), (y * blockSize), \r
                         blockSize, blockSize);\r
\r
            if (layout === Pacman.BISCUIT) {\r
                ctx.fillStyle = "#FFF";\r
		        ctx.fillRect((x * blockSize) + (blockSize / 2.5), \r
                             (y * blockSize) + (blockSize / 2.5), \r
                             blockSize / 6, blockSize / 6);\r
	        }\r
        }\r
        ctx.closePath();	 \r
    };\r
\r
    reset();\r
    \r
    return {\r
        "draw"         : draw,\r
        "drawBlock"    : drawBlock,\r
        "drawPills"    : drawPills,\r
        "block"        : block,\r
        "setBlock"     : setBlock,\r
        "reset"        : reset,\r
        "isWallSpace"  : isWall,\r
        "isFloorSpace" : isFloorSpace,\r
        "height"       : height,\r
        "width"        : width,\r
        "blockSize"    : blockSize\r
    };\r
};\r
\r
Pacman.Audio = function(game) {\r
    \r
    var files          = [], \r
        endEvents      = [],\r
        progressEvents = [],\r
        playing        = [];\r
    \r
    function load(name, path, cb) { \r
\r
        var f = files[name] = document.createElement("audio");\r
\r
        progressEvents[name] = function(event) { progress(event, name, cb); };\r
        \r
        f.addEventListener("canplaythrough", progressEvents[name], true);\r
        f.setAttribute("preload", "true");\r
        f.setAttribute("autobuffer", "true");\r
        f.setAttribute("src", path);\r
        f.pause();        \r
    };\r
\r
    function progress(event, name, callback) { \r
        if (event.loaded === event.total && typeof callback === "function") {\r
            callback();\r
            files[name].removeEventListener("canplaythrough", \r
                                            progressEvents[name], true);\r
        }\r
    };\r
\r
    function disableSound() {\r
        for (var i = 0; i < playing.length; i++) {\r
            files[playing[i]].pause();\r
            files[playing[i]].currentTime = 0;\r
        }\r
        playing = [];\r
    };\r
\r
    function ended(name) { \r
\r
        var i, tmp = [], found = false;\r
\r
        files[name].removeEventListener("ended", endEvents[name], true);\r
\r
        for (i = 0; i < playing.length; i++) {\r
            if (!found && playing[i]) { \r
                found = true;\r
            } else { \r
                tmp.push(playing[i]);\r
            }\r
        }\r
        playing = tmp;\r
    };\r
\r
    function play(name) { \r
        if (!game.soundDisabled()) {\r
            endEvents[name] = function() { ended(name); };\r
            playing.push(name);\r
            files[name].addEventListener("ended", endEvents[name], true);\r
            files[name].play();\r
        }\r
    };\r
\r
    function pause() { \r
        for (var i = 0; i < playing.length; i++) {\r
            files[playing[i]].pause();\r
        }\r
    };\r
    \r
    function resume() { \r
        for (var i = 0; i < playing.length; i++) {\r
            files[playing[i]].play();\r
        }        \r
    };\r
    \r
    return {\r
        "disableSound" : disableSound,\r
        "load"         : load,\r
        "play"         : play,\r
        "pause"        : pause,\r
        "resume"       : resume\r
    };\r
};\r
\r
var PACMAN = (function () {\r
\r
    var state        = WAITING,\r
        audio        = null,\r
        ghosts       = [],\r
        ghostSpecs   = ["#00FFDE", "#FF0000", "#FFB8DE", "#FFB847"],\r
        eatenCount   = 0,\r
        level        = 0,\r
        tick         = 0,\r
        ghostPos, userPos, \r
        stateChanged = true,\r
        timerStart   = null,\r
        lastTime     = 0,\r
        ctx          = null,\r
        timer        = null,\r
        map          = null,\r
        user         = null,\r
        stored       = null;\r
\r
    function getTick() { \r
        return tick;\r
    };\r
\r
    function drawScore(text, position) {\r
        ctx.fillStyle = "#FFFFFF";\r
        ctx.font      = "12px BDCartoonShoutRegular";\r
        ctx.fillText(text, \r
                     (position["new"]["x"] / 10) * map.blockSize, \r
                     ((position["new"]["y"] + 5) / 10) * map.blockSize);\r
    }\r
    \r
    function dialog(text) {\r
        ctx.fillStyle = "#FFFF00";\r
        ctx.font      = "18px Calibri";\r
        var width = ctx.measureText(text).width,\r
            x     = ((map.width * map.blockSize) - width) / 2;        \r
        ctx.fillText(text, x, (map.height * 10) + 8);\r
    }\r
\r
    function soundDisabled() {\r
        return localStorage["soundDisabled"] === "true";\r
    };\r
    \r
    function startLevel() {        \r
        user.resetPosition();\r
        for (var i = 0; i < ghosts.length; i += 1) { \r
            ghosts[i].reset();\r
        }\r
        audio.play("start");\r
        timerStart = tick;\r
        setState(COUNTDOWN);\r
    }    \r
\r
    function startNewGame() {\r
        setState(WAITING);\r
        level = 1;\r
        user.reset();\r
        map.reset();\r
        map.draw(ctx);\r
        startLevel();\r
    }\r
\r
    function keyDown(e) {\r
        if (e.keyCode === KEY.N) {\r
            startNewGame();\r
        } else if (e.keyCode === KEY.S) {\r
            audio.disableSound();\r
            localStorage["soundDisabled"] = !soundDisabled();\r
        } else if (e.keyCode === KEY.P && state === PAUSE) {\r
            audio.resume();\r
            map.draw(ctx);\r
            setState(stored);\r
        } else if (e.keyCode === KEY.P) {\r
            stored = state;\r
            setState(PAUSE);\r
            audio.pause();\r
            map.draw(ctx);\r
            dialog("Paused");\r
        } else if (state !== PAUSE) {   \r
            return user.keyDown(e);\r
        }\r
        return true;\r
    }    \r
\r
    function loseLife() {        \r
        setState(WAITING);\r
        user.loseLife();\r
        if (user.getLives() > 0) {\r
            startLevel();\r
        }\r
    }\r
\r
    function setState(nState) { \r
        state = nState;\r
        stateChanged = true;\r
    };\r
    \r
    function collided(user, ghost) {\r
        return (Math.sqrt(Math.pow(ghost.x - user.x, 2) + \r
                          Math.pow(ghost.y - user.y, 2))) < 10;\r
    };\r
\r
    function drawFooter() {\r
        \r
        var topLeft  = (map.height * map.blockSize),\r
            textBase = topLeft + 17;\r
        \r
        ctx.fillStyle = "#000000";\r
        ctx.fillRect(0, topLeft, (map.width * map.blockSize), 30);\r
        \r
        ctx.fillStyle = "#FFFF00";\r
\r
        for (var i = 0, len = user.getLives(); i < len; i++) {\r
            ctx.fillStyle = "#FFFF00";\r
            ctx.beginPath();\r
            ctx.moveTo(150 + (25 * i) + map.blockSize / 2,\r
                       (topLeft+1) + map.blockSize / 2);\r
            \r
            ctx.arc(150 + (25 * i) + map.blockSize / 2,\r
                    (topLeft+1) + map.blockSize / 2,\r
                    map.blockSize / 2, Math.PI * 0.25, Math.PI * 1.75, false);\r
            ctx.fill();\r
        }\r
\r
        ctx.fillStyle = !soundDisabled() ? "#00FF00" : "#FF0000";\r
        ctx.font = "bold 16px sans-serif";\r
        //ctx.fillText("♪", 10, textBase);\r
        ctx.fillText("s", 10, textBase);\r
\r
        ctx.fillStyle = "#FFFF00";\r
        ctx.font      = "14px Calibri";\r
        ctx.fillText("Score: " + user.theScore(), 30, textBase);\r
        ctx.fillText("Level: " + level, 260, textBase);\r
    }\r
\r
    function redrawBlock(pos) {\r
        map.drawBlock(Math.floor(pos.y/10), Math.floor(pos.x/10), ctx);\r
        map.drawBlock(Math.ceil(pos.y/10), Math.ceil(pos.x/10), ctx);\r
    }\r
\r
    function mainDraw() { \r
\r
        var diff, u, i, len, nScore;\r
        \r
        ghostPos = [];\r
\r
        for (i = 0, len = ghosts.length; i < len; i += 1) {\r
            ghostPos.push(ghosts[i].move(ctx));\r
        }\r
        u = user.move(ctx);\r
        \r
        for (i = 0, len = ghosts.length; i < len; i += 1) {\r
            redrawBlock(ghostPos[i].old);\r
        }\r
        redrawBlock(u.old);\r
        \r
        for (i = 0, len = ghosts.length; i < len; i += 1) {\r
            ghosts[i].draw(ctx);\r
        }                     \r
        user.draw(ctx);\r
        \r
        userPos = u["new"];\r
        \r
        for (i = 0, len = ghosts.length; i < len; i += 1) {\r
            if (collided(userPos, ghostPos[i]["new"])) {\r
                if (ghosts[i].isVunerable()) { \r
                    audio.play("eatghost");\r
                    ghosts[i].eat();\r
                    eatenCount += 1;\r
                    nScore = eatenCount * 50;\r
                    drawScore(nScore, ghostPos[i]);\r
                    user.addScore(nScore);                    \r
                    setState(EATEN_PAUSE);\r
                    timerStart = tick;\r
                } else if (ghosts[i].isDangerous()) {\r
                    audio.play("die");\r
                    setState(DYING);\r
                    timerStart = tick;\r
                }\r
            }\r
        }                             \r
    };\r
\r
    function mainLoop() {\r
\r
        var diff;\r
\r
        if (state !== PAUSE) { \r
            ++tick;\r
        }\r
\r
        map.drawPills(ctx);\r
\r
        if (state === PLAYING) {\r
            mainDraw();\r
        } else if (state === WAITING && stateChanged) {            \r
            stateChanged = false;\r
            map.draw(ctx);\r
            dialog("Press N to start a New game");            \r
        } else if (state === EATEN_PAUSE && \r
                   (tick - timerStart) > (Pacman.FPS / 3)) {\r
            map.draw(ctx);\r
            setState(PLAYING);\r
        } else if (state === DYING) {\r
            if (tick - timerStart > (Pacman.FPS * 2)) { \r
                loseLife();\r
            } else { \r
                redrawBlock(userPos);\r
                for (i = 0, len = ghosts.length; i < len; i += 1) {\r
                    redrawBlock(ghostPos[i].old);\r
                    ghostPos.push(ghosts[i].draw(ctx));\r
                }                                   \r
                user.drawDead(ctx, (tick - timerStart) / (Pacman.FPS * 2));\r
            }\r
        } else if (state === COUNTDOWN) {\r
            \r
            diff = 5 + Math.floor((timerStart - tick) / Pacman.FPS);\r
            \r
            if (diff === 0) {\r
                map.draw(ctx);\r
                setState(PLAYING);\r
            } else {\r
                if (diff !== lastTime) { \r
                    lastTime = diff;\r
                    map.draw(ctx);\r
                    dialog("Starting in: " + diff);\r
                }\r
            }\r
        } \r
\r
        drawFooter();\r
    }\r
\r
    function eatenPill() {\r
        audio.play("eatpill");\r
        timerStart = tick;\r
        eatenCount = 0;\r
        for (i = 0; i < ghosts.length; i += 1) {\r
            ghosts[i].makeEatable(ctx);\r
        }        \r
    };\r
    \r
    function completedLevel() {\r
        setState(WAITING);\r
        level += 1;\r
        map.reset();\r
        user.newLevel();\r
        startLevel();\r
    };\r
\r
    function keyPress(e) { \r
        if (state !== WAITING && state !== PAUSE) { \r
            e.preventDefault();\r
            e.stopPropagation();\r
        }\r
    };\r
    \r
    function init(wrapper, root) {\r
        \r
        var i, len, ghost,\r
            blockSize = wrapper.offsetWidth / 19,\r
            canvas    = document.createElement("canvas");\r
        \r
        canvas.setAttribute("width", (blockSize * 19) + "px");\r
        canvas.setAttribute("height", (blockSize * 22) + 30 + "px");\r
\r
        wrapper.appendChild(canvas);\r
\r
        ctx  = canvas.getContext('2d');\r
\r
        audio = new Pacman.Audio({"soundDisabled":soundDisabled});\r
        map   = new Pacman.Map(blockSize);\r
        user  = new Pacman.User({ \r
            "completedLevel" : completedLevel, \r
            "eatenPill"      : eatenPill \r
        }, map);\r
\r
        for (i = 0, len = ghostSpecs.length; i < len; i += 1) {\r
            ghost = new Pacman.Ghost({"getTick":getTick}, map, ghostSpecs[i]);\r
            ghosts.push(ghost);\r
        }\r
        \r
        map.draw(ctx);\r
        dialog("Loading ...");\r
\r
        var extension = Modernizr.audio.ogg ? 'ogg' : 'mp3';\r
\r
        var audio_files = [\r
            ["start", root + "audio/opening_song." + extension],\r
            ["die", root + "audio/die." + extension],\r
            ["eatghost", root + "audio/eatghost." + extension],\r
            ["eatpill", root + "audio/eatpill." + extension],\r
            ["eating", root + "audio/eating.short." + extension],\r
            ["eating2", root + "audio/eating.short." + extension]\r
        ];\r
\r
        load(audio_files, function() { loaded(); });\r
    };\r
\r
    function load(arr, callback) { \r
        \r
        if (arr.length === 0) { \r
            callback();\r
        } else { \r
            var x = arr.pop();\r
            audio.load(x[0], x[1], function() { load(arr, callback); });\r
        }\r
    };\r
        \r
    function loaded() {\r
\r
        dialog("Press N to Start");\r
        \r
        document.addEventListener("keydown", keyDown, true);\r
        document.addEventListener("keypress", keyPress, true); \r
        \r
        timer = window.setInterval(mainLoop, 1000 / Pacman.FPS);\r
    };\r
    \r
    return {\r
        "init" : init\r
    };\r
    \r
}());\r
\r
/* Human readable keyCode index */\r
var KEY = {'BACKSPACE': 8, 'TAB': 9, 'NUM_PAD_CLEAR': 12, 'ENTER': 13, 'SHIFT': 16, 'CTRL': 17, 'ALT': 18, 'PAUSE': 19, 'CAPS_LOCK': 20, 'ESCAPE': 27, 'SPACEBAR': 32, 'PAGE_UP': 33, 'PAGE_DOWN': 34, 'END': 35, 'HOME': 36, 'ARROW_LEFT': 37, 'ARROW_UP': 38, 'ARROW_RIGHT': 39, 'ARROW_DOWN': 40, 'PRINT_SCREEN': 44, 'INSERT': 45, 'DELETE': 46, 'SEMICOLON': 59, 'WINDOWS_LEFT': 91, 'WINDOWS_RIGHT': 92, 'SELECT': 93, 'NUM_PAD_ASTERISK': 106, 'NUM_PAD_PLUS_SIGN': 107, 'NUM_PAD_HYPHEN-MINUS': 109, 'NUM_PAD_FULL_STOP': 110, 'NUM_PAD_SOLIDUS': 111, 'NUM_LOCK': 144, 'SCROLL_LOCK': 145, 'SEMICOLON': 186, 'EQUALS_SIGN': 187, 'COMMA': 188, 'HYPHEN-MINUS': 189, 'FULL_STOP': 190, 'SOLIDUS': 191, 'GRAVE_ACCENT': 192, 'LEFT_SQUARE_BRACKET': 219, 'REVERSE_SOLIDUS': 220, 'RIGHT_SQUARE_BRACKET': 221, 'APOSTROPHE': 222};\r
\r
(function () {\r
	/* 0 - 9 */\r
	for (var i = 48; i <= 57; i++) {\r
        KEY['' + (i - 48)] = i;\r
	}\r
	/* A - Z */\r
	for (i = 65; i <= 90; i++) {\r
        KEY['' + String.fromCharCode(i)] = i;\r
	}\r
	/* NUM_PAD_0 - NUM_PAD_9 */\r
	for (i = 96; i <= 105; i++) {\r
        KEY['NUM_PAD_' + (i - 96)] = i;\r
	}\r
	/* F1 - F12 */\r
	for (i = 112; i <= 123; i++) {\r
        KEY['F' + (i - 112 + 1)] = i;\r
	}\r
})();\r
\r
Pacman.WALL    = 0;\r
Pacman.BISCUIT = 1;\r
Pacman.EMPTY   = 2;\r
Pacman.BLOCK   = 3;\r
Pacman.PILL    = 4;\r
\r
Pacman.MAP = [\r
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],\r
	[0, 4, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 4, 0],\r
	[0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],\r
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\r
	[0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],\r
	[0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],\r
	[0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],\r
	[2, 2, 2, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 2, 2, 2],\r
	[0, 0, 0, 0, 1, 0, 1, 0, 0, 3, 0, 0, 1, 0, 1, 0, 0, 0, 0],\r
	[2, 2, 2, 2, 1, 1, 1, 0, 3, 3, 3, 0, 1, 1, 1, 2, 2, 2, 2],\r
	[0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],\r
	[2, 2, 2, 0, 1, 0, 1, 1, 1, 2, 1, 1, 1, 0, 1, 0, 2, 2, 2],\r
	[0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],\r
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],\r
	[0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],\r
	[0, 4, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 4, 0],\r
	[0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],\r
	[0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],\r
	[0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],\r
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\r
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]\r
];\r
\r
Pacman.WALLS = [\r
    \r
    [{"move": [0, 9.5]}, {"line": [3, 9.5]},\r
     {"curve": [3.5, 9.5, 3.5, 9]}, {"line": [3.5, 8]},\r
     {"curve": [3.5, 7.5, 3, 7.5]}, {"line": [1, 7.5]},\r
     {"curve": [0.5, 7.5, 0.5, 7]}, {"line": [0.5, 1]},\r
     {"curve": [0.5, 0.5, 1, 0.5]}, {"line": [9, 0.5]},\r
     {"curve": [9.5, 0.5, 9.5, 1]}, {"line": [9.5, 3.5]}],\r
\r
    [{"move": [9.5, 1]},\r
     {"curve": [9.5, 0.5, 10, 0.5]}, {"line": [18, 0.5]},\r
     {"curve": [18.5, 0.5, 18.5, 1]}, {"line": [18.5, 7]},\r
     {"curve": [18.5, 7.5, 18, 7.5]}, {"line": [16, 7.5]},\r
     {"curve": [15.5, 7.5, 15.5, 8]}, {"line": [15.5, 9]},\r
     {"curve": [15.5, 9.5, 16, 9.5]}, {"line": [19, 9.5]}],\r
\r
    [{"move": [2.5, 5.5]}, {"line": [3.5, 5.5]}],\r
\r
    [{"move": [3, 2.5]},\r
     {"curve": [3.5, 2.5, 3.5, 3]},\r
     {"curve": [3.5, 3.5, 3, 3.5]},\r
     {"curve": [2.5, 3.5, 2.5, 3]},\r
     {"curve": [2.5, 2.5, 3, 2.5]}],\r
\r
    [{"move": [15.5, 5.5]}, {"line": [16.5, 5.5]}],\r
\r
    [{"move": [16, 2.5]}, {"curve": [16.5, 2.5, 16.5, 3]},\r
     {"curve": [16.5, 3.5, 16, 3.5]}, {"curve": [15.5, 3.5, 15.5, 3]},\r
     {"curve": [15.5, 2.5, 16, 2.5]}],\r
\r
    [{"move": [6, 2.5]}, {"line": [7, 2.5]}, {"curve": [7.5, 2.5, 7.5, 3]},\r
     {"curve": [7.5, 3.5, 7, 3.5]}, {"line": [6, 3.5]},\r
     {"curve": [5.5, 3.5, 5.5, 3]}, {"curve": [5.5, 2.5, 6, 2.5]}],\r
\r
    [{"move": [12, 2.5]}, {"line": [13, 2.5]}, {"curve": [13.5, 2.5, 13.5, 3]},\r
     {"curve": [13.5, 3.5, 13, 3.5]}, {"line": [12, 3.5]},\r
     {"curve": [11.5, 3.5, 11.5, 3]}, {"curve": [11.5, 2.5, 12, 2.5]}],\r
\r
    [{"move": [7.5, 5.5]}, {"line": [9, 5.5]}, {"curve": [9.5, 5.5, 9.5, 6]},\r
     {"line": [9.5, 7.5]}],\r
    [{"move": [9.5, 6]}, {"curve": [9.5, 5.5, 10.5, 5.5]},\r
     {"line": [11.5, 5.5]}],\r
\r
\r
    [{"move": [5.5, 5.5]}, {"line": [5.5, 7]}, {"curve": [5.5, 7.5, 6, 7.5]},\r
     {"line": [7.5, 7.5]}],\r
    [{"move": [6, 7.5]}, {"curve": [5.5, 7.5, 5.5, 8]}, {"line": [5.5, 9.5]}],\r
\r
    [{"move": [13.5, 5.5]}, {"line": [13.5, 7]},\r
     {"curve": [13.5, 7.5, 13, 7.5]}, {"line": [11.5, 7.5]}],\r
    [{"move": [13, 7.5]}, {"curve": [13.5, 7.5, 13.5, 8]},\r
     {"line": [13.5, 9.5]}],\r
\r
    [{"move": [0, 11.5]}, {"line": [3, 11.5]}, {"curve": [3.5, 11.5, 3.5, 12]},\r
     {"line": [3.5, 13]}, {"curve": [3.5, 13.5, 3, 13.5]}, {"line": [1, 13.5]},\r
     {"curve": [0.5, 13.5, 0.5, 14]}, {"line": [0.5, 17]},\r
     {"curve": [0.5, 17.5, 1, 17.5]}, {"line": [1.5, 17.5]}],\r
    [{"move": [1, 17.5]}, {"curve": [0.5, 17.5, 0.5, 18]}, {"line": [0.5, 21]},\r
     {"curve": [0.5, 21.5, 1, 21.5]}, {"line": [18, 21.5]},\r
     {"curve": [18.5, 21.5, 18.5, 21]}, {"line": [18.5, 18]},\r
     {"curve": [18.5, 17.5, 18, 17.5]}, {"line": [17.5, 17.5]}],\r
    [{"move": [18, 17.5]}, {"curve": [18.5, 17.5, 18.5, 17]},\r
     {"line": [18.5, 14]}, {"curve": [18.5, 13.5, 18, 13.5]},\r
     {"line": [16, 13.5]}, {"curve": [15.5, 13.5, 15.5, 13]},\r
     {"line": [15.5, 12]}, {"curve": [15.5, 11.5, 16, 11.5]},\r
     {"line": [19, 11.5]}],\r
\r
    [{"move": [5.5, 11.5]}, {"line": [5.5, 13.5]}],\r
    [{"move": [13.5, 11.5]}, {"line": [13.5, 13.5]}],\r
\r
    [{"move": [2.5, 15.5]}, {"line": [3, 15.5]},\r
     {"curve": [3.5, 15.5, 3.5, 16]}, {"line": [3.5, 17.5]}],\r
    [{"move": [16.5, 15.5]}, {"line": [16, 15.5]},\r
     {"curve": [15.5, 15.5, 15.5, 16]}, {"line": [15.5, 17.5]}],\r
\r
    [{"move": [5.5, 15.5]}, {"line": [7.5, 15.5]}],\r
    [{"move": [11.5, 15.5]}, {"line": [13.5, 15.5]}],\r
    \r
    [{"move": [2.5, 19.5]}, {"line": [5, 19.5]},\r
     {"curve": [5.5, 19.5, 5.5, 19]}, {"line": [5.5, 17.5]}],\r
    [{"move": [5.5, 19]}, {"curve": [5.5, 19.5, 6, 19.5]},\r
     {"line": [7.5, 19.5]}],\r
\r
    [{"move": [11.5, 19.5]}, {"line": [13, 19.5]},\r
     {"curve": [13.5, 19.5, 13.5, 19]}, {"line": [13.5, 17.5]}],\r
    [{"move": [13.5, 19]}, {"curve": [13.5, 19.5, 14, 19.5]},\r
     {"line": [16.5, 19.5]}],\r
\r
    [{"move": [7.5, 13.5]}, {"line": [9, 13.5]},\r
     {"curve": [9.5, 13.5, 9.5, 14]}, {"line": [9.5, 15.5]}],\r
    [{"move": [9.5, 14]}, {"curve": [9.5, 13.5, 10, 13.5]},\r
     {"line": [11.5, 13.5]}],\r
\r
    [{"move": [7.5, 17.5]}, {"line": [9, 17.5]},\r
     {"curve": [9.5, 17.5, 9.5, 18]}, {"line": [9.5, 19.5]}],\r
    [{"move": [9.5, 18]}, {"curve": [9.5, 17.5, 10, 17.5]},\r
     {"line": [11.5, 17.5]}],\r
\r
    [{"move": [8.5, 9.5]}, {"line": [8, 9.5]}, {"curve": [7.5, 9.5, 7.5, 10]},\r
     {"line": [7.5, 11]}, {"curve": [7.5, 11.5, 8, 11.5]},\r
     {"line": [11, 11.5]}, {"curve": [11.5, 11.5, 11.5, 11]},\r
     {"line": [11.5, 10]}, {"curve": [11.5, 9.5, 11, 9.5]},\r
     {"line": [10.5, 9.5]}]\r
];\r
\r
Object.prototype.clone = function () {\r
    var i, newObj = (this instanceof Array) ? [] : {};\r
    for (i in this) {\r
        if (i === 'clone') {\r
            continue;\r
        }\r
        if (this[i] && typeof this[i] === "object") {\r
            newObj[i] = this[i].clone();\r
        } else {\r
            newObj[i] = this[i];\r
        }\r
    }\r
    return newObj;\r
};\r
\r
$(function(){\r
  var el = document.getElementById("pacman");\r
\r
  if (Modernizr.canvas && Modernizr.localstorage && \r
      Modernizr.audio && (Modernizr.audio.ogg || Modernizr.audio.mp3)) {\r
    window.setTimeout(function () { PACMAN.init(el, "https://raw.githubusercontent.com/daleharvey/pacman/master/"); }, 0);\r
  } else { \r
    el.innerHTML = "Sorry, needs a decent browser<br /><small>" + \r
      "(firefox 3.6+, Chrome 4+, Opera 10+ and Safari 4+)</small>";\r
  }\r
});`),X.forEach(e),t.forEach(e),p.forEach(e),this.h()},h(){l(m,"html",""),l(h,"rel","stylesheet"),l(h,"type","text/css"),l(h,"href","https://fonts.googleapis.com/css?family=Permanent+Marker"),l(S,"type","text/css"),l(g,"id","shim"),sn(P,"text-align","center"),l(L,"id","pacman"),l(x,"type","text/javascript"),nn(x.src,Y="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js")||l(x,"src",Y),l(v,"type","text/javascript"),nn(v.src,K="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js")||l(v,"src",K),l(y,"type","text/javascript")},m(s,p){H(s,m,p),H(s,F,p),H(s,f,p),n(f,d),n(d,w),n(w,A),n(d,C),n(d,h),n(d,I),n(d,S),n(S,N),n(f,D),n(f,r),n(r,g),n(g,M),n(r,z),n(r,E),n(E,R),n(r,_),n(r,P),n(P,O),n(r,W),n(r,L),n(r,U),n(r,x),n(r,G),n(r,v),n(r,B),n(r,y),n(y,q)},p:j,i:j,o:j,d(s){s&&e(m),s&&e(F),s&&e(f)}}}class dn extends on{constructor(m){super(),an(this,m,null,cn,ln,{})}}export{dn as component};
