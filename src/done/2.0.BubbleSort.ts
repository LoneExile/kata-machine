export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        // for (let j = 0; j < arr.length - i; j++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
}

interface LinkedList<T> {
    get length(): number
    insertAt(item: T, index: number): void
    remove(item: T): T | undefined
    removeAt(index: number): T | undefined
    append(item: T): void
    prepend(item: T): void
    get(index: number): T | undefined
}
