export const studentsIds: number[] = [1,2,4,14,54]

studentsIds.push(+"6");
// explorar tipo symbol
console.log("He pasasdo por aca y me ejecuté")
interface Student {
    id: number;
    name: string;
    age:number;
    isActive?: boolean;
}

export const gustavo:Student = {
    id: 1,
    name: "Gus",
    age: 34,
    isActive: true
}
console.log("🚀 ~ :19 ~ gustavo:", gustavo)
