let index = 1
let todoList = []

export async function POST(request) {
  const body = await request.json()
  console.log("body", body)
  const { text } = body

  const todo = {
    id: index,
    text: text,
    done: false
  }

  index++
  todoList.push(todo)

  return Response.json(
    todo,
    { status: 201 }
  )
}

export async function GET(request) {
  return Response.json(
    { todos: todoList },
    { status: 200 }
  )
}