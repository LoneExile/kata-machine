const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
]

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    // 1. Base case
    // - off the map

    if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length) {
        return false
    }

    // - on a wall
    if (maze[curr.y][curr.x] === wall) {
        return false
    }

    // - on the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr)
        return true
    }

    // - on a seen spot
    if (seen[curr.y][curr.x]) {
        return false
    }

    // 2. Recursive case
    // pre
    seen[curr.y][curr.x] = true
    path.push(curr)

    // recurse
    for (let i = 0; i < dir.length; ++i) {
        const [dx, dy] = dir[i]
        if (walk(maze, wall, {x: curr.x + dx, y: curr.y + dy}, end, seen, path)) {
            return true
        }
    }

    // post
    path.pop()

    return false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = []
    const path: Point[] = []

    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false))
    }

    walk(maze, wall, start, end, seen, path)

    return path
}
