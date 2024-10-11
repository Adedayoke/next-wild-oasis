import Counter from "../components/Counter"

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  console.log(data)
  return (
    <div>
      <Counter />
      <ul>
      {
        data.map((user)=>(
          <li key={user?.id}>{user.name}</li>
        ))
      }
      </ul>
    </div>
  )
}
