const todosList = [{ title: "test", checked: true }]

export const setupTodos = ({ input, todos, done, todo }) => {
    input.addEventListener("change", (event) => {
        console.log(input.value);
    })

    

}