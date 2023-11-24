async function fetchgetRepos() {
  const response = await fetch('https://api.github.com/users/lnnsntg/repos')
  return await response.json()
}


export default function ReposPages() {
  return (
    <div>ReposPages</div>
  )
}
